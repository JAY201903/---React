import styled from "styled-components";

// 没有商品时
export const NoGoodsBox = styled.div`
  height: 100%;
  overflow-y: auto;
  .com-msgbox {
    padding: 26.666vw 0 13.33vw;
    width: 100%;
    text-align: center;
    .ico-mall {
      margin: 0 auto 2.67vw;
      display: block;
    }
    .ico-mall.i-cart {
      width: 15.46vw;
      height: 14.665vw;
      background-position: -0.25vw -95.5vw;
    }
  }
  .com-msgbox .msg {
    color: #999;
    font-size: 3.47vw;
  }
  .com-msgbox .btn-com {
    margin: 5.33vw auto 0;
    text-align: center;
    display: block;
    width: 32vw;
    height: 9.065vw;
    line-height: 9.06vw;
    border-radius: 5.87vw;
    background: #ffd54f;
    color: #333;
    font-size: 3.73vw;
  }
`;
