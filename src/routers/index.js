import { createWebHistory, createRouter } from "vue-router";

import Detail from "../views/Detail_Program.vue";
import Home from "../views/Home.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
    },
    {
      path: "/detail_program",
      name: "detail_program",
      component: Detail,
    },
  ],
});
export default router;
