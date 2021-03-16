/*
 * @Description: 
 * @Author: chenxch
 * @Date: 2021-03-15 23:27:22
 */
import { createRouter, createWebHistory, RouteRecordRaw  } from 'vue-router'
import { defineAsyncComponent } from 'vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/home',
    name: 'Home',
    component: defineAsyncComponent(() => import('../views/Home.vue'))
  },
  {
    path: '/about',
    name: 'About',
    component:  defineAsyncComponent(() => import('../views/About.vue'))
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router