exports.ids = [2];
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

/***/ 33:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./pages/article.vue?vue&type=template&id=3cf411cc&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"article-page"},[_vm._ssrNode("<div class=\"banner\">","</div>",[_vm._ssrNode("<div class=\"container\">","</div>",[_vm._ssrNode("<h1>"+_vm._ssrEscape(_vm._s(_vm.article.title))+"</h1> "),_c('article-meta',{attrs:{"article":_vm.article}})],2)]),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"container page\">","</div>",[_vm._ssrNode("<div class=\"row article-content\"><div class=\"col-md-12\">"+(_vm._s(_vm.article.body))+"</div> <ul class=\"tag-list\">"+(_vm._ssrList((_vm.article.tagList),function(tag){return ("<li class=\"tag-default tag-pill tag-outline\">"+_vm._ssrEscape("\n          "+_vm._s(tag)+"\n        ")+"</li>")}))+"</ul></div> <hr> "),_vm._ssrNode("<div class=\"article-actions\">","</div>",[_c('article-meta',{attrs:{"article":_vm.article}})],1),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"row\">","</div>",[_vm._ssrNode("<div class=\"col-xs-12 col-md-8 offset-md-2\">","</div>",[(_vm.user)?_vm._ssrNode("<form class=\"card comment-form\">","</form>",[_vm._ssrNode("<div class=\"card-block\"><textarea placeholder=\"Write a comment...\" rows=\"3\" class=\"form-control\">"+_vm._ssrEscape(_vm._s(_vm.commentBody))+"</textarea></div> <div class=\"card-footer\"><img"+(_vm._ssrAttr("src",_vm.user.image))+" class=\"comment-author-img\"> <button"+(_vm._ssrAttr("disabled",_vm.disabled))+" class=\"btn btn-sm btn-primary\">Post Comment</button></div>")],2):_vm._ssrNode("<div>","</div>",[_c('nuxt-link',{attrs:{"to":"/login"}},[_vm._v("Sign in")]),_vm._ssrNode("or\n          "),_c('nuxt-link',{attrs:{"to":"register"}},[_vm._v("Sign up")]),_vm._ssrNode("to add comments on this article.\n        ")],2),_vm._ssrNode(" "),_vm._l((_vm.comments),function(comment,index){return _vm._ssrNode("<div class=\"card\">","</div>",[_vm._ssrNode("<div class=\"card-block\"><p class=\"card-text\">"+_vm._ssrEscape(_vm._s(comment.body))+"</p></div> "),_vm._ssrNode("<div class=\"card-footer\">","</div>",[_c('nuxt-link',{staticClass:"comment-author",attrs:{"to":{name: 'profile', params: {username: comment.author.username}}}},[_c('img',{staticClass:"comment-author-img",attrs:{"src":comment.author.image}})]),_vm._ssrNode(" \n            "),_c('nuxt-link',{staticClass:"comment-author",attrs:{"to":{name: 'profile', params: {username: comment.author.username}}}},[_vm._v(_vm._s(comment.author.username))]),_vm._ssrNode(" <span class=\"date-posted\">"+_vm._ssrEscape(_vm._s(_vm._f("date")(comment.createdAt,'MMM DD')))+"</span> "+((_vm.user && comment.author.username == _vm.user.username)?("<span"+(_vm._ssrClass("mod-options",{disabled: _vm.disabled}))+"><i class=\"ion-trash-a\"></i></span>"):"<!---->"))],2)],2)})],2)])],2)],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/article.vue?vue&type=template&id=3cf411cc&

// EXTERNAL MODULE: ./api/index.js + 2 modules
var api = __webpack_require__(29);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./components/article-meta.vue?vue&type=template&id=e7a43c02&
var article_metavue_type_template_id_e7a43c02_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"article-meta"},[_c('nuxt-link',{attrs:{"to":{name: 'profile', params: {username: _vm.article.author.username}}}},[_c('img',{attrs:{"src":_vm.article.author.image}})]),_vm._ssrNode(" "),_c('nuxt-link',{staticClass:"info",attrs:{"tag":"div","to":{name: 'profile', params: {username: _vm.article.author.username}}}},[_c('a',{staticClass:"author",attrs:{"href":""}},[_vm._v(_vm._s(_vm.article.author.username))]),_vm._v(" "),_c('span',{staticClass:"date"},[_vm._v(_vm._s(_vm._f("date")(_vm.article.createdAt,'MMMM DD,YYYY')))])]),_vm._ssrNode(" "),(!_vm.user || _vm.user.username !== _vm.article.author.username)?_vm._ssrNode("<div style=\"display:inline-block\">","</div>",[_vm._ssrNode("<button"+(_vm._ssrAttr("disabled",_vm.article.author.disabled))+(_vm._ssrClass("btn btn-sm btn-outline-secondary",{active: _vm.article.author.following}))+"><i class=\"ion-plus-round\"></i>"+_vm._ssrEscape("\n       \n      "+_vm._s(_vm.article.author.following ? "Unfollow": "Follow")+" "+_vm._s(_vm.article.author.username)+"\n    ")+"</button>\n      \n    <button"+(_vm._ssrAttr("disabled",_vm.article.disabled))+(_vm._ssrClass("btn btn-sm btn-outline-primary",{active: _vm.article.favorited}))+"><i class=\"ion-heart\"></i>\n       \n      Favorite Post\n      <span class=\"counter\">"+_vm._ssrEscape("("+_vm._s(_vm.article.favoritesCount)+")")+"</span></button>")],2):_vm._ssrNode("<div style=\"display:inline-block\">","</div>",[_c('nuxt-link',{staticClass:"btn btn-outline-secondary btn-sm",attrs:{"to":{name: 'editor', params: {slug: _vm.article.slug}}}},[_c('i',{staticClass:"ion-edit"}),_vm._v(" Edit Article\n    ")]),_vm._ssrNode(" <button class=\"btn btn-outline-danger btn-sm\"><i class=\"ion-trash-a\"></i> Delete Article\n    </button>")],2)],2)}
var article_metavue_type_template_id_e7a43c02_staticRenderFns = []


