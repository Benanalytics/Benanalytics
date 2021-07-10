import L from 'leaflet';

export const VenueLocationIcon = L.icon({
  iconUrl: require('../assets/marker.svg'),
  iconRetinaUrl: require('../assets/marker.svg'),
  iconAnchor: 4,
  shadowUrl: null,
  shadowSize: null,
  shadowAnchor: null,
  iconSize: [35, 35],
  className: 'leaflet-venue-icon',
});
