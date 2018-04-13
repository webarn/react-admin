/**
 * Layout组件
 */

import React from "react";

import TopNav from "../top-nav/index";
import SideNav from "../side-nav/index";
import "./theme.css";

class Layout extends React.Component {
  render() {
    return (
      <div id="wrapper">
        <TopNav />
        <SideNav />
        {this.props.children}
      </div>
    );
  }
}

export default Layout;
