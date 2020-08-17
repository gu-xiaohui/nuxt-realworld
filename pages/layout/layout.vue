<template>
  <div class="template">
    <nav class="navbar navbar-light">
      <div class="container">
        <nuxt-link class="navbar-brand" to="/">conduit</nuxt-link>
        <ul class="nav navbar-nav pull-xs-right">
          <li class="nav-item">
            <!-- Add "active" class when you're on that page" -->
            <nuxt-link class="nav-link" to="/" tag="a" exact>Home</nuxt-link>
          </li>
          <template v-if="user">
            <li class="nav-item">
              <nuxt-link class="nav-link" to="/editor" tag="a">
                <i class="ion-compose"></i>&nbsp;New Post
              </nuxt-link>
            </li>
            <li class="nav-item">
              <nuxt-link class="nav-link" to="/settings" tag="a">
                <i class="ion-gear-a"></i>&nbsp;Settings
              </nuxt-link>
            </li>
            <li class="nav-item">
              <nuxt-link
                class="nav-link"
                :to="{name: 'profile', params: {username: user.username}}"
                tag="a"
              >
                <img alt class="user-pic" :src="user.image" />
                {{user.username}}
              </nuxt-link>
            </li>
          </template>
          <template v-else>
            <li class="nav-item">
              <nuxt-link class="nav-link" to="/register" tag="a">Sign up</nuxt-link>
            </li>
            <li class="nav-item">
              <nuxt-link class="nav-link" to="/login" tag="a">Sign in</nuxt-link>
            </li>
          </template>
        </ul>
      </div>
    </nav>
    <!-- body -->
    <nuxt-child />
    <!-- footer -->
    <footer>
      <div class="container">
        <a href="/" class="logo-font">conduit</a>
        <span class="attribution">
          An interactive learning project from
          <a href="https://thinkster.io">Thinkster</a>. Code &amp; design licensed under MIT.
        </span>
      </div>
    </footer>
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";
export default {
  middleware: ["auth"],
  computed: {
    ...mapState(["user"]),
  },
  head() {
    return {
      title: `${this.$route.name} -Realworld`,
      meta: [{
        hid: 'layouts',
        name: 'layouts',
        content: 'pagelayouts'
      }],
    };
  },
};
</script>

<style>
</style>