<script>
import HelloWorld from "./components/HelloWorld.vue";
import MyTabs from "./components/MyTabs.vue";
import MyLinkLists from "./components/MyLinkLists.vue";

export default {
  name: "App",

  components: {
    HelloWorld,
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
    <v-app-bar app flat color="secondary">
      <v-container class="py-0 fill-height" >
        <my-tabs></my-tabs>
      </v-container>
    </v-app-bar>
    <v-main>
      <v-container>
        <v-row>
          <!-- 左ペイン領域 -->
          <v-col cols="2">
            <v-sheet rounded="lg" elevation="3" color="secondary">
              <my-link-lists></my-link-lists>
            </v-sheet>
          </v-col>

          <!-- 右ペイン領域 -->
          <v-col>
            <v-sheet min-height="70vh" rounded="lg" elevation="3" color="primary">
              <router-view></router-view>
              <!-- <HelloWorld/> -->
            </v-sheet>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>
