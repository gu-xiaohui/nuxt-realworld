import { mapState } from "vuex";
import { addFavorite, removeFavorite } from "./../api";
export default {
  computed: {
    ...mapState(["user"]),
  },
  methods: {
    async onFavor(article) {
      if (!this.user) {
        alert("登录之后才能点赞啊~");
        return this.$router.replace("/login");
      }
      this.$set(article, "disabled", true);
      if (article.favorited) {
        await removeFavorite(article.slug);
        article.favoritesCount -= 1;
        article.favorited = false;
      } else {
        await addFavorite(article.slug);
        article.favoritesCount += 1;
        article.favorited = true;
      }
      article.disabled = false;
    },
  },
};
