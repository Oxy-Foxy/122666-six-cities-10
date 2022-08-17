import {NameSpace} from '../../const';
import {State} from '../../types/state';
import {Offers} from '../../types/offers';

export const getOffers = (state: State): Offers => state[NameSpace.Data].offers;
export const getLoadingStatus = (state: State): boolean => state[NameSpace.Data].isDataLoading;
