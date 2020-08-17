<template>
  <div class="article-meta">
    <nuxt-link :to="{name: 'profile', params: {username: article.author.username}}">
      <img :src="article.author.image" />
    </nuxt-link>
    <nuxt-link
      class="info"
      tag="div"
      :to="{name: 'profile', params: {username: article.author.username}}"
    >
      <a href class="author">{{article.author.username}}</a>
      <span class="date">{{article.createdAt | date('MMMM DD,YYYY')}}</span>
    </nuxt-link>
    <div v-if="!user || user.username !== article.author.username" style="display:inline-block">
      <button
        class="btn btn-sm btn-outline-secondary"
        :class="{active: article.author.following}"
        :disabled="article.author.disabled"
        @click="onFollow(article.author)"
      >
        <i class="ion-plus-round"></i>
        &nbsp;
        {{article.author.following ? "Unfollow": "Follow"}} {{article.author.username}}
      </button>
      &nbsp;&nbsp;
      <button
        class="btn btn-sm btn-outline-primary"
        :class="{active: article.favorited}"
        :disabled="article.disabled"
        @click="onFavor(article)"
      >
        <i class="ion-heart"></i>
        &nbsp;
        Favorite Post
        <span class="counter">({{article.favoritesCount}})</span>
      </button>
    </div>

    <div v-else style="display:inline-block">
      <nuxt-link
        class="btn btn-outline-secondary btn-sm"
        :to="{name: 'editor', params: {slug: article.slug}}"
      >
        <i class="ion-edit"></i> Edit Article
      </nuxt-link>
      <button
        class="btn btn-outline-danger btn-sm"
        @click="deleteArticle(article.slug)"
      >
        <i class="ion-trash-a"></i> Delete Article
      </button>
    </div>
  </div>
</template>

<script>
import articleMixin from "@/mixins/article-mixin";
import userMixin from "@/mixins/user-mixin";
import { deleteArticle } from '../api';
export default {
  props: {
    article: {
      type: Object,
      required: true,
    },
  },
  mixins: [articleMixin, userMixin],
  methods: {
    async deleteArticle(slug) {
      const isConfirm = confirm('confirm deletion?');
      if(isConfirm) {
        const data = await deleteArticle(slug);
        this.$router.replace('/')
      }
    }
  },
};
</script>

<style>
</style>