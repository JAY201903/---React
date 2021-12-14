import React from "react";
import { Route, Switch, BrowserRouter,Redirect } from "react-router-dom";
import Home from "../page/home/index";
import Classshow from "../page/class/index";
import Cart from "../page/cart/index";
import Mine from "../page/mine/index";
import Navigation from "../page/navigation/index";
const RouterConfig = () => (
  // <BrowserRouter>
  <Switch>
    {/* <Route exact path="/" component={Navigation}></Route> */}
    <Route path="/" component={Navigation}></Route>
    {/* <Route path="/lol/home" component={Home}></Route>
    <Route path="/lol/class" component={Classshow}></Route>
    <Route path="/lol/cart" component={Cart}></Route>
    <Route path="/lol/center" component={Mine}></Route> */}
  </Switch>
  // </BrowserRouter>
);

export default RouterConfig;
