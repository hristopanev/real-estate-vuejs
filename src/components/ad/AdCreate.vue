<template>
  <div class="container text-center p-5">
    <form class="p-5" @submit.prevent="onAdCreate">
      <div class="form-row">
        <div class="col-md-6 mb-3">
          <label for="city">City</label>
          <input
            type="text"
            v-model="ad.city"
            class="form-control"
            id="city"
            placeholder="City"
            required
          />
          <div class="invalid-feedback">
            Please provide a valid city.
          </div>
        </div>
        <div class="col-md-3 mb-3">
          <label for="Street">Street</label>
          <input
            type="text"
            v-model="ad.street"
            class="form-control"
            id="Street"
            placeholder="Street"
            required
          />
          <div class="invalid-feedback">
            Please provide a valid street.
          </div>
        </div>
        <div class="col-md-3 mb-3">
          <label for="Zip">Zip</label>
          <input
            type="text"
            v-model="ad.zip"
            class="form-control"
            id="Zip"
            placeholder="Zip"
            required
          />
          <div class="invalid-feedback">
            Please provide a valid zip.
          </div>
        </div>
      </div>
      <div class="form-row">
        <div class="col-md-4 mb-3">
          <label for="Proterty">Proterty</label>
          <input
            type="text"
            v-model="ad.property"
            class="form-control"
            id="Proterty"
            placeholder="Proterty"
            required
          />
        </div>
        <div class="col-md-4 mb-3">
          <label for="Room">Room</label>
          <input
            type="number"
            v-model="ad.room"
            class="form-control"
            id="Room"
            placeholder="Room"
            value="Room"
            required
          />
        </div>
        <div class="col-md-4 mb-3">
          <label for="Price">Price</label>
          <input
            type="number"
            v-model="ad.price"
            class="form-control"
            id="Price"
            placeholder="Price"
            value="Price"
            required
          />
        </div>
      </div>
      <div class="form-group">
        <label class="form-control-label" for="new-image">Image</label>
        <input
          class="form-control"
          v-model="ad.image"
          id="new-image"
          formControlName="image"
          type="text"
        />
      </div>
      <div class="form-group">
        <label for="Description">Description</label>
        <textarea
          class="form-control"
          v-model="ad.description"
          id="Description"
          rows="3"
        ></textarea>
      </div>
      <div class="form-row">
        <div class="col-md-6 mb-5">
          <label for="Telephone">Telephone</label>
          <input
            type="text"
            v-model="ad.telephone"
            class="form-control"
            id="Telephone"
            placeholder="Telephone"
          />
        </div>
        <div class="col-md-6 mb-5">
          <label for="Email">Email</label>
          <input
            type="text"
            v-model="ad.email"
            class="form-control"
            id="Email"
            placeholder="Email"
            required
          />
        </div>
        <div>
          <input
            hidden
            type="text"
            v-model="ad.user"
            class="form-control"
            id="user"
            placeholder="user"
            disabled
          />
        </div>
      </div>
      <button class="btn btn-danger" type="submit">
        Create
      </button>
    </form>
  </div>
</template>

<script>
/* eslint-disable */

export default {
  data() {
    return {
      ad: {
        user: localStorage.getItem("username")
      },
    }
  },
  methods: {
    onAdCreate() {
      this.$store.dispatch('create', this.ad)
      this.$router.push('/')
    }
  }
};
</script>

<style scoped></style>
