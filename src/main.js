// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import * as VueGoogleMaps from 'vue2-google-maps'
import VModal from 'vue-js-modal'
import VueGeoLocation from 'vue-browser-geolocation'
import VuePositionApi from '@vue/composition-api'

Vue.config.productionTip = false

/* eslint-disable no-new */
Vue.use(VuePositionApi)
Vue.use(VModal)
Vue.use(VueGeoLocation)
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyDc7PnOq3Hxzq6dxeUVaY8WGLHIePl0swY',
    libraries: 'places'
  }
})
