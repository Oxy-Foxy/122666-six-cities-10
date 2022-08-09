import {AxiosInstance} from 'axios';
import {createAsyncThunk} from '@reduxjs/toolkit';
import {AppDispatch, State} from '../types/state.js';
import { Offers } from '../types/offers.js';
import { loadOffers, setDataLoadingStatus } from './actions';
import { APIRoute } from '../const';

export const fetchOffersAction = createAsyncThunk<void,undefined,{
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'data/fetchOffers',
  async (_arg, {dispatch, extra: axios}) =>{
    dispatch(setDataLoadingStatus(true));
    const {data} = await axios.get<Offers>(APIRoute.Offers);
    dispatch(loadOffers(data));
    dispatch(setDataLoadingStatus(false));
  }
);
