import { createAction } from '@reduxjs/toolkit';
import { Offers } from '../types/offers';

export const changeCity = createAction<string>('offers/changeCity');
export const changeOffers = createAction<Offers>('offers/changeOffers');
export const loadOffers = createAction<Offers>('data/loadOffers');
export const setDataLoadingStatus = createAction<boolean>('data/setDataLoadingStatus');
