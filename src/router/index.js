import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import("../views/Home.vue"),
  },
  {
    path: "/detail/:id",
    name: "Details",
    component: () => import("../views/Details.vue"),
    props: true,
  },
  {
    path: "/fav",
    name: "Fav",
    component: () => import("../views/Favorite.vue"),
  },
  {
    path: "/:pathMatch(.*)*",
    name: "NotFound",
    component: () => import("../views/NotFound.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
