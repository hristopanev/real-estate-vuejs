<template>
  <div>
    <h1 class="text-center text-dark pb-5 pt-5">All Oferts</h1>
    <hr class="hr-2 bg-dark w-75" />
    <table class="table table-hover w-75 mx-auto">
      <thead class="table-form">
        <tr class="row mx-auto">
          <th class="col-md-3 text-center">Image</th>
          <th class="col-md-3 text-center">City</th>
          <th class="col-md-3 text-center">Description</th>
          <th class="col-md-2 text-center">Price</th>
          <th class="col-md-1 text-center">See Oferts</th>
        </tr>
      </thead>
      <div v-if="!hasAds" class="p-5">
        <div class="fulfilling-bouncing-circle-spinner">
          <div class="circle"></div>
          <div class="orbit"></div>
        </div>
      </div>
      <tbody v-for="ad in ads" :key="ad._id">
        <tr class="row mx-auto">
          <th class="col-md-3 text-center">
            <img :src="ad.image" width="100" height="100" />
          </th>
          <th class="col-md-3 text-center">{{ ad.city }}</th>
          <th class="col-md-3 text-center">
            {{ ad.description.slice(0, 60) }}
          </th>
          <th class="col-md-2 text-center">{{ ad.price }}$</th>
          <th class="col-md-1 text-center">
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
          </th>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters({
      ads: "getAllAds"
    }),
    hasAds() {
      return this.ads.length > 0;
    }
  },
  methods: {
    ...mapActions(["getAll"])
  },
  created() {
    this.getAll();
  }
};
</script>

<style scoped>
.fulfilling-bouncing-circle-spinner,
.fulfilling-bouncing-circle-spinner * {
  box-sizing: border-box;
  margin: 0 auto;
}

.fulfilling-bouncing-circle-spinner {
  height: 60px;
  width: 60px;
  position: relative;
  animation: fulfilling-bouncing-circle-spinner-animation infinite 4000ms ease;
}

.fulfilling-bouncing-circle-spinner .orbit {
  height: 60px;
  width: 60px;
  position: absolute;
  top: 0;
  left: 0;
  border-radius: 50%;
  border: calc(60px * 0.03) solid #ff1d5e;
  animation: fulfilling-bouncing-circle-spinner-orbit-animation infinite 4000ms
    ease;
}

.fulfilling-bouncing-circle-spinner .circle {
  height: 60px;
  width: 60px;
  color: #ff1d5e;
  display: block;
  border-radius: 50%;
  position: relative;
  border: calc(60px * 0.1) solid #ff1d5e;
  animation: fulfilling-bouncing-circle-spinner-circle-animation infinite 4000ms
    ease;
  transform: rotate(0deg) scale(1);
}

@keyframes fulfilling-bouncing-circle-spinner-animation {
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
}

@keyframes fulfilling-bouncing-circle-spinner-orbit-animation {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1);
  }
  62.5% {
    transform: scale(0.8);
  }
  75% {
    transform: scale(1);
  }
  87.5% {
    transform: scale(0.8);
  }
  100% {
    transform: scale(1);
  }
}

@keyframes fulfilling-bouncing-circle-spinner-circle-animation {
  0% {
    transform: scale(1);
    border-color: transparent;
    border-top-color: inherit;
  }
  16.7% {
    border-color: transparent;
    border-top-color: initial;
    border-right-color: initial;
  }
  33.4% {
    border-color: transparent;
    border-top-color: inherit;
    border-right-color: inherit;
    border-bottom-color: inherit;
  }
  50% {
    border-color: inherit;
    transform: scale(1);
  }
  62.5% {
    border-color: inherit;
    transform: scale(1.4);
  }
  75% {
    border-color: inherit;
    transform: scale(1);
    opacity: 1;
  }
  87.5% {
    border-color: inherit;
    transform: scale(1.4);
  }
  100% {
    border-color: transparent;
    border-top-color: inherit;
    transform: scale(1);
  }
}
</style>
