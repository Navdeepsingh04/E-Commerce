import { configureStore } from '@reduxjs/toolkit';
import productReducer from '../features/project/productSlice';

export const store = configureStore({
  reducer: {
    product: productReducer,
  },
});
