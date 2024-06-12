import createSagaMiddleware from "redux-saga";
import {configureStore} from "@reduxjs/toolkit";
import rootReducer from "./root.reducer.ts";
import userSaga from "./saga/userSaga.ts";

const saga = createSagaMiddleware();
export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(saga),
})
saga.run(userSaga);

