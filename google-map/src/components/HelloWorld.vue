<template>
  <div class="home">
    <HelloChild>HelloWorld</HelloChild>
    <HelloChild>
      <template #nm>ちひろ</template>
      <template #ad>東京</template>
      <template v-slot:hira="slotProps">
        {{ slotProps.abc.jpName }}
        <HelloChild2 :firstname="slotProps.abc.jpName"/>
        <!-- <HelloChild2/> -->
      </template>
    </HelloChild>
  </div>
</template>

<script>
import HelloChild from "./HelloChild.vue";
import HelloChild2 from "./HelloChild2.vue";
export default {
  components: {
    HelloChild,
    HelloChild2,
  },
};
</script>
