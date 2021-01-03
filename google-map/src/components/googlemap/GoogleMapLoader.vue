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
import AddMarkerAPI from '@/components/googlemap/AddMarkerAPI';
// import TraceMapAPI from '@/components/googlemap/TraceMapAPI';

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

    // Create Map
    this.map = new this.google.maps.Map(this.$refs.googleMap, this.mapConfig);

    // Add Marker
    AddMarkerAPI.AddSimpleMarker(this.map, this.google);
    // AddMarkerAPI.AddUserIconMarker(this.map, this.google);
    
  },
  methods: {
  }
};
</script>

<style lang="scss" scoped>
.google-map {
  width: 90vw;
  height: 50vh;
}
</style>
