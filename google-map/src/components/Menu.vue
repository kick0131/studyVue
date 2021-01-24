<template>
  <div>
    <!-- メニューバー -->
    <v-navigation-drawer app v-model="drawer">工事中</v-navigation-drawer>
    <v-system-bar color="primary" dark></v-system-bar>
    <v-app-bar dense color="secondary">
      <v-app-bar-nav-icon @click="drawer=!drawer"></v-app-bar-nav-icon>
      <v-toolbar-title>{{ this.appbarname }}</v-toolbar-title>
    </v-app-bar>
  </div>
</template>
<script>
import { mapState } from 'vuex';
export default {
  data: function() {
    return {
      drawer: null
    };
  },
  computed: {
    ...mapState(['appbarname'])
  }
};
</script>
