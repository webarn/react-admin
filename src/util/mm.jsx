export default class Util {
  //跳转登录
  doLogin() {
    window.location.href = "/login?redirect=" + encodeURIComponent(window.location.pathname);
  }

  /**
   * url参数获取
   * @param {string} name
   */
  getUrlParam(name) {
    let queryString = window.location.search.split("?")[1] || "";
    let reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
    let result = queryString.match(reg);
    return result ? decodeURIComponent(result[2]) : null;
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

  //错误处理
  errTips(errMsg) {
    alert(errMsg || "有错误!");
  }

  //本地存储
  setStorage(key, val) {
    let valType = typeof val;
    if (typeof key !== "string") {
      alert("该类型不能用于本地存储");
      return;
    }
    if (valType === "object") {
      window.localStorage.setItem(key, JSON.stringify(val));
    } else if (["number", "string", "boolean"].indexOf(valType) >= 0) {
      window.localStorage.setItem(key, val);
    } else {
      alert("该类型不能用于本地存储");
    }
  }

  //读取本地存储
  getStorage(key) {
    if (typeof key === "string") {
      let val = window.localStorage.getItem(key);
      if (val) {
        return JSON.parse(val);
      } else {
        return "";
      }
    } else {
      alert("参数不正确");
    }
  }

  //删除本地存储
  removeStorage(key) {
    if (typeof key === "string") {
      window.localStorage.removeItem(key);
    } else {
      alert("参数不正确");
    }
  }
}
