<template>
  <div>
    <!-- Navigation hanya ditampilkan jika rutenya bukan /login atau /register -->
    <Navigation
      v-if="$route.path !== '/login' && $route.path !== '/register'"
    />

    <main>
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
