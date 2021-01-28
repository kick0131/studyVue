<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <!-- 実行メソッドを切り替えて動作確認 -->
    <button @click="doDownload">実行</button>
  </div>
</template>

<script>
export default {
  props: {
    msg: String
  },
  methods: {
    // ----------------------------------------------------
    // HTMLのアンカータグを追加
    // 実行ボタン押下でリンクが表示される
    addAnchor: function() {
      var anchor = document.createElement('a');
      // ハイパーテキストのリンク先
      anchor.href = 'https://google.com';
      // アンカー文字列
      anchor.innerText = 'google';
      // Bodyのノードリストに登録
      document.body.appendChild(anchor);
    },
    // ----------------------------------------------------
    // アンカータグを使ったダウンロード動作
    // 実行ボタン押下でファイルダウンロードが開始される
    doDownload: function() {
      // ダウンロードさせるオブジェクト
      var data = {
        name: 'tom',
        age: 28,
        info: {
          addr: '123-4567-890',
          mail: 'tom@sample.com'
        }
      };
      var exportData = JSON.stringify(data);
      const blob = new Blob([exportData], { type: 'text/plain' });

      // ダウンロード用のアンカー定義
      var anchor = document.createElement('a');
      anchor.href = window.URL.createObjectURL(blob);
      anchor.download = 'myinfo.json';
      // リンク押下動作を発火
      anchor.click();
    }
  }
};
</script>

<style scoped></style>
