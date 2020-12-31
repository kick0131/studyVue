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
        <ToDoList />
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
import GoogleMapSample from './GoogleMapSample';
import ToDoList from './ToDoList';
export default {
  data: function() {
    return {
      title: 'GoogleMap Sample',
      counter: 0,
      inputResult: ''
    };
  },
  methods: {
    incrementCounter: function() {
      // Geolocation APIに対応している
      if (navigator.geolocation) {
        // 現在位置を取得できる場合の処理
        alert('あなたの端末では、現在位置を取得することができます。');

        // オプション・オブジェクト
        var optionObj = {
          enableHighAccuracy: false,
          timeout: 8000,
          maximumAge: 5000
        };
        // 現在位置を取得する
        navigator.geolocation.getCurrentPosition(
          this.successFunc,
          this.errorFunc,
          optionObj
        );
      }

      // Geolocation APIに対応していない
      else {
        // 現在位置を取得できない場合の処理
        alert('あなたの端末では、現在位置を取得できません。');
      }
      this.counter += 1;
    },
    // 未使用
    onInput: function(e) {
      this.inputResult = e;
    },

    // 成功した時の関数
    successFunc: function(position) {
      var msg =
        'lat:' + position.coords.latitude + ' lon:' + position.coords.longitude;
      // 緯度経度をアラート表示
      alert(msg);
    },
    // 失敗した時の関数
    errorFunc: function(error) {
      // エラーコードのメッセージを定義
      var errorMessage = {
        0: '原因不明のエラーが発生しました…。',
        1: '位置情報の取得が許可されませんでした…。',
        2: '電波状況などで位置情報が取得できませんでした…。',
        3: '位置情報の取得に時間がかかり過ぎてタイムアウトしました…。'
      };

      // エラーコードに合わせたエラー内容をアラート表示
      alert(errorMessage[error.code]);
    }
  },
  components: {
    GoogleMapSample,
    ToDoList
  }
};
</script>
