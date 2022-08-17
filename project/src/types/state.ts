
import {store} from '../store/index';
import {AuthorizationStatus} from '../const';
import { Offers } from './offers';

export type UserProcess = {
  authorizationStatus: AuthorizationStatus
};

export type DataProcess = {
  offers: Offers,
  isDataLoading: boolean
}

export type AppProcess = {
  city: string,
  sortType: string
}

export type State = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
