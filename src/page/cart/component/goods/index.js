import React, { Component } from "react";
import { ItemOrder } from "./style";
import { Stepper, Toast } from "antd-mobile";
export class Goods extends Component {
  constructor(props) {
    super(props);
    this.state = {
      good: this.props.goodsInfo,
      num: this.props.total,
      isShowEdit: false,
      maxBuyNum: this.props.maxBuyNum,
      isCheck: this.props.isCheck,
    };
    this.onClickSelect = this.onClickSelect.bind(this)
  }
  numOnblur = () => {
    var inputNum = this.state.num;
    console.log(inputNum);
    // 输入空值或空字符串或小于1时，强制为1
    if (!`${inputNum}`.trim() || inputNum < 1) {
      this.setState({
        num: 1,
      });
      return;
    }
    var numValid = parseInt(inputNum);
    this.setState({
      num: numValid,
    });
    Toast.show("购物车更新成功！");
  };
  onEdit = () => {
    this.setState({
      isShowEdit: !this.state.isShowEdit,
    });
  };
  addGoods = () => {
    this.setState({
      num: Number(this.state.num) + 1,
    });
    Toast.show("购物车更新成功！");
  };
  reduceGoods = () => {
    this.setState({
      num: this.state.num - 1,
    });
    Toast.show({
      content: "购物车更新成功",
    });
  };
  attrRender(attr) {
    console.log(attr);
    let showText = "";
    for (let i = 0; i < attr.length; i++) {
      showText += `${attr[i].sAttrName}: ${attr[i].sAttrValue} `;
    }
    return showText;
  }
  onClickSelect(sGoodsId) {
    console.log('select singe',sGoodsId)
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
    } = this.state.good;
    return (
      <ItemOrder>
        {/* 商品 */}
        <div className="order-good">
          <div className="good-item">
            <span className="btn-check" onClick={this.onClickSelect.bind(this,sGoodsId)}>
              <i
                className={`ico-mall i-check ${
                  this.state.isCheck ? "i-checked" : ""
                }`}
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
                <span className="info-name">
                  {sMallName}
                </span>
                <span className="ico-mall btn-edit" onClick={this.onEdit}>
                  编写
                </span>
              </div>
              <span className="info-size">{this.attrRender(attr)}</span>
              <p className="info-tip">{activeDesc}</p>
              {/* 商品价格 */}
              <div className="info-bd">
                <div className="info-price">
                  <h4>¥ {iCurrPrice}</h4>
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
                    value={this.state.num}
                    onChange={(e) => {
                      this.setState({
                        num: e.target.value,
                      });
                      console.log(e.target.value);
                    }}
                    onBlur={this.numOnblur}
                  />
                  <span title="+" className="amount-plus" onClick={this.addGoods}>
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
                    value={this.state.num}
                    onChange={(e) => {
                      this.setState({
                        num: e.target.value,
                      });
                      console.log(e.target.value);
                    }}
                    onBlur={this.numOnblur}
                  />
                  <span title="+" className="amount-plus" onClick={this.addGoods}>
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