<template>
  <div class="container text-center p-5">
    <form class="p-5" @submit.prevent="onAdCreate">
      <div class="form-row">
        <div class="col-md-6 mb-3">
          <label for="city">City</label>
          <input
            type="text"
            v-model="$v.ad.city.$model"
            class="form-control"
            id="city"
            required
            name="city"
          />
          <p v-if="$v.ad.city.$error" class="alert alert-danger">
            Please provide a valid City.
          </p>
        </div>
        <div class="col-md-3 mb-3">
          <label for="Street">Street</label>
          <input
            type="text"
            v-model="$v.ad.street.$model"
            class="form-control"
            id="street"
            placeholder="Street"
          />
          <p v-if="$v.ad.street.$error" class="alert alert-danger">
            Street is not valid!
          </p>
        </div>
        <div class="col-md-3 mb-3">
          <label for="Zip">Zip</label>
          <input
            type="text"
            v-model="$v.ad.zip.$model"
            class="form-control"
            id="zip"
            placeholder="Zip"
          />
          <p v-if="$v.ad.zip.$error" class=" alert alert-danger">
            Please provide a valid Zip.
          </p>
        </div>
      </div>
      <div class="form-row">
        <div class="col-md-4 mb-3">
          <label for="Proterty">Proterty</label>
          <input
            type="text"
            v-model="$v.ad.property.$model"
            class="form-control"
            id="property"
            placeholder="Proterty"
            required
          />
          <p v-if="$v.ad.property.$error" class="alert alert-danger">
            Please provide a valid Proterty.
          </p>
        </div>
        <div class="col-md-4 mb-3">
          <label for="rooms">Rooms</label>
          <input
            type="number"
            min="0"
            v-model="$v.ad.rooms.$model"
            class="form-control"
            id="rooms"
            placeholder="Rooms"
            value="Rooms"
            required
          />
          <p v-if="$v.ad.rooms.$error" class="alert alert-danger">
            Please provide a valid Rooms.
          </p>
        </div>
        <div class="col-md-4 mb-3">
          <label for="Price">Price</label>
          <input
            type="number"
            v-model="$v.ad.price.$model"
            min="0"
            class="form-control"
            id="price"
            placeholder="Price"
            value="Price"
            required
          />
          <p v-if="$v.ad.price.$error" class="alert alert-danger">
            Please provide a valid Price.
          </p>
        </div>
      </div>
      <div class="form-group">
        <label class="form-control-label" for="image">Image</label>
        <input
          class="form-control"
          v-model="$v.ad.image.$model"
          id="image"
          formControlName="image"
          type="text"
        />
        <p v-if="$v.ad.image.$error" class="alert alert-danger">
          Please provide a valid Image.
        </p>
      </div>
      <div class="form-group">
        <label for="Description">Description</label>
        <textarea
          class="form-control"
          v-model="$v.ad.description.$model"
          id="description"
          rows="3"
        ></textarea>
        <p v-if="$v.ad.description.$error" class="alert alert-danger">
          Please provide a valid Description.
        </p>
      </div>
      <div class="form-row">
        <div class="col-md-6 mb-5">
          <label for="Telephone">Telephone</label>
          <input
            type="text"
            v-model="$v.ad.telephone.$model"
            class="form-control"
            id="telephone"
            placeholder="Telephone"
          />
          <p v-if="$v.ad.telephone.$error" class="alert alert-danger">
            Please provide a valid Telephone.
          </p>
        </div>
        <div class="col-md-6 mb-5">
          <label for="Email">Email</label>
          <input
            type="text"
            v-model="$v.ad.email.$model"
            class="form-control"
            id="email"
            placeholder="Email"
            required
          />
          <p v-if="$v.ad.email.$error" class="alert alert-danger">
            Please provide a valid Email.
          </p>
        </div>
        <div>
          <input
            hidden
            type="text"
            v-model="ad.user"
            class="form-control"
            id="user"
            placeholder="user"
            name="user"
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
import { required, minLength , maxLength, email } from 'vuelidate/lib/validators'
const username =localStorage.getItem("username");

export default {
  data() {
    return {
      ad: {
        city: '',
        street: '',
        zip: '',
        property: '',
        rooms: '',
        price: '',
        image: '',
        description: '',
        telephone: '',
        email: '',
        user: username
      }
    }
  },
    validations: {
      ad: {
        city: {
      required,
      minLength: minLength(3),
      maxLength: maxLength(20)
      },
      street: {
      required,
      minLength: minLength(3),
      },
      zip: {
      required,
      minLength: minLength(3),
      },
      property: {
      minLength: minLength(3),
      maxLength: maxLength(20)
      },
      rooms: {
      required
      },
      price: {
      required
      },
      image: {
      minLength: minLength(3),
      required,
      },
      description: {
      required,
      minLength: minLength(10),
      },
      telephone: {
      minLength: minLength(6),
      required,
      },
      email: {
      required,
      email
      }
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
