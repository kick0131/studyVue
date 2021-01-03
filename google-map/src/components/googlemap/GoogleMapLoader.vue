<template>
  <div >
    <div  class="google-map" ref="googleMap"></div>
    <!-- <template v-if="Boolean(this.google) && Boolean(this.map)"> -->
    <!-- </template> -->
  </div>
</template>

<script>
import GoogleMapsApiLoader from 'google-maps-api-loader';
import AddMarkerAPI from '@/components/googlemap/AddMarkerAPI';
import { mapState } from 'vuex';

export default {
  props: {
    mapConfig: { type: Object, required: true },
    apiKey: { type: String, required: true }
    // marker: { type: Object, required: false },
  },
  data: function() {
    return {};
  },
  mounted: async function() {
    // Create Google Map API
    const googleMapApi = await GoogleMapsApiLoader({
      apiKey: this.apiKey
    });

    // Create Map
    var map = new googleMapApi.maps.Map(this.$refs.googleMap, this.mapConfig);
    this.$store.commit('setMap', map);
    this.$store.commit('setMapApi', googleMapApi);

    // Add Marker
    AddMarkerAPI.AddSimpleMarker(this.googlemap, this.mapapi);
    // AddMarkerAPI.AddUserIconMarker(this.map, this.google);
  },
  methods: {},
  computed: {
    ...mapState(['googlemap', 'mapapi'])
  }
};
</script>

<style lang="scss" scoped>
.google-map {
  width: 90vw;
  height: 50vh;
}
</style>
