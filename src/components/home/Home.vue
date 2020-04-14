<template>
  <div>
    <div class="index-main">
      <div class="row">
        <div class="content welcome text-center">
          <h1 class="p-3">Welcome to real-estate "R-S"</h1>
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
            <button
              type="button"
              class="btn btn-danger"
              data-toggle="modal"
              data-target="#exampleModalCenter"
            >
              Search
            </button>
          </div>
        </form>
      </div>
    </div>

    <div v-if="isAuthenticated">
      <div v-if="!hasAds" class="p-5">
        <div class="half-circle-spinner">
          <div class="circle circle-1"></div>
          <div class="circle circle-2"></div>
        </div>
      </div>
      <h1 class="font-italic text-center pt-5">
        <p style="-webkit-text-stroke: thin;">Top Offerts</p>
        <hr />
      </h1>
      <div class="d-flex p-5 text-center row justify-content-around">
        <div v-for="ad in ads.slice(0, 3)" :key="ad._id">
          <div class="card p-2" style="width: 18rem;">
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
    <div v-else>
      <h1 class="font-italic text-center pt-5">
        <p style="-webkit-text-stroke: thin;">Top Offerts</p>
        <hr />
      </h1>
      <div class="d-flex p-5 text-center row justify-content-around">
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
            <button
              type="button"
              class="btn btn-danger"
              data-toggle="modal"
              data-target="#exampleModalCenter"
            >
              Details
            </button>
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
            <button
              type="button"
              class="btn btn-danger"
              data-toggle="modal"
              data-target="#exampleModalCenter"
            >
              Details
            </button>
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
            <button
              type="button"
              class="btn btn-danger"
              data-toggle="modal"
              data-target="#exampleModalCenter"
            >
              Details
            </button>
            <!-- Modal -->
            <div
              class="modal fade"
              id="exampleModalCenter"
              tabindex="-1"
              role="dialog"
              aria-labelledby="exampleModalCenterTitle"
              aria-hidden="true"
            >
              <div class="modal-dialog modal-dialog-centered" role="document">
                <div class="modal-content">
                  <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLongTitle">
                      Info
                    </h5>
                    <button
                      type="button"
                      class="close"
                      data-dismiss="modal"
                      aria-label="Close"
                    >
                      <span aria-hidden="true">&times;</span>
                    </button>
                  </div>
                  <div class="modal-body">
                    To access the whole content the users need to register!
                  </div>
                  <div class="modal-footer">
                    <a
                      type="button"
                      class="btn btn-secondary"
                      data-dismiss="modal"
                    >
                      Close
                    </a>
                    <a
                      href="/user/register"
                      type="button"
                      class="btn btn-danger"
                    >
                      Register
                    </a>
                    <a href="/user/login" type="button" class="btn btn-danger">
                      Login
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-12 col-md-1"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  data() {
    return {
      city: ""
    };
  },
  computed: {
    ...mapGetters({
      ads: "getAllAds"
    }),
    hasAds() {
      return this.ads.length > 0;
    }
  },
  methods: {
    ...mapActions(["getAll"]),
    message() {
      alert("To access the whole content the users need to register!");
    }
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
.half-circle-spinner,
.half-circle-spinner * {
  margin: 0 auto;
  box-sizing: border-box;
}

.half-circle-spinner {
  width: 60px;
  height: 60px;
  border-radius: 100%;
  position: relative;
}

.half-circle-spinner .circle {
  content: "";
  position: absolute;
  width: 100%;
  height: 100%;
  border-radius: 100%;
  border: calc(60px / 10) solid transparent;
}

.half-circle-spinner .circle.circle-1 {
  border-top-color: #ff1d5e;
  animation: half-circle-spinner-animation 1s infinite;
}

.half-circle-spinner .circle.circle-2 {
  border-bottom-color: #ff1d5e;
  animation: half-circle-spinner-animation 1s infinite alternate;
}

@keyframes half-circle-spinner-animation {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
