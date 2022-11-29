import { useCallback, useEffect, useRef, useState } from "react";
import usePlaceSearch from "@hook/usePlaceSearch";

const hcmCity = [10.8326, 106.6581];
const loading_spinner = document.getElementById("loader");
const background_blur = document.getElementById("background-blur");
const mapEl = document.getElementById("map");

const AssignArea = () => {
  const map = useRef(null);
  const placeSearch = useRef(null);
  const coords = useRef([]);
  const points = useRef([]);
  const layers = useRef([]);
  const makers = useRef([]);
  const makerStart = useRef(null),
    makerEnd = useRef(null);
  const [areas, setAreas] = useState([
    {
      location: [10.79585, 106.65873],
      description: "Area: sdfasdfsdfsdf",
    },
    { location: [10.84943, 106.76849], description: "Area: sdfasdfsdfsdf" },
  ]);

  const [formBlock] = usePlaceSearch("/home/backofficer", () => {
    mapEl.style.display = "none";
    map?.current.remove();
  });

  useEffect(() => {
    if (map.current) {
      var bounds = [
        [10.722361730840149, 106.57699584960938],
        [10.916598861226174, 106.57699584960938],
        [10.916598861226174, 106.85028076171875],
        [10.722361730840149, 106.85028076171875],
      ];

      // create an orange rectangle
      window.L.rectangle(bounds, { color: "#ff7800", weight: 1 }).addTo(
        map.current
      );

      areas.forEach((area) => {
        let custom_icon = window.L.icon({
          iconUrl: "/images/leaf-green.png",
          iconSize: [38, 95],
          iconAnchor: [22, 94],
          popupAnchor: [-3, -76],
          shadowUrl: "/images/leaf-shadow.png",
          shadowSize: [50, 64],
          shadowAnchor: [4, 62],
        });

        window.L.marker(area.location, {
          icon: custom_icon,
        })
          .addTo(map.current)
          .bindPopup(
            window.L.popup({
              maxWidth: 250,
              minWidth: 100,
              top: -20,
              autoClose: false,
              closeOnClick: false,
              /* className: ${workout.type}-popup, */
            })
          )
          .setPopupContent(area.description)
          .openPopup();

        window.L.circleMarker(area.location, {
          radius: 150,
          color: "green",
          fillColor: "#ffd77a",
          fillOpacity: 0.5,
        }).addTo(map.current);
      });
    }
  }, [map.current]);

  // Draw item
  useEffect(() => {
    if (map.current) {
      const drawnItems = new window.L.FeatureGroup();
      console.log(drawnItems);
      map.current.addLayer(drawnItems);
      const drawControl = new window.L.Control.Draw({
        draw: {
          polygon: true,
          marker: true,
          circlemarker: true,
          rectangle: true,
          circle: true,
        },
        edit: {
          featureGroup: drawnItems,
        },
      });
      map.current.addControl(drawControl);
      map.current.on(window.L.Draw.Event.CREATED, function (e) {
        let layer = e.layer;
        // get lat, long via this layer
        console.log(layer);
        drawnItems.addLayer(layer);
      });
    }
  }, [map.current]);

  useEffect(() => {
    mapEl.style.display = "block";

    placeSearch.current = window.placeSearch({
      key: process.env.REACT_APP_MAPQUEST_KEY,
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
        console.log([lat, lng]);
        map.current.panTo([lat, lng]);
        map.current.zoomIn(2);
      } catch (err) {
        console.error(err);
      }
    });
  }, []);
};

export default AssignArea;
