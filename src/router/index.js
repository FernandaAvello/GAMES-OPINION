import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AdminView from '../views/AdminView.vue'
import ProfileView from '../views/ProfileView.vue'
import NotFound from '../views/NotFound.vue'

Vue.use(VueRouter)

const lazyLoad = (view) => {
  return() => import(`@/views/${view}.vue`)
}

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/opinions/:gameName',
    name: 'Opinions',
    component: lazyLoad('OpinionsView')
  },
  {
    path: '/admin',
    name: 'Administrator',
    component: AdminView
  },
  {
    path: '/admin/profile',
    name: 'Profile',
    component: ProfileView
  },
  {
    path: '/:catchAll(.*)',
    component: NotFound
  }
]

const router = new VueRouter({
  routes
})

export default router
