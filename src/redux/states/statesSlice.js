import { createSlice } from '@reduxjs/toolkit';

export const initialState = {
  isLoading: false,
  isError: false,
  error: null,
  pathname: null,
};

const statesSlice = createSlice({
  name: 'states',
  initialState,
  reducers: {
    setStates: (state, { payload: { isLoading, isError, error } }) => {
      state.isLoading = isLoading;
      state.isError = isError;
      state.error = error;
    },
    setPathname: (state, { payload }) => {
      state.pathname = payload;
    },
  },
});

export const { setStates, setPathname } = statesSlice.actions;
export const statesReducer = statesSlice.reducer;
