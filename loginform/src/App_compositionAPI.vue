<template>
  <div>
    <ul>
      <li v-for="(todo, index) in tasks" v-bind:key="index">
        <p>ID : {{ todo.id }} Text : {{ todo.name }} Done : {{ todo.done }}</p>
      </li>
    </ul>
    <login-form />
  </div>
</template>

// for Option API
// <script>
// import LoginForm from './components/LoginForm.vue';
// import store from './store'

// export default {
//   name: 'App',
//   data: function(){
//     const mydata = store.state.tasks;
//     console.log(mydata)
//     return {
//       mydata
//     }
//   },
//   components: {
//     LoginForm
//   }
// };
// </script>

// for Composition API
<script setup>
import LoginForm from './components/LoginForm.vue';
import { useStore } from 'vuex';

const store = useStore();
const tasks = store.state.tasks;
console.log(tasks);
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
