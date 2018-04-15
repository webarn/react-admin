import React from "react";
import { Link } from "react-router-dom";

import Util from "../../util/mm";
import User from "../../service/user";

const _mm = new Util();
const _user = new User();

export default class TopNav extends React.Component {
  constructor() {
    super();
    this.state = {
      user: _mm.getStorage("userInfo").username || ""
    };
  }

  //退出登录
  logout() {
    _user
      .logout()
      .then(res => {
        _mm.removeStorage("userInfo");
        window.location.href = "/login";
      })
      .catch(errMsg => {
        _mm.errTips(errMsg);
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
              {this.state.user ? <span>欢迎, {this.state.user}</span> : <span>欢迎您</span>}
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
