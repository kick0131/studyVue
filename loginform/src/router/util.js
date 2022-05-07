import store from '../store';

// 認証判定
export const authorizeToken = (to, from, next) => {
  console.log('to.name : ' + to.name);
  console.log('token   : ' + store.state.auth.token);
  // 遷移先のページオブジェクトが認証対象
  if (to.matched.some(page => page.meta.requiresAuth)) {
    // トークンが存在しない場合は未ログイン状態と判断し、ログイン画面に遷移
    if (store.state.auth.token === null) {
      console.log('ログイン画面に遷移');
      next('/');
    } else {
      console.log('認証済み');
      next();
    }
  } else {
    console.log('認証対象外の画面');
    next();
  }
};
