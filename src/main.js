import Vue from "vue";
import App from "./App.vue";
import Vuelidate from "vuelidate";
import router from "./router";
import axiosPlugin from "@/plugins/axiosPlugin";
import { authService } from "@/services/authServices";
import store from "@/strore";

import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

Vue.config.productionTip = false;
Vue.use(axiosPlugin);
Vue.use(Vuelidate);
// eslint-disable-next-line prettier/prettier
Vue.mixin(authService);

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount("#app");
