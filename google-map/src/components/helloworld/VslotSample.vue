<template>
  <div class="home">
    <VslotSampleChild1>HelloWorld</VslotSampleChild1>
    <VslotSampleChild1>
      <template #nm>ちひろ</template>
      <template #ad>東京</template>
      <template v-slot:hira="slotProps">
        {{ slotProps.abc.jpName }}
        <VslotSampleChild2 :firstname="slotProps.abc.jpName"/>
      </template>
    </VslotSampleChild1>

  </div>
</template>

<script>
import VslotSampleChild1 from "./VslotSampleChild1.vue";
import VslotSampleChild2 from "./VslotSampleChild2.vue";
export default {
  components: {
    VslotSampleChild1,
    VslotSampleChild2,
  },
};
</script>


