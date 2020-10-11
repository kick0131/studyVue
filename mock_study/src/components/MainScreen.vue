<template>
  <v-app>
    <template v-if="$store.state.app.loading">
      <Loading />
    </template>
    <AppBar />
    <Drawer />

    <v-main class="grey lighten-3">
      <v-container fluid>
        <v-fade-transition mode="out-in">
          <router-view></router-view>
        </v-fade-transition>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
export default {
  components: {
    AppBar: () => import("@/components/core/AppBar"),
    Drawer: () => import("@/components/core/Drawer"),
    Loading: () => import("@/components/Loading")
  }
};
</script>