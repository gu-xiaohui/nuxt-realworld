exports.ids = [1];
exports.modules = {

/***/ 28:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return login; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return register; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return follow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return unfollow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return getUserProfile; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return updateUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return getCurrentUser; });
/* harmony import */ var _plugins_request__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6);

function login(data = {
  email: "",
  password: ""
}) {
  return _plugins_request__WEBPACK_IMPORTED_MODULE_0__[/* request */ "b"].post("/api/users/login", data);
}
function register(data) {
  return Object(_plugins_request__WEBPACK_IMPORTED_MODULE_0__[/* request */ "b"])({
    method: "POST",
    url: "/api/users",
    data
  });
}
function follow(username) {
  return _plugins_request__WEBPACK_IMPORTED_MODULE_0__[/* request */ "b"].post(`/api/profiles/${username}/follow`);
}
function unfollow(username) {
  return _plugins_request__WEBPACK_IMPORTED_MODULE_0__[/* request */ "b"].delete(`/api/profiles/${username}/follow`);
}
function getUserProfile(username) {
  return _plugins_request__WEBPACK_IMPORTED_MODULE_0__[/* request */ "b"].get(`/api/profiles/${username}`);
}
function updateUser(user) {
  return _plugins_request__WEBPACK_IMPORTED_MODULE_0__[/* request */ "b"].put(`/api/user`, {
    user
  });
}
function getCurrentUser() {
  return _plugins_request__WEBPACK_IMPORTED_MODULE_0__[/* request */ "b"].get(`/api/user`);
}

/***/ }),

/***/ 29:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "f", function() { return /* reexport */ user["a" /* follow */]; });
__webpack_require__.d(__webpack_exports__, "o", function() { return /* reexport */ user["f" /* unfollow */]; });
__webpack_require__.d(__webpack_exports__, "l", function() { return /* reexport */ user["c" /* getUserProfile */]; });
__webpack_require__.d(__webpack_exports__, "q", function() { return /* reexport */ user["g" /* updateUser */]; });
__webpack_require__.d(__webpack_exports__, "j", function() { return /* reexport */ user["b" /* getCurrentUser */]; });
__webpack_require__.d(__webpack_exports__, "i", function() { return /* reexport */ getArticles; });
__webpack_require__.d(__webpack_exports__, "a", function() { return /* reexport */ addArticle; });
__webpack_require__.d(__webpack_exports__, "d", function() { return /* reexport */ deleteArticle; });
__webpack_require__.d(__webpack_exports__, "p", function() { return /* reexport */ updateArticle; });
__webpack_require__.d(__webpack_exports__, "m", function() { return /* reexport */ getYourArticles; });
__webpack_require__.d(__webpack_exports__, "c", function() { return /* reexport */ addFavorite; });
__webpack_require__.d(__webpack_exports__, "n", function() { return /* reexport */ removeFavorite; });
__webpack_require__.d(__webpack_exports__, "h", function() { return /* reexport */ getArticleDetail; });
__webpack_require__.d(__webpack_exports__, "g", function() { return /* reexport */ getArticleComments; });
__webpack_require__.d(__webpack_exports__, "b", function() { return /* reexport */ addArticleComments; });
__webpack_require__.d(__webpack_exports__, "e", function() { return /* reexport */ deleteArticleComments; });
__webpack_require__.d(__webpack_exports__, "k", function() { return /* reexport */ getTags; });

// UNUSED EXPORTS: login, register

// EXTERNAL MODULE: ./api/user.js
var user = __webpack_require__(28);

// EXTERNAL MODULE: ./plugins/request.js
var request = __webpack_require__(6);

// CONCATENATED MODULE: ./api/article.js

function getArticles(params) {
  return Object(request["b" /* request */])({
    url: "/api/articles",
    method: "GET",
    params
  });
}
function addArticle(article) {
  return Object(request["b" /* request */])({
    url: "/api/articles",
    method: "POST",
    data: {
      article
    }
  });
}
function deleteArticle(slug) {
  return Object(request["b" /* request */])({
    url: `/api/articles/${slug}`,
    method: "DELETE"
  });
}
function updateArticle(slug, article) {
  return Object(request["b" /* request */])({
    url: `/api/articles/${slug}`,
    method: "PUT",
    data: {
      article
    }
  });
}
function getYourArticles(params) {
  return request["b" /* request */].get("/api/articles/feed", {
    params
  });
}
function addFavorite(slug) {
  return request["b" /* request */].post(`/api/articles/${slug}/favorite`);
}
function removeFavorite(slug) {
  return request["b" /* request */].delete(`/api/articles/${slug}/favorite`);
}
function getArticleDetail(slug) {
  return request["b" /* request */].get(`/api/articles/${slug}`);
}
function getArticleComments(slug) {
  return request["b" /* request */].get(`/api/articles/${slug}/comments`);
}
function addArticleComments(slug, data) {
  return request["b" /* request */].post(`/api/articles/${slug}/comments`, data);
}
function deleteArticleComments(slug, id) {
  return request["b" /* request */].delete(`/api/articles/${slug}/comments/${id}`);
}
// CONCATENATED MODULE: ./api/tags.js

