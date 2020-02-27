import Vue from 'vue'
import App from './App.vue'

import ElementUI from 'element-ui'
import locale from 'element-ui/lib/locale/lang/en'
import { Button, Select } from 'element-ui'

// import components
Vue.component(Button.name, Button)
Vue.component(Select.name, Select)

import Buefy from 'buefy'
import 'buefy/dist/buefy.css'

Vue.use(ElementUI, { locale })
Vue.use(Buefy)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
