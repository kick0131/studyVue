<template>
  <v-app>
    <v-main>
      <Menu />
      <Sample01 />
    </v-main>
  </v-app>
</template>

<script>
import Sample01 from './components/Layout';
import Menu from './components/Menu';
// import Sample01 from './components/helloworld/VueIfSample';
// import Sample01 from './components/ToDoList';

export default {
  name: 'App',

  components: {
    Sample01,
    Menu
  },

  data: () => ({
    //
  })
};
</script>
