import React, { Component } from "react";
import { NoGoodsBox } from "./style";
class NoGoods extends Component {
  render() {
    return (
      <NoGoodsBox>
        <div className="com-msgbox">
          <i className="ico-mall i-cart"></i>{" "}
          <div className="msg">购物车好空呀，快去选购吧~</div>
          <a href="/lol" className="btn-com">
            去逛逛
          </a>
        </div>
      </NoGoodsBox>
    );
  }
}

export default NoGoods;
