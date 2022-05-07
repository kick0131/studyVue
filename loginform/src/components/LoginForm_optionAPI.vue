// write with optionAPI

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

<script>
import LoginForm from './LoginForm.vue';
import { useStore } from 'vuex';

export default {
  name: 'App',
  data: function(){
    const store = useStore();
    const tasks = store.state.tasks;
    console.log(tasks)
    return {
      tasks
    }
  },
  components: {
    LoginForm
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
