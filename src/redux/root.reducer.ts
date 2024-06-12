import {combineReducers} from "@reduxjs/toolkit";
import userReducer from "./reducers/userReducer.ts";

const rootReducer = combineReducers({
  users: userReducer,
})

export default rootReducer;