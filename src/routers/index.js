import { createWebHistory, createRouter } from "vue-router";

import Detail from "../views/Detail_Program.vue";
import Home from "../views/Home.vue";
import List_Relawan from "../views/List_Relawan.vue";
import Detail_Program from "../views/Detail_Program.vue";
import Login from "../views/Login.vue";
import Register from "../views/Register.vue";

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
export default router;
