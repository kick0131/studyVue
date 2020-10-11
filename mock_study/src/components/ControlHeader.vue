<template>
  <v-form>
    <v-btn :disabled="!valid" class="mr-4" color="success" @click="isUpdate=true">{{saveStr}}する</v-btn>
    <v-dialog v-model="isUpdate" width="500">
      <v-card>
        <v-card-title>{{ title }}</v-card-title>
        <v-card-text>{{saveStr}}しますか？</v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="#008348" dark depressed @click="ok">OK</v-btn>
          <v-btn outlined @click="isUpdate=false">キャンセル</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
    <v-btn class="mr-4" color="warning" @click="isAbort=true" v-if="notsave">破棄する</v-btn>
    <v-dialog v-model="isAbort" width="500">
      <v-card>
        <v-card-title>{{ title }}</v-card-title>
        <v-card-text>変更を破棄しますか？</v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="#008348" dark depressed @click="ok">OK</v-btn>
          <v-btn outlined @click="isAbort=false">キャンセル</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-form>
</template>

<script>
export default {
  data: () => ({
    isUpdate: false,
    isAbort: false,
    isRemove: false
  }),

  props: {
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
    },
    notsave: {
      type: Boolean,
      default: true
    },
    saveStr: {
      type: String,
      default: "保存"
    }
  },

  methods: {
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