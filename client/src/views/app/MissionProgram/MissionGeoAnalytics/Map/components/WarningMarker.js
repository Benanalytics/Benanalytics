import React, { useState } from 'react';
import { Marker, Popup } from 'react-leaflet';
import { renderToStaticMarkup } from 'react-dom/server';
import { divIcon } from 'leaflet';

const WarningMarker = ({ selectedSate }) => {
  const [myMarkers, setMyMarkers] = useState({
    features: [
      {
        geometry: {
          coordinates: [3.551223, 43.356148],
        },
        properties: {
          stateName: 'Adamawa',
          label: 'Paris Foret 77760 Achères-la-Forêt',
        },
      },
      {
        geometry: {
          coordinates: [12.069561, 46.415211],
        },
        properties: {
          stateName: 'Adamawa',
          label: 'Paris 83170 Brignoles',
        },
      },
      {
        geometry: {
          coordinates: [10.418837, 72.758777],
        },
        properties: {
          stateName: ' Akwa',
          label: 'Paris 33880 Saint-Caprais-de-Bordeaux',
        },
      },
      {
        geometry: {
          coordinates: [7.156967, 47.336761],
        },
        properties: {
          stateName: ' Akwa',
          label: 'Paris Buton 37140 Bourgueil',
        },
      },
      {
        geometry: {
          coordinates: [9.526894, 50.762486],
        },
        properties: {
          stateName: 'Abia ',
          label: 'Paris 40500 Saint-Sever',
        },
      },
    ],
  });

  // custom marker
  const iconMarkup = renderToStaticMarkup(
    <i class="fas fa-circle" style={{ color: '#EF9110' }}></i>
  );
  const customMarkerIcon = divIcon({
    html: iconMarkup,
  });

  const markers = myMarkers.features.map((mark, i) => (
    <Marker
      position={[mark.geometry.coordinates[1], mark.geometry.coordinates[0]]}
      icon={customMarkerIcon}
      riseOnHover="hello"
    >
      <Popup>
        Alhamdulillah <br />
        {mark.properties.label}
      </Popup>
    </Marker>
  ));
  return <>{markers}</>;
};

export default WarningMarker;
