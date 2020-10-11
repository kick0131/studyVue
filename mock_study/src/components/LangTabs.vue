<template>
  <v-tabs background-color="grey lighten-5" fixed-tabs slider-size="5" v-model="langTab">
    <v-tabs-slider />
    <v-tab href="#ja" class="nowrap">日本語</v-tab>
    <v-tab href="#en" class="nowrap">英語</v-tab>
    <v-tab href="#" class="nowrap">ベトナム語</v-tab>
    <v-tab href="#" class="nowrap">中国語</v-tab>
    <v-tab href="#" class="nowrap">フィリピン語</v-tab>
    <v-tab href="#" class="nowrap">インドネシア語</v-tab>
    <v-tab href="#" class="nowrap">タイ語</v-tab>
    <v-tab href="#" class="nowrap">カンボジア語</v-tab>
    <v-tab href="#" class="nowrap">ミャンマー語</v-tab>
    <v-tab href="#" class="nowrap">モンゴル語</v-tab>
  </v-tabs>
</template>

<style scoped>
.v-tabs:not(.v-tabs--vertical) a.nowrap {
  white-space: nowrap;
}
</style>

<script>
export default {
  data: () => ({
    langTab: "ja"
  })
};
</script>