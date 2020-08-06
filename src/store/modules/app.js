/*
 * @created: Monday, 2020-08-03 17:50:00
 * @author: baix@shumei.ai
 * ---------
 * @desc 应用配置
 */

export default {
  namespaced: true,
  state: {
    collapsed: false // 菜单面板是否折叠
  },
  mutations: {
    TOGGLE_ASIDE: state => {
      state.collapsed = !state.collapsed
    }
  }
}
