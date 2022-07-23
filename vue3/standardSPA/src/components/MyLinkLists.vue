<template>
  <v-list color="transparent">
    <!-- dummy -->
    <v-list-item v-for="n in 5" :key="n" link>
      <v-list-item-content>
        <v-list-item-title> List Item {{ n }} </v-list-item-title>
      </v-list-item-content>
    </v-list-item>

    <v-divider class="my-2"></v-divider>

    <!-- リンクを使った画面遷移、文字をクリックしないと有効にならない点、注意 -->
    <v-list-item link color="grey lighten-4" v-for="linkitem in linkitems" :key="linkitem.dispname">
      <v-list-item-content >
        <router-link :to="linkitem.path">{{ linkitem.dispname }}</router-link>
      </v-list-item-content>
    </v-list-item>

    <v-divider class="my-2"></v-divider>

    <!-- dummy -->
    <v-list-item link color="grey lighten-4">
      <v-list-item-content>
        <v-list-item-title> Refresh </v-list-item-title>
      </v-list-item-content>
    </v-list-item>
  </v-list>
</template>

<script setup>
// ボタン名称
// dispname : 表示名
// path     : URLパス
const linkitems = [
  {
    dispname: "ホーム",
    path: "/",
  },
  {
    dispname: "ToDo",
    path: "/todo/",
  },
  {
    dispname: "ログイン",
    path: "/login/",
  },
];
</script>
