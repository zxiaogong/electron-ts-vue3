import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "home",
    meta: {
      title: "首页",
      keepAlive: true,
      requireAuth: true,
    },
    component: () => import("../home/home.vue"),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});
export default router;
