import {NameSpace} from '../../const';
import {State} from '../../types/state';
import {Offers} from '../../types/offers';
import { Reviews } from '../../types/reviews';

export const getOffers = (state: State): Offers => state[NameSpace.Data].offers;
export const getReviews = (state: State): Reviews => state[NameSpace.Data].reviews;
export const getLoadingStatus = (state: State): boolean => state[NameSpace.Data].isDataLoading;
