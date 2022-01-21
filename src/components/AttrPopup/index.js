import React, { Component } from "react";
import { Popup } from "antd-mobile";
import { PopupArea, PopCartAct, PopupGoodAttr } from "./style";
export class AttrPopup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      recommendGoodsList: [],
    };
  }
  render() {
    return (
      <PopupArea>
        <Popup
          className="pop-mask"
          visible={this.props.visible}
          onMaskClick={() => {
            this.props.expandAttrPopup();
          }}
          bodyStyle={{ minHeight: "40vh" }}
        >
          <PopupGoodAttr>
            <div className="pop-cart-hd">
              <div className="pop-good-img">
                <img
                  src="https://game.gtimg.cn/images/zb/x5/uploadImg/goods/202201/20220112213135_79799.jpg"
                  alt="商品图"
                />
                <div className="pop-good-zoom">
                  <i className="ico-mall btn-search"></i>
                </div>
              </div>
              <div className="pop-cart-info">
                <p className="pop-cart-pri">¥ 399.00</p>{" "}
                <p className="pop-cart-kc">库存充足</p>{" "}
                <p className="pop-cart-result">已选：常规</p>
              </div>
            </div>
            <div className="good-spec">
              {/* 规格 */}
              <div className="area-item">
                <p className="item-label">规格</p>
                <div className="item-panel">
                  <ul>
                    <li className="cur">常规</li>
                  </ul>
                </div>
              </div>
              {/* 类型 */}
              <div className="area-item">
                <p className="item-label">类型</p>{" "}
                <div className="item-panel">
                  <ul>
                    <li className="">单手办</li>
                    <li className="cur">八宝盒</li>
                  </ul>
                </div>
              </div>
              {/* 数量 */}
              <div className="area-amount">
                <label className="amoutTitle">数量</label>
                <div className="amount-counter">
                  <span
                    title="-"
                    className="amount-minus"
                    // onClick={this.reduceGoods}
                  >
                    -
                  </span>
                  <input
                    type="text"
                    className="amount-text"
                    // value={this.state.goodQty}
                    // onChange={(e) => {
                    //   var reg = /^[0-9]*$/;
                    //   if(reg.test(e.target.value)) {
                    //     this.setState({
                    //       goodQty: e.target.value,
                    //     });
                    //   }
                    // }}
                    // onBlur={this.onblur}
                  />
                  <span
                    title="+"
                    className="amount-plus"
                    // onClick={this.addGoods}
                  >
                    +
                  </span>
                </div>
              </div>
            </div>
          </PopupGoodAttr>
          <PopCartAct>
              <div className="btn-yellow">加入购物车</div>{" "}
              <div className="btn-red">立即购买</div>
          </PopCartAct>
        </Popup>
      </PopupArea>
    );
  }
}
