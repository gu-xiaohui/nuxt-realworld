<template>
  <div class="settings-page">
    <div class="container page">
      <div class="row">
        <div class="col-md-6 offset-md-3 col-xs-12">
          <h1 class="text-xs-center">Your Settings</h1>

          <form @submit.prevent="onSubmit">
            <fieldset>
              <fieldset class="form-group">
                <input
                  class="form-control"
                  v-model="user.image"
                  type="text"
                  placeholder="URL of profile picture"
                />
              </fieldset>
              <fieldset class="form-group">
                <input
                  class="form-control form-control-lg"
                  v-model="user.username"
                  type="text"
                  placeholder="Your Name"
                />
              </fieldset>
              <fieldset class="form-group">
                <textarea
                  class="form-control form-control-lg"
                  rows="8"
                  placeholder="Short bio about you"
                  v-model="user.bio"
                ></textarea>
              </fieldset>
              <fieldset class="form-group">
                <input
                  class="form-control form-control-lg"
                  type="text"
                  placeholder="Email"
                  v-model="user.email"
                />
              </fieldset>
              <fieldset class="form-group">
                <input
                  class="form-control form-control-lg"
                  type="password"
                  placeholder="Password"
                  v-model="user.password"
                />
              </fieldset>
              <button
                class="btn btn-lg btn-primary pull-xs-right"
                :disabled="disabled"
              >Update Settings</button>
            </fieldset>
            <hr />
            <button
              type="button"
              class="btn btn-outline-danger"
              @click.stop="logout()"
            >Or click here to logout.</button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import { updateUser, getCurrentUser } from "../api";
export default {
  async asyncData() {},
  data() {
    return {
      disabled: false,
      user: {}
    };
  },
  computed: {},
  created() {
    this.getCurrentUser();
  },

  methods: {
    async getCurrentUser() {
      const { data } = await getCurrentUser();
      const { user } = data;
      this.user = user;
    },
    async onSubmit() {
      const user = this.user;
      this.disabled = true;
      const { data } = await updateUser(user);
      this.$store.commit("setUser", data.user);
      this.disabled = false;
      this.$router.replace(`/profile/${data.user.username}`);
    },
    logout() {
      this.$store.commit("setUser", null);
      this.$router.replace(`/`);
    },
  },
};
</script>

<style>
</style>