import styled from "styled-components";

export const GoodsCss = styled.li`
  margin-bottom: 2.67vw;
  padding-left: 1.33vw;
  width: 50%;
  position: relative;
  box-sizing: border-box;
  display: inline-block;
  vertical-align: top;
  border-radius: 1.33vw;
  .list-link {
    display: block;
    width: 100%;
    height: auto;
    position: relative;
  }
  .list-img {
    position: relative;
    z-index: 1;
    background: #eee;
    padding-top: 96.66666666666667%;
    img {
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
  .list-bd {
    padding: 2.67vw 2.4vw;
    height: 14.67vw;
    position: relative;
    overflow: hidden;
    z-index: 1;
    text-align: left;
    background: #fff;
    box-sizing: content-box;
    .name {
      h5 {
        font-size: 3.73vw;
        line-height: 4.53vw;
        color: #333;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        min-height: 9.06vw;
      }
    }
    .price {
      display: flex;
      align-items: center;
      justify-content: flex-start;
      line-height: 4.27vw;
      .new-pri {
        font-size: 4vw;
        color: #f7545f;
      }
      .old-pri {
        margin-left: 1.07vw;
        font-size: 3.47vw;
        color: #999;
        text-decoration: line-through;
      }
    }
  }
`;