import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  exerciseTime: 0,
  restTime: 0,
  repetitions: 0
};

const timerSlice = createSlice({
  name: 'timer',
  initialState,
  reducers: {
    setExerciseTime: (state, action) => {
      state.exerciseTime = action.payload;
    },
    setRestTime: (state, action) => {
      state.restTime = action.payload;
    },
    setRepetitions: (state, action) => {
      state.repetitions = action.payload;
    }
  }
});

export const { setExerciseTime, setRestTime, setRepetitions } = timerSlice.actions;
export default timerSlice.reducer;
