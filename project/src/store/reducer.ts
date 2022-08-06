import { createReducer } from '@reduxjs/toolkit';
import { changeCity, changeOffers} from './actions';
import offers from '../mocks/offers';

const initialCity = 'Paris';

const initialState = {
  city: initialCity,
  offers: offers
};

const reducer = createReducer(initialState, (builder)=>{
  builder
    .addCase(changeCity, (state, action)=>{
      state.city = action.payload;
    })
    .addCase(changeOffers, (state, action)=>{
      state.offers = action.payload;
    });
});

export {reducer};
