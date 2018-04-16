import React, { Component } from "react";
import Pagination from "rc-pagination";
import "rc-pagination/assets/index.css";

class PageNum extends Component {
  render() {
    return (
      <div className="row">
        <div className="col-md-12">
          <Pagination {...this.props} hideOnSinglePage showQuickJumper />
        </div>
      </div>
    );
  }
}

export default PageNum;
