<template>
  <div class="min-w-screen overflow-x-hidden">
    <Navigation
      v-if="$route.path !== '/login' && $route.path !== '/register'"
    />
    <main class="min-w-screen overflow-x-hidden">
      <router-view></router-view>
    </main>

    <!-- Footer hanya ditampilkan jika rutenya bukan /login atau /register -->
    <Footer v-if="$route.path !== '/login' && $route.path !== '/register'" />
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
