<template>
  <div id="app">
    <link
      rel="stylesheet"
      href="https://use.fontawesome.com/releases/v5.8.2/css/all.css"
      integrity="sha384-oS3vJWv+0UjzBfQzYUhtDYW+Pj2yciDJxpsK1OYPAYjqT085Qq/1cq5FLXAZQ7Ay"
      crossorigin="anonymous"
    />
    <navigation></navigation>
    <router-view />
    <page-footer></page-footer>
  </div>
</template>

<script>
import Navigation from "@/components/common/Navigation";
import PageFooter from "@/components/common/PageFooter";
export default {
  components: {
    Navigation,
    PageFooter
  }
};
</script>

<style>
body,
html {
  height: 100%;
}

li {
  list-style: none;
}
</style>
