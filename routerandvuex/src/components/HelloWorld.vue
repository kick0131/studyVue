<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <router-link to="/page1/123">Page1(Use path parameter)</router-link> | 
    <router-link to="/page2">Page2(Not use path parameter)</router-link>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/* うまく動作しない */
.router-link-active{
  background-color: chartreuse;
}
</style>
