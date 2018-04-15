import $ from "jquery";

export default class Util {
  /**
   * ajax请求
   * @param {object} param
   * @returns {Promise}  Promise
   */
  request(param) {
    return new Promise((resolve, reject) => {
      $.ajax({
        type: param.type || "GET",
        url: param.url || "",
        dataType: param.dataType || "json",
        data: param.data || null,
        success(res) {
          console.log(res.status);
          if (res.status === 0) {
            typeof resolve === "function" && resolve(res.data, res.msg);
          } else if (res.status === 10) {
            //未登录
            this.doLogin();
          } else {
            //错误
            typeof reject === "function" && reject(res.msg || res.data);
          }
        },
        error(err) {
          typeof reject === "function" && reject(err.statusText);
        }
      });
    });
  }
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
