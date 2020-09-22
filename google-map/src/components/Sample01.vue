<template>
  <div>
    <!-- <p>{{ title }}</p>
    <p>{{ total }}</p> -->
    <!-- incrementと言うイベントを定義。子コンポーネントから$emitされたら、incrementTotal実行される -->
    <!-- <hello-child v-on:increment="incrementTotal" /> -->
    <google-map-sample />

  </div>
</template>

<script>
import GoogleMapSample from './GoogleMapSample'
export default {
  data: function () {
    return {
      title: 'はろー！わーるど！',
      total: 0
    }
  },
  methods: {
    incrementTotal: function (value) {
      this.total += value
    }
  },
  components: {
    GoogleMapSample
  }
}
</script>
