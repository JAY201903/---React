import React, { Component } from "react";
import { Noti, SwiperBox, IndexTab, GoodsListbox } from "./style";
import { Swiper, Toast } from "antd-mobile";
import { Link } from "react-router-dom";
import { ProductDemo } from "../../components/ProductDemo/index";

const colors = [
  "https://game.gtimg.cn/images/daojushop/zb/ad/202111/20211102155644_561786.jpg",
  "https://game.gtimg.cn/images/daojushop/zb/ad/202111/20211101082655_366670.jpg",
  "https://game.gtimg.cn/images/daojushop/zb/ad/202110/20211026222345_111736.jpg",
  "https://game.gtimg.cn/images/daojushop/zb/ad/202110/20211015160006_966563.jpg",
  "https://game.gtimg.cn/images/daojushop/zb/ad/202109/20210923210722_713150.jpg",
];

const items = colors.map((color, index) => (
  <Swiper.Item key={index}>
    <div
      onClick={() => {
        Toast.show(`你点击了卡片 ${index + 1}`);
      }}
    >
      <img src={color} className="banning"></img>
    </div>
  </Swiper.Item>
));
class Home extends Component {
  constructor() {
    super();
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
      <>
        <div style={{ height: "100%", "overflowY": "auto" }}>
          {/* 通知栏 */}
          <Noti>
            <i className="ico-mall i-notice"></i>
            <div className="swiperBox">
              <Swiper indicator={() => null} autoplay>
                <Swiper.Item key="1">
                  <div
                    onClick={() => {
                      Toast.show(`你点击了卡片 1`);
                    }}
                  >
                    1111111
                  </div>
                </Swiper.Item>
                <Swiper.Item key="2">
                  <div
                    onClick={() => {
                      Toast.show(`你点击了卡片 2`);
                    }}
                  >
                    22222
                  </div>
                </Swiper.Item>
              </Swiper>
            </div>
            <a href="/lol/notice" className="notiLink">
              <i className="ico-mall ico-arrow"></i>
            </a>
          </Noti>
          {/* 跑马灯 */}
          <SwiperBox>
            <Swiper
              autoplay
              indicatorProps={{
                style: {
                  "--active-dot-color": "#ffd54f",
                },
              }}
            >
              {items}
            </Swiper>
          </SwiperBox>

          {/* tab */}
          <IndexTab>
            <ul>
              <li>
                <Link to="/lol/class" className="tab-link">
                  <div className="tab-cell">
                    <img
                      src="https://game.gtimg.cn/images/daojushop/zb/ad/201804/20180418185711_967521.png"
                      className="ico-tab"
                    />
                    <h5>全部周边</h5>
                  </div>
                </Link>
              </li>
              <li>
                <Link to="/lol/class" className="tab-link">
                  <div className="tab-cell">
                    <img
                      src="https://game.gtimg.cn/images/daojushop/zb/ad/201804/20180418185735_830332.png"
                      className="ico-tab"
                    />
                    <h5>新品尝鲜</h5>
                  </div>
                </Link>
              </li>
              <li>
                <Link to="/lol/class" className="tab-link">
                  <div className="tab-cell">
                    <img
                      src="https://game.gtimg.cn/images/daojushop/zb/ad/201804/20180418185749_703907.png"
                      className="ico-tab"
                    />
                    <h5>人气爆款</h5>
                  </div>
                </Link>
              </li>
              <li>
                <Link to="/lol/class" className="tab-link">
                  <div className="tab-cell">
                    <img
                      src="https://game.gtimg.cn/images/daojushop/zb/ad/201804/20180418185806_972677.png"
                      className="ico-tab"
                    />
                    <h5>生活用品</h5>
                  </div>
                </Link>
              </li>
            </ul>
          </IndexTab>

          {/* 推荐转区 */}
          <GoodsListbox>
            {/* 精品推荐 */}
            <div className="listbox">
              <div className="list-tit">
                <h3>精品推荐</h3>
              </div>
              <ul className="goods-lists">
                <ProductDemo></ProductDemo>
              </ul>
            </div>
            {/* 服饰专区 */}
            <div className="listbox">
              <div className="list-tit">
                <h3>服饰专区</h3>
              </div>
              <ul className="goods-lists">
                <ProductDemo></ProductDemo>
              </ul>
            </div>
            <Link to="/lol/class" className="ach-more">
              <div>
                <span>查看全部商品</span> <i className="ico-mall ico-arrow"></i>
              </div>
            </Link>
          </GoodsListbox>
        </div>
      </>
    );
  }
}

export default Home;
