import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import AuthService from "@/services/auth";

Vue.config.productionTip = false

AuthService.restore_authorization();

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
