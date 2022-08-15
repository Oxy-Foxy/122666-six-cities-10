import {AxiosInstance} from 'axios';
import {createAsyncThunk} from '@reduxjs/toolkit';
import {AppDispatch, State} from '../types/state.js';
import { Offers } from '../types/offers.js';
import { loadOffers, setDataLoadingStatus, requireAuthorization, setError, redirectToRoute } from './actions';
import { APIRoute, AppRoute, AuthorizationStatus, TIMEOUT } from '../const';
import {saveToken, dropToken} from '../services/token';
import {AuthData} from '../types/auth-data';
import {UserData} from '../types/user-data';
import { store } from './../store';

type ThunkType = {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}

export const fetchOffersAction = createAsyncThunk<void,undefined,ThunkType>(
  'data/fetchOffers',
  async (_arg, {dispatch, extra: api}) =>{
    dispatch(setDataLoadingStatus(true));
    const {data} = await api.get<Offers>(APIRoute.Offers);
    dispatch(loadOffers(data));
    dispatch(setDataLoadingStatus(false));
  }
);

export const checkAuthAction = createAsyncThunk<void, undefined, ThunkType>(
  'user/checkAuth',
  async (_arg, {dispatch, extra: api}) => {
    try {
      await api.get(APIRoute.Login);
      dispatch(requireAuthorization(AuthorizationStatus.Auth));
    } catch {
      dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
    }
  },
);

export const loginAction = createAsyncThunk<void, AuthData, ThunkType>(
  'user/login',
  async ({login: email, password}, {dispatch, extra: api}) => {
    const {data: {token}} = await api.post<UserData>(APIRoute.Login, {email, password});
    saveToken(token);
    dispatch(requireAuthorization(AuthorizationStatus.Auth));
    dispatch(redirectToRoute(AppRoute.Root));
  },
);

export const logoutAction = createAsyncThunk<void, undefined, ThunkType>(
  'user/logout',
  async (_arg, {dispatch, extra: api}) => {
    await api.delete(APIRoute.Logout);
    dropToken();
    dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
  },
);

export const clearErrorAction = createAsyncThunk(
  'data/clearError',
  () => {
    setTimeout(() => store.dispatch(setError(null)), TIMEOUT);
  }
);
