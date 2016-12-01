import Vue from 'vue'
import VueResource from 'vue-resource'
import App from './App'
import store from './vuex-modules/store'

Vue.use(VueResource);

new Vue({
  store,
  components: {
    App
  }
}).$mount('.app')
