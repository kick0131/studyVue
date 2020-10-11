<template>
  <v-dialog v-model="dataLoading" persistent fullscreen content-class="loading-dialog">
    <v-container fluid fill-height>
      <v-row justify="center" align="center">
        <v-progress-circular indeterminate color="#008348"></v-progress-circular>
      </v-row>
    </v-container>
  </v-dialog>
</template>
<script>
export default {
  computed: {
    dataLoading() {
      return this.$store.state.app.loading;
    }
  }
};
</script>>
<style lang="scss">
.loading-dialog {
  background-color: rgba(255, 255, 255, 0.5);
}
</style>