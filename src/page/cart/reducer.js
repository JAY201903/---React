import {
  SELECTED_GOOD,
  REVISED_TOTAL_PRICE,
  DELETE_GOOD,
  UPDATE_GOOD,
  UPDATE_CART,
} from "./actions";
// 初始状态
const initState = {
  cartList: [],
  selectGoodsArray: [],
  goodsTotalPrice: 0,
};
function reducer(state = initState, action) {
  switch (action.type) {
    case UPDATE_CART:
      console.log("action.payload.cartList", action.payload.cartList);
      return {
        ...state,
        cartList: action.payload.cartList,
      };
    case SELECTED_GOOD:
      console.log(' action.payload.selectGoodsList', action.payload.selectGoodsList)
      return {
        ...state,
        selectGoodsArray: action.payload.selectGoodsList,
      };
    case REVISED_TOTAL_PRICE:
      return {
        ...state,
        goodsTotalPrice: action.newTotalPrice,
      };
    case DELETE_GOOD:
      return {
        ...state,
        tablelist: [...state.tablelist, action.payload.s],
      };
    case UPDATE_GOOD:
      return {
        ...state,
        tablelist: [...state.tablelist, action.payload.s],
      };
    default:
      return state;
  }
}
export default reducer;
