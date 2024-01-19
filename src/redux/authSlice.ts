import { createSlice } from '@reduxjs/toolkit';


interface AuthState {
  currentUser: any;
  isAuthenticated: boolean;
  token: string | null;
}

const initialState: AuthState = {
  currentUser: null,
  isAuthenticated: false,
  token: null,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    register: (state, action) => {
      state.currentUser = action.payload;
      state.isAuthenticated = true;
      state.token = action.payload.access_token;
    },
    login: (state, action) => {
      state.currentUser = action.payload.current_user;
      state.isAuthenticated = true;
      state.token = action.payload.access_token;
    },
    logout: (state) => {
      state.currentUser = null;
      state.isAuthenticated = false;
      state.token = null;
    },
  },
});

export const {
  login,
  logout,
  register,
} = authSlice.actions;

export default authSlice.reducer;
