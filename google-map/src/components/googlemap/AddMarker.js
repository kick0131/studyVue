export default {
  // Standard Google Map Marker
  AddSimpleMarker(myMap, googlemapapi) {
    // Marker location
    var location = [
      { id: '東京モード学園', position: { lat: 35.6916642, lng: 139.6969475 } },
      { id: '新宿中央公園', position: { lat: 35.6901589, lng: 139.6902909 } }
    ];
    console.log('[DEBUG]== location == : ' + JSON.stringify(location[0].id));

    // Add Marker to Map
    location.forEach((item, index) => {
      console.log('[DEBUG]position ' + item.id);
      new googlemapapi.maps.Marker({
        position: item.position,
        map: myMap,
        label: String(index + 1)
      });
    });
  },

  AddUserIconMarker(myMap, googlemapapi) {
    this.marker = new googlemapapi.maps.Marker({
      position: { lat: 35.68944, lng: 139.69167 } ,
      clickable: true,
      map: myMap,
      icon: 'pin_red.png',
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
        color: 'black',
        fontSize: '12px',
        text: '99'
      }
    });
  },
  // SVGを使った方法
  AddUserIconMarker2(myMap, googlemapapi) {
    this.marker = new googlemapapi.maps.Marker({
      position: { lat: 35.68944, lng: 139.69167 } ,
      clickable: true,
      map: myMap,
      icon: {
        fillColor: "#7F7F00", //塗り潰し色
        fillOpacity: 1.0, //塗り潰し透過率(0.0:完全透過 1.0:透過無し)
        // ToDo:座標が正しく設定されない
        path: "M256,0C160.798,0,83.644,77.155,83.644,172.356c0,97.162,48.158,117.862,101.386,182.495 C248.696,432.161,256,512,256,512s7.304-79.839,70.97-157.148c53.228-64.634,101.386-85.334,101.386-182.495 C428.356,77.155,351.202,0,256,0z M256,231.921c-32.897,0-59.564-26.668-59.564-59.564s26.668-59.564,59.564-59.564 c32.896,0,59.564,26.668,59.564,59.564S288.896,231.921,256,231.921z",
        scale: 0.1, //円のサイズ
        strokeColor: "#0000FF", //枠の色
        // strokeWeight: 1.0, //枠の透過率
      },
      label: {
        color: 'black',
        fontSize: '12px',
        text: '99'
      }
    });
  }
};
