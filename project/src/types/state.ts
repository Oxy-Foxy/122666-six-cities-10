
import {store} from '../store/index';
import {AuthorizationStatus} from '../const';
import { Offer } from './offers';
import { Reviews } from './reviews';

export type UserProcess = {
  authorizationStatus: AuthorizationStatus
};

export type DataProcess = {
  offers: {[id:string]:Offer},
  nearbyPlaces: Offer[],
  reviews: Reviews,
  isDataLoading: boolean,
  isReviewsPending: boolean,
  isOfferLoading:boolean,
  isNearbyPlacesPending:boolean
}

export type AppProcess = {
  city: string,
  sortType: string
}

export type State = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
