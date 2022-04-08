import { createSlice } from '@reduxjs/toolkit';
import { handleSetUser, loginUser, registerUser } from '../../actions/auth';

const initialState = {
  currentUser: undefined,
  auth: undefined,
  loading: false,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setUser: handleSetUser,
    logOut: (state, action) => {
      state.auth = undefined;
      state.currentUser = undefined;
    },
  },
  extraReducers: builder => {
    // login
    builder.addCase(loginUser.fulfilled, (state, action) => {
      state.currentUser = action.payload.user;
      state.auth = action.payload.tokens;
      state.loading = false;
    });
    builder.addCase(loginUser.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(loginUser.rejected, (state, action) => {
      state.loading = false;
    });
  },
});

export const { setUser, logOut } = authSlice.actions;

export default authSlice.reducer;
