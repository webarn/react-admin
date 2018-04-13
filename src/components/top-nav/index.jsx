import React from "react";
import { Link } from "react-router-dom";

export default class TopNav extends React.Component {
  constructor() {
    super();
    this.state = {
      user: "admin"
    };
  }

  //退出登录
  logout() {
    alert("退出成功");
    this.setState({
      user: "已退出"
    });
  }

  render() {
    return (
      <div className="navbar navbar-default top-navbar">
        <div className="navbar-header">
          <Link className="navbar-brand" to="/">
            <b>HELLO</b>WEB
          </Link>
        </div>

        <ul className="nav navbar-top-links navbar-right">
          <li className="dropdown">
            <span className="dropdown-toggle">
              <i className="fa fa-user fa-fw" />
              <span>欢迎, {this.state.user}</span>
              <i className="fa fa-caret-down" />
            </span>
            <ul className="dropdown-menu dropdown-user">
              <li>
                <span>
                  <i className="fa fa-gear fa-fw" /> Settings
                </span>
              </li>
              <li className="divider" />
              <li>
                <span onClick={() => this.logout()}>
                  <i className="fa fa-sign-out fa-fw" /> Logout
                </span>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    );
  }
}
