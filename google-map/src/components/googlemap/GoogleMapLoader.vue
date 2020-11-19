<template>
  <div>
    <div class="google-map" ref="googleMap"></div>
    <!-- <template v-if="Boolean(this.google) && Boolean(this.map)"> -->
    <slot :google="google" :map="map" />
    <!-- </template> -->
  </div>
</template>

<script>
import GoogleMapsApiLoader from "google-maps-api-loader";

export default {
  props: {
    mapConfig: { type: Object, required: true },
    apiKey: { type: String, required: true },
    // marker: { type: Object, required: false },
  },
  data: function() {
    return {
      google: null,
      map: null,
    };
  },
  async mounted() {
    const googleMapApi = await GoogleMapsApiLoader({
      apiKey: this.apiKey,
    });
    this.google = googleMapApi;
    this.initializeMap();
  },
  methods: {
    initializeMap() {
      // Marker dummy data
      var location = [
        {
          id: "東京モード学園",
          position: { lat: 35.6916642, lng: 139.6969475 },
        },
        { id: "新宿中央公園", position: { lat: 35.6901589, lng: 139.6902909 } },
      ];
      console.log("[DEBUG]== location == : " + JSON.stringify(location[0].id));

      console.log("[DEBUG]mapConfig : " + JSON.stringify(this.mapConfig));
      this.map = new this.google.maps.Map(this.$refs.googleMap, this.mapConfig);
      // The marker, positioned at Uluru
      this.marker = new this.google.maps.Marker({
        position: this.mapConfig.center,
        clickable: true,
        map: this.map,
<<<<<<< HEAD
        icon: {
          fillColor: "#0FF000", //塗り潰し色
          fillOpacity: 0.8, //塗り潰し透過率
          // path: this.google.maps.SymbolPath.CIRCLE, //円を指定
          // scale: 16, //円のサイズ
          strokeColor: "#FF0000", //枠の色
          strokeWeight: 1.0, //枠の透過率
        },
        label: "98",
=======
        icon: "pin_white.png",
        // icon: {
        //   fillColor: "#00FF00", //塗り潰し色
        //   // fillOpacity: 0.8, //塗り潰し透過率
        //   // path: "mappin.svg",
        //   path: "M256,0C160.798,0,83.644,77.155,83.644,172.356c0,97.162,48.158,117.862,101.386,182.495 C248.696,432.161,256,512,256,512s7.304-79.839,70.97-157.148c53.228-64.634,101.386-85.334,101.386-182.495 C428.356,77.155,351.202,0,256,0z M256,231.921c-32.897,0-59.564-26.668-59.564-59.564s26.668-59.564,59.564-59.564 c32.896,0,59.564,26.668,59.564,59.564S288.896,231.921,256,231.921z",
        //   // path: "M -8,-8 8,8 M 8,-8 -8,8",
        //   // path: this.google.maps.SymbolPath.FORWARD_CLOSED_ARROW, //円を指定
        //   // scale: 2, //円のサイズ
        //   strokeColor: "#0000FF", //枠の色
        //   // strokeWeight: 1.0, //枠の透過率
        // },
        label: {
          color: "black" ,
          fontSize: "12px" ,
          text: "99" ,
        },
>>>>>>> 46447d7eb5e3aa985f72d9a0b401c5de193cf858
      });

      // マーカー複数配置
      location.forEach((item, index) => {
        console.log('[DEBUG]position ' + item.id)
        this.marker = new this.google.maps.Marker({
          position: item.position,
          map: this.map,
          label: String(index+1),
        });
      })
    },
  },
};
</script>

<style lang="scss" scoped>
.google-map {
  //   width: 100vw;
  //   height: 100vh;
  //   width: 100%;
  //   height: 100%;
  width: 60vw;
  height: 50vh;
}
</style>
