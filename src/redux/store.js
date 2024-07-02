import { configureStore } from '@reduxjs/toolkit';
// import imagesReducer from './imagesSlice';
import dataReducer from './dataSlice';

const store = configureStore({
  reducer: {
    // images: imagesReducer,
    data: dataReducer,
  },
});

export default store;
