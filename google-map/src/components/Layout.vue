<template>
  <!-- <v-container class="grey lighten-5"> -->
  <v-container>
    <!-- メニューバー -->
    <!-- <v-system-bar color="primary" dark></v-system-bar>
    <v-app-bar dense color="secondary">
      <v-app-bar-nav-icon></v-app-bar-nav-icon>
      <v-toolbar-title>{{ this.appbarname }}</v-toolbar-title>
    </v-app-bar> -->

    <!-- 1行目 タイトル -->
    <v-row align="center" justify="center" class="cyan lighten-4 my-1">
      <span>{{ describe }}</span>
    </v-row>

    <!-- 2行目 アプリ（View） -->
    <v-row align="center" justify="center">
      <v-col cols="auto">
        <GoogleMapSample />
      </v-col>
    </v-row>

    <!-- 3行目 アプリ（User Action）-->
    <v-row align="center" justify="center" class="cyan lighten-4">
      <span class="cyan lighten-4">計測時間(秒)</span>
      <v-slider v-model="slider" :max="ticksizemax" :tick-labels="labels" class="mx-4" ticks></v-slider>
      <v-btn small color="primary" :disabled="btnEnable == false" v-on:click="traceAddr">{{ actionBtnName }}</v-btn>
    </v-row>

    <!-- 4行目 デバッグ -->
    <v-row align="center" justify="center" class="cyan lighten-4">
      <!-- <v-card>{{ sliderdata(slider) }}</v-card> -->
    </v-row>
  </v-container>
</template>

<script>
import GoogleMapSample from './GoogleMapSample';
import TraceMapAPI from '@/components/googlemap/TraceMapAPI';
import AddMarkerAPI from '@/components/googlemap/AddMarkerAPI';
import { mapState } from 'vuex';

// インターバル初期値
const INIT_INTERVAL_COUNT = 0;
// 強制停止用の設定値
const FORCE_TERMINATE_COUNT = 999999;
// 定期処理の実行間隔(ms)
const INTERVAL_TIME = 1000;
// アプリケーションバータイトル
const MAIN_TITLE = 'Main Page';
// メイン画面_内容説明
const MAIN_DESCRIBE = 'Point action history on GoogleMap';
// メイン画面_実行ボタン_開始
const BTN_START = 'Start';
// メイン画面_実行ボタン_中止
const BTN_STOP = 'Stop';
// GoogleMapsAPI タイムアウト(ms)
const GOOGLEMAPSAPI_TIMEOUT = 5000;
// GoogleMapsAPI キャッシュ時間(ms)
const GOOGLEMAPSAPI_CACHE = 5000;
/**
 * スライダー定義
 * @type {Array}
 */
const SLIDER_DATA = [5, 10, 30, 60];

export default {
  data: function() {
    return {
      labels: SLIDER_DATA,
      slider: 0,
      describe: MAIN_DESCRIBE,
      actionBtnName: BTN_START,
      counter: INIT_INTERVAL_COUNT,
      btnEnable: true
    };
  },
  computed: {
    mycounter: function() {
      return this.counter;
    },
    ticksizemax: function() {
      return this.labels.length - 1;
    },
    sliderdata: function() {
      return function(idx) {
        return SLIDER_DATA[idx];
      };
    },
    ...mapState(['googlemap', 'mapapi', 'appbarname'])
  },
  mounted: function() {
    this.$store.commit('setAppBarName', MAIN_TITLE);
  },
  methods: {
    // GoogleMapの指定した座標に移動してプロットするサンプル
    panto: function() {
      var latitude = this.$define.POSITION_TOKYO.position.latitude;
      var longitude = this.$define.POSITION_TOKYO.position.longitude;
      TraceMapAPI.PantoMap(this.googlemap, this.mapapi, latitude, longitude);
      AddMarkerAPI.AddPointMarker(this.googlemap, this.mapapi, latitude, longitude);
    },
    // 実行ボタンの状態初期化
    initActionBtn: function() {
      this.btnEnable = true;
      this.actionBtnName = BTN_START;
    },
    // 時間をおいて座標取得を複数回呼び出す
    traceAddr: function() {

      // 実行中に再度ボタン押下した場合（ボタン名で判断）
      if (this.actionBtnName == BTN_STOP) {
        // カウンタを上限に設定し、非同期処理を停止させる
        this.btnEnable = false;
        this.counter = FORCE_TERMINATE_COUNT;
        return;
      }

      // 初期化処理
      // ボタン表示名を切り替え、終了条件を設定
      this.actionBtnName = BTN_STOP;
      var terminateCount = this.sliderdata(this.slider);
      console.log(terminateCount);

      // インターバルを引数付きメソッドで呼びたい場合は無名関数で定義する
      // 引数:CreateInterval戻り値（停止で必要）
      const intervalAction = id => {
        console.log('this.mycounter:' + this.mycounter + ' id:' + id);

        if (this.mycounter >= terminateCount) {
          console.log('== STOP');
          // インターバル処理の停止
          clearInterval(id);
          // カウンタ初期化
          this.counter = INIT_INTERVAL_COUNT;
          // ボタン表示初期化
          this.initActionBtn();
        }
        this.incrementCounter();
        this.pointOnGoogleMap();
      };

      // 第1引数：実行対象の関数
      // 第2引数：実行間隔(ms)
      var id = setInterval(function() {
        intervalAction(id);
      }, INTERVAL_TIME);
    },
    // カウンタ
    incrementCounter: function() {
      this.counter += 1;
    },
    // Geolocation APIを使った座標情報取得
    pointOnGoogleMap: function() {
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
          timeout: GOOGLEMAPSAPI_TIMEOUT,
          maximumAge: GOOGLEMAPSAPI_CACHE
        };
        // 現在位置を取得する
        navigator.geolocation.getCurrentPosition(this.successFunc, this.errorFunc, optionObj);
      }

      // Geolocation APIに対応していない
      else {
        // 現在位置を取得できない場合の処理
        alert('あなたの端末では、現在位置を取得できません。');

        // カウントを終了させる
        this.counter = FORCE_TERMINATE_COUNT;
      }
    },

    // 成功した時の関数
    successFunc: function(position) {
      var msg = 'lat:' + position.coords.latitude + ' lon:' + position.coords.longitude;
      // 緯度経度をアラート表示
      // alert(msg);
      console.log(msg);

      // 現在地を地図の中心に補正
      TraceMapAPI.PantoMap(this.googlemap, this.mapapi, position.coords.latitude, position.coords.longitude);
      // 軌跡のポイント
      AddMarkerAPI.AddPointMarker(this.googlemap, this.mapapi, position.coords.latitude, position.coords.longitude);
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

      // カウントを終了させる
      this.counter = FORCE_TERMINATE_COUNT;
    }
  },
  components: {
    GoogleMapSample
  }
};
</script>
<style scoped></style>
