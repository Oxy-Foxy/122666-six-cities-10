import { createReducer } from '@reduxjs/toolkit';
import { Offers } from '../types/offers';
import { changeCity, changeOffers, loadOffers, setDataLoadingStatus, requireAuthorization, setError} from './actions';
import {AuthorizationStatus, INITIAL_CITY} from '../const';

type InitialState = {
  city: string,
  offers: Offers,
  isDataLoading: boolean
  authorizationStatus: AuthorizationStatus,
  error: string | null,
}

const initialState:InitialState = {
  city: INITIAL_CITY,
  offers: [],
  isDataLoading: false,
  authorizationStatus: AuthorizationStatus.Unknown,
  error: null
};

const reducer = createReducer(initialState, (builder)=>{
  builder
    .addCase(changeCity, (state, {payload})=>{
      state.city = payload;
    })
    .addCase(changeOffers, (state, {payload})=>{
      state.offers = payload;
    })
    .addCase(setDataLoadingStatus, (state, action) => {
      state.isDataLoading = action.payload;
    })
    .addCase(loadOffers, (state, {payload})=>{
      state.offers = payload;
    })
    .addCase(requireAuthorization, (state, action) => {
      state.authorizationStatus = action.payload;
    })
    .addCase(setError, (state, action) => {
      state.error = action.payload;
    });
});

export {reducer};
