const hcmCity = [10.8326, 106.6581];
const urlBlueIcon =
  "https://www.mapquestapi.com/staticmap/geticon?uri=poi-blue_1.png";
const urlRedIcon =
  "https://www.mapquestapi.com/staticmap/geticon?uri=poi-red_1.png";

let map = window.L.map("root", {
  layers: window.MQ.mapLayer(),
  center: hcmCity,
  zoom: 12,
});

let listCoord = [];
let points = [];
let listLayer = [];
let makerStart = null,
  makerEnd = null;

const runDirection = (pos) => {
  let dir = window.MQ.routing.directions();

  dir.route({
    /* locations: ["13.98366,108.002701", "10.8326,106.6581"], */
    locations: [...pos],
  });

  let CustomRouteLayer = window.MQ.Routing.RouteLayer.extend({
    createStartMarker: (location) => {
      return makerStart;
    },

    createEndMarker: (location) => {
      return makerEnd;
    },
  });

  const layer = new CustomRouteLayer({
    directions: dir,
    fitBounds: true,
  });
  listLayer.push(layer);

  map.addLayer(layer);
};

function onMapClick(e) {
  /* if (listPosition.length >= 2) { */
  /*   listPosition = []; */
  /*   listLayer.forEach((el) => map.removeLayer(el)); */
  /*   makerStart = null; */
  /*   makerEnd = null; */
  /*   listLayer = []; */
  /*   return; */
  /* } */
  const { lat, lng } = e.latlng;

  if (lat && lng) {
    fetch(
      `http://www.mapquestapi.com/geocoding/v1/reverse?key=S8d7L47mdyAG5nHG09dUnSPJjreUVPeC&location=${lat},${lng}&includeRoadMetadata=true&includeNearestIntersection=true`
    )
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        const location = data.results[0].locations[0];
        const street = location.street !== "" ? location.street + ", " : "";
        const city =
          location.adminArea6 !== "" ? location.adminArea6 + ", " : "";
        const country =
          location.adminArea5 !== "" ? location.adminArea5 + ", " : "";
        const state = location.adminArea1 !== "" ? location.adminArea1 : "";
        points.push(`${lat},${lng}`);

        let custom_icon = window.L.icon({
          iconUrl: points.length === 1 ? urlBlueIcon : urlRedIcon,
          iconSize: [20, 29],
          iconAnchor: [10, 29],
          popupAnchor: [0, -29],
        });

        const maker = window.L.marker(location.latLng, { icon: custom_icon })
          .addTo(map)
          .bindPopup(
            window.L.popup({
              maxWidth: 250,
              minWidth: 100,
              autoClose: false,
              closeOnClick: false,
              /* className: ${workout.type}-popup, */
            })
          )
          .setPopupContent(street + city + country + state)
          .openPopup();

        if (points.length === 1) {
          makerStart = maker;
        } else if (points.length === 2) {
          makerEnd = maker;
        }

        if (points.length === 2) {
          runDirection(points);
          listCoord.push(points);
          points = [];
        }
      });
  }
}

map.on("click", onMapClick);
