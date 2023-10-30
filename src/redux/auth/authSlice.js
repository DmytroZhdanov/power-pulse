import { createSlice } from '@reduxjs/toolkit';

export const initialState = {
  user: {
    name: null,
    email: null,
    avatarUrls: null,
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
    setToken: (state, { payload }) => {
      state.token = payload;
    },
    setAvatars: (state, { payload }) => {
      state.user.avatarUrls = payload;
    },
  },
});

export const { setCredentials, setToken, setAvatars } = authSlice.actions;
export const authReducer = authSlice.reducer;
