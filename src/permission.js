import router from './router'
import store from './store'
import { Message } from 'element-ui'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
import { getMenus } from './api/app'
import { getToken } from './utils/auth'
import { filterAsyncRoutes } from '@/store/modules/permission'

NProgress.configure({ showSpinner: false })

const whiteList = ['/login']

router.beforeEach((to, from, next) => {
  if (to.meta.title) {
    document.title = to.meta.title
  }
  NProgress.start()

  if (getToken()) {
    if (to.path === '/login') {
      next({ path: '/' })
      NProgress.done()
    } else {
      const hasRoles = store.getters.roles && store.getters.roles.length > 0
      if (hasRoles) {
        next()
      } else {
        store
          .dispatch('user/getInfo')
          .then(() => {
            loadMunes(to, next)
          })
          .catch(error => {
            Message.error(error || '请求出错')
            store.dispatch('user/resetToken').then(() => {
              // 重新实例化vue-router对象
              location.reload()
            })
          })
      }
    }
  } else {
    if (whiteList.includes(to.path)) {
      next()
    } else {
      next(`/login?redirect=${to.path}`)
      NProgress.done()
    }
  }
})

export const loadMunes = (to, next) => {
  getMenus().then(res => {
    const asyncRouter = filterAsyncRoutes(res)
    store.dispatch('permission/generateRoutes', asyncRouter).then(() => {
      router.addRoutes(asyncRouter) // 动态添加可访问路由表
      next({ ...to, replace: true })
    })
  })
}

router.afterEach(() => {
  NProgress.done()
})
