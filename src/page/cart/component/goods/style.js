import styled from "styled-components";

// 购物车商品
export const ItemOrder = styled.div`
  position: relative;
  .order-good {
    padding: 3.07vw 2.67vw;
    position: relative;
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
  .good-item {
    display: flex;
    position: relative;
    /* 复选框 */
    .btn-check {
      position: absolute;
      left: 0;
      top: 50%;
      margin-top: -2.67vw;
      display: flex;
      align-items: center;
      width: 5.87vw;
      .i-check {
        display: block;
        width: 5.33vw;
        height: 5.33vw;
        background-position: -57.375vw -16.375vw;
      }
      .i-checked {
        width: 5.60vw;
        background-position: -77.625vw -16.125vw;
      }
    }
    /* 商品图片 */
    .good-img {
      margin-left: 8.27vw;
      margin-right: 2.67vw;
      width: 24vw;
      height: 21.6vw;
      position: relative;
      display: block;
      box-sizing: border-box;
      img {
        display: block;
        width: 24vw;
        height: 21.6vw;
      }
    }
    /* 商品规格 */
    .good-info {
      box-sizing: border-box;
      flex: 1;
      overflow: hidden;
      .info-hd {
        display: flex;
        .info-name {
          box-sizing: border-box;
          flex: 1;
          display: block;
          margin-right: 3.73vw;
          line-height: 4.27vw;
          font-size: 3.2vw;
          color: #333;
          overflow: hidden;
          text-overflow: ellipsis;
        }
        .btn-edit {
          display: block;
          width: 4.67vw;
          height: 4.4vw;
          background-position: -49.25vw -28.75vw;
          text-indent: -999em;
        }
      }
      .info-size {
        line-height: 5.07vw;
        min-height: 5.07vw;
        font-size: 2.93vw;
        color: #7c7c7c;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
      .info-tip {
        line-height: 5.07vw;
        min-height: 5.07vw;
        font-size: 2.93vw;
        color: #f7545f;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
      /* 商品价格css */
      .info-bd {
        display: flex;
        .info-price {
          display: flex;
          box-sizing: border-box;
          flex: 1;
          h4 {
            font-size: 3.47vw;
            color: #f7545f;
          }
          .i-primark {
            display: flex;
            justify-content: center;
            align-items: center;
            margin-top: 0.67vw;
            margin-left: 1.33vw;
            height: 3.2vw;
            padding: 0 0.67vw;
            font-size: 2.4vw;
            color: #f7545f;
            border: 1px solid #f7545f;
          }
          .amount-counter {
            font-size: 0;
            display: inline-block;
            vertical-align: top;
            width: 21.33vw;
            height: 6.13vw;
            position: relative;
          }
        }
      }
    }
    /* 点击编辑之后 */
    .good-editbox {
      display: flex;
      flex: 1;
      box-sizing: border-box;
      .edit-info {
        box-sizing: border-box;
        flex: 1;
        .amount-counter {
          width: 29.33vw;
        }
        .amount-text {
          width: 15.87vw;
        }
        /* 规格选择 */
        .goods-edit {
          margin-top: 2.67vw;
          width: 29.33vw;
          height: 6.13vw;
          -webkit-box-sizing: border-box;
          box-sizing: border-box;
          position: relative;
          &:before {
            position: absolute;
            right: 0;
            top: 0;
            left: 0;
            height: 1px;
            content: " ";
            transform: scaleY(0.5);
            transform-origin: 0 0;
            border-top: 1px solid #e5e5e5;
          }
          &:after {
            position: absolute;
            right: 0;
            bottom: 0;
            left: 0;
            height: 1px;
            content: " ";
            transform: scaleY(0.5);
            transform-origin: 0 100%;
            border-bottom: 1px solid #e5e5e5;
          }
          .editbr {
            position: relative;
            width: 29.33vw;
            height: 6.13vw;
            line-height: 6.13vw;
            display: flex;
            justify-content: center;
            align-items: center;
            :before {
              position: absolute;
              top: 0;
              bottom: 0;
              left: 0;
              width: 1px;
              content: " ";
              transform: scaleX(0.5);
              transform-origin: 0 0;
              border-left: 1px solid #e5e5e5;
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
              border-right: 1px solid #e5e5e5;
            }
            span {
              box-sizing: border-box;
              flex: 1;
              text-indent: 1.87vw;
              display: block;
              overflow: hidden;
              text-overflow: ellipsis;
              white-space: nowrap;
              font-size: 2.93vw;
              color: #7c7c7c;
            }
            .i-arrdown {
              margin-right: 2.13vw;
              display: block;
              width: 2vw;
              height: 1.33vw;
              background-position: -3vw -50vw;
            }
          }
        }
      }
      /* 完成删除按钮 */
      .edit-action {
        margin-right: -2.67vw;
        width: 26.67vw;
        height: 100%;
        position: relative;
        display: flex;
        justify-content: center;
        a {
          position: absolute;
          top: -3.07vw;
          right: 0;
          display: flex;
          justify-content: center;
          align-items: center;
          width: 13.33vw;
          height: 27.73vw;
          font-size: 3.2vw;
          color: #fff;
          background: #ff433a;
        }
        a.btn-finish {
          right: 13.33vw;
          background: #ffd54f;
          color: #333;
        }
      }
    }
  }
`;
