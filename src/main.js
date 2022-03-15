import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './plugins/element.js'
import axios from 'axios';
import './assets/css/style.css';

Vue.config.productionTip = false

axios.defaults.baseURL=`http://127.0.0.1:8888/api/private/v1/`;
Vue.prototype.$http=axios;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
