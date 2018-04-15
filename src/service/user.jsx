import Util from "../util/mm";

const _mm = new Util();

class User {
  login(logInfo) {
    return _mm.request({
      type: "POST",
      url: "/manage/user/login.do",
      data: logInfo
    });
  }

  logout() {
    return _mm.request({
      type: "POST",
      url: "/user/logout.do"
    });
  }

  //检查登录数据是否合法
  checkLogInfo(logInfo) {
    let username = logInfo.username.trim();
    let password = logInfo.password.trim();
    if (typeof username !== "string" || username.length === 0) {
      return {
        status: false,
        msg: "用户名不能为空!"
      };
    }
    if (typeof password !== "string" || password.length === 0) {
      return {
        status: false,
        msg: "密码不能为空!"
      };
    }
    return {
      status: true
    };
  }
}

export default User;