function getTags() {
  return request["b" /* request */].get("/api/tags");
}
// CONCATENATED MODULE: ./api/index.js




/***/ }),

/***/ 30:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vuex__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(29);


/* harmony default export */ __webpack_exports__["a"] = ({
  computed: { ...Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapState"])(["user"])
  },
  methods: {
    async onFavor(article) {
      if (!this.user) {
        alert("登录之后才能点赞啊~");
        return this.$router.replace("/login");
      }

      this.$set(article, "disabled", true);

      if (article.favorited) {
        await Object(_api__WEBPACK_IMPORTED_MODULE_1__[/* removeFavorite */ "n"])(article.slug);
        article.favoritesCount -= 1;
        article.favorited = false;
      } else {
        await Object(_api__WEBPACK_IMPORTED_MODULE_1__[/* addFavorite */ "c"])(article.slug);
        article.favoritesCount += 1;
        article.favorited = true;
      }

      article.disabled = false;
    }

  }
});

/***/ }),

/***/ 31:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(29);

/* harmony default export */ __webpack_exports__["a"] = ({
  methods: {
    async onFollow(author) {
      if (!this.user) {
        alert("not login");
        return this.$router.replace("/login");
      }

      this.$set(author, "disabled", true);

      if (author.following) {
        await Object(_api__WEBPACK_IMPORTED_MODULE_0__[/* unfollow */ "o"])(author.username);
        author.following = false;
      } else {
        await Object(_api__WEBPACK_IMPORTED_MODULE_0__[/* follow */ "f"])(author.username);
        author.following = true;
      }

      author.disabled = false;
    }

  }
});

/***/ }),

/***/ 32:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./components/article-item.vue?vue&type=template&id=033013d9&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_vm._ssrNode("<div class=\"article-meta\">","</div>",[_c('nuxt-link',{attrs:{"to":{
              name: 'profile', 
              params: {username: _vm.article.author.username}
              }}},[_c('img',{attrs:{"src":_vm.article.author.image}})]),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"info\">","</div>",[_c('nuxt-link',{attrs:{"to":{
              name: 'profile', 
              params: {username: _vm.article.author.username}
              }}},[_vm._v(_vm._s(_vm.article.author.username))]),_vm._ssrNode(" <span class=\"date\">"+_vm._ssrEscape(_vm._s(_vm._f("date")(_vm.article.createdAt,"MMMM DD,YYYY")))+"</span>")],2),_vm._ssrNode(" <button"+(_vm._ssrAttr("disabled",_vm.article.disabled))+(_vm._ssrClass("btn btn-outline-primary btn-sm pull-xs-right",{'active':_vm.article.favorited}))+"><i class=\"ion-heart\"></i>"+_vm._ssrEscape("\n      "+_vm._s(_vm.article.favoritesCount)+"\n    ")+"</button>")],2),_vm._ssrNode(" "),_c('nuxt-link',{staticClass:"preview-link",attrs:{"to":{name: 'article', params: {slug: _vm.article.slug}}}},[_c('h1',[_vm._v(_vm._s(_vm.article.title))]),_vm._v(" "),_c('p',[_vm._v(_vm._s(_vm.article.description))]),_vm._v(" "),_c('span',[_vm._v("Read more...")]),_vm._v(" "),_c('ul',{staticClass:"tag-list preview-link"},_vm._l((_vm.article.tagList),function(tag){return _c('li',{key:tag,staticClass:"tag-default tag-pill tag-outline"},[_vm._v(_vm._s(tag))])}),0)])],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/article-item.vue?vue&type=template&id=033013d9&

// EXTERNAL MODULE: ./mixins/article-mixin.js
var article_mixin = __webpack_require__(30);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/article-item.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var article_itemvue_type_script_lang_js_ = ({
  mixins: [article_mixin["a" /* default */]],
  props: ["article"]
});
// CONCATENATED MODULE: ./components/article-item.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_article_itemvue_type_script_lang_js_ = (article_itemvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/article-item.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_article_itemvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "1cc8f10c"
  
)

/* harmony default export */ var article_item = __webpack_exports__["a"] = (component.exports);

/***/ }),

