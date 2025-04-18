import { configureStore } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";
import { combineReducers } from "redux";

import propertyReducer from "./PropertySlice";
import officeReducer from "./OfficeSlice";


const persistConfig = {
  key: "root",
  storage,
};

const reducer = combineReducers({
  properys: propertyReducer,  
  office: officeReducer,
});



const persistedReducer = persistReducer(persistConfig, reducer);

const store = configureStore({
  reducer: persistedReducer,
});

export default store;

