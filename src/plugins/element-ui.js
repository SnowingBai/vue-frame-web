import Vue from 'vue'
import {
  Button,
  Select,
  Message,
  Container,
  Header,
  Aside,
  Main,
  Footer,
  Row,
  Col,
  Dialog,
  Scrollbar,
  Menu,
  Submenu,
  MenuItem,
  MenuItemGroup
} from 'element-ui'

import '@/styles/element-variables.scss'

export default () => {
  Vue.use(Button)
  Vue.use(Select)
  Vue.use(Container)
  Vue.use(Header)
  Vue.use(Aside)
  Vue.use(Main)
  Vue.use(Footer)
  Vue.use(Row)
  Vue.use(Col)
  Vue.use(Dialog)
  Vue.use(Scrollbar)
  Vue.use(Menu)
  Vue.use(Submenu)
  Vue.use(MenuItem)
  Vue.use(MenuItemGroup)

  Vue.prototype.$message = Message
}
