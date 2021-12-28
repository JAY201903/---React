import React, { Component } from "react";
import { GoodsCss } from "./style";
class GoodDemo extends Component {
  constructor(props) {
    super(props);
    // this.state = {
    //   sMallName: this.props.sMallName,
    //   sProfileImg: this.props.sProfileImg,
    //   iCurrPrice: this.props.iCurrPrice,
    //   isPromote: this.props.isPromote,
    // };
  }
  render() {
    const { sMallName, sProfileImg, iCurrPrice, isPromote, iOriPrice } =
      this.props;
    return (
      <GoodsCss>
        <a href="/lol/detail/21551" className="list-link">
          <div className="list-img">
            <img src={sProfileImg} />
          </div>
          <div className="list-bd">
            <div className="name">
              <h5>{sMallName}</h5>
            </div>
            <div className="price">
              <p className="new-pri">¥ {iCurrPrice}</p>
              {iOriPrice && <p className="old-pri">¥ {iOriPrice}</p>}
            </div>
          </div>
        </a>
      </GoodsCss>
    );
  }
}

export default GoodDemo;
