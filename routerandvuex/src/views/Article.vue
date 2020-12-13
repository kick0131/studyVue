<template>
  <div class="article">
    <span>Article Page：{{ checkId(id) }}</span>
    <div>
      ［<router-link v-bind:to="`/article/${id}/page/1`"> 1 </router-link>］
      ［<router-link v-bind:to="`/article/${id}/page/2`"> 2 </router-link>］
      ［<router-link v-bind:to="`/article/${id}/page/3`"> 3 </router-link>］
    </div>
    <hr />
    <router-view />
  </div>
</template>
<script>
export default {
  name: 'Article',
  props: ['id', 'page_num'],
  methods: {
    // vue-routerで受け取ったパスパラメータの存在チェック
    checkId: arg => {
      if (arg === undefined) {
        return 'undefined path parameter.';
      } else {
        return arg;
      }
    }
  }
};
</script>