// CONCATENATED MODULE: ./components/article-meta.vue?vue&type=template&id=e7a43c02&

// EXTERNAL MODULE: ./mixins/article-mixin.js
var article_mixin = __webpack_require__(30);

// EXTERNAL MODULE: ./mixins/user-mixin.js
var user_mixin = __webpack_require__(31);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/article-meta.vue?vue&type=script&lang=js&
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



/* harmony default export */ var article_metavue_type_script_lang_js_ = ({
  props: {
    article: {
      type: Object,
      required: true
    }
  },
  mixins: [article_mixin["a" /* default */], user_mixin["a" /* default */]],
  methods: {
    async deleteArticle(slug) {
      const isConfirm = confirm('confirm deletion?');

      if (isConfirm) {
        const data = await Object(api["d" /* deleteArticle */])(slug);
        this.$router.replace('/');
      }
    }

  }
});
// CONCATENATED MODULE: ./components/article-meta.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_article_metavue_type_script_lang_js_ = (article_metavue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/article-meta.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_article_metavue_type_script_lang_js_,
  article_metavue_type_template_id_e7a43c02_render,
  article_metavue_type_template_id_e7a43c02_staticRenderFns,
  false,
  injectStyles,
  null,
  "88807a04"
  
)

/* harmony default export */ var article_meta = (component.exports);
// EXTERNAL MODULE: external "markdown-it"
var external_markdown_it_ = __webpack_require__(27);
var external_markdown_it_default = /*#__PURE__*/__webpack_require__.n(external_markdown_it_);

// EXTERNAL MODULE: external "vuex"
var external_vuex_ = __webpack_require__(7);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/article.vue?vue&type=script&lang=js&
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




/* harmony default export */ var articlevue_type_script_lang_js_ = ({
  components: {
    ArticleMeta: article_meta
  },

  async asyncData({
    params
  }) {
    const md = new external_markdown_it_default.a();
    const {
      slug
    } = params;
    const commentReq = Object(api["g" /* getArticleComments */])(slug);
    const articleDetailReq = Object(api["h" /* getArticleDetail */])(slug);
    const [commentData, detailData] = await Promise.all([commentReq, articleDetailReq]);
    const {
      article
    } = detailData.data;
    const {
      comments
    } = commentData.data;
    article.body = md.render(article.body);
    return {
      article,
      comments
    };
  },

  head() {
    return {
      title: `${this.article.title} -Realworld`,
      meta: [{
        hid: 'description',
        name: 'description',
        content: this.article.description
      }]
    };
  },

  data() {
    return {
      disabled: false,
      commentBody: ""
    };
  },

  computed: { ...Object(external_vuex_["mapState"])(["user"])
  },
  methods: {
    async addComment() {
      this.disabled = true;
      const {
        slug
      } = this.$route.params;
      const body = this.commentBody;

      if (!body || !body.trim()) {
        return alert('please input the comment body');
      }

      const {
        data
      } = await Object(api["b" /* addArticleComments */])(slug, {
        comment: {
          body
        }
      });
      const {
        comment
      } = data;
      this.comments.unshift(comment);
      this.disabled = false;
      this.commentBody = "";
    },

    async deleteComment(index) {
      if (this.disabled) return;
      this.disabled = true;
      const {
        slug
      } = this.$route.params;

      try {
        const data = await Object(api["e" /* deleteArticleComments */])(slug, this.comments[index].id);
      } catch (e) {
        console.dir(e);
        return alert("delete error: " + e.response.data.error);
      }

      this.comments.splice(index, 1);
      this.disabled = false;
    }

  }
});
// CONCATENATED MODULE: ./pages/article.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_articlevue_type_script_lang_js_ = (articlevue_type_script_lang_js_); 
// CONCATENATED MODULE: ./pages/article.vue



function article_injectStyles (context) {
  
  
}

/* normalize component */

var article_component = Object(componentNormalizer["a" /* default */])(
  pages_articlevue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  article_injectStyles,
  null,
  "67401814"
  
)

/* harmony default export */ var pages_article = __webpack_exports__["default"] = (article_component.exports);

/***/ })

};;
//# sourceMappingURL=2.js.map