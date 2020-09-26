<template>
  <div>HelloChild2:{{ firstname }}</div>
</template>
<script>
export default {
  props: {
    firstname: {
      type: String,
      required: true,
      default: "dummy",
    },
  },

  data() {
    return {
      namelist: {
        first: "Alpha",
        second: "Beta",
      },
    };
  },
};
</script>
