<template>
  <div class="page">
    <span>Page Num : {{ getPage(page_num) }}</span>
  </div>
</template>

<script>
export default {
  name: 'ArticlePage',
  methods: {
    getPage: function(arg) {
      if (arg === undefined) {
        return 'undefined path parameter.';
      } else {
        return arg;
      }
    }
  },
  // router側で定義した同名のパラメータを引数の受け口として用意
  props: ['page_num']
};
</script>
