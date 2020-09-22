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
        <ul>
          <li v-for="todo in todos" v-bind:key="todo.id">
            {{ todo.text }}
            <v-btn
              small
              color="primary"
              class="ml-2"
              @click="deleteTodo(todo.id)"
            >
              delete
            </v-btn>
          </li>
        </ul>
      </v-row>

      <!-- 2行目 -->
      <v-row align="center" justify="center">
        <v-col cols="auto">
          <GoogleMapLoader :mapConfig="mapConfig" :apiKey="apikey">
            <!-- <template slot-scope="{ google, map }">
            <GoogleMapMarker
              v-for="marker in markers"
              :key="marker.id"
              :marker="marker"
              :google="google"
              :map="map"
            />
            <GoogleMapLine
              v-for="line in lines"
              :key="line.id"
              :path.sync="line.path"
              :google="google"
              :map="map"
            />
          </template> -->
          </GoogleMapLoader>
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
import GoogleMapLoader from "./googlemap/GoogleMapLoader";
// import GoogleMapMarker from "./googlemap/GoogleMapMarker";
// import GoogleMapLine from "./googlemap/GoogleMapLine";
import mapSettings from "@/constants/mapSettings";
import Secret from "@/constants/apikey";

export default {
  components: {
    GoogleMapLoader,
    // GoogleMapMarker,
    // GoogleMapLine,
  },

  data: function() {
    return {
      title: "GoogleMap Sample",
      counter: 0,
      inputResult: "",
      // for Todo list
      todos: [
        { id: "1", text: "GoogleMapの表示" },
        { id: "2", text: "GoogleMapにピンを立てる" },
        { id: "3", text: "GoogleMapに数字付きピンを立てる" },
      ],
      // for GoogleMap
      markers: [
        { id: "a", position: { lat: 35.68944, lng: 139.69167 } },
        { id: "b", position: { lat: 5, lng: 99 } },
        { id: "c", position: { lat: 6, lng: 97 } },
      ],
      lines: [
        {
          id: "1",
          path: [
            { lat: 3, lng: 101 },
            { lat: 5, lng: 99 },
          ],
        },
        {
          id: "2",
          path: [
            { lat: 5, lng: 99 },
            { lat: 6, lng: 97 },
          ],
        },
      ],
    };
  },
  methods: {
    incrementCounter: function() {
      this.counter += 1;
    },
    // 未使用
    onInput: function(e) {
      this.inputResult = e;
    },
    deleteTodo: function(id) {
      this.todos = this.todos.filter((todo) => todo.id !== id);
    },
  },
  computed: {
    mapConfig() {
      return {
        ...mapSettings,
        // zoom: 17,
        center: this.mapCenter,
      };
    },
    mapCenter() {
      return this.markers[0].position;
    },
    apikey() {
      return Secret.API_KEY;
    },
  },
};
</script>

<style>
/*ここにスタイルを記載 */
.container--fluid {
  max-width: 100%;
}
</style>
