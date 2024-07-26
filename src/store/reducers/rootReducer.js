import { combineReducers } from "@reduxjs/toolkit";
import pollsReducer from "./pollsReducer";

const rootReducer = combineReducers({
  polls: pollsReducer,
});

export default rootReducer;
