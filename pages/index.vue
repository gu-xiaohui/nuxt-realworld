<template>
  <div class="home-page">
    <div class="banner">
      <div class="container">
        <h1 class="logo-font">conduit</h1>
        <p>A place to share your knowledge.</p>
      </div>
    </div>

    <div class="container page">
      <div class="row">
        <div class="col-md-9">
          <div class="feed-toggle">
            <ul class="nav nav-pills outline-active">
              <li class="nav-item" v-if="user">
                <nuxt-link
                  class="nav-link"
                  :class="{active: tab === 'your_feed'}"
                  :to="{name: 'home', query: {tab: 'your_feed'}}"
                  exact
                >Your Feed</nuxt-link>
              </li>
              <li class="nav-item">
                <nuxt-link
                  class="nav-link"
                  :class="{active: tab === 'global_feed'}"
                  :to="{name: 'home'}"
                  exact
                >Global Feed</nuxt-link>
              </li>
              <li class="nav-item" v-if="tag">
                <nuxt-link
                  class="nav-link"
                  :class="{active: tab === 'tag_feed'}"
                  :to="{name: 'home', query: {tab: 'tag_feed'}}"
                  exact
                >#{{tag}}</nuxt-link>
              </li>
            </ul>
          </div>

          <nuxt-link
            v-for="article in articles"
            :key="article.slug"
            class="article-preview"
            :to="{
              name: 'article',
              params: {slug: article.slug}
            }"
            tag="div"
          >
            <article-item :article="article"></article-item>
          </nuxt-link>

          <nav>
            <ul class="pagination">
              <li
                class="page-item"
                v-for="item in totalPage"
                :key="item"
                :class="{active: page == item}"
              >
                <nuxt-link
                  :to="{name: 'home', query: {page: item, tag: $route.query.tag, tab}}"
                  class="page-link"
                >{{item}}</nuxt-link>
              </li>
            </ul>
          </nav>
        </div>

        <div class="col-md-3">
          <div class="sidebar">
            <p>Popular Tags</p>

            <div class="tag-list">
              <nuxt-link
                class="tag-pill tag-default"
                v-for="tag in tags"
                :class="{active: tag == $route.query.tag}"
                :to="{
                  name: 'home',
                  query: {tag, tab: 'tag_feed'}
                }"
                :key="tag"
              >{{tag}}</nuxt-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";
import articleMixin from "@/mixins/article-mixin.js";
import ArticleItem from "@/components/article-item";
import {
  getArticles,
  getTags,
  getYourArticles,
  addFavorite,
  removeFavorite,
} from "./../api";
export default {
  components: { ArticleItem },
  watchQuery: ["page", "tag", "tab"],
  async asyncData({ query }) {
    const { page = 1, tag, tab = "global_feed" } = query;
    const limit = 10,
      offset = (page - 1) * limit,
      params = { page, limit, offset, tag };
    const articleRequest = tab === "your_feed" ? getYourArticles : getArticles;
    const [articleData, tagData] = await Promise.all([
      articleRequest(params),
      getTags(),
    ]);
    const { articles, articlesCount } = articleData.data;
    let { tags } = tagData.data;
    const totalPage = Math.ceil(articlesCount / limit);
    // tags = tags.filter((tag) => {
    //   tag = encodeURIComponent(tag)
    //     .replace(/\%E2\%80\%8C/g, "")
    //     .trim();
    //   return !!tag;
    // });
    return {
      articles: articles,
      tags: tags,
      totalPage,
      page,
      tab,
      tag,
    };
  },
  mixins: [articleMixin],
  computed: {},
  methods: {
    async getArticles() {
      const { data } = await getArticles();
      return data;
    },
  },
};
</script>

<style>
</style>