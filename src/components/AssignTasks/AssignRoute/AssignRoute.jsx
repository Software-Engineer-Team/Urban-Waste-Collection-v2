import { useCallback, useEffect, useRef } from "react";
import usePlaceSearch from "@hook/usePlaceSearch";

const hcmCity = [10.8326, 106.6581];
const loading_spinner = document.getElementById("loader");
const background_blur = document.getElementById("background-blur");
const mapEl = document.getElementById("map");
const key = "S8d7L47mdyAG5nHG09dUnSPJjreUVPeC";

const AssignRoute = () => {
  const map = useRef(null);
  const placeSearch = useRef(null);
  const coords = useRef([]);
  const points = useRef([]);
  const layers = useRef([]);
  const makers = useRef([]);
  const makerStart = useRef(null),
    makerEnd = useRef(null);

  const [formBlock] = usePlaceSearch("/home/backofficer", () => {
    mapEl.style.display = "none";
    map.current.remove();
  });

  const runDirection = useCallback((pos) => {
    let dir = window.MQ.routing.directions();

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

    layers.current.push(layer);

    map.current.addLayer(layer);
  }, []);

  const onMapClick = useCallback(
    (e) => {
      const { lat, lng } = e.latlng;

      if (lat && lng) {
        loading_spinner.style.display = "inline-block";
        background_blur.style.display = "inline-block";
        fetch(
          `http://www.mapquestapi.com/geocoding/v1/reverse?key=${key}&location=${lat},${lng}&includeRoadMetadata=true&includeNearestIntersection=true`
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
              .addTo(map.current)
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
    [points, runDirection]
  );

  useEffect(() => {
    mapEl.style.display = "block";

    placeSearch.current = window.placeSearch({
      key: key,
      container: document.querySelector("#MCP"),
    });

    map.current = window.L.map("map", {
      layers: window.MQ.mapLayer(),
      center: hcmCity,
      zoom: 12,
    });

    placeSearch.current.on("change", (e) => {
      try {
        const { lat, lng } = e.result.latlng;
        map.current.panTo([lat, lng]);
        map.current.zoomIn(2);
      } catch (err) {
        console.error(err);
      }
    });
  }, []);

  useEffect(() => {
    if (map.current) {
      map.current.on("click", onMapClick);
      return () => {
        map.current.off("click", onMapClick);
      };
    }
  }, [onMapClick]);

  useEffect(() => {
    const clearMCPBtn = formBlock?.querySelector("#MCP-btn");
    const handleClearMCPBtn = () => {
      if (layers.current.length > 0 && coords.current.length > 0) {
        layers.current?.forEach((el) => {
          map.current.removeLayer(el);
        });
        if (makerStart.current) map.current.removeLayer(makerStart.current);
        makerStart.current = null;
        makerEnd.current = null;
        layers.current = [];
        coords.current = [];
        points.current = [];
        map.current.remove();
        map.current = window.L.map("map", {
          layers: window.MQ.mapLayer(),
          center: hcmCity,
          zoom: 12,
          zoomControl: true,
        });
        map.current.on("click", onMapClick);
      }
    };
    clearMCPBtn?.addEventListener("click", handleClearMCPBtn);
    return () => {
      clearMCPBtn?.removeEventListener("click", handleClearMCPBtn);
    };
  }, [formBlock, onMapClick]);
};

export default AssignRoute;
