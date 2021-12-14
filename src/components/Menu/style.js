import styled from "styled-components";

export const MenuContent = styled.div`
  position: fixed;
  top: auto;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 13.07vw;
  z-index: 100;
  box-sizing: border-box;
  background: #fff;
  ul {
    display: flex;
    justify-content: center;
    flex-direction: row;
    height: 100%;
    text-align: center;
    li {
      width: 25%;
      height: 13.07vw;
      display: flex;
      justify-content: center;
      box-sizing: border-box;
      flex: auto;
      flex-grow: 1;
      flex-direction: column;
      .menu-link {
        width: 100%;
        display: flex;
        justify-content: center;
        box-sizing: border-box;
        flex: auto;
        flex-grow: 1;
        align-items: center;
        /* 背景图片未选中的情况 */
        .menu-home {
          width: 6.1312vw;
          height: 6.3968vw;
          background-position: -14.75vw -29.25vw;
        }
        .menu-class {
          width: 6.1312vw;
          height: 6.3968vw;
          background-position: -0.75vw -29.25vw;
        }
        .menu-cart {
          width: 6.1312vw;
          height: 6.3968vw;
          background-position: -69.25vw -22.25vw;
        }
        .menu-mine {
          width: 6.1312vw;
          height: 6.3968vw;
          background-position: -36.75vw -29.25vw;
        }
        /* 背景图片选中的情况 */
        &.active {
          .menu-home {
            background-position: -22vw -29.375vw;
          }
          .menu-class {
            background-position: -7.75vw -29.375vw;
          }
          .menu-cart {
            background-position: -84vw -22.25vw;
          }
          .menu-mine {
            background-position: -29.25vw -29.375vw;
          }
        }
      }
      .menu-cell {
        .ico-mall {
          display: block;
          margin: 0 auto;
        }
        h5 {
          color: #a3a7ad;
          font-size: 2.4vw;
          line-height: 2.67vw;
          margin-top: 1.07vw;
        }
      }
      .active h5 {
        color: #333;
      }
    }
  }
`;
