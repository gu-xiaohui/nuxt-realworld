import { follow, unfollow } from "../api";
export default {
  methods: {
    async onFollow(author) {
      if (!this.user) {
        alert("not login");
        return this.$router.replace("/login");
      }
      this.$set(author, "disabled", true);
      if (author.following) {
        await unfollow(author.username);
        author.following = false;
      } else {
        await follow(author.username);
        author.following = true;
      }
      author.disabled = false;
    },
  },
};
