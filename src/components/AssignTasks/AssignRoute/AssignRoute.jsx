import useScript from "@hook/useScript";
import { useCallback, useEffect, useRef, useState } from "react";

const hcmCity = [10.8326, 106.6581];
const loading_spinner = document.getElementById("loader");
const background_blur = document.getElementById("background-blur");

const AssignRoute = () => {
  const [map, setMap] = useState(null);
  const coords = useRef([]);
  const points = useRef([]);
  const layers = useRef([]);
  const makers = useRef([]);
  const makerStart = useRef(null),
    makerEnd = useRef(null);

  const runDirection = useCallback(
    (pos) => {
      let dir = window.MQ.routing.directions();
      console.log(pos);

      dir.route({
        /* locations: ["13.98366,108.002701", "10.8326,106.6581"], */
        locations: [...pos],
      });

      let CustomRouteLayer = window.MQ.Routing.RouteLayer.extend({
        createStartMarker: (location) => {
          return makerStart.current;
        },

        createEndMarker: (location) => {
          return makerEnd.current;
        },
      });

      const layer = new CustomRouteLayer({
        directions: dir,
        fitBounds: true,
      });
      console.log("layer", layer);

      layers.current.push(layer);

      map.addLayer(layer);
    },
    [map]
  );

  const onMapClick = useCallback(
    (e) => {
      const { lat, lng } = e.latlng;

      if (lat && lng) {
        loading_spinner.style.display = "inline-block";
        background_blur.style.display = "inline-block";
        fetch(
          `http://www.mapquestapi.com/geocoding/v1/reverse?key=S8d7L47mdyAG5nHG09dUnSPJjreUVPeC&location=${lat},${lng}&includeRoadMetadata=true&includeNearestIntersection=true`
        )
          .then((res) => {
            return res.json();
          })
          .then((data) => {
            loading_spinner.style.display = "none";
            background_blur.style.display = "none";
            const location = data.results[0].locations[0];
            const street = location.street !== "" ? location.street + ", " : "";
            const city =
              location.adminArea6 !== "" ? location.adminArea6 + ", " : "";
            const country =
              location.adminArea5 !== "" ? location.adminArea5 + ", " : "";
            const state = location.adminArea1 !== "" ? location.adminArea1 : "";

            points.current.push(`${lat},${lng}`);

            let custom_icon = window.L.icon({
              iconUrl:
                points.current.length === 1
                  ? "/images/blue_maker.png"
                  : "/images/red_maker.png",
              iconSize: [20, 29],
              iconAnchor: [10, 29],
              popupAnchor: [0, -29],
            });

            const maker = window.L.marker(location.latLng, {
              icon: custom_icon,
            })
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
            makers.current.push(maker);

            if (points.current.length === 1) {
              makerStart.current = maker;
            } else if (points.current.length === 2) {
              makerEnd.current = maker;
            }

            if (points.current.length === 2) {
              runDirection(points.current);
              coords.current.push(points.current);
              points.current = [];
            }
          });
      }
    },
    [map, points, runDirection]
  );

  useEffect(() => {
    setMap(
      window.L.map("map", {
        layers: window.MQ.mapLayer(),
        center: hcmCity,
        zoom: 12,
      })
    );
  }, []);

  useEffect(() => {
    if (map) {
      map.on("click", onMapClick);
      return () => {
        map.off("click", onMapClick);
      };
    }
  }, [onMapClick, map]);
  /* useScript(`${process.env.REACT_APP_ENDPOINT_CLIENT}/js/route-direction.js`); */
};

export default AssignRoute;
