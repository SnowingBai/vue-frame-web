/*
 * @created: Monday, 2020-08-03 11:46:46
 * @author: baix@shumei.ai
 * ---------
 * @desc 用户数据
 */

import { login, logout } from '@/api/login'
import { getUserInfo } from '@/api/user'
import { getToken, setToken, removeToken } from '@/utils/auth'

export default {
  namespaced: true,
  state: {
    token: getToken(),
    userInfo: {}
  },
  mutations: {
    SET_TOKEN: (state, token) => {
      state.token = token
    },
    SET_USER_INFO: (state, data) => {
      state.userInfo = data
    }
  },
  actions: {
    login({ commit, userInfo }) {
      return new Promise((resolve, reject) => {
        login(...userInfo)
          .then(res => {
            const { token } = res
            commit('SET_TOKEN', token)
            setToken(token)
            resolve()
          })
          .catch(err => {
            reject(err)
          })
      })
    },
    logout({ commit }) {
      return new Promise((resolve, reject) => {
        logout()
          .then(() => {
            commit('SET_TOKEN', '')
            removeToken()
            resolve()
          })
          .catch(err => {
            reject(err)
          })
      })
    },
    getUserInfo({ commit, state }) {
      return new Promise((resolve, reject) => {
        getUserInfo({
          token: state.token
        })
          .then(res => {
            const { data } = res
            commit('SET_USER_INFO', data)
            resolve(data)
          })
          .catch(err => {
            reject(err)
          })
      })
    },
    resetToken({ commit }) {
      return new Promise(resolve => {
        commit('SET_TOKEN', '')
        removeToken()
        resolve()
      })
    }
  }
}
