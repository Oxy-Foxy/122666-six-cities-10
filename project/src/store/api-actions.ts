import {AxiosInstance} from 'axios';
import {createAsyncThunk} from '@reduxjs/toolkit';
import {AppDispatch, State} from '../types/state.js';
import { Offers,Offer } from '../types/offers.js';
import { redirectToRoute } from './actions';
import { APIRoute, AppRoute } from '../const';
import {saveToken, dropToken} from '../services/token';
import {AuthData} from '../types/auth-data';
import {UserData} from '../types/user-data';
import {Reviews, ReviewData} from '../types/reviews';

type ThunkType = {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}

export const fetchOffersAction = createAsyncThunk<Offers,undefined,ThunkType>(
  'data/fetchOffers',
  async (_arg, {dispatch, extra: api}) =>{
    const {data} = await api.get<Offers>(APIRoute.Offers);
    return data;
  }
);

export const fetchOfferAction = createAsyncThunk<Offer, string|undefined, ThunkType>(
  'data/fetchOffer',
  async (id, {dispatch, extra: api}) =>{
    const {data} = await api.get<Offer>(`${APIRoute.Offers}/${id}`);
    return data;
  }
);

export const fetchNearbyPlacesAction = createAsyncThunk<Offers, string|undefined, ThunkType>(
  'data/fetchNearbyPlaces',
  async (id, {dispatch, extra: api}) =>{
    const {data} = await api.get<Offers>(`${APIRoute.Offers}/${id}/nearby`);
    return data;
  }
);

export const fetchReviewsAction = createAsyncThunk<Reviews, string|undefined, ThunkType>(
  'data/fetchReviews',
  async (id, {dispatch, extra: api}) =>{
    const {data} = await api.get<Reviews>(`${APIRoute.Reviews}/${id}`);
    return data;
  }
);

export const checkAuthAction = createAsyncThunk<void, undefined, ThunkType>(
  'user/checkAuth',
  async (_arg, {dispatch, extra: api}) => {
    await api.get(APIRoute.Login);
  },
);

export const loginAction = createAsyncThunk<void, AuthData, ThunkType>(
  'user/login',
  async ({login: email, password}, {dispatch, extra: api}) => {
    const {data: {token}} = await api.post<UserData>(APIRoute.Login, {email, password});
    saveToken(token);
    dispatch(redirectToRoute(AppRoute.Root));
  },
);

export const logoutAction = createAsyncThunk<void, undefined, ThunkType>(
  'user/logout',
  async (_arg, {dispatch, extra: api}) => {
    await api.delete(APIRoute.Logout);
    dropToken();
  },
);

export const submitReviewAction = createAsyncThunk<Reviews, ReviewData, ThunkType>(
  'data/submitReview',
  async({id, rating, comment}, {dispatch, extra: api}) => {
    const {data} = await api.post(`${APIRoute.Reviews}/${id}`, {rating, comment});
    return data;
  }
);

