import { SixCities } from './types/sixCities';

export enum AppRoute {
  Login = '/login',
  Favorites = '/favorites',
  Offer = '/offer/:id',
  Main = '/',
  NotFoundScreen = '*'
}

export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}

export enum APIRoute {
  Offers = '/offers',
  Login = '/login',
  Logout = '/logout',
  Comments = '/comments/',
  Favorite = '/favorite',
}

export enum TypesOfSorting {
  Popular = 'Popular',
  PriceLowToHugh = 'Price: low to high',
  PriceHighToLow = 'Price: high to low',
  TopRatedFirst = 'Top rated first',
}

export const CITIES = ['Paris', 'Cologne', 'Brussels', 'Amsterdam', 'Hamburg', 'Dusseldorf'] as const;

export const SIX_CITIES: readonly SixCities[] = ['Amsterdam', 'Paris', 'Dusseldorf', 'Cologne', 'Brussels', 'Hamburg'];

export const MIN_REVIEW_LENGTH = 50;

export const MAX_REVIEW_LENGTH = 300;

export const URL_MARKER_DEFAULT = 'img/pin.svg';

export const URL_MARKER_CURRENT = 'img/pin-active.svg';

export const INITIAL_CITY: SixCities = 'Paris';

export enum NameSpace {
  Data = 'DATA',
  Sixities = 'SIXCITIES',
  User = 'USER',
}
