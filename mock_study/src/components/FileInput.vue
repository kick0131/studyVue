<template>
  <v-file-input
    dense
    prepend-icon="mdi-text-box-outline"
    :placeholder="placeholder"
    lable="ファイルを選択してください"
    @change="change"
    :color="color"
    :background-color="bgColor"
    :value="val"
  ></v-file-input>
</template>

<script>
export default {
  data: () => ({
    color: "black",
    bgColor: "white",
    val: null
  }),

  props: {
    placeholder: {
      type: String,
      default: "表紙"
    }
  },

  methods: {
    change: function(e) {
      if (!e) {
        this.bgColor = "white";
      } else {
        this.bgColor = "green lighten-4";
      }
      this.val = e;
    }
  }
};
</script>