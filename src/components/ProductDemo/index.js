import React, { Component } from "react";
import { GoodDemo } from "./style";

export class ProductDemo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // 推荐商品信息
      goods: [],
      // 没有商品时显示
      // NoGoodsVisible: false,
      // 购物车商品信息
      // goodsList: this.props.cartlist,
      // 计算总价
      totalPrices: 0.0,
      // 判断是否全选
      allSelect: 0,
    };
    // this.UnSelectAll = this.UnSelectAll.bind(this)
    // this.setState({
    //     goods
    // })
  }
  render() {
    return (
      <GoodDemo>
        <div className="list-link">
          {/* 商品图片 */}
          <div className="list-img">
            <img src="https://game.gtimg.cn/images/daojushop/zb/ad/202109/20210908174331_798018.jpg" />
          </div>
          {/* 商品标题及价格 */}
          <div className="list-bd">
            {/* 标题 */}
            <div className="name">
              <h5>【定金】APEX联名-源计划 联合艾希1/8可动手办</h5>
            </div>
            {/* 价格 */}
            <div className="price">
              <p className="new-pri">¥ 150.00</p>
            </div>
          </div>
        </div>
      </GoodDemo>
    );
  }
}

export default ProductDemo;
