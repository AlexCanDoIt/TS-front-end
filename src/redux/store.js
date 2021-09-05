import { configureStore } from '@reduxjs/toolkit';
import typesReducer from './types/typesSlice';
import bikesReducer from './bikes/bikesSlice';

const store = configureStore({
  reducer: {
    types: typesReducer,
    bikes: bikesReducer,
  },

  devTools: process.env.NODE_ENV === 'development',
});

// eslint-disable-next-line import/no-anonymous-default-export
export default store;