<template>
  <div class="container ">
    <div class="row space-top">
      <div class="col-md-12 text-center">
        <h1>Ad Details</h1>
      </div>
    </div>
    <div class="row space-top">
      <div class="col-md-4"></div>
      <div class="col-md-4 pb-5">
        <div class="card text-white bg-danger">
          <div class="card-body">
            <blockquote class="card-blockquote">
              <img :src="ad.image" width="310" />
            </blockquote>
          </div>
        </div>
      </div>
    </div>
    <div class="row space-top">
      <div class="col-md-4"></div>
      <div class="col-md-4">
        <h3>Address:</h3>
        <p>{{ ad.city }}, {{ ad.street }}, {{ ad.zip }}</p>
        <hr />

        <h3>Description:</h3>
        <p>
          {{ ad.description }}
        </p>
        <hr />

        <h3>Price:</h3>
        <p>Price: {{ ad.price }} $</p>
        <hr />

        <h3>Contact:</h3>
        <p>Telephone: {{ ad.telephone }}</p>
        <p>Email: {{ ad.email }}</p>
        <hr />
      </div>
    </div>
    <div class="pb-5 pt-5 text-center">
      <input
        class="btn btn-danger"
        type="button"
        value="Back"
        onclick="window.history.back()"
      />
    </div>
  </div>
</template>

<script>
/* eslint-disable */
import { mapGetters } from 'vuex'

export default {
    computed: {
        ...mapGetters(['getOneAd']),
        ad() {
            return this.getOneAd(this.$route.params.id)
        }
    }
};
</script>

<style scoped></style>
