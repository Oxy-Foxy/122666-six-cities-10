import { createSlice } from '@reduxjs/toolkit';
import { NameSpace, INITIAL_CITY, INITIAL_SORT_TYPE } from '../../const';
import { AppProcess } from '../../types/state';

const initialState:AppProcess = {
  city: INITIAL_CITY,
  sortType: INITIAL_SORT_TYPE,
};


export const appProcess = createSlice({
  name: NameSpace.App,
  initialState,
  reducers: {
    changeCity: (state, {payload}) => {
      state.city = payload;
    },
    changeSortType: (state, {payload}) => {
      state.sortType = payload;
    }
  }
});

export const {changeCity, changeSortType} = appProcess.actions;
