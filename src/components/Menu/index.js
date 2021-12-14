import React, { Component,useRef } from "react";
import { MenuContent } from "./style";
import { Route,NavLink } from "react-router-dom";
import Home from '../../page/home/index'
import Classshow from '../../page/class/index'
import Cart from '../../page/cart/index'
class Menu extends Component {
  render() {
    return (
      <MenuContent>
        <ul>
          <li>
            <NavLink to="/" className="menu-link">
              <div className="menu-cell">
                <i className="ico-mall menu-home"></i>
                <h5>首页</h5>
              </div>
            </NavLink>
          </li>
          <li>
            <NavLink to="/lol/class" className="menu-link">
              <div className="menu-cell">
                <i className="ico-mall menu-class"></i>
                <h5>分类</h5>
              </div>
            </NavLink>
          </li>
          <li>
            <NavLink to="/lol/cart" className="menu-link">
              <div className="menu-cell">
                <i className="ico-mall menu-cart"></i>
                <h5>购物车</h5>
              </div>
            </NavLink>
          </li>
          <li>
            <NavLink to="/lol/center" className="menu-link">
              <div className="menu-cell">
                <i className="ico-mall menu-mine"></i>
                <h5>我</h5>
              </div>
            </NavLink>
          </li>
        </ul>
      </MenuContent>
    );
  }
}

export default Menu;

