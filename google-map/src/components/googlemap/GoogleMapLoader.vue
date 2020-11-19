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
        map: this.map,
        icon: {
          fillColor: "#0FF000", //塗り潰し色
          fillOpacity: 0.8, //塗り潰し透過率
          // path: this.google.maps.SymbolPath.CIRCLE, //円を指定
          // scale: 16, //円のサイズ
          strokeColor: "#FF0000", //枠の色
          strokeWeight: 1.0, //枠の透過率
        },
        label: "98",
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
