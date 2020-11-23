<template>
  <div>
    <form>
      <input type="text" id="name" v-on:keyup.esc="clear" v-model="name" v-bind:style="[borderstyle1,borderstyle2]"/>
      <br />
      <label for="show">表示／非表示</label>
      <input type="checkbox" id="show" v-model="toggle" />
    </form>
    <div id="panel" v-if="toggle">
      <h3>式の真偽に応じて表示／非表示を切り替える -v-if</h3>
      <div>
        v-ifは、JavaScriptのif命令に相当するディレクティブです。<br />
        指定された条件式がtrueの場合にだけ、現在の要素を出力します。
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: '枠をアクティブにした状態でESCボタンを押下するとメソッドが呼ばれます(v-on:keyup.esc)',
      toggle: true,
      borderstyle1:{
        width:'100%'
      },
      borderstyle2:{
        border:'dashed'
      },
    };
  },
  methods: {
    clear() {
      alert('ESCボタンが押されました');
    }
  }
};
</script>
<style scoped>
/* ★ToDo どうやってスタイル当てるの？ */
#id {
  --width: 200px;
}
</style>
