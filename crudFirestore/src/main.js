import { createApp } from 'vue'
import App from './App.vue'
import store from './store'
import MixinDb from '@/common/MixinDb';

const app = createApp(App)
// use:外部プラグインを取り込む
app.use(store)
// mixin:共通処理としてVueコンポーネントに取り込む（マージ）
app.mixin(MixinDb)
// mount:Vueコンポーネントの出力を割り当てる
app.mount('#app')
