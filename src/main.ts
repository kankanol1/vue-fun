import Vue from 'vue';
import App from './App.vue';
import router from './router';

import HeadBar from './components/head-bar.vue';
import Contents from './components/mcontent.vue';
import FootBar from './components/foot-bar.vue';

import Cook from 'vue-cookies';
import Http from 'axios';
import  {Message} from 'element-ui';
Vue.component("HeadBar", HeadBar);
Vue.component("FootBar", FootBar);
Vue.component("Contents", Contents);
Vue.config.productionTip = false;

Vue.prototype.$message= Message;
Vue.prototype.$axios= Http;
Vue.prototype.$cookis= Cook;

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app');
