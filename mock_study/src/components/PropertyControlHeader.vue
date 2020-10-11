<template>
  <v-container>
    <template v-if="!value">
      <v-btn :disabled="!valid" class="mr-4" color="success" @click="isUpdate=true">保存</v-btn>
      <v-dialog v-model="isUpdate" width="500">
        <v-card>
          <v-card-title>{{ title }}</v-card-title>
          <v-card-text>変更を保存しますか？</v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="primary" depressed @click="ok">OK</v-btn>
            <v-btn outlined @click="isUpdate=false">キャンセル</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </template>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    isUpdate: false,
    isAbort: false
  }),

  props: {
    value: {
      type: Boolean,
      default: false
    },
    valid: {
      type: Boolean,
      default: false
    },
    title: {
      type: String,
      required: true
    },
    update: {
      type: Function,
      required: true
    },
    abort: {
      type: Function,
      required: true
    }
  },

  methods: {
    change: function(mode) {
      this.$emit("input", mode);
    },
    ok: function() {
      if (this.isUpdate) {
        this.update();
        this.destroy();
      }
      if (this.isAbort) {
        this.abort();
        this.destroy();
      }
    },
    destroy: function() {
      this.isUpdate = false;
      this.isAbort = false;
    }
  }
};
</script>