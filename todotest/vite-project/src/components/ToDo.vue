<template>
  <v-container>
    <v-row class="text-center">
      <v-col cols="12">
        <h1>{{ dispname }}</h1>
      </v-col>

      <v-col class="mb-4">
        <h1 class="display-2 font-weight-bold mb-3">Welcome to the Vuetify 3 Beta</h1>
        <h4>Vite Preview</h4>
      </v-col>

      <v-col class="mb-5" cols="12">
        <v-row justify="center">
          <a
            v-for="(eco, i) in whatsNext"
            :key="i"
            :href="eco.href"
            class="subheading mx-3"
            target="_blank"
          >
            {{ eco.text }}
          </a>
        </v-row>
      </v-col>

      <v-col cols="12" v-if="this.visualize">
        <v-row justify="center">
          <v-text-field v-bind:value="dispname" readonly></v-text-field>
          <v-text-field v-bind:value="visualize" readonly></v-text-field>
        </v-row>
      </v-col>
      <v-col cols="12">
        <v-row justify="center">
          <v-btn @click="func1" depressed color="secondary"> {{ dispname }} </v-btn>
          <v-btn @click="func2" depressed color="secondary"> Func2 </v-btn>
          <v-btn @click="visualchange" depressed color="primary"> Toggle </v-btn>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import { ref } from "vue";

const basename = "HelloWorld";
let dispname = ref(basename);
let counter = 0;

const data = {
  whatsNext: [
    {
      text: "Explore components",
      href: "https://vuetifyjs.com",
    },
    {
      text: "Roadmap",
      href: "https://vuetifyjs.com/introduction/roadmap/",
    },
    {
      text: "Frequently Asked Questions",
      href: "https://vuetifyjs.com/getting-started/frequently-asked-questions",
    },
  ],
};

defineExpose({
  data,
});

function func1() {
  counter++;
  dispname = basename + String(counter);
  console.log("dispname : ", dispname);
  return dispname;
}
function func2() {
  console.log("func2 ");
}
</script>

<script>
export default {
  data() {
    return {
      visualize: true,
    }
  },
  methods: {
    visualchange: function () {
      this.visualize = !this.visualize;
      console.log("visualize : ", this.visualize);
    },
  },
};
</script>