/***/ 37:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./pages/profile.vue?vue&type=template&id=bbf9a9ac&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"profile-page"},[_vm._ssrNode("<div class=\"user-info\">","</div>",[_vm._ssrNode("<div class=\"container\">","</div>",[_vm._ssrNode("<div class=\"row\">","</div>",[_vm._ssrNode("<div class=\"col-xs-12 col-md-10 offset-md-1\">","</div>",[_vm._ssrNode("<img"+(_vm._ssrAttr("src",_vm.profile.image))+" class=\"user-img\"> <h4>"+_vm._ssrEscape(_vm._s(_vm.profile.username))+"</h4> <p>"+_vm._ssrEscape(_vm._s(_vm.profile.bio))+"</p> "),(!_vm.user || _vm.user.username !== _vm.profile.username)?_vm._ssrNode("<button"+(_vm._ssrAttr("disabled",_vm.user && _vm.user.disabled))+(_vm._ssrClass("btn btn-sm btn-outline-secondary action-btn",{active:_vm.profile.following}))+">","</button>",[_vm._ssrNode("<i class=\"ion-plus-round\"></i>"+_vm._ssrEscape("\n             \n            "+_vm._s(_vm.profile.following ? 'Unfollow':'Follow')+" "+_vm._s(_vm.profile.username)+"\n          "))],2):_c('nuxt-link',{staticClass:"btn btn-sm btn-outline-secondary action-btn",attrs:{"to":{
              name: 'settings'
            }}},[_c('i',{staticClass:"ion-gear-a"}),_vm._v(" Edit Profile Settings\n          ")])],2)])])]),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"container\">","</div>",[_vm._ssrNode("<div class=\"row\">","</div>",[_vm._ssrNode("<div class=\"col-xs-12 col-md-10 offset-md-1\">","</div>",[_vm._ssrNode("<div class=\"articles-toggle\">","</div>",[_vm._ssrNode("<ul class=\"nav nav-pills outline-active\">","</ul>",[_vm._ssrNode("<li class=\"nav-item\">","</li>",[_c('nuxt-link',{staticClass:"nav-link",class:{active: _vm.tab == 'my_tab'},attrs:{"to":{name: 'profile', params: {username: _vm.profile.username}},"exact":""}},[_vm._v("My Articles")])],1),_vm._ssrNode(" "),_vm._ssrNode("<li class=\"nav-item\">","</li>",[_c('nuxt-link',{staticClass:"nav-link",class:{active: _vm.tab == 'favorite_tab'},attrs:{"to":{name: 'profile', params: {username: _vm.profile.username}, query: {tab:'favorite_tab'}},"exact":""}},[_vm._v("Favorited Articles")])],1)],2)]),_vm._ssrNode(" "+((!_vm.articles || _vm.articles.length == 0)?("<div class=\"article-preview\">No articles are here... yet.</div>"):"<!---->")+" "),_vm._l((_vm.articles),function(article){return _vm._ssrNode("<div class=\"article-preview\">","</div>",[_c('article-item',{attrs:{"article":article}})],1)}),_vm._ssrNode(" "),_vm._ssrNode("<nav>","</nav>",[_vm._ssrNode("<ul class=\"pagination\">","</ul>",_vm._l((_vm.totalPage),function(item){return _vm._ssrNode("<li"+(_vm._ssrClass("page-item",{active: _vm.page == item}))+">","</li>",[_c('nuxt-link',{staticClass:"page-link",attrs:{"to":{name: 'profile', query: {page: item, tab: _vm.tab}}}},[_vm._v(_vm._s(item))])],1)}),0)])],2)])])],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/profile.vue?vue&type=template&id=bbf9a9ac&

// EXTERNAL MODULE: ./api/index.js + 2 modules
var api = __webpack_require__(29);

// EXTERNAL MODULE: external "vuex"
var external_vuex_ = __webpack_require__(7);

// EXTERNAL MODULE: ./mixins/user-mixin.js
var user_mixin = __webpack_require__(31);

// EXTERNAL MODULE: ./mixins/article-mixin.js
var article_mixin = __webpack_require__(30);

// EXTERNAL MODULE: ./components/article-item.vue + 4 modules
var article_item = __webpack_require__(32);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/profile.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//





/* harmony default export */ var profilevue_type_script_lang_js_ = ({
  components: {
    ArticleItem: article_item["a" /* default */]
  },

  async asyncData({
    params,
    query
  }) {
    const {
      username
    } = params;
    const {
      tab = "my_tab",
      page = 1
    } = query;
    const limit = 10;
    const offset = (page - 1) * limit;
    const param = tab == "my_tab" ? {
      author: username
    } : {
      favorited: username
    };
    param.limit = limit;
    param.offset = offset;
    const articleReq = Object(api["i" /* getArticles */])(param);
    const profileReq = Object(api["l" /* getUserProfile */])(username);
    const [articleData, profileData] = await Promise.all([articleReq, profileReq]);
    const {
      articles,
      articlesCount
    } = articleData.data;
    const {
      profile
    } = profileData.data;
    const totalPage = Math.ceil(articlesCount / limit);
    return {
      profile,
      articles,
      totalPage,
      tab,
      page
    };
  },

  watchQuery: ["tab"],
  mixins: [user_mixin["a" /* default */], article_mixin["a" /* default */]],
  computed: { ...Object(external_vuex_["mapState"])(["user"])
  }
});
// CONCATENATED MODULE: ./pages/profile.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_profilevue_type_script_lang_js_ = (profilevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./pages/profile.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_profilevue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "41124347"
  
)

/* harmony default export */ var pages_profile = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=1.js.map