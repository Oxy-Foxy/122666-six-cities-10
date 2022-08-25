import {useRef, useEffect} from 'react';
import {Icon, Marker, LayerGroup} from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { URL_MARKER_DEFAULT, URL_MARKER_CURRENT, CITIES } from '../../const';
import useMap from '../../hooks/map/map';
import { Offer } from '../../types/offers';

type MapProps = {
  offers: Offer[];
  city: string,
  selectedPointId?: number|string
};

const defaultCustomIcon = new Icon({
  iconUrl: URL_MARKER_DEFAULT,
  iconSize: [40, 40],
  iconAnchor: [20, 40]
});

const currentCustomIcon = new Icon({
  iconUrl: URL_MARKER_CURRENT,
  iconSize: [40, 40],
  iconAnchor: [20, 40]
});

function Map({city, offers, selectedPointId}: MapProps):JSX.Element {
  const mapRef = useRef(null);
  const currentCity = CITIES.filter((item) => item.name === city)[0];
  const map = useMap(mapRef, currentCity);
  const offersToPoints = (items:Offer[]) => items.map((item)=>({latitude: item.location.latitude,longitude: item.location.longitude, title:item.title}));
  const points = offersToPoints(offers);
  const selectedOffers = offers.filter((offer) => offer.id === selectedPointId);
  const selectedPoint = offersToPoints(selectedOffers)[0];

  useEffect(() => {
    const markers = new LayerGroup();
    if (map) {
      points.forEach((point) => {
        const pointIsSelected = selectedPoint !== undefined && point.latitude === selectedPoint.latitude && point.longitude === selectedPoint.longitude;
        const marker = new Marker({
          lat: point.latitude,
          lng: point.longitude
        });

        marker
          .setIcon(
            pointIsSelected
              ? currentCustomIcon
              : defaultCustomIcon
          )
          .addTo(markers);
      });
      markers.addTo(map);
    }
    return ()=> {
      markers.clearLayers();
    };
  }, [map, points, selectedPoint]);

  useEffect(() => {
    if(map){
      map.flyTo([currentCity.location.latitude, currentCity.location.longitude]);
    }
  }, [map, currentCity]);


  return (
    <div style={{height:'100%'}} ref={mapRef}></div>
  );
}

export default Map;
