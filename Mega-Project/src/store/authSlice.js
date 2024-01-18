import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  status: false,
  userData: null
};

const authSlice = createSlice( {
  name: 'auth',
  initialState,
  reducers: {
    login: ( state, actions ) =>
    {
      state.status = true,
        state.userData = actions.payload.userData;
    },
    logOut: ( state, actions ) =>
    {
      state.status = false,
        state.userData = null;
    }
  }
} );

export const { login, logOut } = authSlice.actions;

export default authSlice.reducer;