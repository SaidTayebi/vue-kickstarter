import Vue from 'vue'
import VueResource from 'vue-resource'
import ElementUI from 'element-ui'
import localeUI from 'element-ui/lib/locale/lang/en'
import App from './App'
import store from './vuex-modules/store'
import router from './router'

Vue.use(VueResource);
Vue.use(ElementUI, {locale: localeUI});

new Vue({
  store,
  router,
  components: {
    App
  }
}).$mount('.app')
