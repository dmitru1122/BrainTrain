<template>
  <div>
    <Header />
    <router-view />
    <!-- <Footer /> -->
  </div>
</template>

<script>
// import { Component, Vue } from 'vue-property-decorator';

// import Footer from '@/components/main-layout/footer/Footer.vue';
// import Header from "@/components/main-layout/header/Header.vue";

import "../theme/main.scss";

export default {
  name: "MainView",
  components: {},
};
</script>
