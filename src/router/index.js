/*
 * @Author: your name
 * @Date: 2019-11-06 19:44:29
 * @LastEditTime: 2019-11-13 16:56:48
 * @LastEditors: 李太白
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
import index from '@/pages/index'
import login from '@/pages/login'
import enroll from '@/pages/enroll'
import retrievePass01 from '@/pages/retrievePass01'
import retrievePass02 from '@/pages/retrievePass02'
import myself from '@/pages/myself'
import sweet from '@/pages/sweet'
import xiangqing from '@/pages/xiangqing'

Vue.use(Router)

export default new Router({
  routes: [

    {
      path: '/Travel',
      name: 'Travel',
      component: Travel
    },
    {
      path: '/Order',
      name: 'Order',
      component: Order
    },
    {
      path:'/choose',
      name:'Choose',
      component:Choose
    },
    {
      path:'/Fillorder',
      name:'Fillorder',
      component:Fillorder
    },
    {
      path:'/Add',
      name:'Add',
      component:Add
    },

    {
      path: '/',
      name: 'index',
      component: index
    },
		{
      path: '/index',
      name: 'index',
      component: index
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
    },
    {
      path: '/xiangqing',
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
  ]
})
