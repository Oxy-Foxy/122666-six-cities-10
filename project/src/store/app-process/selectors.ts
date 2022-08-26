import { createSelector } from 'reselect';
import { NameSpace, SortTypes } from '../../const';
import { State } from '../../types/state';
import { getOffers } from '../data-process/selectors';

export const getCurrentCity = (state: State): string => state[NameSpace.App].city;
export const getSortType = (state: State): string => state[NameSpace.App].sortType;

export const getFilteredOffers = createSelector(
  [getOffers, getCurrentCity],
  (offers, city) => offers.filter((offer) => offer.city.name === city)
);

export const getSortedOffers = createSelector(
  [getFilteredOffers, getSortType],
  (offers, sortType) => {
    const filteredOffers = [...offers];
    switch (sortType) {
      case SortTypes.Popular:
        return offers;
      case SortTypes.LowToHight:
        return filteredOffers.sort((a,b) => a.price - b.price);
      case SortTypes.HighToLow:
        return filteredOffers.sort((a,b) => b.price - a.price);
      case SortTypes.TopRated:
        return filteredOffers.sort((a,b) => b.rating - a.rating);
      default:
        return offers;
    }
  }
);

