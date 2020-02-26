<template>
  <div>
    <div class="index-main">
      <div class="row">
        <div class="content welcome text-center">
          <h1 class="p-3">Welcome to real-estate</h1>
        </div>
      </div>
      <div class="container p-4" v-if="isAuthenticated">
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
          <div class="text-center pt-3">
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
      <div class="container p-4" v-else>
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
          <div class="text-center pt-3">
            <a @click="message" class="btn btn-danger text-white">Search</a>
          </div>
        </form>
      </div>
    </div>
    <div v-if="isAuthenticated">
      <h1 class="font-italic text-center pt-5">
        <p style="-webkit-text-stroke: thin;">Top Offerts</p>
        <hr />
      </h1>
      <div class="d-flex p-5 text-center row justify-content-around">
        <div v-for="ad in ads.slice(0, 3)" :key="ad._id">
          <div class="card" style="width: 18rem;">
            <img
              class="card-img-top"
              :src="ad.image"
              alt="da"
              width="300"
              height="200"
            />
            <div class="card-body">
              <h5 class="card-title">{{ ad.city }}</h5>
              <p class="card-text"><strong>Rooms:</strong> {{ ad.rooms }}</p>
              <p>
                {{ ad.description.slice(0, 60) }}
              </p>
              <p><strong>Price:</strong> {{ ad.price }}€</p>
              <form id="add-product-form" class="form w-15 mx-auto">
                <div class="button-holder d-block justify-content-center">
                  <router-link
                    :to="{ name: 'adDetails', params: { id: ad._id } }"
                    tag="button"
                    class="btn btn-danger 
                    text-white"
                    >Details
                  </router-link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="d-flex p-5 text-center row justify-content-around" v-else>
      <div class="card col-12 col-md-3" style="width: 18rem;">
        <img class="card-img-top" src="./image/image1.jpg" alt="da" />
        <div class="card-body">
          <h5 class="card-title">Sofia</h5>
          <p class="card-text"><strong>Rooms:</strong> 5</p>
          <p>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
          </p>
          <p><strong>Price:</strong> 50000€</p>
          <a @click="message" class="btn btn-danger text-white">Details</a>
        </div>
      </div>
      <div class="card col-12 col-md-3" style="width: 18rem;">
        <img
          class="card-img-top"
          src="./image/image2.jpg"
          alt="Card image cap"
        />
        <div class="card-body">
          <h5 class="card-title">Varna</h5>
          <p class="card-text"><strong>Rooms:</strong> 4</p>
          <p>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
          </p>
          <p><strong>Price:</strong> 40000€</p>
          <a @click="message" class="btn btn-danger text-white">Details</a>
        </div>
      </div>
      <div class="card col-12 col-md-3" style="width: 18rem;">
        <img
          class="card-img-top"
          src="./image/image3.jpg"
          alt="Card image cap"
        />
        <div class="card-body">
          <h5 class="card-title">Ruse</h5>
          <p class="card-text"><strong>Rooms:</strong> 7</p>
          <p>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
          </p>
          <p><strong>Price:</strong> 30000€</p>
          <a @click="message" class="btn btn-danger text-white">Details</a>
        </div>
        <div class="col-12 col-md-1"></div>
      </div>
    </div>
  </div>
</template>

<script>
/* eslint-disable */
import { mapActions, mapGetters } from "vuex";
/**   
  message() {
    alert("To access the whole content the users need to register!");
  },
*/
export default {
  data() {
    return {
      city: ""
    };
  },
  computed: {
    ...mapGetters({
      ads: "getAllAds"
    })
  },
  methods: {
    ...mapActions(["getAll"]),
    message() {
      alert("To access the whole content the users need to register!");
  },
  },
  created() {
    this.getAll();
  }
};
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
