import React from 'react'
import 'leaflet/dist/leaflet.css'
import { MapContainer, TileLayer, useMap, Popup, Marker } from 'react-leaflet'

function MapComponent() {
    const position = [7.8731, 80.7718]
  return (
    <div className="tour-map container" style={{margin:'100px 0'}}>
        <MapContainer center={position} zoom={8} scrollWheelZoom={false}>
            <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={position}>
            <Popup>
                A pretty CSS3 popup. <br /> Easily customizable.
            </Popup>
            </Marker>
        </MapContainer>
    </div>

    

  )
}

export default MapComponent