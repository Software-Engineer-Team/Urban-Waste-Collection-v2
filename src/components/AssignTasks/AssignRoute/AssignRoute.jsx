import { useCallback, useEffect, useRef, useState } from "react";
import usePlaceSearch from "@hook/usePlaceSearch";
import { fetchData, postData, sweetAlertHelper } from "@utils/util";
import { getDistance } from "geolib";

const hcmCity = [10.8326, 106.6581];
const loading_spinner = document.getElementById("loader");
const background_blur = document.getElementById("background-blur");
const mapEl = document.getElementById("map");
const routesElInitState = {
  mcpId: "",
  name: "",
  points: [],
};

const AssignRoute = () => {
  const map = useRef(null);
  const placeSearch = useRef(null);
  const layers = useRef([]);
  const makerStart = useRef(null),
    makerEnd = useRef(null);
  const mcpsEl = useRef(null);
  const [mcps, setMcps] = useState([]);
  const [areas, setAreas] = useState([]);
  const routesEl = useRef(routesElInitState);

  const [formBlock] = usePlaceSearch("/home", () => {
    mapEl.style.display = "none";
    map?.current.remove();
  });

  const runDirection = useCallback((pos) => {
    let dir = window.MQ.routing.directions();

    dir.route({
      /* locations: ["13.98366,108.002701", "10.8326,106.6581"], */
      locations: [...pos],
    });

    let CustomRouteLayer = window.MQ.Routing.RouteLayer.extend({
      createStartMarker: (_location) => {
        return makerStart.current;
      },

      createEndMarker: (_location) => {
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

  const findMinDistance = useCallback((mcps, toPoint) => {
    mcps?.sort((mcp1, mcp2) => {
      const mcp1ToPointDistance = getDistance(
        { latitude: mcp1.point.latitude, longitude: mcp1.point.longitude },
        { latitude: toPoint.latitude, longitude: toPoint.longitude }
      );

      const mcp2ToPointDistance = getDistance(
        { latitude: mcp2.point.latitude, longitude: mcp2.point.longitude },
        { latitude: toPoint.latitude, longitude: toPoint.longitude }
      );
      return mcp1ToPointDistance - mcp2ToPointDistance;
    });

    console.log(mcps?.[0]);
    const point = mcps?.[0].point;
    routesEl.current.mcpId = mcps?.[0].id;
    makerStart.current = mcps?.[0].maker;
    let dir = window.MQ.routing.directions();

    dir.route({
      locations: [
        `${point.latitude},${point.longitude}`,
        `${toPoint.latitude},${toPoint.longitude}`,
      ],
    });

    let CustomRouteLayer = window.MQ.Routing.RouteLayer.extend({
      createStartMarker: (_location) => {
        return makerStart.current;
      },

      createEndMarker: (_location) => {
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
      console.log([lat, lng]);

      if (lat && lng) {
        loading_spinner.style.display = "inline-block";
        background_blur.style.display = "inline-block";
        fetch(
          `https://www.mapquestapi.com/geocoding/v1/reverse?key=${process.env.REACT_APP_MAPQUEST_KEY}&location=${lat},${lng}&includeRoadMetadata=true&includeNearestIntersection=true`
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
            const popupContent = street + city + country + state;

            let custom_icon = window.L.icon({
              iconUrl: "/images/red_maker.png",
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
                })
              )
              .setPopupContent(popupContent)
              .openPopup();

            const oldMakerEnd = makerEnd.current;
            makerEnd.current = maker;

            routesEl.current.points.push({
              longitude: lng,
              latitude: lat,
            });

            if (makerEnd.current && layers.current?.length === 0) {
              findMinDistance(mcpsEl.current, {
                latitude: lat,
                longitude: lng,
              });

              routesEl.current.name =
                mcpsEl.current?.[0].name + " -> " + popupContent;
            } else {
              const oldLocation = oldMakerEnd.location.latLng;
              runDirection([
                `${oldLocation.lat},${oldLocation.lng}`,
                `${lat},${lng}`,
              ]);
              routesEl.current.name =
                routesEl.current.name + " -> " + popupContent;
            }

            console.log(routesEl.current);
          });
      }
    },
    [findMinDistance]
  );

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

    fetchData("/api/MCPs").then((mcps) => {
      console.log(mcps);
      setMcps(mcps);
      mcpsEl.current = [...mcps];
    });

    fetchData("/api/areas").then((areas) => setAreas(areas));

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

  const showMCPs = async (mcps, areas) => {
    mcps?.forEach(async ({ name, point }, idx) => {
      const mcpLocation = [point.latitude, point.longitude];
      let custom_icon = window.L.icon({
        iconUrl: "/images/leaf-green.png",
        iconSize: [38, 95],
        iconAnchor: [22, 94],
        popupAnchor: [-3, -76],
        shadowUrl: "/images/leaf-shadow.png",
        shadowSize: [50, 64],
        shadowAnchor: [4, 62],
      });

      const mcpMaker = window.L.marker(mcpLocation, {
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
        .setPopupContent(name)
        .openPopup();

      mcpsEl.current[idx].maker = mcpMaker;

      window.L.circleMarker(mcpLocation, {
        radius: 150,
        color: "green",
        fillColor: "#ffd77a",
        fillOpacity: 0.5,
      }).addTo(map.current);

      areas.forEach(({ centerPoint, radius }) => {
        const areaLocation = [centerPoint.latitude, centerPoint.longitude];
        window.L.circleMarker(areaLocation, {
          radius: radius * 30,
          color: "#3388ff",
          fillOpacity: 0.5,
        }).addTo(map.current);
      });
    });
  };

  useEffect(() => {
    if (map.current) {
      showMCPs(mcps, areas);
      map.current.on("click", onMapClick);
      return () => {
        map.current.off("click", onMapClick);
      };
    }
  }, [onMapClick, areas, mcps]);

  const handleClearMCPBtn = useCallback(() => {
    if (layers.current.length > 0) {
      layers.current?.forEach((el) => {
        map.current.removeLayer(el);
      });
      if (makerStart.current) map.current.removeLayer(makerStart.current);
      if (makerEnd.current) map.current.removeLayer(makerEnd.current);
      makerStart.current = null;
      makerEnd.current = null;
      layers.current = [];
      map.current.remove();
      map.current = window.L.map("map", {
        layers: window.MQ.mapLayer(),
        center: hcmCity,
        zoom: 12,
        zoomControl: true,
      });
      routesEl.current = routesElInitState;

      fetchData("/api/MCPs").then((mcps) => {
        setMcps(mcps);
        mcpsEl.current = [...mcps];
      });

      fetchData("/api/areas").then((areas) => setAreas(areas));
      map.current.on("click", onMapClick);
    }
  }, [onMapClick]);

  useEffect(() => {
    const clearMCPBtn = formBlock?.querySelector("#MCP-btn");
    clearMCPBtn?.addEventListener("click", handleClearMCPBtn);
    return () => {
      clearMCPBtn?.removeEventListener("click", handleClearMCPBtn);
    };
  }, [formBlock, handleClearMCPBtn]);

  useEffect(() => {
    const saveRoute = formBlock?.querySelector("#save-route");
    const handleSaveRoute = () => {
      if (routesEl.current.points.length > 0) {
        sweetAlertHelper("Save Route done", async () => {
          const data = await postData(
            { name: routesEl.current.name, points: routesEl.current.points },
            `/api/route/save?mcpId=${routesEl.current.mcpId}`
          );
          console.log(data);
          handleClearMCPBtn();
        });
      }
    };
    saveRoute?.addEventListener("click", handleSaveRoute);
    return () => {
      saveRoute?.removeEventListener("click", handleSaveRoute);
    };
  }, [formBlock, handleClearMCPBtn]);
};

export default AssignRoute;
