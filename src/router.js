import { createWebHistory, createRouter } from "vue-router";

import signup from "@/views/signup.vue";
const NotFound = () => import("@/components/NotFound.vue");

const routes = [
  {
    path: "/",
    name: "signup",
    component: signup,
    props: true,
  },
  {
    path: "/:catchAll(.*)",
    component: NotFound,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  console.log(to, from, "from router ");
  next();
});

export default router;
