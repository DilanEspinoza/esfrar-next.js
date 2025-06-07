import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { combineReducers } from "redux";

import userReducer from "./slices/userSlice";
import imagesReducer from "./slices/imagesSlice";

const rootReducer = combineReducers({
	user: userReducer,
	images: imagesReducer,
});

const persistConfig = {
	key: "root",
	storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
	reducer: persistedReducer,
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware({
			serializableCheck: false, // importante para redux-persist
		}),
});

// 🔥 Esto es lo que te falta
export const persistor = persistStore(store);
