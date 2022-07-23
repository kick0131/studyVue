<script setup>
import TopNavbar from "../../components/TopNavbar.vue";

data: () => ({
  ecosystem: [
    {
      text: "vuetify-loader",
      href: "https://github.com/vuetifyjs/vuetify-loader",
    },
    {
      text: "github",
      href: "https://github.com/vuetifyjs/vuetify",
    },
    {
      text: "awesome-vuetify",
      href: "https://github.com/vuetifyjs/awesome-vuetify",
    },
  ],
});
</script>

<template>
  <TopNavbar />
  <v-container>
    <v-row class="text-center">
      <v-col class="mb-4">
        <h1 class="display-2 font-weight-bold mb-3">ToDo Vue</h1>

        <h4>ToDo画面</h4>
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
