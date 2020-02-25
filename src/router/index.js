import Vue from "vue";
import VueRouter from "vue-router";

import Home from "@/components/home/Home";
import Register from "@/components/authentication/Register";
import Login from "@/components/authentication/Login";

import AdDetails from "@/components/ad/AdDetails";
import AdCreate from "@/components/ad/AdCreate";
import AdsAll from "@/components/ad/AdsAll";
import Search from "@/components/ad/Search";
import Profile from "@/components/ad/Profile";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/register",
    name: "Register",
    component: Register
  },
  {
    path: "/login",
    name: "Login",
    component: Login
  },
  {
    path: "/ad/create",
    name: "adCreate",
    component: AdCreate
  },
  {
    path: "/ad/all",
    name: "adsAll",
    component: AdsAll
  },
  {
    path: "/ad/profile",
    name: "profile",
    component: Profile
  },
  {
    path: "/ad/search/:city",
    name: "search",
    component: Search
  },
  {
    path: "/ad/:id",
    name: "adDetails",
    component: AdDetails
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
