export default {
  // Move Google Map center potision
  PantoMap(myMap, googlemapapi) {
    // { id: '東京モード学園', position: { lat: 35.6916642, lng: 139.6969475 } },
    myMap.panTo(new googlemapapi.LatLng(35.6916642, 139.6969475));
  }
};
