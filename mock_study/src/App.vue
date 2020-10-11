<template>
  <ApplicationRoot />
</template>

<script>
export default {
  name: "App",
  components: {
    ApplicationRoot: () => import("@/components/ApplicationRoot")
  },
  data: () => ({
    //
  })
};
</script>
