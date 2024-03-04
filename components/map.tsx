import { Stack, Box } from "@mui/material";
import Script from "next/script";
import "../public/assets/images/leaflet/leaflet.css";
import { useState, useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import L from "leaflet";
import "leaflet-control-geocoder/dist/Control.Geocoder.css";
import "leaflet-control-geocoder/dist/Control.Geocoder.js";

const SearchControl = () => {
   const map = useMap();
  const searchControl = L.Control.geocoder({
    placeholder: "Search...",
    defaultMarkGeocode: false,
    collapsed: false,
    geocoder: L.Control.Geocoder.mapbox(process.env.NEXT_PUBLIC_MAPBOX_API_KEY),
  })
    .on("markgeocode", (e: any) => {
      const { latlng } = e.geocode;
      map.setView(latlng, map.getZoom());
    })
    .addTo(map);

  return null;
};

const Map = () => {
  const [latLng, setLatLng] = useState({
    lat: "",
    lng: "",
  });

  console.log("latLng", latLng)

  return (
    <Stack sx={{ width: "100%", height: "300px" }}>
      <Script
        src="/assets/images/leaflet/leaflet.js"
        strategy="afterInteractive"
        crossOrigin=""
        onLoad={() => {
          L.Icon.Default.imagePath = "/assets/images/leaflet/images/";
        }}
      />
      <MapContainer
        center={latLng}
        zoom={13}
        style={{ width: "100%", height: "100%" }}
      >
        <TileLayer
          url="https://tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        />
        <SearchControl />
        <Marker position={latLng}>
          <Popup>{latLng.lat}, {latLng.lng}</Popup>
        </Marker>
      </MapContainer>
    </Stack>
  );
};

export default Map;
