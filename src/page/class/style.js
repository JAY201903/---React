import styled from "styled-components";

export const ClasssBox = styled.div`
  display: flex;
  flex-flow: row;
  .leftArea {
    flex: 0 1 26.67vw;
    overflow-y: auto;
    ul {
      width: 26.67vw;
      background: #f4f4f4;
      box-sizing: border-box;
      z-index: 10;
      text-align: center;
      li {
        width: 100%;
        height: auto;
        .list-tit {
          height: 13.33vw;
          line-height: 13.33vw;
          display: flex;
          justify-content: center;
          align-items: center;
          background-position: -35.625vw -49.375vw;
          h3 {
            width: 100%;
            color: #999;
            font-size: 3vw;
            position: relative;
            &:before,
            &:after {
              position: absolute;
              background: #ccc;
              content: "";
              height: 1px;
              top: 50%;
              width: 5vw;
            }
            &:before {
              left: 5vw;
            }
            &:after {
              right: 5vw;
            }
          }
        }
        ul li {
          position: relative;
          height: 9.6vw;
          line-height: 9.6vw;
          font-size: 3.47vw;
          color: #333;
          &.cur {
            font-weight: 700;
            background: #fff;
          }
          &.cur:before {
            position: absolute;
            top: 0;
            width: 1.07vw;
            left: 0;
            height: 9.6vw;
            content: "";
            background: #ffd54f;
          }
          &.cur:after {
            position: absolute;
            top: 0;
            width: 0.27vw;
            right: 0;
            height: 9.6vw;
            content: "";
            background: #fff;
            z-index: 10;
          }
        }
      }
    }
  }
  .rightArea {
    display: flex;
    flex: auto;
    /* flex-flow: column; */
    overflow-y: auto;
    padding: 0 2vw;
    z-index: 10;
    box-sizing: border-box;
    background: #fff;
    .good-list {
      width: 100%;
      li {
        margin-bottom: 5.33vw;
        padding-left: 1.33vw;
        width: 33.333333%;
        position: relative;
        box-sizing: border-box;
        display: inline-block;
        vertical-align: top;
        .good-link {
          display: block;
          width: 100%;
          height: auto;
          position: relative;
          text-align: center;
          .good-imgbox {
            position: relative;
            z-index: 1;
            padding-top: 134.28571%;
            .good-img {
              position: absolute;
              top: 0;
              right: 0;
              bottom: 0;
              left: 0;
              display: block;
              width: 100%;
              height: 100%;
            }
          }
          .good-name {
            margin-top: 2vw;
            text-align: center;
            font-size: 3vw;
            color: #666;
          }
        }
      }
    }
  }
`;
