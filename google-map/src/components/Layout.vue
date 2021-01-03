<template>
  <v-container class="grey lighten-5">
    <!-- 1行目 タイトル -->
    <v-row align="center" justify="center" class="cyan lighten-4 mt-1">
      <p>{{ title }}</p>
    </v-row>

    <!-- 2行目 アプリ（View） -->
    <v-row align="center" justify="center">
      <v-col cols="auto">
        <GoogleMapSample />
      </v-col>
    </v-row>

    <!-- 3行目 アプリ（User Action）-->
    <v-row align="center" justify="center" class="cyan lighten-4">
      <!-- <v-text-field @change="onInput($event)" placeholder="input"/> -->
      <v-text-field v-model="inputResult" placeholder="未使用" />
      <!-- <v-spacer></v-spacer>
      {{ inputResult }} -->
      <v-spacer></v-spacer>
      <span>point:{{ counter }}</span>
      <v-spacer></v-spacer>
      <v-btn small color="primary" v-on:click="panto">開始</v-btn>
    </v-row>
  </v-container>
</template>

<script>
import GoogleMapSample from './GoogleMapSample';
export default {
  data: function() {
    return {
      title: '10秒間だけ足跡を残す',
      counter: 0,
      inputResult: ''
    };
  },
  computed: {
    mycounter: function() {
      return this.counter;
    }
  },
  methods: {
    // ★ToDo GoogleMapの指定した座標に移動
    panto: function() {
      // console.log('[Layout]:' + GoogleMapSample.);
      console.log(GoogleMapSample);
    },
    // 時間をおいて座標取得を複数回呼び出す
    traceAddr: function() {
      // 最大呼び出し回数
      const MAX_INTERVAL_COUNT = 3;
      // 定期処理の実行間隔(ms)
      const INTERVAL_TIME = 3000;

      // インターバルを引数付きメソッドで呼びたい場合は無名関数で定義する
      // 引数:CreateInterval戻り値（停止で必要）
      const hoge = id => {
        console.log('this.mycounter:' + this.mycounter + ' id:' + id);

        // インターバル処理の停止
        if (this.mycounter >= MAX_INTERVAL_COUNT) {
          console.log('== STOP');
          clearInterval(id);
        }
        this.incrementCounter();
        this.getLocation();
      };

      // 第1引数：実行対象の関数
      // 第2引数：実行間隔(ms)
      var id = setInterval(function() {
        hoge(id);
      }, INTERVAL_TIME);
    },
    // カウンタ
    incrementCounter: function() {
      this.counter += 1;
    },
    // Geolocation APIを使った座標情報取得
    getLocation: function() {
      // Geolocation APIに対応している
      if (navigator.geolocation) {
        // 現在位置を取得できる場合の処理
        // alert('あなたの端末では、現在位置を取得することができます。');

        // オプション・オブジェクト
        // enableHighAccuracy 詳細な位置情報の取得
        // timeout タイムアウト時間(ms)
        // maximumAge キャッシュ情報の寿命(ms)
        var optionObj = {
          enableHighAccuracy: true,
          timeout: 3000,
          maximumAge: 5000
        };
        // 現在位置を取得する
        navigator.geolocation.getCurrentPosition(this.successFunc, this.errorFunc, optionObj);
      }

      // Geolocation APIに対応していない
      else {
        // 現在位置を取得できない場合の処理
        alert('あなたの端末では、現在位置を取得できません。');
      }
    },

    // 成功した時の関数
    successFunc: function(position) {
      var msg = 'lat:' + position.coords.latitude + ' lon:' + position.coords.longitude;
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
    GoogleMapSample
  }
};
</script>
