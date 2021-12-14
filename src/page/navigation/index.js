import React, { Component } from "react";
import { Redirect, Route, Switch} from "react-router-dom";
import Menu from "../../components/Menu/index";
import Home from "../home/index";
import Classshow from "../class/index";
import Cart from "../cart/index";
import Mine from "../mine/index";

class Navigation extends Component {
  render() {
    return (
      <div>
        <Switch>
          
          <Route exact path="/lol/class" component={Classshow}></Route>
          <Route exact path="/lol/cart" component={Cart}></Route>
          <Route exact path="/lol/center" component={Mine}></Route>
          <Route exact path="/lol" component={Home}></Route>
          <Redirect path='/' to='/lol'></Redirect>
        </Switch>
        <Menu></Menu>
      </div>
    );
  }
}
export default Navigation;
