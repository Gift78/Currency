import { createRouter, createWebHistory } from "vue-router";
import CurrencyConverter from "../components/CurrencyConverter.vue";
import NotFound from "../views/NotFound.vue";
import AboutUs from "../views/AboutUs.vue";
const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "CurrencyConverter",
      component: CurrencyConverter,
    },
    {
      path: "/aboutus",
      name: "AboutUs",
      component: AboutUs,
    },
    {
      // have any char in path not match
      path: "/:catchNotMatchPath(.*)",
      name: "NotFound",
      component: NotFound,
    },
  ],
});

export default router;
