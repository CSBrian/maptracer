import Vue from 'vue'
import Router from 'vue-router'
import Basic from '@/components/Basic'
import Home from '@/components/Home'
import Data from '@/components/Data'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Basic',
      component: Basic
    },
    {
      path: '/home',
      name: 'Home',
      component: Home
    },
    {
      path: '/data',
      name: 'Data',
      component: Data
    }
  ]
})
