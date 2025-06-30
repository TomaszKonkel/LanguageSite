import { createRouter, createWebHistory } from 'vue-router'
import First from '../views/First.vue'
import Second from '../views/Second.vue'
import Third from '../views/Third.vue'

const routes = [
  { path: '/', name: 'First', component: First },
  { path: '/second', name: 'Second', component: Second },
  { path: '/third', name: 'Third', component: Third },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
