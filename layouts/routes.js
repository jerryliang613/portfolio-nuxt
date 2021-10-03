import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

const routes = [
  {
    path: "/",
    name: "Home"
    //component: () => import("../views/Home.vue"),
  },
  {
    path: "/projects",
    name: "Projects"
    //component: () => import("../views/Projects.vue"),
  },
  {
    path: "/profile",
    name: "Profile"
    //component: () => import("../views/Profile.vue"),
  },
  {
    path: "/contact",
    name: "Contact"
    //component: () => import("../views/Contact.vue"),
  }
];
export default routes;

export function createRouter() {
  return new Router({
    mode: "history",
    //base: process.env.BASE_URL,
    routes
  });
}
