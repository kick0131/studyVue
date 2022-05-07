import { createStore } from 'vuex';
import actions from '@/store/modules/actions'
import mutations from '@/store/modules/mutations'


const state = {
  count: 0,
  auth: {
    token: null,
    userId: null
  },
  tasks: [
    {
      id: 1,
      name: 'フォーム画面の作成',
      done: false
    },
    {
      id: 2,
      name: 'トップ画面の作成',
      done: false
    }
  ]
};

// storeをエクスポート
export default createStore({
  state,
  mutations,
  actions
});
