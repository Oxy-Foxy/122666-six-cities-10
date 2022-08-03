import { Point } from '../types/points';
import { City } from '../types/offers';


export const cities:City[] = [
  {
    location: {
      latitude: 48.864716,
      longitude: 2.349014,
      zoom: 12
    },
    name: 'Paris'
  },
  {
    location: {
      latitude: 50.9375,
      longitude: 6.9603,
      zoom: 12
    },
    name: 'Cologne'
  },
  {
    location: {
      latitude: 50.85045,
      longitude: 4.34878,
      zoom: 12
    },
    name: 'Brussels'
  },
  {
    location: {
      latitude: 52.3676,
      longitude: 4.9041,
      zoom: 12
    },
    name: 'Amsterdam'
  },
  {
    location: {
      latitude: 53.5511,
      longitude: 9.9937,
      zoom: 12
    },
    name: 'Hamburg'
  },
  {
    location: {
      latitude: 51.2277,
      longitude: 6.7735,
      zoom: 12
    },
    name: 'Dusseldorf'
  }
];

export const selectedPoint:Point = {
  title: 'Amsterdam',
  latitude: 52.377956,
  longitude: 4.897070
};


