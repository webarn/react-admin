import React, { Component } from "react";
import { Link } from "react-router-dom";
import PageTitle from "../../components/page-title";

class Error extends Component {
  render() {
    return (
      <div id="page-wrapper">
        <PageTitle title="404" />
        <p>找不到该页面!</p>
        <Link to="/">返回主页</Link>
      </div>
    );
  }
}

export default Error;
