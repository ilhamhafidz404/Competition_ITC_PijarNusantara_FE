<template>
  <div>
    <Navigation />
    <main>
      <RouterView />
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
