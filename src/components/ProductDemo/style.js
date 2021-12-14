import styled from "styled-components";

export const GoodDemo = styled.li`
  margin-bottom: 2.67vw;
  padding-left: 1.33vw;
  width: 50%;
  border-radius: 1.33vw;
  box-sizing: border-box;
  display: inline-block;
  vertical-align: top;
  .list-link {
    width: 100%;
    height: auto;
    .list-img {
      background: #eee;
      img {
        display: block;
        width: 100%;
        height: 100%;
      }
    }
    .list-bd {
      padding: 2.67vw 2.4vw;
      height: 20vw;
      overflow: hidden;
      text-align: left;
      .name h5 {
        font-size: 3.73vw;
        line-height: 4.53vw;
        color: #333;
        overflow: hidden;
        text-overflow: ellipsis;
      }
      .price {
        margin-top: 1.67vw;
        line-height: 4.27vw;
        .new-pri {
          font-size: 4vw;
          color: #f7545f;
        }
      }
    }
  }
`;
