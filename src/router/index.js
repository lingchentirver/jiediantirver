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
Vue.use(Router)

export default new Router({
  routes: [
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
  ]
})
