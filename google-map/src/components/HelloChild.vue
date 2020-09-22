<template>
  <div>
    <p>{{ title }}</p>
    <v-btn small color="primary" v-on:click="incrementCounter">{{ counter }}</v-btn>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      title: 'はろー！こども！',
      counter: 0
    }
  },
  methods: {
    incrementCounter: function () {
      this.counter += 1
      // 親コンポーネントのincrementが呼び出す（実行）
      this.$emit('increment', 2)
    }
  }
}
</script>
