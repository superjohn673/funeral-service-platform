import { combineReducers } from "@reduxjs/toolkit";
import authReducer from "./slices/authSlice";
import productReducer from "./slices/productSlice";
import notificationReducer from "./slices/notificationSlice";

const rootReducer = combineReducers({
  auth: authReducer,
  product: productReducer,
  notification: notificationReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
