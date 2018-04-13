import $ from "jquery";

export default class Util {
  request(param) {
    return new Promise((resolve, reject) => {
      $.ajax({
        type: param.type || "GET",
        url: param.url || "",
        dataType: param.dataType || "json",
        data: param.data || null,
        success(res) {
          if (res.status === 0) {
            typeof resolve === "function" && resolve(res.data, res.msg);
          } else if (res.status === 10) {
            //未登录
            this.doLogin();
          } else {
            //错误
            typeof reject === "function" && resolve(res.msg || res.data);
          }
        },
        error(err) {
          typeof reject === "function" && resolve(err.statusText);
        }
      });
    });
  }
  //跳转登录
  doLogin() {
    window.location.href = "/login?redirect=" + encodeURIComponent(window.location.pathname);
  }
}
