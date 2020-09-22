<template>
  <div>
    <v-container class="grey lighten-5">
      <!-- 1行目 -->
      <v-row align="center" justify="center" class="purple lighten-3 mt-5" style="height: 100px;">
        <p>{{ title }}</p>
        <ul>
          <li v-for="todo in todos" v-bind:key="todo.id">
            {{ todo.text }}
            <v-btn small color="primary" class="ml-2" @click="deleteTodo(todo.id)"> delete </v-btn>
          </li>
        </ul>
      </v-row>

      <!-- 2行目 -->
      <v-row align="center" justify="center">
        <v-img
          alt="Vuetify Logo"
          class="flex-grow-0"
          contain
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"
          transition="scale-transition"
          width="40"
        />
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
        <v-btn small color="primary" v-on:click="incrementCounter">ボタンA</v-btn>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      title: 'GoogleMap Sample',
      counter: 0,
      inputResult: '',
      todos: [
        { id: '1', text: 'GoogleMapの表示' },
        { id: '2', text: 'GoogleMapにピンを立てる' },
        { id: '3', text: 'GoogleMapに数字付きピンを立てる' }
      ]
    }
  },
  methods: {
    incrementCounter: function () {
      this.counter += 1
    },
    // 未使用
    onInput: function (e) {
      this.inputResult = e
    },
    deleteTodo: function (id) {
      this.todos = this.todos.filter(todo => todo.id !== id)
    }
  }
}
</script>

<style>
/*ここにスタイルを記載 */
.container--fluid {
  max-width: 100%;
}
</style>
