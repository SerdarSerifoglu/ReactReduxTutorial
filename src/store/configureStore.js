import { createStore } from "redux";
import { devToolsEnhancer } from "redux-devtools-extension";
import rootReducer from "./rootReducer.js";

export function configureStore() {
  //devToolsEnchancer zorunlu değil geliştirirken redux devtools'u kullanabilmemize yardımcı oluyor.
  return createStore(rootReducer, devToolsEnhancer());
}
