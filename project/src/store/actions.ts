import { createAction } from '@reduxjs/toolkit';
import { Offers } from '../types/offers';
import { AppRoute, AuthorizationStatus } from '../const';

export const changeCity = createAction<string>('offers/changeCity');
export const changeOffers = createAction<Offers>('offers/changeOffers');
export const loadOffers = createAction<Offers>('data/loadOffers');
export const setDataLoadingStatus = createAction<boolean>('data/setDataLoadingStatus');
export const requireAuthorization = createAction<AuthorizationStatus>('user/requireAuthorization');
export const setError = createAction<string|null>('data/setError');
export const redirectToRoute = createAction<AppRoute>('app/redirectToRoute');
