import { createStore } from 'vuex'
import { firestoreAction, vuexfireMutations } from 'vuexfire';
// import FirestoreDb from '@/common/FirestoreDb';

export default createStore({
  state: {
    clients: []
  },
  mutations: {
    // other mutations
    ...vuexfireMutations
  },
  actions: {
    bindClients: firestoreAction(({ ref }) => {
      // return ref('clients', FirestoreDb.db.collection('clients'));
      return ref;
    })
  },
  modules: {
  }
})
