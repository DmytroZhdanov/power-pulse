// dataSlice.js
import { createSlice } from '@reduxjs/toolkit';

// Створіть початковий стан для даних
const initialState = {
  currentHeight: '',
  currentWeight: '',
  desiredWeight: '',
  birthday: null, // Змінив на дату
};

const dataSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {
    updateData: (state, action) => {
      // Оновіть дані в Redux-сторі
      return {
        ...state,
        ...action.payload,
      };
    },
  },
});

export const { updateData } = dataSlice.actions;

export default dataSlice.reducer;
