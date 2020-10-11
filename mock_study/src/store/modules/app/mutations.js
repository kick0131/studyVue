import { set, toggle } from '@/utils/vuex'

export default {
  setDrawer: set('drawer'),
  toggleDrawer: toggle('drawer'),
  showLoadingDialog (state, payload) {
    state.loading = payload
  },
  showDialog (state, payload) {
    state.showDialog = payload
  },
  showMessage (state, payload) {
    state.dialogMessage = payload
  },
  showErrorCode (state, payload) {
    state.errorCode = payload
  },
}
