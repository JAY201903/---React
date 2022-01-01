import React, { Component } from "react";
import { ItemOrder } from "./style";
import { Stepper, Toast } from "antd-mobile";
import store from "../../../../store/index";
import { selectOrCancelGood,updateGoodAmount } from "../../actions";
import { calculateTotalPrice } from "../../util";
export class Goods extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isShowEdit: false,
    };
    this.onClickSelect = this.onClickSelect.bind(this);
    this.attrRender = this.attrRender.bind(this);
    this.addGoods = this.addGoods.bind(this);
  }
  numOnblur = () => {
    var inputNum = this.state.num;
    // 输入空值或空字符串或小于1时，强制为1
    if (!`${inputNum}`.trim() || inputNum < 1) {
      // this.setState({
      //   num: 1,
      // });
      return;
    }
    var numValid = parseInt(inputNum);
    // this.setState({
    //   num: numValid,
    // });
    Toast.show("购物车更新成功！");
  };
  onEdit = () => {
    this.setState({
      isShowEdit: !this.state.isShowEdit,
    });
  };
  addGoods = () => {
    const { total,iCartId } = this.props;
    const newTotal = Number(total) + 1;
    store.dispatch(updateGoodAmount(iCartId,newTotal));
    Toast.show("购物车更新成功！");
  };
  reduceGoods = () => {
    const { total,iCartId } = this.props;
    const newTotal = Number(total) - 1;
    store.dispatch(updateGoodAmount(iCartId,newTotal));
    Toast.show({
      content: "购物车更新成功",
    });
  };
  attrRender(attr) {
    let showText = "";
    for (let i = 0; i < attr.length; i++) {
      showText += `${attr[i].sAttrName}: ${attr[i].sAttrValue} `;
    }
    return showText;
  }
  onClickSelect(selectICartId) {
    const { selectGoodsArray } = store.getState().shopCar;
    const { total, goodsInfo } = this.props;
    let newSelectGoodsArray = [];
    if (selectGoodsArray.includes(selectICartId)) {
      // 如果商品为选中状态，就取消选中
      calculateTotalPrice(goodsInfo.iCurrPrice, total, 0);
      newSelectGoodsArray = selectGoodsArray.filter((item) => {
        return item != selectICartId;
      });
    } else {
      // 如果商品为未选中状态，就设置选中
      newSelectGoodsArray = [...selectGoodsArray, selectICartId];
      calculateTotalPrice(goodsInfo.iCurrPrice, total, 1);
    }
    store.dispatch(selectOrCancelGood(newSelectGoodsArray));
  }
  render() {
    const {
      sGoodsId,
      iStatus,
      sMallName,
      sProfileImg,
      iCurrPrice,
      isPromote,
      activeDesc,
      attr,
    } = this.props.goodsInfo;
    const { total, maxBuyNum, isCheck, iCartId } = this.props;
    return (
      <ItemOrder>
        {/* 商品 */}
        <div className="order-good">
          <div className="good-item">
            <span
              className="btn-check"
              onClick={this.onClickSelect.bind(this, iCartId)}
            >
              <i
                className={`ico-mall i-check ${isCheck ? "i-checked" : ""}`}
              ></i>
            </span>
            <div className="good-img">
              <img src={sProfileImg} />
            </div>
            <div
              className={`good-info ${
                this.state.isShowEdit ? "hiddenElemrnt" : ""
              }`}
            >
              <div className="info-hd">
                <span className="info-name">{sMallName}</span>
                <span className="ico-mall btn-edit" onClick={this.onEdit}>
                  编写
                </span>
              </div>
              <span className="info-size">{this.attrRender(attr)}</span>
              <p className="info-tip">{activeDesc}</p>
              {/* 商品价格 */}
              <div className="info-bd">
                <div className="info-price">
                  <h4>¥ {iCurrPrice.toFixed(2)}</h4>
                  {isPromote ? <i className="i-primark">特价</i> : ""}
                </div>
                <div className="amount-counter">
                  <span
                    title="-"
                    className="amount-minus"
                    onClick={this.reduceGoods}
                  >
                    -
                  </span>
                  <input
                    type="number"
                    className="amount-text"
                    value={total}
                    onChange={(e) => {
                      this.setState({
                        num: e.target.value,
                      });
                      console.log(e.target.value);
                    }}
                    onBlur={this.numOnblur}
                  />
                  <span
                    title="+"
                    className="amount-plus"
                    onClick={this.addGoods}
                  >
                    +
                  </span>
                </div>
              </div>
            </div>
            {/* 点击编辑之后 */}
            <div
              className={`good-editbox test ${
                this.state.isShowEdit ? "" : "hiddenElemrnt"
              }`}
            >
              <div className="edit-info">
                <div className="amount-counter">
                  <span
                    title="-"
                    className="amount-minus"
                    onClick={this.reduceGoods}
                  >
                    -
                  </span>
                  <input
                    type="number"
                    className="amount-text"
                    value={total}
                    onChange={(e) => {
                      this.setState({
                        num: e.target.value,
                      });
                      console.log(e.target.value);
                    }}
                    onBlur={this.numOnblur}
                  />
                  <span
                    title="+"
                    className="amount-plus"
                    onClick={this.addGoods}
                  >
                    +
                  </span>
                </div>
                <div className="goods-edit">
                  <div className="editbr">
                    <span>{this.attrRender(attr)}</span>
                    <i className="ico-mall i-arrdown"></i>
                  </div>
                </div>
              </div>
              <div className="edit-action">
                <span title="完成" className="btn-finish" onClick={this.onEdit}>
                  完成
                </span>
                <span title="删除" className="btn-del">
                  删除
                </span>
              </div>
            </div>
          </div>
        </div>
      </ItemOrder>
    );
  }
}
