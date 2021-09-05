import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  list: [],
  error: null,
  isLoading: false,
};

const { reducer, actions } = createSlice({
  name: 'types',
  initialState,
  reducers: {
    getTypesRequest: state => {
      state.isLoading = true;
    },
    getTypesSuccess: (state, { payload }) => {
      state.list = payload;
      state.isLoading = false;
    },
    getTypesError: (state, { payload }) => {
      state.error = payload;
      state.isLoading = false;
    },
  },
});

export const {
  getTypesRequest,
  getTypesSuccess,
  getTypesError,
} = actions;
export default reducer;
