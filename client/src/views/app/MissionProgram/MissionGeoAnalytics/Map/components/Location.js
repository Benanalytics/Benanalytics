import React, { useEffect, useState } from 'react';
import { MapContainer, TileLayer } from 'react-leaflet';
import DangerMarker from './DangerMarker';

const MyLocation = () => {
  return (
    <div className="leaflet-container">
      <h1>Update</h1>
      <MapContainer
        scrollWheelZoom={false}
        center={{ lat: 3.551223, lng: 28.356148 }}
        zoom={5}
      >
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        <DangerMarker />
      </MapContainer>
    </div>
  );
};

export default MyLocation;
