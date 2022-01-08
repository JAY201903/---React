import store from "../../store";
import {revisedTotalPrice} from './actions'

/**
 * @function calculateTotalPrice - 计算总价
 * @param {boolean} isCheck - 必需 -- 商品是否为选中状态
 * @param {number} unitPrice - 必需 -- 商品单价
 * @param {number} quantity - 必需 -- 商品数量
 * @param {number} operation - 必需--操作，1为添加，0为减少
 */
export const calculateTotalPrice = (isCheck,unitPrice,quantity,operation)=>{
    if(!isCheck) {
        return;
    }
    const { goodsTotalPrice } = store.getState().shopCar;
    let newGoodsTotalPrice = 0;
    if(operation) {
        newGoodsTotalPrice = Number(goodsTotalPrice) + unitPrice * quantity;
    } else {
        newGoodsTotalPrice = goodsTotalPrice - unitPrice * quantity;
    }
    store.dispatch(revisedTotalPrice(newGoodsTotalPrice.toFixed(2)));
}

// 重新计算价格
export const anewCalculateTotalPrice = ()=>{
    const { selectGoodsArray,cartList } = store.getState().shopCar;
    let newGoodsTotalPrice = 0;
    const selectArr = cartList.filter((item) => {
        return selectGoodsArray.includes(item.iCartId)
    })
    for (let index = 0; index < selectArr.length; index++) {
        const element = selectArr[index];
        const newTotalPrice = Number(element.iTotal) * Number(element.goodsInfo.iCurrPrice)
        newGoodsTotalPrice =  Number(newGoodsTotalPrice) + newTotalPrice;
        console.log('hhh',newTotalPrice);
    }
    console.log('selectGoodsArray',selectArr);
    store.dispatch(revisedTotalPrice(newGoodsTotalPrice.toFixed(2)));
}