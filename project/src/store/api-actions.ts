import { AxiosInstance } from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { redirectToRoute } from './actions';
import { APIRoute, AppRoute } from '../const';
import { saveToken, dropToken } from '../services/token';
import { Offers,Offer } from '../types/offers.js';
import { AppDispatch, State } from '../types/state.js';
import { AuthData } from '../types/auth-data';
import { FavoriteData } from '../types/favorite-data';
import { UserData } from '../types/user-data';
import { Reviews, ReviewData } from '../types/reviews';

type ThunkType = {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance,
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

export const checkAuthAction = createAsyncThunk<UserData, undefined, ThunkType>(
  'user/checkAuth',
  async (_arg, {dispatch, extra: api}) => {
    const {data} = await api.get(APIRoute.Login);
    return data;
  },
);

export const loginAction = createAsyncThunk<UserData, AuthData, ThunkType>(
  'user/login',
  async ({login: email, password}, {dispatch, extra: api}) => {
    const {data} = await api.post<UserData>(APIRoute.Login, {email, password});
    saveToken(data.token);
    dispatch(redirectToRoute(AppRoute.Root));
    return data;
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

export const fetchFavoriteOffers = createAsyncThunk<Offers, undefined, ThunkType>(
  'data/fetchFavoriteOffers',
  async (_arg,{dispatch, extra: api}) => {
    const {data} = await api.get(APIRoute.Favorite);
    return data;
  }
);


export const changeFavoriteStatusAction = createAsyncThunk<Offer, FavoriteData, ThunkType>(
  'data/changeFavoriteStatus',
  async({id, status}, {dispatch, extra:api}) => {
    const {data} = await api.post<Offer>(`${APIRoute.Favorite}/${id}/${status}`);
    return data;
  }
);

