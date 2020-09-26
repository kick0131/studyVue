<template>
  <div>
    <GoogleMapLoader :mapConfig="mapConfig" :apiKey="apikey">
      <!-- <template v-slot:default="slotPlops">
        <GoogleMapMarker
          v-for="marker in markers"
          :key="marker.id"
          :marker="marker"
          :google="slotPlops.google"
          :map="slotPlops.map"
        />
      </template> -->
      <!-- <template slot-scope="{ google, map }">
            <GoogleMapMarker
              v-for="marker in markers"
              :key="marker.id"
              :marker="marker"
              :google="google"
              :map="map"
            />
            <GoogleMapLine
              v-for="line in lines"
              :key="line.id"
              :path.sync="line.path"
              :google="google"
              :map="map"
            />
            -->
    </GoogleMapLoader>
  </div>
</template>

<script>
import GoogleMapLoader from "./googlemap/GoogleMapLoader";
// import GoogleMapMarker from "./googlemap/GoogleMapMarker";
// import GoogleMapLine from "./googlemap/GoogleMapLine";
import mapSettings from "@/constants/mapSettings";
import Secret from "@/constants/apikey";

export default {
  components: {
    GoogleMapLoader,
    // GoogleMapMarker,
    // GoogleMapLine,
  },

  data: function() {
    return {
      // for GoogleMap
      markers: [
        { id: "a", position: { lat: 35.68944, lng: 139.69167 } },
        // { id: "b", position: { lat: 5, lng: 99 } },
        // { id: "c", position: { lat: 6, lng: 97 } },
      ],
      lines: [
        {
          id: "1",
          path: [
            { lat: 3, lng: 101 },
            { lat: 5, lng: 99 },
          ],
        },
        {
          id: "2",
          path: [
            { lat: 5, lng: 99 },
            { lat: 6, lng: 97 },
          ],
        },
      ],
    };
  },
  methods: {},
  computed: {
    mapConfig() {
      return {
        ...mapSettings,
        center: this.mapCenter,
      };
    },
    mapCenter() {
      return this.markers[0].position;
    },
    apikey() {
      return Secret.API_KEY;
    },
  },
};
</script>

<style>
/*ここにスタイルを記載 */
</style>
