import { configureStore } from '@reduxjs/toolkit'
import propertyReducer from '../features/properties/propertySlice'
import authReducer from "../features/auth/authSlice";
import profileReducer from "../features/profile/profileSlice";

export const store = configureStore({
  reducer: {
    properties: propertyReducer,
    auth: authReducer,
    user: profileReducer
  },
});
