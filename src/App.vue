<template>
<<<<<<< HEAD
  <div class="min-w-screen overflow-x-hidden">
    <Navigation />
    <main class="min-w-screen overflow-x-hidden">
=======
  <div>
    <!-- Navigation hanya ditampilkan jika rutenya bukan /login atau /register -->
    <Navigation
      v-if="$route.path !== '/login' && $route.path !== '/register'"
    />

    <main>
>>>>>>> 711643f200c53ac7589cd73342d861029403fd8d
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
