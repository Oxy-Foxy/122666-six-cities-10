import { createReducer } from '@reduxjs/toolkit';
import { Offers } from '../types/offers';
import { changeCity, changeOffers, loadOffers, setDataLoadingStatus} from './actions';
import {INITIAL_CITY} from '../const';

type InitialState = {
  city: string,
  offers: Offers,
  isDataLoading: boolean
}

const initialState:InitialState = {
  city: INITIAL_CITY,
  offers: [],
  isDataLoading: false
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
    });
});

export {reducer};
