<template>
  <v-tabs>
    <v-tab v-for="tabitem in tabitems" :key="tabitem.dispname" @click="navigationtab(tabitem.action)" >{{ tabitem.dispname }}</v-tab>
  </v-tabs>
</template>

<script setup>
// router.pushを利用する為、オブジェクトを生成
import { useRouter } from "vue-router";
const router = useRouter();

// タブ要素
// dispname : 表示名
// action   : 処理名
// color    : 配色(使わない方がバランスが良い)
const tabitems = [
  {
    dispname: "ログイン",
    action: "loginbtn",
  },
  {
    dispname: "ログアウト",
    action: "logoutbtn",
  },
  {
    dispname: "ToDo",
    action: "todobtn",
  },
];

// アクション共通定義
function navigationtab(selected) {
  console.log(selected);
  // アクション名で分岐
  if (selected === tabitems[0].action) {
    loginbtn();
  }
  else if (selected === tabitems[1].action) {
    logoutbtn();
  }
  else if (selected === tabitems[2].action) {
    todobtn();
  }
}
// アクション固有定義
function logoutbtn() {
  router.push("/");
}
function loginbtn() {
  router.push("/login");
}
function todobtn() {
  router.push("/todo");
}
</script>
