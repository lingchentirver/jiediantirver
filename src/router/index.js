<<<<<<< HEAD
/*
 * @Author: your name
 * @Date: 2019-11-06 19:44:29
 * @LastEditTime: 2019-11-12 21:06:57
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \第三阶段d:\jiedianlvxing\src\router\index.js
 */
import Vue from 'vue'
import Router from 'vue-router'
import Travel from '@/pages/Travel'
import Order from '@/pages/Order'
import Choose from '@/pages/Choose'
import Fillorder from '@/pages/Fillorder'
import Add from '@/pages/Add'
=======
import Vue from 'vue'
import Router from 'vue-router'
import index from '@/pages/index'
import login from '@/pages/login'
import enroll from '@/pages/enroll'
import retrievePass01 from '@/pages/retrievePass01'
import retrievePass02 from '@/pages/retrievePass02'

>>>>>>> a37c03fbfa01f8b3b226ac633397c5e88f77165e
Vue.use(Router)

export default new Router({
  routes: [
<<<<<<< HEAD
    {
      path: '/',
      name: 'Travel',
      component: Travel
    }
    // {
    //   path: '/',
    //   name: 'Order',
    //   component: Order
    // },
    // {
    //   path:'/choose',
    //   name:'Choose',
    //   component:Choose
    // },
    // {
    //   path:'/',
    //   name:'Fillorder',
    //   component:Fillorder
    // },
    // {
    //   path:'/Fillorder',
    //   name:'Fillorder',
    //   component:Fillorder
    // },
    // {
    //   path:'/Add',
    //   name:'Add',
    //   component:Add
    // }
=======
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
>>>>>>> a37c03fbfa01f8b3b226ac633397c5e88f77165e
  ]
})
