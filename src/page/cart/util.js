import store from "../../store";
import {revisedTotalPrice} from './actions'

/**
 * @function calculateTotalPrice - 计算总价
 * @param {number} unitPrice - 必需 -- 商品单价
 * @param {number} quantity - 必需 -- 商品数量
 * @param {number} operation - 必需--操作，1为添加，0为减少
 */
export const calculateTotalPrice = (unitPrice,quantity,operation)=>{
    const { goodsTotalPrice } = store.getState().shopCar;
    let newGoodsTotalPrice = 0;
    if(operation) {
        newGoodsTotalPrice = Number(goodsTotalPrice) + unitPrice * quantity;
    } else {
        newGoodsTotalPrice = goodsTotalPrice - unitPrice * quantity;
    }
    store.dispatch(revisedTotalPrice(newGoodsTotalPrice.toFixed(2)));
}