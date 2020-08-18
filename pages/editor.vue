<template>
  <div class="editor-page">
    <div class="container page">
      <div class="row">
        <div class="col-md-10 offset-md-1 col-xs-12">
          <form @submit.prevent="onSubmit">
            <fieldset>
              <fieldset class="form-group">
                <input
                  type="text"
                  class="form-control form-control-lg"
                  required
                  placeholder="Article Title"
                  v-model="article.title"
                  :disabled="disabled"
                />
              </fieldset>
              <fieldset class="form-group">
                <input
                  type="text"
                  class="form-control"
                  required
                  placeholder="What's this article about?"
                  v-model="article.description"
                  :disabled="disabled"
                />
              </fieldset>
              <fieldset class="form-group">
                <textarea
                  required
                  class="form-control"
                  rows="8"
                  placeholder="Write your article (in markdown)"
                  v-model="article.body"
                  :disabled="disabled"
                ></textarea>
              </fieldset>
              <fieldset class="form-group">
                <input
                  type="text"
                  class="form-control"
                  placeholder="Enter tags"
                  @keyup.13="onTagEnter"
                />
                <div class="tag-list">
                  <span
                    class="tag-default tag-pill"
                    v-for="(tag, index) in article.tagList"
                    :key="tag"
                  >
                    <i class="ion-close-round" @click="removeTag(index)"></i>
                    {{tag}}
                  </span>
                </div>
              </fieldset>
              <button
                class="btn btn-lg pull-xs-right btn-primary"
                type="button"
                :disabled="disabled"
                @click="onSubmit"
              >Publish Article</button>
            </fieldset>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { addArticle, updateArticle, getArticleDetail } from "../api";
export default {
  data() {
    return {
      article: { title: "", description: "", body: "", tagList: [] },
      disabled: false,
    };
  },
  created() {
    this.getArticle();
  },
  methods: {
    async getArticle() {
      const { slug } = this.$route.params;
      if(!slug) return;
      const { data } = await getArticleDetail(slug);
      const { article } = data;
      this.article = article;
    },
    async removeTag(index) {
      this.article.tagList.splice(index, 1);
    },
    async onSubmit() {
      this.disabled = true;
      const { slug } = this.$route.params;
      const { data } = slug
        ? await updateArticle(slug, this.article)
        : await addArticle(this.article);
      this.disabled = false;
      this.$router.replace(`/article/${data.article.slug}`);
    },
    onTagEnter() {
      const { value } = event.target;
      if (value && value.trim()) {
        this.article.tagList.push(value);
      }
      event.target.value = "";
    },
  },
};
</script>

<style>
</style>