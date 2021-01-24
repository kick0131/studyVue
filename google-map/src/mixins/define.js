import Vue from 'vue';

const define = {
  /**
   * 座標情報
   * @type {String}
   */
  POSITION_TOKYO: { id: '東京駅', position: { lat: 35.6812405, lng: 139.7649308 } },
  POSITION_TOKOROZAWA: { id: '所沢駅', position: { lat: 35.7866216, lng: 139.4710306 } },
  POSITION_SHINJUKU: { id: '新宿駅', position: { lat: 35.68944, lng: 139.69167 } },
  POSITION_TOKYOMODEGAKUEN: { id: '東京モード学園', position: { lat: 35.6916642, lng: 139.6969475 } },
  POSITION_SHINJUKUCHUOUKOUEN: { id: '新宿中央公園', position: { lat: 35.6901589, lng: 139.6902909 } },

};

Object.defineProperty(Vue.prototype, '$define', {
  get() {
    return define;
  }
});

export default define;
