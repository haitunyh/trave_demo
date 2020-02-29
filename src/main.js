// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import fastClick from 'fastclick'
import 'styles/reset.css'//不同设备适配问题
import 'styles/border.css'//一像素边框问题
import 'styles/iconfont.css'
Vue.config.productionTip = false
fastClick.attach(document.body)//移动端300ms的延迟问题解决
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
