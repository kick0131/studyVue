import Vue from 'vue';

const define = {
  /**
   * 登録トピック
   * @type {String}
   */
  TOPIC: 'notice-jp'
};

Object.defineProperty(Vue.prototype, '$define', {
  get() {
    return define;
  }
});

export default define;
