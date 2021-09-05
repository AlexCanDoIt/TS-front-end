import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  list: [],
  total: null,
  error: null,
  isLoading: false,
};

const { reducer, actions } = createSlice({
  name: 'bikes',
  initialState,
  reducers: {
    getBikesRequest: state => {
      state.isLoading = true;
    },
    getBikesSuccess: (state, { payload }) => {
      state.list = payload.list;
      state.total = payload.total;
      state.isLoading = false;
    },
    getBikesError: (state, { payload }) => {
      state.error = payload;
      state.isLoading = false;
    },
    addBikeRequest: state => {
      state.isLoading = true;
    },
    addBikeSuccess: state => {
      state.isLoading = false;
    },
    addBikeError: (state, { payload }) => {
      state.error = payload;
      state.isLoading = false;
    },
    deleteBikeRequest: state => {
      state.isLoading = true;
    },
    deleteBikeSuccess: state => {
      state.isLoading = false;
    },
    deleteBikeError: (state, { payload }) => {
      state.error = payload;
      state.isLoading = false;
    },
    toggleStatusBikeRequest: state => {
      state.isLoading = true;
    },
    toggleStatusBikeSuccess: state => {
      state.isLoading = false;
    },
    toggleStatusBikeError: (state, { payload }) => {
      state.error = payload;
      state.isLoading = false;
    },
  },
});

export const {
  getBikesRequest,
  getBikesSuccess,
  getBikesError,
  addBikeRequest,
  addBikeSuccess,
  addBikeError,
  deleteBikeRequest,
  deleteBikeSuccess,
  deleteBikeError,
  toggleStatusBikeRequest,
  toggleStatusBikeSuccess,
  toggleStatusBikeError,
} = actions;
export default reducer;
