import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

import ElementUi from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

import directive from './directives/directives';
import axios from 'assets/axios';

Vue.use(ElementUi);
Vue.use(directive);

Vue.config.productionTip = false;
Vue.prototype.axios = axios;

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
