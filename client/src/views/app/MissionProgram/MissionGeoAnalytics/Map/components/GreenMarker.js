import React, { useState } from 'react';
import { Marker, Popup } from 'react-leaflet';
import { renderToStaticMarkup } from 'react-dom/server';
import { divIcon } from 'leaflet';

const GreenMarker = ({ selectedState }) => {
  const [myMarkers, setMyMarkers] = useState({
    features: [
      {
        geometry: {
          coordinates: [3.551223, 48.356148],
        },
        properties: {
          stateName: 'Abia ',
          label: 'Paris Foret 77760 Achères-la-Forêt',
        },
      },
      {
        geometry: {
          coordinates: [12.069561, 43.415211],
        },
        properties: {
          stateName: 'Abia ',
          label: 'Paris 83170 Brignoles',
        },
      },
      {
        geometry: {
          coordinates: [10.418837, 44.758777],
        },
        properties: {
          stateName: 'Adamawa ',
          label: 'Paris 33880 Saint-Caprais-de-Bordeaux',
        },
      },
      {
        geometry: {
          coordinates: [7.156967, 47.336761],
        },
        properties: {
          stateName: 'Adamawa ',
          label: 'Paris Buton 37140 Bourgueil',
        },
      },
      {
        geometry: {
          coordinates: [9.526894, 43.762486],
        },
        properties: {
          stateName: ' Akwa',
          label: 'Paris 40500 Saint-Sever',
        },
      },
    ],
  });

  // custom marker
  const iconMarkup = renderToStaticMarkup(
    <i class="fas fa-circle" style={{ color: '#0000FF' }}></i>
  );
  const customMarkerIcon = divIcon({
    html: iconMarkup,
  });

  const markers = myMarkers.features.map((mark, i) => {
    if (selectedState === 'All') {
      return (
        <Marker
          position={[
            mark.geometry.coordinates[1],
            mark.geometry.coordinates[0],
          ]}
          icon={customMarkerIcon}
          riseOnHover="hello"
        >
          <Popup>
            Alhamdulillah <br />
            {mark.properties.label}
          </Popup>
        </Marker>
      );
    } else {
      if (selectedState === mark.properties.stateName) {
        return (
          <Marker
            position={[
              mark.geometry.coordinates[1],
              mark.geometry.coordinates[0],
            ]}
            icon={customMarkerIcon}
            riseOnHover="hello"
          >
            <Popup>
              Alhamdulillah <br />
              {mark.properties.label}
            </Popup>
          </Marker>
        );
      } else {
        return null;
      }
    }
  });
  return <>{markers}</>;
};

export default GreenMarker;
