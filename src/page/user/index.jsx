import React, { Component } from "react";
import { Link } from "react-router-dom";
import http from "axios";
import Pagination from "../../util/pagination";
import Util from "../../util/mm";
import PageTitle from "../../components/page-title/index";

const _mm = new Util();

class User extends Component {
  constructor() {
    super();
    this.state = {
      list: [],
      pageNum: 1,
      fristLoding: true
    };
  }

  componentDidMount() {
    this.userList();
  }

  userList() {
    http
      .get("/manage/user/list.do", { params: { pageNum: this.state.pageNum } })
      .then(res => {
        if (res.data.status === 10) {
          _mm.doLogin();
        } else if (res.data.status === 0) {
          this.setState(res.data.data, () => {
            this.setState({
              fristLoding: false
            });
          });
        }
      })
      .catch(err => {
        this.setState({
          list: [],
          fristLoding:false
        })
        _mm.errTips("获取用户列表失败!");
      });
  }

  onPageNum(pageNum) {
    this.setState(
      {
        pageNum: pageNum
      },
      () => {
        this.userList(this.state.pageNum);
      }
    );
  }

  render() {
    let ListBody = this.state.list.map((user, index) => {
      return (
        <tr key={index}>
          <td>{user.id}</td>
          <td>{user.username}</td>
          <td>{user.email}</td>
          <td>{user.phone}</td>
          <td>{new Date(user.createTime).toLocaleString()}</td>
        </tr>
      );
    });
    let ListError = (
      <tr>
        <td colSpan="5" className="text-center">
          {this.state.fristLoding ? "正在加载内容..." : "没有找到相应的结果~"}
        </td>
      </tr>
    );
    let tableBody = this.state.list.length ? ListBody : ListError;

    return (
      <div id="page-wrapper">
        <PageTitle title="用户列表" />
        <div className="row">
          <div className="col-md-12">
            <table className="table table-striped table-bordered">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>用户名</th>
                  <th>邮 箱</th>
                  <th>电 话</th>
                  <th>注册时间</th>
                </tr>
              </thead>
              <tbody>{tableBody}</tbody>
            </table>
          </div>
        </div>
        <Pagination
          current={this.state.pageNum}
          total={this.state.total}
          onChange={pageNum => this.onPageNum(pageNum)}
        />
      </div>
    );
  }
}

export default User;
