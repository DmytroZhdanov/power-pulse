import { createSlice } from '@reduxjs/toolkit';

export const initialState = {
  user: {
    name: null,
    email: null,
    avatarUrls: {},
    createdAt: null,
  },
  token: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setCredentials: (state, { payload: { user, token } }) => {
      state.user = user;
      state.token = token;
    },
  },
});

export const { setCredentials } = authSlice.actions;
export const authReducer = authSlice.reducer;
