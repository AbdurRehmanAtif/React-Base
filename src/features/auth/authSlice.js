// authSlice.js
import { createSlice } from '@reduxjs/toolkit';

// Initial state
const initialState = {
  token: null,
  status: null,
  userData: null
};

// Create a slice
const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {

    login: (state, action) => {
      state.status = true;
      state.userData = action.payload.userData;
    },
    logout: (state, action) => {
      state.status = false;
      state.userData = null;
    },
    setToken: (state, action) => {
      state.token = action.payload;
    },
    clearToken: (state) => {
      state.token = null;
    },
  },
});

// Export actions
export const { login, logout, setToken, clearToken } = authSlice.actions;

// Export the reducer
export default authSlice.reducer;
