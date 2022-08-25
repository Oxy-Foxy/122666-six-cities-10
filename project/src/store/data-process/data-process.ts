import {createSlice} from '@reduxjs/toolkit';
import {NameSpace} from '../../const';
import {DataProcess} from '../../types/state';
import {fetchOffersAction, fetchOfferAction, fetchReviewsAction, fetchNearbyPlacesAction, submitReviewAction, changeFavoriteStatusAction, fetchFavoriteOffers, logoutAction} from '../api-actions';

const initialState: DataProcess = {
  offers: {},
  favoriteOffers:[],
  nearbyPlaces: [],
  reviews: [],
  isDataLoading: false,
  isOfferLoading: false,
  isReviewsPending: false,
  isNearbyPlacesPending: false,
  isReviewSubmitPending: false,
  isFavoriteStatusPending: false,
  isFavoriteOffersPending: false
};

export const dataProcess = createSlice({
  name: NameSpace.Data,
  initialState,
  reducers: {
    clearFavoriteOffers: (state)=>{
      state.favoriteOffers = [];
    }
  },
  extraReducers(builder) {
    builder
      .addCase(fetchOffersAction.pending, (state) => {
        state.isDataLoading = true;
      })
      .addCase(fetchOffersAction.fulfilled, (state, action) => {
        action.payload.forEach((item) => {
          state.offers[item.id] = item;
        });
        state.isDataLoading = false;
      })
      .addCase(fetchOfferAction.pending, (state) => {
        state.isOfferLoading = true;
      })
      .addCase(fetchOfferAction.fulfilled, (state, {payload}) => {
        state.offers[payload.id] = payload;
        state.isOfferLoading = false;
      })
      .addCase(fetchOfferAction.rejected, (state) => {
        state.isOfferLoading = false;
      })
      .addCase(fetchReviewsAction.pending, (state) => {
        state.isReviewsPending = true;
      })
      .addCase(fetchReviewsAction.fulfilled, (state, action) => {
        state.reviews = action.payload;
        state.isReviewsPending = false;
      })
      .addCase(fetchFavoriteOffers.pending, (state) => {
        state.isFavoriteOffersPending = true;
      })
      .addCase(fetchFavoriteOffers.fulfilled, (state, {payload}) => {
        state.isFavoriteOffersPending = false;
        state.favoriteOffers = payload;
      })
      .addCase(submitReviewAction.pending, (state) => {
        state.isReviewSubmitPending = true;
      })
      .addCase(submitReviewAction.rejected, (state) => {
        state.isReviewSubmitPending = false;
      })
      .addCase(changeFavoriteStatusAction.fulfilled, (state, {payload}) => {
        const offers = Object.values(state.offers) || [];
        const offer = offers.filter((item)=> item.id === payload.id)[0];
        offer.isFavorite = payload.isFavorite;
        const offerIndexInFavorites = state.favoriteOffers.findIndex((item) => item.id === payload.id);
        const offerIndexInNearby = state.nearbyPlaces.findIndex((item) => item.id === payload.id);
        if(offerIndexInFavorites === -1){
          state.favoriteOffers.push(payload);
        } else {
          state.favoriteOffers.splice(offerIndexInFavorites, 1);
        }
        if(offerIndexInNearby !== -1) {
          state.nearbyPlaces[offerIndexInNearby].isFavorite = payload.isFavorite;
        }
        state.isFavoriteStatusPending = false;
      })
      .addCase(changeFavoriteStatusAction.pending, (state) => {
        state.isFavoriteStatusPending = true;
      })
      .addCase(changeFavoriteStatusAction.rejected, (state, action) => {
        state.isFavoriteStatusPending = false;
      })
      .addCase(submitReviewAction.fulfilled, (state, action) => {
        state.reviews = action.payload;
        state.isReviewSubmitPending = false;
      })
      .addCase(fetchNearbyPlacesAction.pending, (state) => {
        state.isNearbyPlacesPending = true;
      })
      .addCase(fetchNearbyPlacesAction.fulfilled, (state, action) => {
        state.nearbyPlaces = action.payload;
        state.isNearbyPlacesPending = false;
      })
      .addCase(logoutAction.fulfilled, (state) => {
        state.favoriteOffers = [];
        for (const key in state.offers) {
          state.offers[key].isFavorite = false;
        }
        for (const key in state.nearbyPlaces) {
          state.nearbyPlaces[key].isFavorite = false;
        }
      });
  }
});

