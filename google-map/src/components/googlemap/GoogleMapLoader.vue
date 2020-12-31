<template>
  <div>
    <div class="google-map" ref="googleMap"></div>
    <!-- <template v-if="Boolean(this.google) && Boolean(this.map)"> -->
    <slot :google="google" :map="map" />
    <!-- </template> -->
  </div>
</template>

<script>
import GoogleMapsApiLoader from 'google-maps-api-loader';
import AddMarker from '@/components/googlemap/AddMarker';

export default {
  props: {
    mapConfig: { type: Object, required: true },
    apiKey: { type: String, required: true }
    // marker: { type: Object, required: false },
  },
  data: function() {
    return {
      google: null,
      map: null
    };
  },
  mounted: async function() {
    const googleMapApi = await GoogleMapsApiLoader({
      apiKey: this.apiKey
    });
    this.google = googleMapApi;
    // this.initializeMap();

    // Create Map
    this.map = new this.google.maps.Map(this.$refs.googleMap, this.mapConfig);

    // Add Marker
    AddMarker.AddSimpleMarker(this.map, this.google);
    // AddMarker.AddUserIconMarker(this.map, this.google);
    
  },
  methods: {
  }
};
</script>

<style lang="scss" scoped>
.google-map {
  width: 60vw;
  height: 50vh;
}
</style>
