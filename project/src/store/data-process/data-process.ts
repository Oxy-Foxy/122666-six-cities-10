import {createSlice} from '@reduxjs/toolkit';
import {NameSpace} from '../../const';
import {DataProcess} from '../../types/state';
import {fetchOffersAction, fetchOfferAction, fetchReviewsAction, fetchNearbyPlacesAction, submitReviewAction, changeFavoriteStatusAction, fetchFavoriteOffers} from '../api-actions';

const initialState: DataProcess = {
  offers: [],
  favoriteOffers:[],
  offer: null,
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
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchOffersAction.pending, (state) => {
        state.isDataLoading = true;
      })
      .addCase(fetchOffersAction.fulfilled, (state, action) => {
        state.offers = action.payload;
        state.isDataLoading = false;
      })
      .addCase(fetchOfferAction.pending, (state) => {
        state.isOfferLoading = true;
      })
      .addCase(fetchOfferAction.fulfilled, (state, action) => {
        state.offer = action.payload;
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
        const offer = state.offers.filter((item)=> item.id === payload.id)[0];
        offer.isFavorite = payload.isFavorite;
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
      });
  }
});
