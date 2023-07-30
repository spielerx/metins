import { createSlice } from "@reduxjs/toolkit";

interface AuthState {
  loading: boolean;
  success: boolean;
  userInfo: {
    name?: string;
    email?: string;
  };
  userToken: string | null;
  error: string | null;
}

const initialState: AuthState = {
  loading: false,
  success: false, // for monitoring the registration process.
  userInfo: {}, // for user object
  userToken: null, // for storing the JWT
  error: null
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: {}
});

export default authSlice.reducer;
