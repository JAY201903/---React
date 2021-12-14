import styled from "styled-components";

export const Noti = styled.div`
  padding: 0 2.67vw 0 4vw;
  height: 8.53vw;
  background: #fff8e4;
  display: flex;
  justify-content: center;
  align-items: center;
  .i-notice {
    display: block;
    width: 8.53vw;
    height: 4.93vw;
    background-position: -60vw -98vw;
  }

  .swiperBox {
    margin: 0 1.6vw;
    height: 8.53vw;
    box-sizing: border-box;
    flex: 1;
    font-size: 2.4vw;
    color: #333;
    line-height: 6.4vw;
    white-space: nowrap;
    overflow: hidden;
    display: flex;
  }

  .notiLink .ico-arrow {
    display: block;
    width: 3.33vw;
    height: 2.93vw;
    background-position: -13.625vw -17.25vw;
  }
`;

// 跑马灯区域  css
export const SwiperBox = styled.div`
  width: 100%;
  height: auto;
  position: relative;
  .banning {
    width: 100%;
    height: auto;
  }
`;

// tab
export const IndexTab = styled.div`
  width: 100%;
  height: 24vw;
  background: #fff;
  ul {
    display: flex;
    justify-content: center;
    flex-direction: row;
    height: 100%;
    text-align: center;
    li {
      width: 25%;
      height: 100%;
      display: flex;
      justify-content: center;
      box-sizing: border-box;
      flex: 1;
      flex-direction: column;
      .tab-link {
        width: 100%;
        flex: auto;
        flex-grow: 1;
        display: flex;
        box-sizing: border-box;
        justify-content: center;
        align-items: center;
      }
      .ico-tab {
        display: block;
        margin: 0 auto;
        width: 11.73vw;
        height: 11.73vw;
      }
      .tab-cell h5 {
        color: #333;
        font-size: 3.2vw;
        line-height: 3.33vw;
        margin-top: 2vw;
      }
    }
  }
`;

// 推荐转区
export const GoodsListbox = styled.div`
  position: relative;
  padding-bottom: 10vw;
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
        &:before,
        &:after {
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
  }
  .goods-lists {
    margin-top: 4vw;
    margin-left: -1.33vw;
    font-size: 0;
  }

  .ach-more {
    width: 24vw;
    height: 6.4vw;
    position: relative;
    display: block;
    margin: 2.67vw auto;
    font-size: 3.2vw;
    color: #333;
    div {
      width: 24vw;
      height: 6.4vw;
      position: relative;
      display: flex;
      justify-content: center;
      align-items: center;
      text-indent: -4vw;
      .ico-arrow {
        position: absolute;
        top: 1.87vw;
        right: 0;
        display: block;
        width: 3.33vw;
        height: 2.94vw;
        background-position: -13.625vw -17.25vw;
      }
    }
  }
`;
