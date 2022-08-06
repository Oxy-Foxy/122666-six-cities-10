import {useRef, useEffect} from 'react';

import 'leaflet/dist/leaflet.css';
import {Points, Point} from '../../types/points';
import { City } from '../../types/offers';
import {Icon, Marker, LayerGroup} from 'leaflet';
import {URL_MARKER_DEFAULT, URL_MARKER_CURRENT} from '../../const';

import useMap from '../../hooks/map/map';

type MapProps = {
  city: City;
  points: Points;
  selectedPoint: Point
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

function Map(props: MapProps):JSX.Element {
  const {city, points, selectedPoint} = props;
  const mapRef = useRef(null);
  const map = useMap(mapRef, city);

  useEffect(() => {
    const markers = new LayerGroup();
    if (map) {
      points.forEach((point) => {
        const marker = new Marker({
          lat: point.latitude,
          lng: point.longitude
        });

        marker
          .setIcon(
            selectedPoint !== undefined && point.title === selectedPoint.title
              ? currentCustomIcon
              : defaultCustomIcon
          )
          .addTo(markers);
      });
      markers.addTo(map);
      map.flyTo([selectedPoint.latitude, selectedPoint.longitude]);
    }
    return ()=> {
      markers.clearLayers();
    };
  }, [map, points, selectedPoint]);


  return (
    <div style={{height:'100%'}} ref={mapRef}></div>
  );
}

export default Map;
