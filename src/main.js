import 'babel-polyfill'  // 这个必须写在开头部分
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import fastclick from 'fastclick' // 引入fastclick
import VueLazyLoad from 'vue-lazyload'
import VueResource from 'vue-resource'

import 'common/stylus/index.styl' // 第一步：这里首先需要引入基本的样式

// /* eslint-disable no-unused-vars */  // 这一句必须写，用来规避ES6的语法检测
// import vConsole from 'vconsole'  // 针对手机网页的前端 console 调试面板
// console.log('test')

fastclick.attach(document.body) // 应用fastclick,使body下面所有的点击都不会有300ms的延迟

Vue.config.productionTip = false

Vue.use(VueLazyLoad, {
  loading: require('common/image/moren.png')
})
Vue.use(VueResource)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
