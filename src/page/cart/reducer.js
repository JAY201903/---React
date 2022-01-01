import {
  SELECTED_GOOD,
  REVISED_TOTAL_PRICE,
  DELETE_GOOD,
  UPDATE_GOOD_AMOUNT,
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
      return {
        ...state,
        cartList: action.payload.cartList,
      };
    case SELECTED_GOOD:
      return {
        ...state,
        selectGoodsArray: action.payload.selectGoodsList,
      };
    case REVISED_TOTAL_PRICE:
      return {
        ...state,
        goodsTotalPrice: action.payload.newTotalPrice,
      };
    case DELETE_GOOD:
      return {
        ...state,
        tablelist: [...state.tablelist, action.payload.s],
      };
    case UPDATE_GOOD_AMOUNT:
      return {
        ...state,
        cartList: state.cartList.map((item)=> {
          if(item.iCartId == action.payload.iCartId) {
            item.iTotal = action.payload.amount;
          }
          return item;
        }),
      };
    default:
      return state;
  }
}
export default reducer;
