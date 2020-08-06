/*
 * @created: Monday, 2020-08-03 13:36:58
 * @author: baix@shumei.ai
 * ---------
 * @desc 路由访问权限配置
 */

import { getMenus } from '@/api/app'

export default {
  namespaced: true,
  state: {
    menus: []
  },
  mutations: {
    SET_MENUS(state, menus) {
      state.menus = menus
    }
  },
  actions: {
    getPermissionMenus({ commit }) {
      return new Promise((resolve, reject) => {
        getMenus()
          .then(res => {
            const { data } = res
            commit('SET_MENUS', data)
            resolve(data)
          })
          .catch(err => {
            reject(err)
          })
      })
    }
  }
}
