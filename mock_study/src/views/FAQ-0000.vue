<template>
  <v-container>
    <FaqList />
  </v-container>
</template>

<script>
export default {
  components: {
    FaqList: () => import("@/components/FaqList")
  },
  data() {
    return {};
  },

  methods: {}
};
</script>