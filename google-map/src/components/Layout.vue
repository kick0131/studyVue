<template>
  <div>
    <v-container class="grey lighten-5">
      <!-- 1行目 -->
      <v-row
        align="center"
        justify="center"
        class="purple lighten-4 mt-5"
        style="height: 100px;"
      >
        <p>{{ title }}</p>
        <ToDoList/>
      </v-row>

      <!-- 2行目 -->
      <v-row align="center" justify="center">
        <v-col cols="auto">
          <GoogleMapSample />
        </v-col>
      </v-row>

      <!-- 3行目 -->
      <v-row>
        <v-col cols="2" lg="3">
          <v-card class="pa-2" outlined tile>
            .col-auto
          </v-card>
        </v-col>
        <v-col cols="2">
          <v-card class="pa-2" outlined tile>
            .col
          </v-card>
        </v-col>
        <v-spacer></v-spacer>
        <v-col cols="auto" md="5">
          <v-card class="pa-2" cols="auto" outlined tile>
            .col-md-5
          </v-card>
        </v-col>
      </v-row>

      <!-- 4行目 -->
      <v-row align="center" justify="center" class="cyan lighten-4">
        <!-- <v-text-field @change="onInput($event)" placeholder="input"/> -->
        <v-text-field v-model="inputResult" placeholder="input" />
        <v-spacer></v-spacer>
        {{ inputResult }}
        <v-spacer></v-spacer>
        <span>{{ counter }}</span>
        <v-spacer></v-spacer>
        <v-btn small color="primary" v-on:click="incrementCounter"
          >ボタンA</v-btn
        >
      </v-row>
    </v-container>
  </div>
</template>

<script>
import GoogleMapSample from "./GoogleMapSample";
import ToDoList from "./ToDoList";
export default {
  data: function() {
    return {
      title: "GoogleMap Sample",
      counter: 0,
      inputResult: "",
    }
  },
  methods: {
    incrementCounter: function() {
      this.counter += 1;
    },
    // 未使用
    onInput: function(e) {
      this.inputResult = e;
    },
  },
  components: {
    GoogleMapSample,
    ToDoList,
  },
};
</script>
