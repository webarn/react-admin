import React from "react";

import "./index.scss";
import Util from "../../util/mm";

const _mm = new Util();

// const _mm = new mm();
export default class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      username: "",
      password: ""
    };
  }

  //用户输入改变事件
  InputChange(e) {
    let inputName = e.target.name,
      inputValue = e.target.value;
    this.setState({
      [inputName]: inputValue
    });
  }

  //提交
  Submit(e) {
    _mm
      .request({
        type: "POST",
        url: "/manage/user/login.do",
        data: {
          username: this.state.username,
          password: this.state.password
        }
      })
      .then(res => {
        console.log(res);
      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    return (
      <div className="col-md-4 col-md-offset-4">
        <div className="panel panel-default login-panel">
          <div className="panel-heading text-center">欢迎登录 - WEB</div>
          <div className="panel-body">
            <div>
              <div className="form-group">
                <input
                  name="username"
                  type="text"
                  className="form-control"
                  placeholder="请输入用户名"
                  onChange={e => this.InputChange(e)}
                />
              </div>
              <div className="form-group">
                <input
                  name="password"
                  type="password"
                  className="form-control"
                  placeholder="请输入密码"
                  onChange={e => this.InputChange(e)}
                />
              </div>
              <button className="btn btn-primary btn-lg btn-block" onClick={e => this.Submit(e)}>
                登 &nbsp; 录
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
