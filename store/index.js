const cookieparser = process.server ? require("cookieparser") : undefined;
const Cookie = require('js-cookie')
export const state = () => {
  return {
    user: null,
  };
};

export const mutations = {
  setUser(state, payload) {
    Cookie.set('user', payload)
    state.user = payload;
  },
};

export const actions = {
  /**
   * nuxtServerInit是一个特殊的action方法，这个action会在服务端渲染期间自动调用
   * 作用是初始化容器数据，传递数据给客户端使用
   * @param {object} param0 store
   * @param {object} param1 server request
   */
  nuxtServerInit({ commit }, { req }) {
    let user;
    // 如果请求头中有Cookie
    if (req.headers.cookie) {
      // 使用cookieparser把cookie字符串转为JavaScript对象
      const parsed = cookieparser.parse(req.headers.cookie);
      try {
        user = JSON.parse(parsed.user);
      } catch (e) {}
      commit("setUser", user);
    }
  },
};
