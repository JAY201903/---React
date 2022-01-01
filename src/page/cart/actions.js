// 选中或取消
export const SELECTED_GOOD = "SELECTED_GOOD";
// 修改商品总价
export const REVISED_TOTAL_PRICE = "REVISED_TOTAL_PRICE";
// 删除商品
export const DELETE_GOOD = "DELETE_GOOD";
// 修改商品数量
export const UPDATE_GOOD_AMOUNT = "UPDATE_GOOD_AMOUNT";
// 更新购物车
export const UPDATE_CART = "UPDATE_CART";

export function selectOrCancelGood(selectGoodsList) {
  return {
    type: SELECTED_GOOD,
    payload: {
      selectGoodsList,
    },
  };
}
export function revisedTotalPrice(newTotalPrice) {
  return {
    type: REVISED_TOTAL_PRICE,
    payload: {
      newTotalPrice,
    },
  };
}

export function deteleCartGood(iCartId) {
  return {
    type: DELETE_GOOD,
    payload: {
      iCartId,
    },
  };
}

export function updateGoodAmount(iCartId,total) {
  return {
    type: UPDATE_GOOD_AMOUNT,
    payload: {
      iCartId,
      amount: total
    },
  };
}
export function updateCart(cartList) {
    return {
      type: UPDATE_CART,
      payload: {
        cartList,
      },
    };
  }
  