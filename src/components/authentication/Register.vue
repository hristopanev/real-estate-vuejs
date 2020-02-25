<template>
  <div class="container p-5">
    <dir class="text-center">
      <h1>Register</h1>
    </dir>
    <form @submit.prevent="onRegisterClick">
      <div class="form-group">
        <label for="name">Name</label>
        <input
          type="text"
          v-model="$v.username.$model"
          class="form-control"
          id="name"
          required
          name="name"
        />
      </div>
      <div class="form-group">
        <label for="email">Email</label>
        <input
          type="email"
          v-model="$v.email.$model"
          class="form-control"
          id="email"
          required
          email
          name="email"
        />
      </div>
      <div class="form-group">
        <label for="password">Password</label>
        <input
          type="password"
          v-model="$v.password.$model"
          class="form-control"
          id="password"
          required
        />
      </div>
      <dir class="text-center">
        <button
          type="submit"
          value="Register"
          class="btn btn-danger"
          :disabled="$v.$error"
        >
          Register
        </button>
      </dir>
    </form>
  </div>
</template>

<script>
/* eslint-disable */

import { authenticate } from '@/services/authServices'
import { required, minLength , maxLength, email } from 'vuelidate/lib/validators'

export default {
  data() {
    return {
      username: 'Ivan',
      password: 'dada',
      email: 'ivan@ivan.bg'
    };
  },
  mixins: [authenticate],
  validations: {
    username: {
      required,
      minLength: minLength(3),
      maxLength: maxLength(20)
    },
    password: {
      required,
      minLength: minLength(3),
      maxLength: maxLength(20)
    },
    email: {
      email,
      required
    }
  },
  methods: {
    onRegisterClick() {
      this.register(this.username, this.password, this.email)
        .then(res => this.$router.push('/'))
    }
  }
};
</script>

<style scoped></style>
