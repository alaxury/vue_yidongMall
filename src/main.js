import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// 导入 MUI 的样式
import './lib/mui/css/mui.min.css'
// 导入扩展图标样式
import './lib/mui/css/icons-extra.css'

import { Header } from 'mint-ui'
Vue.component(Header.name, Header)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
