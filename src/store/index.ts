import { createStore } from "redux";
import { devToolsEnhancer } from "redux-devtools-extension";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import rootReducer from "../reducers";

const persistConfig = {
  key: "ejemplo-root",
  storage
};

const persistedReducer = persistReducer(persistConfig, rootReducer);


export default () => {
  let store = createStore(persistedReducer, devToolsEnhancer({}));
  let persistor = persistStore(store);
  return { store, persistor };
};
