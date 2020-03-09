import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueLazyload from 'vue-lazyload'
import MintUI from 'mint-ui'
/* style */
import 'mint-ui/lib/style.css'
import './style/reset.css'
import './style/font/iconfont.css'

Vue.use(MintUI)

Vue.use(VueLazyload, {
  preLoad: 1.5,
  error: '/maizuo.png', // 图片加载失败要替换的图片
  loading: '/maizuo.png', // 图片加载中的的图片
  attempt: 1
})


Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
