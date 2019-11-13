// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
<<<<<<< HEAD
import ElementUI from 'element-ui'; 
import 'element-ui/lib/theme-chalk/index.css'; 
Vue.use(ElementUI);
Vue.config.productionTip = false;
import { Swipe, SwipeItem } from 'mint-ui';

Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);
=======

Vue.config.productionTip = false

>>>>>>> libai
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
