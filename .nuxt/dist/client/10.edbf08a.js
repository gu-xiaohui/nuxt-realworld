(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{255:function(t,n,e){"use strict";e.r(n);e(78),e(32),e(31),e(13),e(62),e(21);var r=e(42),l=e(63);function c(object,t){var n=Object.keys(object);if(Object.getOwnPropertySymbols){var e=Object.getOwnPropertySymbols(object);t&&(e=e.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),n.push.apply(n,e)}return n}var o={middleware:["auth"],computed:function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?c(Object(source),!0).forEach((function(n){Object(r.a)(t,n,source[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):c(Object(source)).forEach((function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(source,n))}))}return t}({},Object(l.b)(["user"])),head:function(){return{title:"".concat(this.$route.name," -Realworld"),meta:[{hid:"layouts",name:"layouts",content:"pagelayouts"}]}}},v=e(20),component=Object(v.a)(o,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"template"},[e("nav",{staticClass:"navbar navbar-light"},[e("div",{staticClass:"container"},[e("nuxt-link",{staticClass:"navbar-brand",attrs:{to:"/"}},[t._v("conduit")]),t._v(" "),e("ul",{staticClass:"nav navbar-nav pull-xs-right"},[e("li",{staticClass:"nav-item"},[e("nuxt-link",{staticClass:"nav-link",attrs:{to:"/",tag:"a",exact:""}},[t._v("Home")])],1),t._v(" "),t.user?[e("li",{staticClass:"nav-item"},[e("nuxt-link",{staticClass:"nav-link",attrs:{to:"/editor",tag:"a"}},[e("i",{staticClass:"ion-compose"}),t._v(" New Post\n            ")])],1),t._v(" "),e("li",{staticClass:"nav-item"},[e("nuxt-link",{staticClass:"nav-link",attrs:{to:"/settings",tag:"a"}},[e("i",{staticClass:"ion-gear-a"}),t._v(" Settings\n            ")])],1),t._v(" "),e("li",{staticClass:"nav-item"},[e("nuxt-link",{staticClass:"nav-link",attrs:{to:{name:"profile",params:{username:t.user.username}},tag:"a"}},[e("img",{staticClass:"user-pic",attrs:{alt:"",src:t.user.image}}),t._v("\n              "+t._s(t.user.username)+"\n            ")])],1)]:[e("li",{staticClass:"nav-item"},[e("nuxt-link",{staticClass:"nav-link",attrs:{to:"/register",tag:"a"}},[t._v("Sign up")])],1),t._v(" "),e("li",{staticClass:"nav-item"},[e("nuxt-link",{staticClass:"nav-link",attrs:{to:"/login",tag:"a"}},[t._v("Sign in")])],1)]],2)],1)]),t._v(" "),e("nuxt-child"),t._v(" "),t._m(0)],1)}),[function(){var t=this.$createElement,n=this._self._c||t;return n("footer",[n("div",{staticClass:"container"},[n("a",{staticClass:"logo-font",attrs:{href:"/"}},[this._v("conduit")]),this._v(" "),n("span",{staticClass:"attribution"},[this._v("\n        An interactive learning project from\n        "),n("a",{attrs:{href:"https://thinkster.io"}},[this._v("Thinkster")]),this._v(". Code & design licensed under MIT.\n      ")])])])}],!1,null,null,null);n.default=component.exports}}]);