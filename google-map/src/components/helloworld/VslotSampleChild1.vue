<template>
  <div class="mycom">
    <p>name:<slot name="nm">Chihiro</slot></p>
    <p>addr:<slot name="ad">Tokyo</slot></p>
    <p>
      newname:<slot name="hira" :abc="userNm">{{ userNm.enName }}</slot>
    </p>
  </div>
</template>
<script>
export default {
  data() {
    return {
      userNm: {
        enName: "Chihiro",
        jpName: "ちひろ", // ←slot内で参照したいデータ
      },
    };
  },
};
</script>
<style></style>
