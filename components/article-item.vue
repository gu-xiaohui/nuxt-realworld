<template>
  <div>
    <div class="article-meta">
      <nuxt-link
        :to="{
                name: 'profile', 
                params: {username: article.author.username}
                }"
      >
        <img :src="article.author.image" />
      </nuxt-link>
      <div class="info">
        <nuxt-link
          :to="{
                name: 'profile', 
                params: {username: article.author.username}
                }"
        >{{article.author.username}}</nuxt-link>
        <span class="date">{{article.createdAt | date("MMMM DD,YYYY")}}</span>
      </div>
      <button
        class="btn btn-outline-primary btn-sm pull-xs-right"
        :class="{'active':article.favorited}"
        :disabled="article.disabled"
        @click.stop="onFavor(article)"
      >
        <i class="ion-heart"></i>
        {{article.favoritesCount}}
      </button>
    </div>
    <nuxt-link :to="{name: 'article', params: {slug: article.slug}}" class="preview-link">
      <h1>{{article.title}}</h1>
      <p>{{article.description}}</p>
      <span>Read more...</span>
      <ul class="tag-list preview-link">
        <li
          class="tag-default tag-pill tag-outline"
          v-for="tag in article.tagList"
          :key="tag"
        >{{tag}}</li>
      </ul>
    </nuxt-link>
  </div>
</template>

<script>
import articleMixin from "@/mixins/article-mixin";
export default {
  mixins: [articleMixin],
  props: ["article"],
};
</script>

<style>
</style>