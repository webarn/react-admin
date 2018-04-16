import React, { Component } from "react";
import http from "axios";
import Pagination from "../../util/pagination";
import Util from "../../util/mm";
import PageTitle from "../../components/page-title/index";
import TableList from "../../util/tableList";

const _mm = new Util();

class User extends Component {
  constructor() {
    super();
    this.state = {
      list: [],
      pageNum: 1,
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
          this.setState(res.data.data);
        }
      })
      .catch(err => {
        this.setState({
          list: [],
        });
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
    let tableHeads = [
      { name: "ID", width: "10%" },
      { name: "用户名" },
      { name: "邮 箱" },
      { name: "电 话" },
      { name: "注册时间" }
    ];
    return (
      <div id="page-wrapper">
        <PageTitle title="用户列表" />
        <TableList headers={tableHeads}>
          {this.state.list.map((user, index) => {
            return (
              <tr key={index}>
                <td>{user.id}</td>
                <td>{user.username}</td>
                <td>{user.email}</td>
                <td>{user.phone}</td>
                <td>{new Date(user.createTime).toLocaleString()}</td>
              </tr>
            );
          })}
        </TableList>
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
