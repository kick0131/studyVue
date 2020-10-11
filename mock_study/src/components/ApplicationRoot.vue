<template>
  <div>
    <!-- <template v-if="$store.state.app.showDialog">
      <Dialog />
    </template>-->
    <template v-if="login">
      <MainScreen />
    </template>
    <template v-else>
      <Login v-model="login" />
    </template>
  </div>
</template>

<script>
export default {
  components: {
    MainScreen: () => import("@/components/MainScreen"),
    Login: () => import("@/views/LGI-0000")
  },
  data: () => ({
    login: false
  }),

  methods: {}
};
</script>