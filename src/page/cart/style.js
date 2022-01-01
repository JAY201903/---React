import styled from "styled-components";

// 购物车页面
export const CartPagewrap = styled.div`
  height: 100%;
  overflow-y: auto;
`;
export const CartListCss = styled.div`
  width: 100%;
  overflow: hidden;
  background: #f3f4f6;
  .cart-item {
    margin-bottom: 1.33vw;
    position: relative;
    background: #fff;
  }
  .cart-item .item-hd {
    display: flex;
    align-items: center;
    padding: 0 2.66vw;
    height: 10.67vw;
    position: relative;
    &:after {
      position: absolute;
      right: 0;
      bottom: 0;
      left: 0;
      height: 1px;
      content: " ";
      transform: scaleY(0.5);
      transform-origin: 0 100%;
      border-bottom: 1px solid #eee;
    }
  }

  .cart-item .item-hd .btn-check {
    width: 5.87vw;
    display: flex;
    align-items: center;
    i {
      display: block;
      width: 5.33vw;
      height: 5.33vw;
      background-position: -57.375vw -16.375vw;
    }
    .i-checked {
      width: 5.6vw;
      background-position: -77.625vw -16.125vw;
    }
  }
  .cart-item .item-hd .item-hdimg {
    margin-left: 2.93vw;
    width: 6.4vw;
    height: 6.4vw;
    img {
      display: block;
      width: 6.4vw;
      height: 6.4vw;
    }
  }
  .cart-item .item-hd .item-hdname {
    margin-left: 1.33vw;
    margin-right: 1.33vw;
    box-sizing: border-box;
    flex: 1;
    font-size: 3.47vw;
    color: #383838;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
`;

// 结算
export const CartBtnbox = styled.div`
  height: 13.07vw;
  background: #fff;
  position: relative;
  &:before,
  &:after {
    position: absolute;
    right: 0;
    left: 0;
    height: 1px;
    content: " ";
    z-index: 3;
  }
  &:before {
    transform-origin: 0 0;
    border-top: 1px solid #eee;
    top: -1px;
    transform: scaleY(0.5);
  }
  &:after {
    transform: scaleY(0.5);
    transform-origin: 0 100%;
    border-bottom: 1px solid #eee;
  }
  .balance,
  .balance .btn-check {
    display: flex;
    align-items: center;
  }
  .balance {
    padding: 0 0 0 2.67vw;
    height: 13.07vw;
    .btn-check {
      width: 5.87vw;
      .i-check {
        display: block;
        width: 5.33vw;
        height: 5.33vw;
        background-position: -57.375vw -16.375vw;
      }
      .i-check.i-checked {
        width: 5.6vw;
        background-position: -77.625vw -16.125vw;
      }
    }
    .bal-txt {
      padding-left: 1.07vw;
      font-size: 3.2vw;
      color: #333;
    }
    .totalpri {
      box-sizing: border-box;
      flex: 1;
      padding: 2.67vw 2.4vw 0 0;
      text-align: right;
      .pri {
        height: 3.33vw;
        line-height: 3.33vw;
        color: #383838;
        font-size: 3.73vw;
        .red {
          color: #f7545f;
          strong {
            font-size: 4.53vw;
            font-weight: 400;
          }
        }
      }
      .pritip {
        margin-top: 1.33vw;
        font-size: 2.67vw;
        color: #7c7c7c;
      }
    }
    .btn-balance {
      display: block;
      width: 32vw;
      height: 13.07vw;
      line-height: 13.07vw;
      text-align: center;
      background: #ffd54f;
      font-size: 3.73vw;
      color: #333;
      border-radius: 0;
    }
  }
`;

// 推荐区
export const CartRecommend = styled.div`
  padding-bottom: 26.67vw;
  .listbox {
    padding: 0 2.67vw;
    margin-bottom: 1.73vw;
    .list-tit {
      margin-top: 4.67vw;
      height: 4.67vw;
      line-height: 4.67vw;
      display: flex;
      justify-content: center;
      align-items: center;
      h3 {
        color: #333;
        font-size: 4.8vw;
        position: relative;
        :before,
        :after {
          position: absolute;
          top: 1.33vw;
          width: 1.73vw;
          height: 0.67vw;
          content: "";
          border-bottom: 0.67vw solid #333;
        }
        &:before {
          left: -3.47vw;
        }
        &:after {
          right: -3.47vw;
        }
      }
    }
    .goods-list {
      margin-top: 4vw;
      margin-left: -1.33vw;
      font-size: 0;
    }
  }
`;
