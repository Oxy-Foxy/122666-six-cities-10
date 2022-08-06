export enum AppRoute {
  Root = '/',
  Favorites = 'favorites',
  Room = 'offer/:id',
  Login = '/login',
  NotFound = '/not-found'
}

export enum AuthorisationStatus {
  Auth = 'AUTH',
  NoAuth = 'No_AUTH',
  Unknown = 'UNKNOWN'
}

export const URL_MARKER_DEFAULT =
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/demo/interactive-map/pin.svg';

export const URL_MARKER_CURRENT =
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/demo/interactive-map/main-pin.svg';

export const cities = ['Paris', 'Cologne', 'Brussels', 'Amsterdam', 'Hamburg', 'Dusseldorf'];
