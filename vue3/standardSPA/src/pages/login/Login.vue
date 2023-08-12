<script setup>

import logo from '../../assets/logo.svg';

// NG
// const logo = ref()
// logo.value = require('../../assets/logo.svg');

</script>

<template>
  <v-container>
    <v-row class="text-center">
      <v-col cols="12">
        <v-img :src="logo" class="my-3" contain height="200" />
      </v-col>

      <v-col class="mb-4">
        <h1 class="display-2 font-weight-bold mb-3">Login Vue</h1>

        <h4>ログイン画面</h4>
      </v-col>
    </v-row>
  </v-container>
</template>
