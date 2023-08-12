<script setup lang="ts">
// router.pushを利用する為、オブジェクトを生成
import { useRouter } from "vue-router";
const router = useRouter();

// リンクリスト要素
// dispname : 表示名
// action   : 処理名
const linkitems = [
  {
    dispname: "ホーム",
    action: "home",
  },
  {
    dispname: "ToDo",
    action: "todo",
  },
  {
    dispname: "ログイン",
    action: "login",
  },
];

// アクション共通定義
function navigationtab(selected) {
  console.log(selected);
  // アクション名で分岐
  if (selected === linkitems[0].action) {
    tohome();
  }
  else if (selected === linkitems[1].action) {
    totodo();
  }
  else if (selected === linkitems[2].action) {
    tologin();
  }
}
// アクション固有定義
function tohome() {
  router.push("/");
}
function totodo() {
  router.push("/todo/");
}
function tologin() {
  router.push("/login/");
}

</script>

<template>
  <!-- v-listの色は透明にしてメインコンポーネントの色を適用する -->
  <v-list color="transparent">
    <!-- リンク動作 -->
    <v-list-item v-for="linkitem in linkitems" :key="linkitem.dispname" @click="navigationtab(linkitem.action)" >
      <v-list-item-title> {{ linkitem.dispname }} </v-list-item-title>
    </v-list-item>

    <!-- セパレータの使い方、数字は幅 -->
    <v-divider class="my-2"></v-divider>

    <!-- dummy -->
    <v-list-item link>
      <v-list-item-title> Refresh </v-list-item-title>
    </v-list-item>
  </v-list>
</template>

