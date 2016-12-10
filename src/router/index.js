import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home'
import Signup from '../components/signup/Signup'
import Signin from '../components/signin/Signin'
import Users from '../views/Users'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: Home
  },
  {
    path: '/signup',
    name: 'signup',
    component: Signup
  },
  {
    path: '/signin',
    name: 'signin',
    component: Signin
  },
  {
    path: '/users',
    name: 'users',
    component: Users
  }
]

const router = new VueRouter({
  mode: 'history',
  root: '/',
  routes
});

export default router
