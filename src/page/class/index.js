import React, { Component } from "react";
import { ClasssBox } from "./style";
export class Classshow extends Component {
  render() {
    return (
      <ClasssBox>
        <div className="leftArea">
          <ul>
            <li>
              <div className="ico-mall list-tit">
                <h3>IP</h3>
              </div>
              <ul>
                <li className="">动漫</li>
                <li className="cur">游戏</li>
                <li className="">影视</li>
                <li className="">综艺</li>
              </ul>
            </li>
            <li>
              <div className="ico-mall list-tit">
                <h3>IP</h3>
              </div>
              <ul>
                <li className="">动漫</li>
                <li className="cur">游戏</li>
                <li className="">影视</li>
                <li className="">综艺</li>
              </ul>
            </li>
          </ul>
        </div>
        <div className="rightArea">
          <ul className="good-list">
            <li>
              <a
                href="http://localhost:3000/productlist?ip=408"
                className="good-link"
              >
                <div className="good-imgbox">
                  <img
                    src="https://game.gtimg.cn/images/zb/x5/uploadImg/goods/201902/20190221181846_80761.jpg"
                    className="good-img"
                  />
                </div>
                <p className="good-name">绝地求生</p>
              </a>
            </li>
            <li>
              <a
                href="http://localhost:3000/productlist?ip=408"
                className="good-link"
              >
                <div className="good-imgbox">
                  <img
                    src="https://game.gtimg.cn/images/zb/x5/uploadImg/goods/201902/20190221181846_80761.jpg"
                    className="good-img"
                  />
                </div>
                <p className="good-name">绝地求生</p>
              </a>
            </li>
            <li>
              <a
                href="http://localhost:3000/productlist?ip=408"
                className="good-link"
              >
                <div className="good-imgbox">
                  <img
                    src="https://game.gtimg.cn/images/zb/x5/uploadImg/goods/201902/20190221181846_80761.jpg"
                    className="good-img"
                  />
                </div>
                <p className="good-name">绝地求生</p>
              </a>
            </li>
            <li>
              <a
                href="http://localhost:3000/productlist?ip=408"
                className="good-link"
              >
                <div className="good-imgbox">
                  <img
                    src="https://game.gtimg.cn/images/zb/x5/uploadImg/goods/201902/20190221181846_80761.jpg"
                    className="good-img"
                  />
                </div>
                <p className="good-name">绝地求生</p>
              </a>
            </li>
            
          </ul>
        </div>
      </ClasssBox>
    );
  }
}

export default Classshow;
