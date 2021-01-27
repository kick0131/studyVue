import { createStore } from 'vuex';
import { firestoreAction, vuexfireMutations } from 'vuexfire';
import { firestoreDb } from '@/common/FirestoreDb';

export default createStore({
  // バインド先:$store.state.clients
  state: {
    clients: []
  },
  mutations: {
    // other mutations
    ...vuexfireMutations
  },
  actions: {
    bindClients: firestoreAction(({ bindFirestoreRef }) => {
      return bindFirestoreRef('clients', firestoreDb.collection('clients'));
    }),
    unbindClients: firestoreAction(({ unbindFirestoreRef }) => {
      return unbindFirestoreRef('clients');
    })
  },
  modules: {},
  getters: {
    // 条件指定のドキュメント取得
    findClientById: state => id => {
      return state.clients.filter(client => client.id == id);
    },
    // ドキュメント一覧を返す
    getClients: state => {
      return state.clients;
    },
  }
});
