<template>
  <div class="article-page">
    <div class="banner">
      <div class="container">
        <h1>{{article.title}}</h1>
        <article-meta :article="article"></article-meta>
      </div>
    </div>

    <div class="container page">
      <div class="row article-content">
        <div class="col-md-12" v-html="article.body"></div>
        <ul class="tag-list">
          <li class="tag-default tag-pill tag-outline" v-for="tag in article.tagList" :key="tag">
            {{tag}}
          </li>
        </ul>
      </div>

      <hr />

      <div class="article-actions">
        <article-meta :article="article"></article-meta>
      </div>

      <div class="row">
        <div class="col-xs-12 col-md-8 offset-md-2">
          <form class="card comment-form" v-if="user" @submit.prevent="addComment">
            <div class="card-block">
              <textarea
                class="form-control"
                v-model="commentBody"
                placeholder="Write a comment..."
                rows="3"
              ></textarea>
            </div>
            <div class="card-footer">
              <img :src="user.image" class="comment-author-img" />
              <button class="btn btn-sm btn-primary" :disabled="disabled">Post Comment</button>
            </div>
          </form>
          <div v-else>
            <nuxt-link to="/login">Sign in</nuxt-link>or
            <nuxt-link to="register">Sign up</nuxt-link>to add comments on this article.
          </div>
          <div class="card" v-for="(comment, index) in comments" :key="comment.id">
            <div class="card-block">
              <p class="card-text">{{comment.body}}</p>
            </div>
            <div class="card-footer">
              <nuxt-link
                :to="{name: 'profile', params: {username: comment.author.username}}"
                class="comment-author"
              >
                <img :src="comment.author.image" class="comment-author-img" />
              </nuxt-link>&nbsp;
              <nuxt-link
                :to="{name: 'profile', params: {username: comment.author.username}}"
                class="comment-author"
              >{{comment.author.username}}</nuxt-link>
              <span class="date-posted">{{comment.createdAt | date('MMM DD')}}</span>
              <span
                class="mod-options"
                :class="{disabled}"
                v-if="user && comment.author.username == user.username"
              >
                <i class="ion-trash-a" @click="deleteComment(index)"></i>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {
  getArticleDetail,
  getArticleComments,
  addArticleComments,
  deleteArticleComments,
} from "../api";
import ArticleMeta from "@/components/article-meta";
import markdown from "markdown-it";
import { mapState } from "vuex";
export default {
  components: { ArticleMeta },
  async asyncData({ params }) {
    const md = new markdown();
    const { slug } = params;
    const commentReq = getArticleComments(slug);
    const articleDetailReq = getArticleDetail(slug);
    const [commentData, detailData] = await Promise.all([
      commentReq,
      articleDetailReq,
    ]);
    const { article } = detailData.data;
    const { comments } = commentData.data;
    article.body = md.render(article.body);
    return {
      article,
      comments,
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
    }
  },
  data() {
    return {
      disabled: false,
      commentBody: "",
    };
  },
  computed: {
    ...mapState(["user"]),
  },
  methods: {
    async addComment() {
      this.disabled = true;
      const { slug } = this.$route.params;
      const body = this.commentBody;
      if(!body || !body.trim()) {
        return alert('please input the comment body')
      }
      const { data } = await addArticleComments(slug, {
        comment: { body },
      });
      const { comment } = data;
      this.comments.unshift(comment);
      this.disabled = false;
      this.commentBody = "";
    },
    async deleteComment(index) {
      if (this.disabled) return;
      this.disabled = true;
      const { slug } = this.$route.params;
      try {
        const data = await deleteArticleComments(slug, this.comments[index].id);
      } catch (e) {
        console.dir(e);
        return alert("delete error: " + e.response.data.error);
      }
      this.comments.splice(index, 1);
      this.disabled = false;
    },
  },
};
</script>

<style>
</style>