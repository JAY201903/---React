import React, { Component } from "react";
import { Toast } from "antd-mobile";
import { connect } from "react-redux";
import store from "../../store/index";
import NoGoods from "./component/noGoods/index";
import GoodDemo from "../../components/GoodDemo/index";
import { CartPagewrap, CartListCss, CartBtnbox, CartRecommend } from "./style";
import { Goods } from "./component/goods/index";
import { selectOrCancelGood, updateCart } from "./actions";
import { a, recommendGoods } from "./const";
import { anewCalculateTotalPrice } from "./util";
class Cart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      recommendGoodsList: [],
    };
    this.onClickAll = this.onClickAll.bind(this);
  }
  componentDidMount() {
    if (a.success) {
      // this.setState({
      //   cartList: a.data,
      // });
      store.dispatch(updateCart(a.data));
    }
    if (recommendGoods.success) {
      this.setState({
        recommendGoodsList: recommendGoods.data,
      });
    }
  }
  onClickAll() {
    var { cartList, selectGoodsArray } = this.props;
    // 获取购物车商品的长度，跟redux选中set的长度判断
    if (cartList.length == selectGoodsArray.length) {
      // 如果两者相同，说明商品是全部选中状态，就要设置全部未选中
      store.dispatch(selectOrCancelGood([]));
    } else {
      // 如果两者相同，说明商品还没全部选中，就要设置全部选中
      const newSelectGoodsArray = cartList.map((item) => {
        return item.iCartId;
      });
      store.dispatch(selectOrCancelGood(newSelectGoodsArray));
    }
    anewCalculateTotalPrice();
  }
  render() {
    const { cartList, goodsTotalPrice, selectGoodsArray } = this.props;
    if (!this.props.cartList || this.props.cartList.length == 0) {
      return <NoGoods></NoGoods>;
    }
    return (
      <CartPagewrap>
        <CartListCss>
          <div className="cart-item">
            {/* 商家 */}
            <div className="item-hd">
              <span className="btn-check" onClick={this.onClickAll}>
                <i
                  className={`ico-mall i-check ${
                    cartList.length == selectGoodsArray.length
                      ? "i-checked"
                      : ""
                  }`}
                ></i>
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
            {cartList &&
              cartList.map((item) => {
                return (
                  <Goods
                    key={item.iCartId}
                    iCartId={item.iCartId}
                    sGoodsId={item.sGoodsId}
                    total={item.iTotal}
                    maxBuyNum={item.maxNum}
                    goodsInfo={item.goodsInfo}
                    isCheck={selectGoodsArray.includes(item.iCartId)}
                  ></Goods>
                );
              })}
            {/* 结算 */}
            <CartBtnbox>
              <div className="balance">
                <span className="btn-check" onClick={this.onClickAll}>
                  <i
                    className={`ico-mall i-check ${
                      cartList.length == selectGoodsArray.length
                        ? "i-checked"
                        : ""
                    }`}
                  ></i>
                </span>
                <p className="bal-txt">全选</p>
                <div className="totalpri">
                  <p className="pri">
                    合计：
                    <span className="red">
                      <strong>¥ {goodsTotalPrice}</strong>
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

const mapStateToProps = (state) => {
  return {
    cartList: state.shopCar.cartList,
    goodsTotalPrice: state.shopCar.goodsTotalPrice,
    selectGoodsArray: state.shopCar.selectGoodsArray,
  };
};
// Cart = connect(mapStateToProps)(Cart)
// export default Cart;
export default connect(mapStateToProps)(Cart);
