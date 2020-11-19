<script>
// import mapSettings from "@/constants/mapSettings";

export default {
  props: {
    google: { type: Object, required: true },
    map: { type: Object, required: true },
    marker: { type: Object, required: true },
  },

  mounted() {
    new this.google.maps.Marker({
      position: this.marker.position,
      marker: this.marker,
      map: this.map,
      // icon: POINT_MARKER_ICON_CONFIG,
      icon: {
        fillColor: "#00FF00", //塗り潰し色
        fillOpacity: 0.8, //塗り潰し透過率
        // path: this.google.maps.SymbolPath.CIRCLE, //円を指定
        scale: 16, //円のサイズ
        strokeColor: "#FF0000", //枠の色
        strokeWeight: 1.0, //枠の透過率
      },
    });
  },
};
</script>
