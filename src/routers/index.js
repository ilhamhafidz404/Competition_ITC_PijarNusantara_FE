import { createWebHistory, createRouter } from "vue-router";

import Detail from "../views/Detail_Program.vue";
import Home from "../views/Home.vue";
import List_Relawan from "../views/List_Relawan.vue";
import Detail_Program from "../views/Detail_Program.vue";
<<<<<<< HEAD
import AOS from "aos";
import "aos/dist/aos.css";
=======
import Login from "../views/Login.vue";
import Register from "../views/Register.vue";
>>>>>>> 711643f200c53ac7589cd73342d861029403fd8d

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
      component: Detail_Program,
    },
    {
      path: "/list_relawan",
      name: "list_relawan",
      component: List_Relawan,
    },
    {
      path: "/login",
      name: "login",
      component: Login,
    },
    {
      path: "/register",
      name: "register",
      component: Register,
    },
  ],
});
router.beforeEach((to, from, next) => {
  AOS.init(); // Initialize AOS
  next();
});
export default router;
