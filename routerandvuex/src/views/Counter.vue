<template>
  <div>
    <p>Vuexを使ったシンプルなカウンタ</p>
    <input type="button" v-on:click="onminus" value="-" />
    {{ count }}
    <input type="button" v-on:click="onplus" value="+" />
  </div>
</template>
<script>
import { mapState } from 'vuex'

export default {
  name: 'Counter',
  computed: {
    ...mapState(['count']),
    // 上の分は以下のsyntax sugar
    // count: function() {
    //   return this.$store.state.count
    // },
  },
  methods: {
    onplus: function() {
      // $store.commit(mutation名)でmutationを呼び出し
      this.$store.commit('plus')
    },
    onminus: function() {
      this.$store.commit('minus')
    },
  },
}
</script>
