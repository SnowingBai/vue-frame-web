/*
 * @created: Monday, 2020-08-03 13:54:08
 * @author: baix@shumei.ai
 * ---------
 * @desc 用户中心
 */

/* Layout */
import Layout from '@/layout'

export default {
  path: '/user',
  component: Layout,
  redirect: 'noRedirect',
  name: 'User',
  meta: {
    title: 'User',
    icon: 'user'
  },
  children: [
    {
      path: '/info',
      component: () =>
        import(/* webpackChunkName: "user" */ '@/views/user/info.vue'),
      name: 'UserInfo',
      meta: { title: 'UserInfo' }
    }
  ]
}
