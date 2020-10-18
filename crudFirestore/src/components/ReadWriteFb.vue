<template>
  <div>
    <table style="border:1px #808080 solid" v-for="(doc, i) in docs" :key="i">
      <tr v-for="(v, k) in doc.data()" :key="k">
        <td>{{ k }}</td>
        <td>{{ v }}</td>
      </tr>
      <tr>
        <td><button @click="edit(doc)">編集</button></td>
        <td><button @click="remove(doc)">削除</button></td>
      </tr>
    </table>

    <hr />
    <p v-if="id">
      <input readonly v-model="id" />を編集中<button @click="id = ''">
        中止
      </button>
    </p>
    <p v-if="!id">新規登録</p>
    <div v-for="(v, k) in draft" :key="k">
      <label>{{ k }}</label>
      <input v-model="draft[k]" />
    </div>
    <!-- <button @click="submit">登録</button> -->
    <br />
    <button @click="writeDoc">WRITE</button>
    <br />
    <button @click="singleGet">単一READ</button>
    <br />
    <button @click="multiGet2">複数READ</button>
    <br />
    <button @click="whereSentense">条件READ</button>
    <br />
    <button @click="getSubCollection">サブコレクション</button>
  </div>
</template>

<script>
import firebase from "firebase/app";
import "firebase/firestore";
import firebaseConfig from "../constants/firebaseConfig";
import firestoreModules from "@/common/firestoreModules";

firebase.initializeApp(firebaseConfig);

export default {
  methods: {
    edit(p) {
      this.draft = p.data();
      this.id = p.id;
    },
    remove(p) {
      this.col
        .doc(p.id)
        .delete()
        .catch((e) => alert(e));
    },
    submit() {
      if (this.id) {
        console.log("submit IDルート id: " + this.id);
        this.col
          .doc(this.id)
          .set(this.draft)
          .catch((e) => alert(e));
      } else {
        console.log("submit ELSEルート");
        this.col.add(this.draft).catch((e) => alert(e));
      }
    },
    writeDoc() {
      // 入力領域のIDをドキュメントIDとして設定
      if (this.draft.ID) {
        let writedata = {
          名前: this.draft.名前,
          info: {
            携帯: this.draft.携帯,
            メール: this.draft.メール,
          },
        };
        // set    : idがない場合は新規作成
        // update : idがない場合はエラー
        this.col
          .doc(this.draft.ID)
          .set(writedata)
          // .update(writedata)
          .catch((e) => alert(e));
      } else {
        // ドキュメントIDが空の場合はランダムID
        console.log("submit ELSEルート");
        this.col.add(this.draft).catch((e) => alert(e));
      }
    },
    singleGet() {
      (async () => {
        try {
          let postRef = this.col.doc("12345");
          let postDoc = await postRef.get();
          if (postDoc.exists) {
            console.log("ID     : " + postDoc.id);
            console.log("data() : " + JSON.stringify(postDoc.data()));
            // ドキュメント内の要素はカンマ区切りで階層アクセス可能
            // info {
            //    name : "john"
            //    mail : "sample.com"
            // }
            //
            console.log("get()  : " + postDoc.get("info.メール"));
          } else {
            console.log("No such document!");
          }
        } catch (err) {
          console.log("Error: ${JSON.stringify(err)}");
        }
      })();
    },
    multiGet() {
      (async () => {
        try {
          let snapshot = await this.col.get();
          firestoreModules.viewdocs(snapshot);
        } catch (err) {
          console.log("Error: ${JSON.stringify(err)}");
        }
      })();
    },
    // async使わない例
    multiGet2() {
      try {
        this.col.get().then(snapshot => {
          firestoreModules.viewdocs(snapshot);
        });
      } catch (err) {
        console.log("Error: ${JSON.stringify(err)}");
      }
    },
    // where("検索対象キー","条件式","検索値")
    whereSentense() {
      (async () => {
        try {
          let snapshot = await this.col.where("名前", "==", "hiramatsu").get();
          firestoreModules.viewdocs(snapshot);
        } catch (err) {
          console.log("Error: ${JSON.stringify(err)}");
        }
      })();
    },
    // サブコレクション取得
    getSubCollection() {
      try {
        this.db.collectionGroup("en")
        .get()
        .then(snapshot => {
          firestoreModules.viewdocs(snapshot);
        });
      } catch (err) {
        console.log("Error: ${JSON.stringify(err)}");
      }
    },
  }, // -- methods end
  data() {
    // col   : 読み書き対象のコレクション
    // id    : Firebase ドキュメントID
    // draft : カラム情報
    // docs  : 現在のドキュメント管理用の変数
    return {
      col: firebase.firestore().collection("clients"),
      id: "",
      draft: { ID: "", 名前: "", 携帯: "", メール: "" },
      docs: [],
      db: firebase.firestore(),
    };
  },
  // 初回表示時に現在のコレクションの状態を取得
  created() {
    this.unsubscribe = this.col.onSnapshot((p) => (this.docs = p.docs));
  },
  // onSnapshotの引数なしで初期化？
  beforeUnmount() {
    this.unsubscribe();
    this.db.app.delete();
  },
};
</script>
