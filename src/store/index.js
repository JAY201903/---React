import { createStore } from "redux";
import rootReducer from "./root-reducer";
let initialState = {};
let store = createStore(rootReducer(),initialState);

export default store;
