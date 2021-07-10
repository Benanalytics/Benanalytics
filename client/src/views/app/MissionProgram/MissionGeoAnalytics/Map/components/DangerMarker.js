import React, { useEffect, useState } from 'react';
import { Marker, Popup } from 'react-leaflet';
import { renderToStaticMarkup } from 'react-dom/server';
import { divIcon } from 'leaflet';

const DangerMarker = ({ selectedState, projects }) => {
  const iconMarkup = renderToStaticMarkup(
    <i class="fas fa-circle" style={{ color: '#B7407A', fontSize: '4px' }}></i>
  );
  const customMarkerIcon = divIcon({
    html: iconMarkup,
  });

  const markers = projects.map((mark, i) => {
    if (selectedState === 'All') {
      return (
        <Marker
          position={[mark.lat, mark.lng]}
          icon={customMarkerIcon}
          riseOnHover="hello"
        >
          <Popup>
            Alhamdulillah <br />
            {mark.CITY}
            groupName:''
          </Popup>
        </Marker>
      );
    } else {
      if (selectedState === mark.STATE) {
        return (
          <Marker
            position={[mark.lat, mark.lng]}
            icon={customMarkerIcon}
            riseOnHover="hello"
          >
            <Popup>
              Alhamdulillah <br />
              {mark.CITY}
              groupName:''
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

export default DangerMarker;
