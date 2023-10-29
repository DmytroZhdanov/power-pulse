import { createSlice } from '@reduxjs/toolkit';

export const stepValueSlice = createSlice({
  name: 'stepValue',
  initialState: 1,
  reducers: {
    setStepValue: (state, action) => {
      return action.payload;
    },
  },
});

export const { setStepValue } = stepValueSlice.actions;

export default stepValueSlice.reducer;
