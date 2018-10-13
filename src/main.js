// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
// 导入并使用路由模块
import VueRouter from 'vue-router'
Vue.use(VueRouter)

//导入配置路由的文件
import {routes} from './router/index.js'

//实例路由对象
const router=new VueRouter({
  routes,
  mode:'history'
})
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  //注入路由
  router:router,
  components: { App },
  template: '<App/>'
})
