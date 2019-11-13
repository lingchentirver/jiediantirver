import Vue from 'vue'
import Router from 'vue-router'
import index from '@/pages/index'
import login from '@/pages/login'
import enroll from '@/pages/enroll'
import retrievePass01 from '@/pages/retrievePass01'
import retrievePass02 from '@/pages/retrievePass02'

Vue.use(Router)

export default new Router({
  routes: [
//  {
//    path: '/',
//    name: 'index',
//    component: index
//  }
		{
      path: '/index',
      name: 'index',
      component: index
   },
     {
      path: '/',
      name: 'login',
      component: login
    },
     {
      path: '/login',
      name: 'login',
      component: login
    },
     {
      path: '/enroll',
      name: 'enroll',
      component: enroll
    },
     {
      path: '/retrievePass01',
      name: 'retrievePass01',
      component: retrievePass01
    },
     {
      path: '/retrievePass02',
      name: 'retrievePass02',
      component: retrievePass02
    }
  ]
})
