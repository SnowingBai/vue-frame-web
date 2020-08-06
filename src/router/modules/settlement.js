/*
 * @created: Monday, 2020-08-03 13:52:58
 * @author: baix@shumei.ai
 * ---------
 * @desc 交易结算中心-企业
 */

/* Layout */
import Layout from '@/layout'

export default {
  path: '/settlement',
  component: Layout,
  redirect: 'noRedirect',
  name: 'Settlement',
  meta: {
    title: 'Settlement',
    icon: 'settlement'
  },
  children: [
    {
      path: '/account',
      component: () =>
        import(
          /* webpackChunkName: "settlement" */ '@/views/settlement/account.vue'
        ),
      name: 'Account',
      meta: { title: 'Account' }
    },
    {
      path: '/assets',
      component: () =>
        import(
          /* webpackChunkName: "settlement" */ '@/views/settlement/assets.vue'
        ),
      name: 'Assets',
      meta: { title: 'Assets' }
    }
  ]
}
