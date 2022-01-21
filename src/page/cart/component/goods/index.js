import React, { Component } from "react";
import { ItemOrder } from "./style";
import { Stepper, Toast } from "antd-mobile";
import store from "../../../../store/index";
import { selectOrCancelGood,updateGoodAmount,deteleCartGood } from "../../actions";
import { calculateTotalPrice,anewCalculateTotalPrice } from "../../util";
export class Goods extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isShowEdit: false,
      goodQty: 0,
    };
    console.log('props',props)
    this.onClickSelect = this.onClickSelect.bind(this);
    this.attrRender = this.attrRender.bind(this);
    this.addGoods = this.addGoods.bind(this);
    this.deletGood = this.deletGood.bind(this);
    this.modifyAttr = this.modifyAttr.bind(this);
  }
  componentWillMount(){
    const { total } = this.props;
    this.setState({
      goodQty: total
    })
  }
  onblur = () => {
    var inputNum = this.state.goodQty;
    const { iCartId } = this.props;
    // 输入空值或空字符串或小于1时，强制为1
    if (!`${inputNum}`.trim() || inputNum < 1) {
      Toast.show({
        content: "商品数量最小为1哦",
        duration: 500,
      });
      this.setState({
        goodQty: 1
      })
      store.dispatch(updateGoodAmount(iCartId,1));
      return;
    }
    var newTotal = parseInt(inputNum);
    this.setState({
      goodQty: newTotal
    })
    store.dispatch(updateGoodAmount(iCartId,newTotal));
    anewCalculateTotalPrice();
    Toast.show({
      content: "购物车更新成功！",
      duration: 500,
    });
  };
  onEdit = () => {
    this.setState({
      isShowEdit: !this.state.isShowEdit,
    });
  };
  // 添加商品数量
  addGoods() {
    const { isCheck,iCartId,goodsInfo } = this.props;
    const newTotal = Number(this.state.goodQty) + 1;
    this.setState({
      goodQty: newTotal
    })
    store.dispatch(updateGoodAmount(iCartId,newTotal));
    calculateTotalPrice(isCheck,goodsInfo.iCurrPrice, 1, 1);
    Toast.show({
      content: "购物车更新成功！",
      duration: 500,
    });
  };
  // 减少商品数量
  reduceGoods = () => {
    const { isCheck,iCartId,goodsInfo } = this.props;
    if(this.state.goodQty == 1) {
      Toast.show({
        content: "商品数量最小为1哦",
        duration: 500,
      });
      return;
    }
    const newTotal = Number(this.state.goodQty) - 1;
    store.dispatch(updateGoodAmount(iCartId,newTotal));
    this.setState({
      goodQty: newTotal
    })
    calculateTotalPrice(isCheck,goodsInfo.iCurrPrice, 1, 0);
    Toast.show({
      content: "购物车更新成功！",
      duration: 500,
    });
  };
  // 删除商品
  deletGood() {
    const { iCartId } = this.props;
    store.dispatch(deteleCartGood(Number(iCartId)));
  }
  // 属性渲染
  attrRender(attr) {
    let showText = "";
    for (let i = 0; i < attr.length; i++) {
      showText += `${attr[i].sAttrName}: ${attr[i].sAttrValue} `;
    }
    return showText;
  }
  // 单选与反选
  onClickSelect(selectICartId) {
    const { selectGoodsArray } = store.getState().shopCar;
    const { goodsInfo } = this.props;
    let newSelectGoodsArray = [];
    if (selectGoodsArray.includes(selectICartId)) {
      // 如果商品为选中状态，就取消选中
      calculateTotalPrice(true,goodsInfo.iCurrPrice, this.state.goodQty, 0);
      newSelectGoodsArray = selectGoodsArray.filter((item) => {
        return item != selectICartId;
      });
    } else {
      // 如果商品为未选中状态，就设置选中
      newSelectGoodsArray = [...selectGoodsArray, selectICartId];
      calculateTotalPrice(true,goodsInfo.iCurrPrice, this.state.goodQty, 1);
    }
    store.dispatch(selectOrCancelGood(newSelectGoodsArray));
  }
  // 修改商品的规格
  modifyAttr(){
    const {
      sGoodsId,
      attr,
    } = this.props.goodsInfo;
    console.log('修改商品规格',sGoodsId,attr)
    this.props.expandAttrPopup();
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
    const { maxBuyNum, isCheck, iCartId } = this.props;
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
                    type="text"
                    className="amount-text"
                    value={this.state.goodQty}
                    onChange={(e) => {
                      var reg = /^[0-9]*$/;
                      if(reg.test(e.target.value)) {
                        this.setState({
                          goodQty: e.target.value,
                        });
                      }
                    }}
                    onBlur={this.onblur}
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
                    value={this.state.goodQty}
                    onChange={(e) => {
                      var reg = /^[0-9]*$/;
                      if(reg.test(e.target.value)) {
                        this.setState({
                          goodQty: e.target.value,
                        });
                      }
                    }}
                    onBlur={this.onblur}
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
                  <div className="editbr" onClick={this.modifyAttr}>
                    <span>{this.attrRender(attr)}</span>
                    <i className="ico-mall i-arrdown"></i>
                  </div>
                </div>
              </div>
              <div className="edit-action">
                <span title="完成" className="btn-finish" onClick={this.onEdit}>
                  完成
                </span>
                <span title="删除" className="btn-del" onClick={this.deletGood}>
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
