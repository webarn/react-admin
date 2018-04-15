import React from "react";
import { Link, NavLink } from "react-router-dom";

export default class SideNav extends React.Component {
  render() {
    return (
      <div className="navbar-default navbar-side">
        <div className="sidebar-collapse">
          <ul className="nav">
            <li>
              <NavLink exact activeClassName="active-menu" to="/">
                <i className="fa fa-home" />
                <span>首 页</span>
              </NavLink>
            </li>

            <li className="active">
              <Link to="/product">
                <i className="fa fa-list-ul" />商 品<span className="fa arrow" />
              </Link>
              <ul className="nav nav-second-level collapse in">
                <li>
                  <NavLink to="/product" activeClassName="active-menu">
                    商品管理
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/product-category" activeClassName="active-menu">
                    品类管理
                  </NavLink>
                </li>
              </ul>
            </li>

            <li className="active">
              <Link to="/order">
                <i className="fa fa-check-square-o" />订 单<span className="fa arrow" />
              </Link>
              <ul className="nav nav-second-level collapse in">
                <li>
                  <NavLink to="/order" activeClassName="active-menu">
                    订单管理
                  </NavLink>
                </li>
              </ul>
            </li>

            <li className="active">
              <Link to="/user">
                <i className="fa fa-user-o" />用 户<span className="fa arrow" />
              </Link>
              <ul className="nav nav-second-level collapse in">
                <li>
                  <NavLink to="/user" activeClassName="active-menu">
                    用户管理
                  </NavLink>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}
