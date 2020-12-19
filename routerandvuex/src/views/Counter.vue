<template>
  <div>
    <h1>Simple Counter</h1>
    <input type="button" v-on:click="onminus" value="-" />
    {{ count }}
    <input type="button" v-on:click="onplus" value="+" />
    <br />
    <input v-model="inputval" placeholder="input number" />
    <input type="button" v-on:click="onupdate(inval)" value="update" />
  </div>
</template>
<script>
import { mapState } from 'vuex'

export default {
  name: 'Counter',
  data: function() {
    return {
      inputval: 0,
    }
  },
  computed: {
    // ■モジュールを使わない場合のバインディングヘルパー
    // ...mapState(['count']),
    // 上の構文は以下のsyntax sugar
    // count: function() {
    //   return this.$store.state.count
    // },

    // ■グローバル名前空間の場合のバインディングヘルパー
    ...mapState( {
      count: state => state.countstore.count,
    }),
    // 上の構文は以下のsyntax sugar
    // count: function() {
    //   // moduleを使った場合$store.state.(モジュール名)でストアにアクセスする
    //   return this.$store.state.countstore.count
    // },

    // ■名前空間を使用する場合のバインディングヘルパー
    // ...mapState( 'countstore', {
    //   count: state => state.count,
    // }),
    inval: function() {
      return Number(this.inputval)
    },
  },
  methods: {
    onplus: function() {
      // $store.commit(mutation名)でmutationを呼び出し
      this.$store.commit('plus')
    },
    onminus: function() {
      this.$store.commit('minus')
    },
    // 引数で渡された値を扱う例
    onupdate: function(step) {
      // {step:step}と同じ、プロパティと変数が同じ場合は省略できる
      this.$store.commit('update', { step })
    },
  },
}
</script>
