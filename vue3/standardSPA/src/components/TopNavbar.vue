<template>
  <!-- ボタンを使った画面遷移 -->
  <v-btn
    v-for="btnitem in btnitems"
    :key="btnitem.btnname"
    depressed
    @click="navigationbtn(btnitem.btnaction)"
    :color="btnitem.btncolor"
  >
    {{ btnitem.btnname }}
  </v-btn>
  <!-- リンクを使った画面遷移 -->
  <router-link to="/">ホーム</router-link>
  <router-link to="/todo/">ToDo</router-link>
  <router-link to="/login/">ログイン</router-link>
</template>

<script setup>
// router.pushを利用する為、オブジェクトを生成
import { useRouter } from "vue-router";
const router = useRouter();

// ボタン名称
// btnname : ボタン名
// btnaction : 処理の分岐名
// btncolor : ボタン色
const btnitems = [
  {
    btnname: "ログイン",
    btnaction: "loginbtn",
    btncolor: "primary",
  },
  {
    btnname: "ログアウト",
    btnaction: "logoutbtn",
    btncolor: "secondary",
  },
  {
    btnname: "ToDo",
    btnaction: "todobtn",
    btncolor: "accent",
  },
];

// ボタンアクション共通定義
function navigationbtn(selected) {
  console.log(selected);
  // アクション名で分岐
  if (selected === btnitems[0].btnaction) {
    loginbtn();
  }
  else if (selected === btnitems[1].btnaction) {
    logoutbtn();
  }
  else if (selected === btnitems[2].btnaction) {
    todobtn();
  }
}
// ボタンアクション固有定義
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
