// 选中或取消
export const SELECTED_GOOD = "SELECTED_GOOD";
// 修改商品总价
export const REVISED_TOTAL_PRICE = "REVISED_TOTAL_PRICE";
// 删除商品
export const DELETE_GOOD = "DELETE_GOOD";
// 修改商品
export const UPDATE_GOOD = "UPDATE_GOOD";

export function selectOrCancelGood(selectGoodsList) {
  return {
    type: SELECTED_GOOD,
    payload: {
      selectGoodsList,
    },
  };
}
export function RevisedTotalPrice(newTotalPrice) {
  return {
    type: REVISED_TOTAL_PRICE,
    payload: {
      newTotalPrice,
    },
  };
}

export function deteleGood(goodId) {
  return {
    type: DELETE_GOOD,
    payload: {
      goodId,
    },
  };
}

export function updateGood(goodId) {
  return {
    type: UPDATE_GOOD,
    payload: {
      goodId,
    },
  };
}
