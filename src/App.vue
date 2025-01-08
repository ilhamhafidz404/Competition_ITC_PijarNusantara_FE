<template>
  <div class="min-w-screen overflow-x-hidden">
    <Navigation />
    <main class="min-w-screen overflow-x-hidden">
      <router-view></router-view>
    </main>
    <Footer />
  </div>
</template>
<script>
import Navigation from "./components/Navigation.vue";
import Footer from "./components/Footer.vue";

export default {
  name: "App",
  components: {
    Navigation,
    Footer,
  },
};
</script>
