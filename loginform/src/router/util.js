import store from '../store'

export const authorizeToken = (to, from, next) => {
  if (to.matched.some(page => page.meta.requiresAuth) && (store.state.auth.token === null)) {
    console.log('遷移あり')
    next('/Top')
  } else {
    console.log('遷移なし')
    next()
  }
}
