// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
<<<<<<< HEAD
<<<<<<< HEAD
=======

Vue.config.productionTip = false

=======
>>>>>>> 545295d91aa9126a592fe8ed632c92e8bb2e9cf1
import ElementUI from 'element-ui'; 
import 'element-ui/lib/theme-chalk/index.css'; 
Vue.use(ElementUI);
Vue.config.productionTip = false;
import { Swipe, SwipeItem } from 'mint-ui';

Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);
<<<<<<< HEAD
=======

Vue.config.productionTip = false

>>>>>>> libai
=======
>>>>>>> a37c03fbfa01f8b3b226ac633397c5e88f77165e
>>>>>>> 545295d91aa9126a592fe8ed632c92e8bb2e9cf1
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
