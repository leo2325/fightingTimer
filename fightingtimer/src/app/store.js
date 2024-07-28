import { configureStore } from '@reduxjs/toolkit';
import timerReducer from '../slices/timerSlice'; // Assurez-vous que le chemin est correct

const store = configureStore({
  reducer: {
    timer: timerReducer
  }
});

export default store;
