/*
 * @created: Monday, 2020-08-03 13:36:58
 * @author: baix@shumei.ai
 * ---------
 * @desc 路由访问权限配置
 */

import { constantRoutes } from '@/router'

/* Layout */
import Layout from '@/layout'

export default {
  namespaced: true,
  state: {
    routes: [],
    addRoutes: []
  },
  mutations: {
    SET_ROUTES(state, routes) {
      state.addRoutes = routes
      state.routes = constantRoutes.concat(routes)
    }
  },
  actions: {
    generateRoutes({ commit }, asyncRoutes) {
      commit('SET_ROUTES', asyncRoutes)
    }
  }
}

// 遍历api返回的路由，转为组件对象
export const filterAsyncRoutes = routes => {
  return routes.filter(route => {
    if (route.component) {
      if (route.component === 'Layout') {
        route.component = Layout
      } else {
        const component = route.component
        route.component = loadView(component)
      }
    }

    if (route.children && route.children.length) {
      route.children = filterAsyncRoutes(route.children)
    }

    return true
  })
}

// 路由懒加载
export const loadView = view => {
  return resolve => require([`@/views/${view}`], resolve)
}
