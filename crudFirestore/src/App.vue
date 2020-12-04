<template>
  <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
  <SampleView msg="Welcome to Your Vue.js App"/>
</template>

<script>
import SampleView from './components/UseVuexfire.vue'
// import SampleView from './components/ReadWriteFb.vue'

export default {
  name: 'App',
  components: {
    SampleView
  }
}
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
