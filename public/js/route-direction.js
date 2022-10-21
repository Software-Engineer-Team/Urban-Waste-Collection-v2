let map = L.map("root", {
  layers: MQ.mapLayer(),
  center: [10.8326, 106.6581],
  zoom: 12,
});

let pleikuCity = [13.98366, 108.0027];
let hcmCity = [10.8326, 106.6581];

let dir = MQ.routing.directions();

dir.route({
  locations: ["13.98366,108.002701", "10.8326,106.6581"],
});

let CustomRouteLayer = MQ.Routing.RouteLayer.extend({
  createStartMarker: (location) => {
    let custom_icon = L.icon({
      iconUrl:
        "https://www.mapquestapi.com/staticmap/geticon?uri=poi-red_1.png",
      iconSize: [20, 29],
      iconAnchor: [10, 29],
      popupAnchor: [0, -29],
    });

    let marker = L.marker(location.latLng, { icon: custom_icon })
      .addTo(map)
      .bindPopup(
        L.popup({
          maxWidth: 250,
          minWidth: 100,
          autoClose: false,
          closeOnClick: false,
          /* className: ${workout.type}-popup, */
        })
      )
      .setPopupContent("Cao Tuan Kiet")
      .openPopup();
    return marker;
  },

  createEndMarker: (location) => {
    let custom_icon = L.icon({
      iconUrl:
        "https://www.mapquestapi.com/staticmap/geticon?uri=poi-blue_1.png",
      iconSize: [20, 29],
      iconAnchor: [10, 29],
      popupAnchor: [0, -29],
    });

    let marker = L.marker(location.latLng, { icon: custom_icon })
      .addTo(map)
      .bindPopup(
        L.popup({
          maxWidth: 250,
          minWidth: 100,
          autoClose: false,
          closeOnClick: false,
          /* className: ${workout.type}-popup, */
        })
      )
      .setPopupContent("Cao Hoang Kiet")
      .openPopup();
    return marker;
  },
});

map.addLayer(
  new CustomRouteLayer({
    directions: dir,
    fitBounds: true,
  })
);
