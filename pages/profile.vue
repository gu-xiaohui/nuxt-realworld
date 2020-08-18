<template>
  <div class="profile-page">
    <div class="user-info">
      <div class="container">
        <div class="row">
          <div class="col-xs-12 col-md-10 offset-md-1">
            <img :src="profile.image" class="user-img" />
            <h4>{{profile.username}}</h4>
            <p>{{profile.bio}}</p>
            <button
              class="btn btn-sm btn-outline-secondary action-btn"
              v-if="!user || user.username !== profile.username"
              :disabled="user && user.disabled"
              :class="{active:profile.following}"
              @click="onFollow(profile)"
            >
              <i class="ion-plus-round"></i>
              &nbsp;
              {{profile.following ? 'Unfollow':'Follow'}} {{profile.username}}
            </button>
            <nuxt-link
              v-else
              class="btn btn-sm btn-outline-secondary action-btn"
              :to="{
                name: 'settings'
              }"
            >
              <i class="ion-gear-a"></i> Edit Profile Settings
            </nuxt-link>
          </div>
        </div>
      </div>
    </div>

    <div class="container">
      <div class="row">
        <div class="col-xs-12 col-md-10 offset-md-1">
          <div class="articles-toggle">
            <ul class="nav nav-pills outline-active">
              <li class="nav-item">
                <nuxt-link
                  class="nav-link"
                  :class="{active: tab == 'my_tab'}"
                  :to="{name: 'profile', params: {username: profile.username}}"
                  exact
                >My Articles</nuxt-link>
              </li>
              <li class="nav-item">
                <nuxt-link
                  class="nav-link"
                  :class="{active: tab == 'favorite_tab'}"
                  :to="{name: 'profile', params: {username: profile.username}, query: {tab:'favorite_tab'}}"
                  exact
                >Favorited Articles</nuxt-link>
              </li>
            </ul>
          </div>
          <div
            class="article-preview"
            v-if="!articles || articles.length == 0"
          >No articles are here... yet.</div>
          <div class="article-preview" v-for="article in articles" :key="article.slug">
            <article-item :article="article" />
          </div>
          <nav>
            <ul class="pagination">
              <li
                class="page-item"
                v-for="item in totalPage"
                :key="item"
                :class="{active: page == item}"
              >
                <nuxt-link
                  :to="{name: 'profile', query: {page: item, tab}}"
                  class="page-link"
                >{{item}}</nuxt-link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { getUserProfile, getArticles } from "../api";
import { mapState } from "vuex";
import userMixin from "@/mixins/user-mixin";
import articleMixin from "@/mixins/article-mixin";
import ArticleItem from '@/components/article-item'
export default {
  components: {ArticleItem},
  async asyncData({ params, query }) {
    const { username } = params;
    const { tab = "my_tab", page = 1 } = query;
    const limit = 10;
    const offset = (page - 1) * limit;
    const param =
      tab == "my_tab" ? { author: username } : { favorited: username };
    param.limit = limit;
    param.offset = offset;
    const articleReq = getArticles(param);
    const profileReq = getUserProfile(username);
    const [articleData, profileData] = await Promise.all([
      articleReq,
      profileReq,
    ]);
    const { articles, articlesCount } = articleData.data;
    const { profile } = profileData.data;
    const totalPage = Math.ceil(articlesCount / limit);
    return {
      profile,
      articles,
      totalPage,
      tab,
      page,
    };
  },
  watchQuery: ["tab"],
  mixins: [userMixin, articleMixin],
  computed: {
    ...mapState(["user"]),
  },
};
</script>

<style>
</style>