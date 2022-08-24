import { City } from './types/offers';
export enum AppRoute {
  Root = '/',
  Favorites = '/favorites',
  Room = '/offer/:id',
  Login = '/login',
  NotFound = '/not-found'
}

export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'No_AUTH',
  Unknown = 'UNKNOWN'
}

export enum APIRoute {
  Offers = '/hotels',
  Login = '/login',
  Logout = '/logout',
  Reviews = '/comments',
}

export enum sortTypes {
  Popular = 'Popular',
  LowToHight = 'Price: low to high',
  HighToLow = 'Price: high to low',
  TopRated = 'Top rated first'
}

export enum NameSpace {
  User = 'USER',
  Data = 'DATA',
  App = 'APP'
}

export const URL_MARKER_DEFAULT =
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/demo/interactive-map/pin.svg';

export const URL_MARKER_CURRENT =
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/demo/interactive-map/main-pin.svg';

export const BASE_URL = 'https://10.react.pages.academy/six-cities';
export const TIMEOUT = 5000;

export const AUTH_TOKEN_KEY_NAME = 'six_cities_api_token';

export const INITIAL_CITY = 'Paris';

export const INITIAL_SORT_TYPE = 'Popular';

export const CITIES:City[] = [
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
