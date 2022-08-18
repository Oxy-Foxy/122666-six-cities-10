import {NameSpace} from '../../const';
import {State} from '../../types/state';
import {sortTypes} from '../../const';
import {getOffers} from '../data-process/selectors';
import { createSelector } from 'reselect';

export const getCurrentCity = (state: State): string => state[NameSpace.App].city;
export const getSortType = (state: State): string => state[NameSpace.App].sortType;

export const getFilteredOffers = createSelector(
  [getOffers, getCurrentCity],
  (offers, city) => offers.filter((offer) => offer.city.name === city)
);

export const getSortedOffers = createSelector(
  [getFilteredOffers, getSortType],
  (offers, sortType) => {
    switch (sortType) {
      case sortTypes.Popular:
        return offers;
      case sortTypes.LowToHight:
        return offers.sort((a,b) => a.price - b.price);
      case sortTypes.HighToLow:
        return offers.sort((a,b) => b.price - a.price);
      case sortTypes.TopRated:
        return offers.sort((a,b) => b.rating - a.rating);
      default:
        return offers;
    }
  }
);

