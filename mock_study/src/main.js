import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import { sync } from "vuex-router-sync";
import vuetify from "./plugins/vuetify";

sync(store, router);
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  vuetify,
  created() {
    // firestoreのデータをstoreで扱いたい場合、collection/documentの取得開始をここに書く
  },
  render: (h) => h(App),
}).$mount("#app");
