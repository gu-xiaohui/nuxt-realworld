exports.ids = [4];
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

/***/ 39:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./pages/editor.vue?vue&type=template&id=c73af20a&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"editor-page"},[_vm._ssrNode("<div class=\"container page\"><div class=\"row\"><div class=\"col-md-10 offset-md-1 col-xs-12\"><form><fieldset><fieldset class=\"form-group\"><input type=\"text\" required=\"required\" placeholder=\"Article Title\""+(_vm._ssrAttr("disabled",_vm.disabled))+(_vm._ssrAttr("value",(_vm.article.title)))+" class=\"form-control form-control-lg\"></fieldset> <fieldset class=\"form-group\"><input type=\"text\" required=\"required\" placeholder=\"What's this article about?\""+(_vm._ssrAttr("disabled",_vm.disabled))+(_vm._ssrAttr("value",(_vm.article.description)))+" class=\"form-control\"></fieldset> <fieldset class=\"form-group\"><textarea required=\"required\" rows=\"8\" placeholder=\"Write your article (in markdown)\""+(_vm._ssrAttr("disabled",_vm.disabled))+" class=\"form-control\">"+_vm._ssrEscape(_vm._s(_vm.article.body))+"</textarea></fieldset> <fieldset class=\"form-group\"><input type=\"text\" placeholder=\"Enter tags\" class=\"form-control\"> <div class=\"tag-list\">"+(_vm._ssrList((_vm.article.tagList),function(tag,index){return ("<span class=\"tag-default tag-pill\"><i class=\"ion-close-round\"></i>"+_vm._ssrEscape("\n                  "+_vm._s(tag)+"\n                ")+"</span>")}))+"</div></fieldset> <button type=\"button\""+(_vm._ssrAttr("disabled",_vm.disabled))+" class=\"btn btn-lg pull-xs-right btn-primary\">Publish Article</button></fieldset></form></div></div></div>")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/editor.vue?vue&type=template&id=c73af20a&

// EXTERNAL MODULE: ./api/index.js + 2 modules
var api = __webpack_require__(29);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/editor.vue?vue&type=script&lang=js&
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

/* harmony default export */ var editorvue_type_script_lang_js_ = ({
  data() {
    return {
      article: {
        title: "",
        description: "",
        body: "",
        tagList: []
      },
      disabled: false
    };
  },

  created() {
    this.getArticle();
  },

  methods: {
    async getArticle() {
      const {
        slug
      } = this.$route.params;
      if (!slug) return;
      const {
        data
      } = await Object(api["h" /* getArticleDetail */])(slug);
      const {
        article
      } = data;
      this.article = article;
    },

    async removeTag(index) {
      this.article.tagList.splice(index, 1);
    },

    async onSubmit() {
      this.disabled = true;
      const {
        slug
      } = this.$route.params;
      const {
        data
      } = slug ? await Object(api["p" /* updateArticle */])(slug, this.article) : await Object(api["a" /* addArticle */])(this.article);
      this.disabled = false;
      this.$router.replace(`/article/${data.article.slug}`);
    },

    onTagEnter() {
      const {
        value
      } = event.target;

      if (value && value.trim()) {
        this.article.tagList.push(value);
      }

      event.target.value = "";
    }

  }
});
// CONCATENATED MODULE: ./pages/editor.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_editorvue_type_script_lang_js_ = (editorvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./pages/editor.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_editorvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "b6266d82"
  
)

/* harmony default export */ var editor = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=4.js.map