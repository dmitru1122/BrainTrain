import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    component: () => import("@/views/MainView.vue"),
    children: [
      {
        path: "",
        name: "main.home",
        component: () => import("@/components/pages/home-page/HomePage.vue"),
      },
      {
        path: "*",
        name: "NotFound",
        component: () => import("@/components/pages/home-page/HomePage.vue"),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
