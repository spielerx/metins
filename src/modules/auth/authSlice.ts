import { createSlice } from "@reduxjs/toolkit";
import { RootState, useAppSelector } from "app/store";

export interface User {
  id: number;
  name: string;
  courses: number[];
}
interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
}

const initialState: AuthState = {
  user: null,
  isAuthenticated: false
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setCredentials: (state, action) => {
      const user = action.payload;
      state.user = user;
      state.isAuthenticated = true;
    },
    logOut: (state) => {
      state.user = null;
      state.isAuthenticated = false;
    }
  }
});

export const { setCredentials, logOut } = authSlice.actions;

export default authSlice.reducer;

export const useSelectCurrentUser = () =>
  useAppSelector((state: RootState) => state.auth.user);
export const useSelectIsAuthenticated = () =>
  useAppSelector((state: RootState) => state.auth.isAuthenticated);
