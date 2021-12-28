import React, { Component } from "react";
import { Stepper, Toast } from "antd-mobile";
import NoGoods from "./component/noGoods/index";
import GoodDemo from "../../components/GoodDemo/index";
import { CartPagewrap, CartListCss, CartBtnbox, CartRecommend } from "./style";
import { Goods } from "./component/goods/index";
import { a, recommendGoods } from "./const";
class Cart extends Component {
  constructor() {
    super();
    this.state = {
      cartList: [],
      recommendGoodsList: [],
    };
    this.onClickAll = this.onClickAll.bind(this)
  }
  componentDidMount() {
    if (a.success) {
      this.setState({
        cartList: a.data,
      });
    }
    if (recommendGoods.success) {
      this.setState({
        recommendGoodsList: recommendGoods.data,
      });
    }
  }
  onClickAll() {
    console.log('select all')
  }
  render() {
    // if (this.state.goodlist.length == 0) {
    //   return <NoGoods></NoGoods>;
    // }
    return (
      <CartPagewrap>
        <CartListCss>
          <div className="cart-item">
            {/* 商家 */}
            <div className="item-hd">
              <span className="btn-check" onClick={this.onClickAll}>
                <i className="ico-mall i-check i-checked"></i>
              </span>
              <div className="item-hdimg">
                <img
                  data-src="https://game.gtimg.cn/images/daoju/base/logo/biz/lol.png"
                  src="https://game.gtimg.cn/images/daoju/base/logo/biz/lol.png"
                  lazy="loaded"
                />
              </div>
              <p className="item-hdname">
                英雄联盟供应商：聚诚品英雄联盟周边商城
              </p>
            </div>
            {/* 商品 */}
            {this.state.cartList.map((item) => {
              return (
                <Goods
                  key={item.iCartId}
                  sGoodsId={item.sGoodsId}
                  total={item.iTotal}
                  maxBuyNum={item.maxNum}
                  goodsInfo={item.goodsInfo}
                  isCheck={true}
                ></Goods>
              );
            })}
            {/* 结算 */}
            <CartBtnbox>
              <div className="balance">
                <span className="btn-check" onClick={this.onClickAll}>
                  <i className="ico-mall i-check"></i>
                </span>
                <p className="bal-txt">全选</p>
                <div className="totalpri">
                  <p className="pri">
                    合计：
                    <span className="red">
                      <strong>¥ 168.00</strong>
                    </span>
                  </p>
                  <p className="pritip">不含运费</p>
                </div>
                <span className="btn btn-com btn-balance">去结算</span>
              </div>
            </CartBtnbox>
          </div>
        </CartListCss>
        {/* 购物车推荐区 */}
        <CartRecommend>
          <div className="listbox">
            <div className="list-tit">
              <h3>为你推荐</h3>
            </div>
            <ul className="goods-list">
              {this.state.recommendGoodsList.map((item) => {
                return (
                  <GoodDemo
                    key={item.sGoodsId}
                    sMallName={item.sMallName}
                    sProfileImg={item.sProfileImg}
                    iCurrPrice={item.iCurrPrice}
                    isPromote={item.isPromote}
                    iOriPrice={item.iOriPrice}
                  ></GoodDemo>
                );
              })}
            </ul>
          </div>
        </CartRecommend>
      </CartPagewrap>
    );
  }
}

export default Cart;
