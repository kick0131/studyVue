<template>
  <div>
    <div class="google-map" ref="googleMap"></div>
    <!-- <template v-if="Boolean(this.google) && Boolean(this.map)">
      <slot :google="google" :map="map" />
    </template> -->
  </div>
</template>

<script>
import GoogleMapsApiLoader from "google-maps-api-loader";

export default {
  props: {
    mapConfig: Object,
    apiKey: String,
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
      console.log('mapConfig : '+ JSON.stringify(this.mapConfig));
      new this.google.maps.Map(this.$refs.googleMap, this.mapConfig);
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
