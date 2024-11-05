
import React, { useEffect } from "react";
import "leaflet/dist/leaflet.css";
import "leaflet-routing-machine/dist/leaflet-routing-machine.css";
import "../CSS/DMap.css";
import { MapContainer, TileLayer, Popup, Marker, useMap } from "react-leaflet"; 
import { Icon, divIcon, point, LatLngBounds } from "leaflet";
import { useMobileView } from "../../contexts/MobileViewContext";
import MarkerClusterGroup from "react-leaflet-cluster";
import markderIcon from "../../assets/icons/location.png";
import L from "leaflet";
import "leaflet-routing-machine";

import LocationData from "../../data/GeoLocations";

function MapComponent({ start, end }) {
  const position = [7.8731, 80.6718]; // Default center position
  const isMobileView = useMobileView();

  // Helper function to find coordinates in LocationData
  const findCoordinates = (location) => {
    if (Array.isArray(location)) return location;
    const locationData = LocationData.find(
      (item) => item.location.toLowerCase() === location.toLowerCase()
    );
    return locationData ? locationData.geo : null;
  };

  // Determine start and end coordinates based on input
  const startGeo = start ? findCoordinates(start) : null;
  const endGeo = end ? findCoordinates(end) : null;

  const customIcon = new Icon({
    iconUrl: markderIcon,
    iconSize: [30, 30],
  });

  // const createCustomClusterIcon = (cluster) => {
  //   return new divIcon({
  //     html: `<div class="cluster-icon">${cluster.getChildCount()}</div>`,
  //     className: "custom-marker-cluster",
  //     iconSize: point(33, 33, true),
  //   });
  // };

  // Routing Machine component for route rendering
  const RoutingMachine = ({ start, end }) => {
    const map = useMap();

    useEffect(() => {
      if (!map || !start || !end) return;

      const routingControl = L.Routing.control({
        waypoints: [L.latLng(start[0], start[1]), L.latLng(end[0], end[1])],
        lineOptions: {
          styles: [{ color: "#1a73e8", opacity: 1, weight: 4 }],
        },
        createMarker: () => null, // Do not create additional markers
        addWaypoints: false,
      }).addTo(map);

      return () => map.removeControl(routingControl);
    }, [map, start, end]);

    return null;
  };

  // Adjust the map bounds when start or end changes
  const MapBounds = ({ startGeo, endGeo }) => {
    const map = useMap();

    useEffect(() => {
      if (startGeo && endGeo) {
        // Fit bounds to show both start and end locations
        const bounds = new LatLngBounds([startGeo, endGeo]);
        map.fitBounds(bounds, { padding: [50, 50] });
      } else if (startGeo || endGeo) {
        // Center on single location
        map.setView(startGeo || endGeo, 12);
      } else {
        // Reset to default position and zoom
        if(isMobileView) {
          map.setView(position, 7);
        }else {
          map.setView(position, 8);
        }
        
      }
    }, [map, startGeo, endGeo]);

    return null;
  };

  return (
    <div className={`tour-map-container ${isMobileView ? "mobile-view" : ""}`}>
      <MapContainer center={position} zoom={8} scrollWheelZoom={false}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {/* <MarkerClusterGroup chunkedLoading iconCreateFunction={createCustomClusterIcon}> */}
          {/* Default Markers */}
          {LocationData.map((marker, index) => (
            <Marker key={index} position={marker.geo} icon={customIcon}>
              <Popup>{marker.location}</Popup>
            </Marker>
          ))}
        {/* </MarkerClusterGroup> */}

        {/* Conditionally render based on start and end props */}
        {startGeo && !endGeo && (
          <Marker position={startGeo} icon={customIcon}>
            <Popup>Start Location</Popup>
          </Marker>
        )}

        {!startGeo && endGeo && (
          <Marker position={endGeo} icon={customIcon}>
            <Popup>End Location</Popup>
          </Marker>
        )}

        {startGeo && endGeo && (
          <>
            <Marker position={startGeo} icon={customIcon}>
              <Popup>Start Location</Popup>
            </Marker>
            <Marker position={endGeo} icon={customIcon}>
              <Popup>End Location</Popup>
            </Marker>
            <RoutingMachine start={startGeo} end={endGeo} />
          </>
        )}

        {/* Add MapBounds component to adjust view based on markers */}
        <MapBounds startGeo={startGeo} endGeo={endGeo} />
      </MapContainer>
    </div>
  );
}

export default MapComponent;
