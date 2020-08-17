import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _5ecb6198 = () => interopDefault(import('../pages/layout/layout.vue' /* webpackChunkName: "" */))
const _05e70dd7 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "" */))
const _60e29e24 = () => interopDefault(import('../pages/login.vue' /* webpackChunkName: "" */))
const _21d303ee = () => interopDefault(import('../pages/profile.vue' /* webpackChunkName: "" */))
const _0ff2dd15 = () => interopDefault(import('../pages/setting.vue' /* webpackChunkName: "" */))
const _304dd7b8 = () => interopDefault(import('../pages/editor.vue' /* webpackChunkName: "" */))
const _4800d8bb = () => interopDefault(import('../pages/article.vue' /* webpackChunkName: "" */))

// TODO: remove in Nuxt 3
const emptyFn = () => {}
const originalPush = Router.prototype.push
Router.prototype.push = function push (location, onComplete = emptyFn, onAbort) {
  return originalPush.call(this, location, onComplete, onAbort)
}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: decodeURI('/'),
  linkActiveClass: 'active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/",
    component: _5ecb6198,
    children: [{
      path: "/",
      component: _05e70dd7,
      name: "home"
    }, {
      path: "/login",
      component: _60e29e24,
      name: "login"
    }, {
      path: "/register",
      component: _60e29e24,
      name: "register"
    }, {
      path: "/profile/:username",
      component: _21d303ee,
      name: "profile"
    }, {
      path: "/settings",
      component: _0ff2dd15,
      name: "settings"
    }, {
      path: "/editor/:slug?",
      component: _304dd7b8,
      name: "editor"
    }, {
      path: "/article/:slug",
      component: _4800d8bb,
      name: "article"
    }]
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
