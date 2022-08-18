import {NameSpace} from '../../const';
import {State} from '../../types/state';
import {sortTypes} from '../../const';
import {getOffers} from '../data-process/selectors';
import { createSelector } from 'reselect';

export const getCurrentCity = (state: State): string => state[NameSpace.App].city;
export const getSortType = (state: State): string => state[NameSpace.App].sortType;

export const filterOffers = createSelector(
  [getOffers, getCurrentCity],
  (offers, city) => offers.filter((offer) => offer.city.name === city)
);

export const sortOffers = createSelector(
  [filterOffers, getSortType],
  (offers, sortType) => {
    const filteredOffers = [...offers];
    switch (sortType) {
      case sortTypes.Popular:
        return offers;
      case sortTypes.LowToHight:
        return filteredOffers.sort((a,b) => a.price - b.price);
      case sortTypes.HighToLow:
        return filteredOffers.sort((a,b) => b.price - a.price);
      case sortTypes.TopRated:
        return filteredOffers.sort((a,b) => b.rating - a.rating);
      default:
        return offers;
    }
  }
);

