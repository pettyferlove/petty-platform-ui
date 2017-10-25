// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import VueQuillEditor from 'vue-quill-editor'
import PettyScroll from 'petty-scroll/petty-scrollbar/index'
import 'font-awesome/css/font-awesome.css'
import 'simplemde/dist/simplemde.min.css'
import './my-theme/index.less'
import './my-theme/petty.less'

Vue.use(ElementUI)
Vue.use(VueQuillEditor)
Vue.use(PettyScroll)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
