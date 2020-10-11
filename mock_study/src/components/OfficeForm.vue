<template>
  <v-container>
    <template v-if="label3">
      <v-text-field :v-model="data3" :label="label3"></v-text-field>
    </template>
    <v-text-field :v-model="data" :rules="requireRules" :label="label"></v-text-field>
    <v-text-field :v-model="data1" :rules="requireRules" :label="label1"></v-text-field>
    <v-text-field :v-model="data2" :rules="requireRules" :label="label2"></v-text-field>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    requireRules: [v => !!v || "必須項目です"]
  }),

  props: {
    label: {
      type: String,
      required: true
    },
    data: {
      type: String,
      required: true
    },
    label1: {
      type: String,
      required: true
    },
    data1: {
      type: String,
      required: true
    },
    label2: {
      type: String,
      required: true
    },
    data2: {
      type: String,
      required: true
    },
    label3: {
      type: String,
      default: ""
    },
    data3: {
      type: String,
      default: ""
    }
  }
};
</script>