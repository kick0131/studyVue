<template>
  <!-- Vuexfireを使ったfirestoreアクセス -->
  <div>
    <table style="border: 2px #303F9F solid" v-for="(client, index) in localClients" :key="index">
      <tr>
        <td>{{ client.id }}</td>
        <td>{{ client.name }}</td>
        <td>{{ client.info.addr }}</td>
        <td>{{ client.info.mail }}</td>
      </tr>
      <tr>
        <!-- 左寄せでセル結合 -->
        <td align="left" colspan="4">
          <button @click="edit(client)">編集</button>
          <button @click="remove(client)">削除</button>
        </td>
      </tr>
    </table>

    <hr />
    <p v-if="id">
      <label>{{ id }}</label
      >を編集中
      <button @click="id = ''">中止</button>
    </p>
    <p v-if="!id">新規登録</p>
    <div v-for="(v, k) in draft" :key="k">
      <label>{{ k }} : </label>
      <input v-model="draft[k]" />
    </div>
    <br />
    <button @click="writeDoc">WRITE</button>
    <br />
    <button @click="singleGet">単一READ</button>
    <br />
    <button @click="multiGet">複数READ</button>
    <br />
    <button @click="getSubCollection">サブコレクション</button>
  </div>
</template>

<script>
import firestoreModules from '@/common/firestoreModules';
import { firestoreDb } from '@/common/FirestoreDb';
import { mapGetters } from 'vuex';

export default {
  data: function() {
    // col   : 読み書き対象のコレクション
    // id    : Firebase ドキュメントID
    // draft : カラム情報
    // docs  : 現在のドキュメント管理用の変数
    return {
      col: firestoreDb.collection('clients'),
      id: '',
      draft: { ID: '', Name: '', Addr: '', Email: '' },
      docs: [],
      localClients: []
    };
  },
  computed: {
    ...mapGetters({ clients: 'getClients' })
  },
  methods: {
    // 編集用に入力欄を指定した内容に設定する
    edit: function(p) {
      this.draft = {
        ID: p.id,
        Name: p.name,
        Addr: p.info.addr,
        Email: p.info.mail
      };
      this.id = p.id;
    },
    // ⭐️ToDo: ドキュメントは消すが、サブコレクション配下は消さない
    remove: async function(p) {
      await this.col
        .doc(p.id)
        .delete()
        .then(function() {
          console.log('remove Successfly');
        })
        .catch(e => alert(e));
      // 結果更新
      this.localClients = Object.create(this.clients);
    },
    writeDoc: async function() {
      // 書き込み内容
      let writedata = {
        name: this.draft.Name,
        info: {
          addr: this.draft.Addr,
          mail: this.draft.Email
        }
      };
      // 入力領域のIDをドキュメントIDとして設定
      // ドキュメントIDが空の場合はランダムID
      if (this.draft.ID) {
        // set    : idがない場合は新規作成
        // update : idがない場合はエラー
        await this.col
          .doc(this.draft.ID)
          .set(writedata)
          // .update(writedata)
          .then(function() {
            console.log('writeDoc Successfly');
          })
          .catch(e => alert(e));
      } else {
        console.log('ドキュメントID自動生成');
        await this.registDb('clients', writedata)
          .then(function() {
            console.log('writeDoc Successfly');
          })
          .catch(e => alert(e));
      }
      // 結果更新
      this.localClients = Object.create(this.clients);
    },
    // ====================================================
    // DBアクセスのロジックはVuexfire定義(store/index.js)に記載
    // ====================================================
    singleGet() {
      // 単一READは条件READのロジックで実現
      console.log(this.$store.getters.findClientById('12345'));

      // ⭐️ToDo:DOMの更新を検知させる方法
      this.localClients = Object.create(this.clients);
    },
    multiGet() {
      // getClientsで全件取得し、ループして内容表示
      // this.$store.getters.getClients.forEach(function(client) {
      //   console.log(client);
      // });
      // でも、computedを使った方がスマート
      this.clients.forEach(function(client) {
        console.log(client);
      });
    },
    // サブコレクション取得
    getSubCollection() {
      // ⭐️ToDo:未実装
      try {
        firestoreDb
          .collectionGroup('en')
          .get()
          .then(snapshot => {
            firestoreModules.viewdocs(snapshot);
          });
      } catch (err) {
        console.log('Error: ${JSON.stringify(err)}');
      }
    }
  }, // -- methods end
  // 初回表示時に現在のコレクションの状態を取得
  created: function() {
    console.log('UseVuexfire.vue created!');
    this.$store.dispatch('bindClients');
  },
  mounted: function() {
    console.log('UseVuexfire.vue mounted!');
  },
  // onSnapshotの引数なしで初期化？
  beforeUnmount: function() {
    console.log('UseVuexfire.vue beforeUnmount!');
    this.$store.dispatch('unbindClients');
    firestoreDb.app.delete();
  },
  watch: {
    '$store.state.clients': {
      handler: function() {
        this.localClients = Object.create(this.clients);
      },
      deep: true
    }
  }
};
</script>
