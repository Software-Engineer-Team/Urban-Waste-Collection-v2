import { useCallback, useEffect, useRef, useState } from "react";
import usePlaceSearch from "@hook/usePlaceSearch";
import { postData, fetchData } from "@utils/util";

const hcmCity = [10.8326, 106.6581];
const loading_spinner = document.getElementById("loader");
const background_blur = document.getElementById("background-blur");
const mapEl = document.getElementById("map");

const AssignArea = () => {
  const map = useRef(null);
  const placeSearch = useRef(null);

  const [formBlock] = usePlaceSearch("/home/backofficer", () => {
    mapEl.style.display = "none";
    map?.current.remove();
  });

  // show MCPs
  useEffect(() => {
    if (map.current) {
      const bounds = [
        [10.722361730840149, 106.57699584960938],
        [10.916598861226174, 106.57699584960938],
        [10.916598861226174, 106.85028076171875],
        [10.722361730840149, 106.85028076171875],
      ];

      // create an orange rectangle
      window.L.rectangle(bounds, { color: "#ff7800", weight: 1 }).addTo(
        map.current
      );

      fetchData(`/api/MCPs`).then((Mcps) => {
        console.log(Mcps);
        Mcps.forEach((mcp) => {
          let custom_icon = window.L.icon({
            iconUrl: "/images/leaf-green.png",
            iconSize: [38, 95],
            iconAnchor: [22, 94],
            popupAnchor: [-3, -76],
            shadowUrl: "/images/leaf-shadow.png",
            shadowSize: [50, 64],
            shadowAnchor: [4, 62],
          });

          window.L.marker([mcp.point.latitude, mcp.point.longitude], {
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
            .setPopupContent(mcp.name)
            .openPopup();

          window.L.circleMarker([mcp.point.latitude, mcp.point.longitude], {
            radius: 150,
            color: "green",
            fillColor: "#ffd77a",
            fillOpacity: 0.5,
          }).addTo(map.current);

          // show Areas around Mcp
          fetchData(`/api/areas/${mcp.id}`).then((areas) => {
            areas.forEach(
              ({
                centerPoint: { latitude, longitude },
                radius,
                description,
              }) => {
                window.L.circleMarker([latitude, longitude], {
                  radius: radius * 30,
                  color: "#3388ff",
                  fillOpacity: 0.4,
                })
                  .bindPopup(description, {
                    maxWidth: 250,
                    minWidth: 100,
                    top: -20,
                    autoClose: false,
                    closeOnClick: false,
                  })
                  .addTo(map.current);
              }
            );
          });
        });
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
