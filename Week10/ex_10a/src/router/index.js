import { createRouter, createWebHashHistory } from "vue-router";
import Home from "../views/Home.vue";
import CollectionList from "../views/CollectionList.vue";
import CollectionDetails from "../views/CollectionDetails.vue";


const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/", //default path
      name: "home",
      component: Home
    },
    {
      path: "/collection", //list of creatures
      name: "collection",
      component: CollectionList
    },
    {
      path: "/collection/:id", //creature details
      name: "collection-detail",
      component: CollectionDetails
    }
  ],
});

export default router;
