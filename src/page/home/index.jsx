/**
 * Home组件
 */
import React from "react";
import { Link } from "react-router-dom";
import http from "axios";

import PageTitle from "../../components/page-title/index";
import "./index.scss";

class Home extends React.Component {
  constructor() {
    super();
    this.state = {
      userCount: "-",
      productCount: "-",
      orderCount: "-"
    };
  }

  componentDidMount() {
    this.loadCount();
  }

  loadCount() {
    http
      .get("/manage/statistic/base_count.do")
      .then(res => {
        this.setState({
          userCount: res.data.data.userCount,
          productCount: res.data.data.productCount,
          orderCount: res.data.data.orderCount
        });
      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    return (
      <div id="page-wrapper">
        <PageTitle title="首 页" />
        <div className="row">
          <div className="col-md-4">
            <Link to="/uset" className="color-box green">
              <p className="count">{this.state.userCount}</p>
              <p className="desc">
                <i className="fa fa-user-o" />
                <span>用户总数</span>
              </p>
            </Link>
          </div>
          <div className="col-md-4">
            <Link to="/product" className="color-box blue">
              <p className="count">{this.state.productCount}</p>
              <p className="desc">
                <i className="fa fa-list" />
                <span>商品总数</span>
              </p>
            </Link>
          </div>
          <div className="col-md-4">
            <Link to="/order" className="color-box brown">
              <p className="count">{this.state.orderCount}</p>
              <p className="desc">
                <i className="fa fa-check-square-o" />
                <span>订单总数</span>
              </p>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
