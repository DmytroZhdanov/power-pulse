import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  currentHeight: '',
  currentWeight: '',
  desiredWeight: '',
  birthday: null,
  blood: '',
  gender: '',
  levelActivity: '',
};

const dataSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {
    updateData: (state, action) => {
      return {
        ...state,
        ...action.payload,
      };
    },
  },
});

export const { updateData } = dataSlice.actions;

export default dataSlice.reducer;
