import { combineReducers } from "@reduxjs/toolkit";
import pollsReducer from "./pollsReducer";
import authReducer from "./authReducer";

const rootReducer = combineReducers({
  polls: pollsReducer,
  auth: authReducer,
});

export default rootReducer;
