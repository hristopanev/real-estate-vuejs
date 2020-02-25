<template>
  <div class="pb-5 pt-5">
    <h1 class="text-center text-dark pb-5 pt-5">My Ads</h1>
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
                <p></p>
                <button
                  class="btn btn-primary text-white"
                  @click="deleteAd(ad)"
                >
                  Delete
                </button>
              </div>
            </form>
          </th>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
/* eslint-disable */
import { mapActions, mapGetters } from  'vuex';

export default {
     computed: {
      ...mapGetters({
        ads: 'getAllAds'
      }),
    },
    methods: {
      ...mapActions(['getProfile']),
      ...mapActions(['deleteAd'])
    },
    created() {
        this.getProfile();
    },
    deleteAd(id) {
      this.deleteAd('deleteAd', id)
    }
};
</script>

<style scoped></style>
