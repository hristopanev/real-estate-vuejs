<template>
  <div class="container p-5">
    <h1>Login</h1>
    <form @submit.prevent="onLoginClick">
      <div class="form-group">
        <label for="text">Username</label>
        <input
          type="text"
          v-model="username"
          class="form-control"
          id="username"
          name="email"
          required
        />
      </div>
      <div class="form-group">
        <label for="password">Password</label>
        <input
          type="password"
          v-model="password"
          class="form-control"
          id="password"
          name="password"
          required
        />
      </div>
      <div class="text-center">
        <button type="submit" class="btn btn-danger">Login</button>
      </div>
    </form>
  </div>
</template>

<script>
/* eslint-disable */
import { authenticate } from '@/services/authServices'
export default {
  data() {
    return {
        username: '',
        password: ''
    };
  },
  mixins: [authenticate],
  methods: {
    onLoginClick() {
      this.login(this.username, this.password)
        .then(user => {

          this.$root.$emit('logged-in', user.authtoken);
          this.$router.push('/')
        })
    }
  }
};
</script>

<style scoped></style>
