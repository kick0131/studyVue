<script>
import HelloWorld from "./components/HelloWorld.vue";
import TopNavbar from "./components/TopNavbar.vue";
import MyTabs from "./components/MyTabs.vue";
import MyLinkLists from "./components/MyLinkLists.vue";

export default {
  name: "App",

  components: {
    HelloWorld,
    TopNavbar,
    MyTabs,
    MyLinkLists,
  },

  data: () => ({
    //
  }),
};
</script>

<template>
  <v-app>
    <!-- アプリケーションバー定義 -->
    <v-app-bar app flat>
      <v-container class="py-0 fill-height">
        <my-tabs></my-tabs>
      </v-container>
    </v-app-bar>
    <v-main class="grey lighten-3">
      <v-container>
        <v-row>
          <!-- 左ペイン領域 -->
          <v-col cols="2">
            <v-sheet rounded="lg" elevation="3" color="green">
              <my-link-lists></my-link-lists>
            </v-sheet>
          </v-col>

          <!-- 右ペイン領域 -->
          <v-col>
            <v-sheet min-height="70vh" rounded="lg" elevation="3">
              <router-view></router-view>
              <!-- <HelloWorld/> -->
            </v-sheet>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>
