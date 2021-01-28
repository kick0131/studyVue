<template>
  <div>
    <!-- 
      vue-cliで生成したプロジェクトのimgが読み込まれない件
      https://greko-engineer.hateblo.jp/entry/2020/03/05/231242
      assetsディレクトリからpublicディレクトリに移動して回避
     -->
    <!-- <img alt="Vue logo3" src="./assets/logo.png" /> -->
    <img alt="Vue logo3" src="./logo.png" />
    <Sandbox msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
import Sandbox from './components/Sandbox2.vue';

export default {
  name: 'App',
  components: {
    Sandbox
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
