import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import NestedComponent from '../views/NestedComponent.vue'
import P159Parent from '../views/P159Parent.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/p152',
    name: 'p152',
    component: NestedComponent
  },
  {
    path: '/p159',
    name: 'p159',
    component: P159Parent
  },
  {
    path: '/p160',
    // name: 'P160Parent',
    component: () => import( /* webpackChunkName: "databindinghtml" */ '../views/ParentComponent.vue')
  },
  {
    path: '/p161',
    // name: 'P160Parent',
    component: () => import( /* webpackChunkName: "databindinghtml" */ '../views/ParentComponent2.vue')
  },
  {
    path: '/p162',
    // name: 'P160Parent',
    component: () => import( /* webpackChunkName: "databindinghtml" */ '../views/ParentComponent3.vue')
  },
  {
    path: '/p163',
    // name: 'P160Parent',
    component: () => import( /* webpackChunkName: "databindinghtml" */ '../views/ParentComponent4.vue')
  },
  {
    path: '/p164',
    // name: 'P160Parent',
    component: () => import( /* webpackChunkName: "databindinghtml" */ '../views/ParentComponent5.vue')
  },
  {
    path: '/p167',
    // name: 'P160Parent',
    component: () => import( /* webpackChunkName: "slot" */ '../views/SlotUseModalLayout.vue')
  },
  {
    path: '/p171',
    // name: 'P160Parent',
    component: () => import( /* webpackChunkName: "inject" */ '../views/ProvideInject.vue')
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
