import styled from "styled-components";

export const PopupArea = styled.div`
  height: 96vw;
`;
export const PopupGoodAttr = styled.div`
  padding: 0 4vw;
  height: 82.67vw;
  overflow-y: auto;
  .pop-cart-hd {
    height: 24vw;
    display: flex;
    align-items: center;
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
    .pop-good-img {
      position: relative;
      width: 21.33vw;
      height: 20.4vw;
      box-sizing: border-box;
      img {
        display: block;
        width: 21.33vw;
        height: 20.4vw;
      }
      .pop-good-zoom {
        position: absolute;
        top: 50%;
        left: 50%;
        margin-top: -4.27vw;
        margin-left: -4.27vw;
        z-index: 100;
        width: 8.53vw;
        height: 8.53vw;
        border-radius: 50%;
        background: #000;
        opacity: 0.5;
        display: flex;
        justify-content: center;
        align-items: center;
        .btn-search {
          display: block;
          width: 4.67vw;
          height: 4.67vw;
          background-position: -63.375vw -22.25vw;
        }
      }
    }
    .pop-cart-info {
      margin-left: 2.67vw;
      box-sizing: border-box;
      flex: 1;
      overflow: hidden;
      .pop-cart-pri {
        padding-bottom: 1.33vw;
        font-size: 4.8vw;
        line-height: 4.8vw;
        color: #f7545f;
      }
      .pop-cart-kc {
        font-size: 3.2vw;
        color: #999;
      }
      .pop-cart-result {
        margin-top: 1.33vw;
        font-size: 3.2vw;
        color: #333;
        height: 4vw;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
    }
  }
  .good-spec {
    .area-item {
      padding-top: 2.4vw;
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
      .item-label {
        font-size: 3.2vw;
        color: #333;
      }
      .item-panel {
        margin-top: 2.67vw;
        height: auto;
        ul li {
          margin-right: 2.67vw;
          margin-bottom: 2.67vw;
          display: inline-block;
          height: 7.2vw;
          line-height: 7.2vw;
          text-align: center;
          padding: 0 4vw;
          font-size: 3.73vw;
          color: #333;
          border: 1px solid #eee;
          border-radius: 3.6vw;
          &.cur {
            color: #f7545f;
            border-color: #f7545f;
          }
        }
      }
    }
    .area-amount {
      margin-top: 2.67vw;
      display: flex;
      justify-content: center;
      .amoutTitle {
        box-sizing: border-box;
        flex: 1;
        font-size: 3.2vw;
        color: #333;
      }
      /* 购物车加减按钮 */
      .amount-counter {
        width: 21.33vw;
        font-size: 0;
        display: inline-block;
        vertical-align: top;
        height: 6.13vw;
        position: relative;
        &:before {
          position: absolute;
          right: 0;
          left: 0;
          height: 1px;
          content: " ";
          transform-origin: 0 0;
          border-top: 1px solid #eee;
          top: 0;
          transform: scaleY(0.5);
        }
        &:after {
          position: absolute;
          right: 0;
          left: 0;
          height: 1px;
          content: " ";
          bottom: 0;
          transform: scaleY(0.5);
          transform-origin: 0 100%;
          border-bottom: 1px solid #eee;
        }
        .amount-minus,
        .amount-plus {
          font-size: 4.8vw;
          line-height: 6.13vw;
          position: relative;
          display: inline-block;
          width: 6.67vw;
          height: 6.13vw;
          user-select: none;
          text-align: center;
          vertical-align: top;
          color: #bebebe;
          background: #f1f1f1;
          :before {
            position: absolute;
            top: 0;
            bottom: 0;
            left: 0;
            width: 1px;
            content: " ";
            transform: scaleX(0.5);
            transform-origin: 0 0;
            border-left: 1px solid #eee;
          }
          :after {
            position: absolute;
            top: 0;
            right: 0;
            bottom: 0;
            width: 1px;
            content: " ";
            transform: scaleX(0.5);
            transform-origin: 100% 0;
            border-right: 1px solid #eee;
          }
        }
        .amount-text {
          font-size: 3.2vw;
          line-height: 6.13vw;
          display: inline-block;
          width: 7.99vw;
          height: 6.13vw;
          text-align: center;
          vertical-align: top;
          color: #333;
          border: none;
          background: #fff;
          outline: none;
        }
      }
    }
  }
`;
export const PopCartAct = styled.div`
  display: flex;
  height: 13.33vw;
  text-align: center;
  div {
    display: block;
    box-sizing: border-box;
    flex: 1;
    height: 100%;
    line-height: 13.33vw;
    font-size: 4.00vw;
    color: #fff;
  }
  .btn-yellow {
    background: #f6b552;
  }
  .btn-red {
    background: #f7545f;
  }
`;
