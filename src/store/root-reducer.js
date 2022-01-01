import { combineReducers } from "redux";
import shopCar from "../page/cart/reducer";

const rootReducer = () =>
  combineReducers({
    shopCar,
  });

export default rootReducer;
