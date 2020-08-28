const { noAutList, publicList } = require("./authConfig.js");
/**
 * 路由鉴权中间件
 * @param {*} param0
 */
export default function({ store, redirect, route }) {
  if (isPublic(route.name)) {
    return;
  }
  // store中没有user，重定向到login
  if (!store.state.user && !isNoAuth(route.name)) {
    return redirect("/login");
    // 已登录，访问不需要授权的页面, login,register等，跳转首页
  } else if (store.state.user && isNoAuth(route.name)) {
    return redirect("/");
  }
}

function isNoAuth(routeName) {
  return noAutList.includes(routeName);
}
function isPublic(routeName) {
  return publicList.includes(routeName);
}
