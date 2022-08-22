
import {store} from '../store/index';
import {AuthorizationStatus} from '../const';
import { Offers, Offer } from './offers';
import { Reviews } from './reviews';

export type UserProcess = {
  authorizationStatus: AuthorizationStatus;
  avatarUrl: string;
  email: string;
};

export type DataProcess = {
  offers: Offers,
  favoriteOffers: Offers,
  nearbyPlaces: Offers,
  offer: Offer | null,
  reviews: Reviews,
  isDataLoading: boolean,
  isReviewsPending: boolean,
  isOfferLoading:boolean,
  isNearbyPlacesPending:boolean,
  isReviewSubmitPending: boolean,
  isFavoriteStatusPending: boolean,
  isFavoriteOffersPending: boolean
}

export type AppProcess = {
  city: string,
  sortType: string
}

export type State = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
