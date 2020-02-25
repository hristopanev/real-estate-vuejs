<template>
  <div>
    <div class="index-main">
      <div class="row">
        <div class="content welcome text-center">
          <h1 class="p-3">Welcome to real-estate</h1>
        </div>
      </div>
      <div class="container p-4">
        <div class="text-white text-center p-2">
          <h1 class="p-5 h2">Find a property</h1>
          <p>Search for a property using the form below:</p>
        </div>
        <form>
          <input
            required
            minlength="2"
            v-model="city"
            name="query"
            class="form-control input-lg"
            type="text"
            placeholder="Search"
            aria-label="Search"
            id="inputSearch"
          />
          <div class="text-center">
            <router-link
              :to="{ name: 'search', params: { city: city } }"
              tag="button"
              class="btn btn-danger 
                  text-white"
              >Search
            </router-link>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
/* eslint-disable */
import { mapActions, mapGetters } from  'vuex';

export default {
    data() {
    return {
      city: ""
    };
}
}
</script>

<style scoped>
.index-main {
  background-image: url("boban-simonovski-qkJ8sTSg0hk-unsplash.jpg");
  height: 100%;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  background-attachment: fixed;
  padding: 2rem 4rem;
}

.welcome {
  font-display: big;
  margin: 0 auto;
  padding: 2rem;
  text-align: center;
  font-family: initial;
  padding-bottom: 2rem;
  color: whitesmoke;
}

.welcome h1 {
  font-size: -webkit-xxx-large;
}
</style>
