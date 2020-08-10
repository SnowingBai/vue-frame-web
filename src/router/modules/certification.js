/*
 * @created: Monday, 2020-08-03 13:51:32
 * @author: baix@shumei.ai
 * ---------
 * @desc 资产认证机构
 */

/* Layout */
import Layout from '@/layout'

export default {
  path: '/certification',
  component: Layout,
  redirect: 'noRedirect',
  name: 'Certification',
  meta: {
    title: 'Certification',
    icon: 'certification'
  },
  children: [
    {
      path: '/agency',
      // route level code-splitting
      // this generates a separate chunk (certification.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(
          /* webpackChunkName: "certification" */ '@/views/certification/agency.vue'
        ),
      name: 'Agency',
      meta: { title: 'Agency' }
    },
    {
      path: '/device',
      component: () =>
        import(
          /* webpackChunkName: "certification" */ '@/views/certification/device.vue'
        ),
      name: 'Device',
      meta: { title: 'Device' }
    }
  ]
}
