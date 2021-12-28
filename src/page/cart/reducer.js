import {
  SELECTED_GOOD,
  REVISED_TOTAL_PRICE,
  DELETE_GOOD,
  UPDATE_GOOD,
} from "./actions";
// 初始状态
const initState = {
  selectGoodsSet: new Set(),
  goodsTotalPrice: 0,
};
function shopCarReducer(state = initState, action) {
  console.log("initState", state);
  switch (action.type) {
    case SELECTED_GOOD:
      console.log("目前的数据是", action.newlist);
      return {
        ...state,
        tablelist: [...state.tablelist, action.newlist],
      };
    default:
      return state;
  }
}
export default shopCarReducer;
