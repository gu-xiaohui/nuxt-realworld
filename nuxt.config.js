module.exports = {
  server: {
    host: "0.0.0.0",
    port: 8989,
  },
  router: {
    base: '/realworld',
    linkActiveClass: "active",
    extendRoutes(routes, resolve) {
      // 删除所有的预制路由
      routes.splice(0);
      routes = [
        {
          path: "/",
          component: resolve(__dirname, "pages/layout/layout.vue"),
          children: [
            {
              path: "/",
              name: "home",
              component: resolve(__dirname, "pages/index.vue"),
            },
            {
              path: "/login",
              name: "login",
              component: resolve(__dirname, "pages/login.vue"),
            },
            {
              path: "/register",
              name: "register",
              component: resolve(__dirname, "pages/login.vue"),
            },
            {
              path: "/profile/:username",
              name: "profile",
              component: resolve(__dirname, "pages/profile.vue"),
            },
            {
              path: "/settings",
              name: "settings",
              component: resolve(__dirname, "pages/setting.vue"),
            },
            {
              path: "/editor/:slug?",
              name: "editor",
              component: resolve(__dirname, "pages/editor.vue"),
            },
            {
              path: "/article/:slug",
              name: "article",
              component: resolve(__dirname, "pages/article.vue"),
            },
          ],
        },
      ];
      return routes;
    },
  },
  plugins: ["~/plugins/request.js", "~/plugins/date.js"],
};
