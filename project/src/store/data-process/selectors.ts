import {NameSpace} from '../../const';
import {State} from '../../types/state';
import {Offers, Offer} from '../../types/offers';
import { Reviews } from '../../types/reviews';
import { createSelector } from 'reselect';

export const getOffers = (state: State): Offers => Object.values(state[NameSpace.Data].offers);
export const getFavoriteOffers = (state: State): Offers => state[NameSpace.Data].favoriteOffers;
export const getOffer = (state: State): Offer|null => state[NameSpace.Data].offer;
export const getNearbyPlaces = (state: State): Offers => state[NameSpace.Data].nearbyPlaces;
export const getReviews = (state: State): Reviews => state[NameSpace.Data].reviews;
export const getLoadingStatus = (state: State): boolean => state[NameSpace.Data].isDataLoading;
export const getReviewsPendingStatus = (state: State): boolean => state[NameSpace.Data].isReviewsPending;
export const getNearbyPendingStatus = (state: State): boolean => state[NameSpace.Data].isNearbyPlacesPending;
export const getReviewSubmitStatus = (state: State): boolean => state[NameSpace.Data].isReviewSubmitPending;
export const getFavoriteOffersStatus = (state: State): boolean => state[NameSpace.Data].isFavoriteOffersPending;

export const getFilteredFavoriteOffers = createSelector(
  [getOffers],
  (offers: Offers) => offers.filter((offer) => offer.isFavorite)
);
