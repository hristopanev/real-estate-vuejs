<template>
  <header>
    <nav class="navbar navbar-expand-lg navbar-dark bg-danger">
      <a class="navbar-brand" href="/">real-estate</a>
      <button
        appCollapse
        class="navbar-toggler collapsed"
        type="button"
        data-toggle="collapse"
        data-target="#navbarColor01"
        aria-controls="navbarColor01"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="navbar-collapse collapse" id="navbarColor01">
        <ul class="navbar-nav mr-auto">
          <template v-if="isAuthenticated">
            <li class="nav-item">
              <a class="nav-link" href="/ad/all">All Ads</a>
            </li>
            <li appNavDropdown class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                id="dropdown01"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
                >Store</a
              >
              <div class="dropdown-menu" aria-labelledby="dropdown01">
                <a class="dropdown-item" href="/user/profile">My Ad</a>
                <a class="dropdown-item" href="/ad/create">Create Ad</a>
              </div>
            </li>
            <li class="nav-item">
              <a class="nav-link" @click="logout()">Logout</a>
            </li>
          </template>
          <template v-else>
            <li class="nav-item">
              <a class="nav-link" href="/user/login">Login</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/user/register">Register</a>
            </li>
          </template>
        </ul>
      </div>
    </nav>
  </header>
</template>

<script>
/* eslint-disable */

export default {
  methods: {
    logout() {
      this.$root.$emit("logged-out");
    }
  }
};
</script>

<style scoped></style>
