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

const username = localStorage.getItem("username");

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/user/register",
    name: "Register",
    component: Register
  },
  {
    path: "/user/login",
    name: "Login",
    component: Login
  },
  {
    path: "/ad/create",
    name: "adCreate",
    component: AdCreate,
    beforeEnter: (to, from, next) => {
      const redirectUrl = username ? undefined : "/user/login";
      next(redirectUrl);
    }
  },
  {
    path: "/ad/all",
    name: "adsAll",
    component: AdsAll,
    beforeEnter: (to, from, next) => {
      const redirectUrl = username ? undefined : "/user/login";
      next(redirectUrl);
    }
  },
  {
    path: "/ad/profile",
    name: "profile",
    component: Profile,
    beforeEnter: (to, from, next) => {
      const redirectUrl = username ? undefined : "/user/login";
      next(redirectUrl);
    }
  },
  {
    path: "/ad/search/:city",
    name: "search",
    component: Search,
    beforeEnter: (to, from, next) => {
      const redirectUrl = username ? undefined : "/user/login";
      next(redirectUrl);
    }
  },
  {
    path: "/ad/:id",
    name: "adDetails",
    component: AdDetails,
    beforeEnter: (to, from, next) => {
      const redirectUrl = username ? undefined : "/user/login";
      next(redirectUrl);
    }
  },
  {
    path: "*",
    redirect: "/"
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
