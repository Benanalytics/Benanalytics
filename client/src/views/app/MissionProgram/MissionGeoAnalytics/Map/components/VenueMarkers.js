import React, { useState } from 'react';
import { Marker, Popup } from 'react-leaflet';
import { renderToStaticMarkup } from 'react-dom/server';
import { divIcon } from 'leaflet';

const VenueMarkers = ({ selectedState }) => {
  const [myMarkers, setMyMarkers] = useState({
    features: [
      {
        geometry: {
          coordinates: [2.551223, 48.356148],
        },
        properties: {
          label: 'Paris Foret 77760 Achères-la-Forêt',
        },
      },
      {
        geometry: {
          coordinates: [6.069561, 43.415211],
        },
        properties: {
          label: 'Paris 83170 Brignoles',
        },
      },
      {
        geometry: {
          coordinates: [-0.418837, 44.758777],
        },
        properties: {
          label: 'Paris 33880 Saint-Caprais-de-Bordeaux',
        },
      },
      {
        geometry: {
          coordinates: [0.156967, 47.336761],
        },
        properties: {
          label: 'Paris Buton 37140 Bourgueil',
        },
      },
      {
        geometry: {
          coordinates: [-0.526894, 43.762486],
        },
        properties: {
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

export default VenueMarkers;
