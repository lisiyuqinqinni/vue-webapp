import Vue from 'vue'
import Router from 'vue-router'
// import Hello from '@/components/Hello'
import login from '@/components/login'
import listInfo from '@/components/info'
import List from '@/components/list'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      component: login
    },
    {
      path: '/list',
      name: 'list',
      component: List
    },
    {
      path: '/info',
      name: 'info',
      component: listInfo
    }
  ]
})
