import Vue from 'vue'
import VueRouter from 'vue-router'
import IndexPage from '../views/IndexPage.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/index',
  },

  {
    path: '/index',
    name: 'index',
    component: IndexPage
  }
]

const router = new VueRouter({
  mode:'hash',
  routes
})

export default router
