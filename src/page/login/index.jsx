import React from "react";

import "./index.scss";
import Util from "../../util/mm";
import http from "axios";
import qs from "qs";

const _mm = new Util();

export default class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      redirect: _mm.getUrlParam("redirect") || "/"
    };
  }

  componentWillMount() {
    document.title = "登录 - WEB管理系统";
  }

  //用户输入改变事件
  InputChange(e) {
    let inputName = e.target.name,
      inputValue = e.target.value;
    this.setState({
      [inputName]: inputValue
    });
  }

  onInputKeyUp(e) {
    if (e.keyCode === 13) {
      this.Submit();
    }
  }

  //提交
  Submit(e) {
    let data = {
      username: this.state.username,
      password: this.state.password
    };
    let checkData = _mm.checkLogInfo(data);
    if (checkData.status) {
      http
        .post("/manage/user/login.do", qs.stringify(data))
        .then(res => {
          if (res.data.status === 0) {
            _mm.setStorage("userInfo", res.data.data);
            this.props.history.push(this.state.redirect);
          } else if (res.data.status === 10) {
            _mm.doLogin();
          } else {
            _mm.errTips(res.data.msg);
          }
        })
        .catch(errMsg => {
          _mm.errTips("登录错误");
        });
    } else {
      _mm.errTips(checkData.msg);
    }
  }

  render() {
    return (
      <div className="col-md-4 col-md-offset-4">
        <div className="panel panel-default login-panel">
          <div className="panel-heading text-center">欢迎登录 - WEB管理系统</div>
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
                  onKeyUp={e => this.onInputKeyUp(e)}
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
