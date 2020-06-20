import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'
import { Table, Icon, Input, Spin, Row, Form, Tooltip, Cascader, Col, Checkbox, Radio, AutoComplete, DatePicker, TimePicker, InputNumber, Modal, Layout, Menu, Card, List, notification, Divider } from 'ant-design-vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import VueCountdown from '@chenfengyuan/vue-countdown'
Vue.use(VueAxios, axios)
Vue.use(Table)
Vue.use(Icon)
Vue.use(Input)
Vue.use(Spin)
Vue.use(Row)
Vue.use(Form)
Vue.use(Tooltip)
Vue.use(Cascader)
Vue.use(Col)
Vue.use(Checkbox)
Vue.use(Radio)
Vue.use(AutoComplete)
Vue.use(DatePicker)
Vue.use(TimePicker)
Vue.use(InputNumber)
Vue.use(Modal)
Vue.use(Layout)
Vue.use(Menu)
Vue.use(Card)
Vue.use(List)
Vue.use(notification)
Vue.use(Divider)

Vue.component(VueCountdown.name, VueCountdown)
Vue.config.productionTip = false
// Vue.prototype.$message = message;

Vue.prototype.$notification = notification
Vue.prototype.$info = Modal.info
const moment = require('moment')
require('moment/locale/ru')

Vue.use(require('vue-moment'), {
  moment
})

new Vue({
  router,
  store,
  components: { App },
  template: '<app></app>',
  render: h => h(App)
}).$mount('#app')
