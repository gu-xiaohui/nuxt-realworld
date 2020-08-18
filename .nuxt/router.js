import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _56c4531f = () => interopDefault(import('../pages/layout/layout.vue' /* webpackChunkName: "" */))
const _223d2cc2 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "" */))
const _2836604e = () => interopDefault(import('../pages/login.vue' /* webpackChunkName: "" */))
const _fdc5d7ce = () => interopDefault(import('../pages/profile.vue' /* webpackChunkName: "" */))
const _6f3ced40 = () => interopDefault(import('../pages/setting.vue' /* webpackChunkName: "" */))
const _c288d3a6 = () => interopDefault(import('../pages/editor.vue' /* webpackChunkName: "" */))
const _b16a2e34 = () => interopDefault(import('../pages/article.vue' /* webpackChunkName: "" */))

// TODO: remove in Nuxt 3
const emptyFn = () => {}
const originalPush = Router.prototype.push
Router.prototype.push = function push (location, onComplete = emptyFn, onAbort) {
  return originalPush.call(this, location, onComplete, onAbort)
}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: decodeURI('/realworld/'),
  linkActiveClass: 'active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/",
    component: _56c4531f,
    children: [{
      path: "/",
      component: _223d2cc2,
      name: "home"
    }, {
      path: "/login",
      component: _2836604e,
      name: "login"
    }, {
      path: "/register",
      component: _2836604e,
      name: "register"
    }, {
      path: "/profile/:username",
      component: _fdc5d7ce,
      name: "profile"
    }, {
      path: "/settings",
      component: _6f3ced40,
      name: "settings"
    }, {
      path: "/editor/:slug?",
      component: _c288d3a6,
      name: "editor"
    }, {
      path: "/article/:slug",
      component: _b16a2e34,
      name: "article"
    }]
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
