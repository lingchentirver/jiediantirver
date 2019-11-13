<<<<<<< HEAD
import Vue from 'vue'
import Router from 'vue-router'
import index from '@/pages/index'
import login from '@/pages/login'
import enroll from '@/pages/enroll'
import retrievePass01 from '@/pages/retrievePass01'
import retrievePass02 from '@/pages/retrievePass02'
=======
/*
 * @Author: 李太白
 * @Date: 2019-11-04 17:16:01
 * @LastEditors: 李太白
 * @LastEditTime: 2019-11-12 11:23:29
 * @Description: 
 */
import Vue from 'vue'
import Router from 'vue-router'
import myself from '@/pages/myself'
import sweet from '@/pages/sweet'
import xiangqing from '@/pages/xiangqing'
>>>>>>> libai

Vue.use(Router)

export default new Router({
  routes: [
<<<<<<< HEAD
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
=======
    {
      path: '/',
      name: 'xiangqing',
      component: xiangqing
    },
    {
      path: '/sweet',
      name: 'sweet',
      component: sweet
    },
    {
      path: '/myself',
      name: 'myself',
      component: myself
    }
    
>>>>>>> libai
  ]
})
