<script setup>
import TopNavbar from "../../components/TopNavbar.vue";

</script>
<template>
  <TopNavbar />
  <v-container>
    <v-row class="text-center">
      <v-col class="mb-4">
        <h1 class="display-2 font-weight-bold mb-3">Login Vue</h1>

        <h4>ログイン画面</h4>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
export default {
  components: {
    TopNavbar,
  },
  computed: {},
  mounted: () => {},
};
</script>
