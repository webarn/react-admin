/**
 * Home组件
 */
import React from "react";

import PageTitle from "../../components/page-title/index";
import "./index.css";

class Home extends React.Component {
  render() {
    return (
      <div id="page-wrapper">
        <PageTitle title="首 页">
          <button className="btn btn-warning">按 钮</button>
        </PageTitle>
        <div className="row">
          <div className="col-md-12">col-md-12</div>
        </div>
      </div>
    );
  }
}

export default Home;
