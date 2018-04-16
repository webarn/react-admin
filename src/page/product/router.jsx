import React, { Component } from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import ProductList from "./index/index";
import CategorytList from "./category/index";

class ProductRoute extends Component {
  render() {
    return (
      <Switch>
        <Route path="/product/index" component={ProductList} />
        <Route path="/product-category/index" component={CategorytList} />

        <Redirect exact from="/product" to="/product/index" />
        <Redirect exact from="/product-category" to="/product-category/index" />
      </Switch>
    );
  }
}

export default ProductRoute;
