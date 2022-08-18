import {createSlice} from '@reduxjs/toolkit';
import {NameSpace} from '../../const';
import {DataProcess} from '../../types/state';
import {fetchOffersAction} from '../api-actions';

const initialState: DataProcess = {
  offers: [],
  reviews: [],
  isDataLoading:false,
};

export const dataProcess = createSlice({
  name: NameSpace.Data,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchOffersAction.pending, (state) => {
        state.isDataLoading = true;
      })
      .addCase(fetchOffersAction.fulfilled, (state, action) => {
        state.offers = action.payload;
        state.isDataLoading = false;
      });
  }
});
