import { createRouter, createWebHashHistory } from "vue-router"
import Home from "../views/Home.vue"
import Alpaca from "../views/Alpaca.vue"
import Llama from "../views/Llama.vue"

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView
    },
    {
      path: "/alpaca",
      name: "alpaca",
      component: Alpaca
    },
    {
      path: "/llama",
      name: "llama",
      component: LLama
    }
  ]
})

export default router
