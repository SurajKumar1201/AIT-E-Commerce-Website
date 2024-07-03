import { configureStore } from '@reduxjs/toolkit';
// import imagesReducer from './imagesSlice';
import dataReducer from './dataSlice';

import { combineReducers } from "redux";
import { productReducer } from './productReducer/ProductReducer';

export const rootReducer = combineReducers({
  
  productData:productReducer, 
  data: dataReducer})

const store = configureStore({
  reducer: rootReducer,
});

export default store;
