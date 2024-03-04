"use client"

import { Stack, Box } from "@mui/material";
import Script from "next/script"
import  "../public/assets/images/leaflet/leaflet.css"
import { useState } from "react";

const Map = () => {
  const [latLng, setLatLng] = useState({
    lat: "",
    lng: ""
  });

 // console.log(latLng);

  return (
    <Stack sx={{ width: "100%", height: "300px"}}>
      <Script 
        src="/assets/images/leaflet/leaflet.js"
        strategy="afterInteractive"
        crossOrigin=""
        onReady={() => {
                var map = L.map('map').setView([51.505, -0.09], 13);
                L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
                maxZoom: 19,
                attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
                }).addTo(map);

                var icon= L.icon({
                    iconUrl: "/assets/images/leaflet/images/marker-icon.png",
                    shadowUrl: "/assets/images/leaflet/images/marker-shadow.png",
                    iconSize: [25, 41],
                    iconAnchor: [12, 41],
                    popupAnchor: [1, -34],
                    tooltipAnchor: [16, -28],
                });

                // Get lat & long by click
                let marker: any = null;
                const onMapClick = (e: any) => {
                    if(marker) {
                        map.removeLayer(marker);
                    }
                    setLatLng(e.latlng);
                    const txt = e.latlng.toString();
                    marker = L.marker(e.latlng, {icon: icon})
                                .addTo(map)
                                .bindPopup(txt)
                                .openPopup();

                }
                map.on("click", onMapClick)
          }}
        />
      <Box id="map"></Box>
    </Stack>
  )
}

export default Map
