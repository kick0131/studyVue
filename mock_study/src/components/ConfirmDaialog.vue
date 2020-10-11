<template>
  <v-btn text icon @click="show = true">
    <v-icon>mdi-trash-can-outline</v-icon>
    <v-dialog v-model="show" width="500">
      <v-card>
        <v-card-title>{{ title }}</v-card-title>
        <v-card-text>{{message}}</v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="#008348" dark depressed @click="ok">OK</v-btn>
          <v-btn outlined @click="show = false">キャンセル</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-btn>
</template>

<script>
export default {
  data: () => ({
    show: false
  }),

  props: {
    title: {
      type: String,
      required: true
    },
    message: {
      type: String,
      required: true
    },
    ok: {
      type: Function,
      required: true
    }
  },

  methods: {
    destroy: function() {
      this.isUpdate = false;
      this.isAbort = false;
    }
  }
};
</script>