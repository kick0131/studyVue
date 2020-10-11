<template>
  <v-app-bar absolute app dark color="#008080">
    <v-toolbar-title class="headline text-uppercase">
      <v-btn v-if="responsive" dark icon @click.stop="onClick">
        <v-icon>mdi-view-list</v-icon>
      </v-btn>
      {{ title }}
    </v-toolbar-title>
    <v-spacer></v-spacer>
    <!-- {{ $store.state.loginUser.name }}({{ $store.state.loginUser.email }}) -->
    <v-btn text icon @click="signout()">
      <v-icon>mdi-logout-variant</v-icon>
    </v-btn>
  </v-app-bar>
</template>

<script>
export default {
  data: () => ({
    title: null,
    responsive: false
  }),

  watch: {
    $route(val) {
      this.title = val.name;
    }
  },

  mounted() {
    this.title = this.$route.name;
  },
  beforeDestroy() {},

  methods: {
    signout() {
      window.location.replace("/");
    }
  }
};
</script>