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

Vue.use(Router)

export default new Router({
  routes: [
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
    
  ]
})
