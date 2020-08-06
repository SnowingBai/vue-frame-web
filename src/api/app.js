import request from '@/utils/request'

export function getMenus() {
  return request({
    url: '/app/menus',
    method: 'get'
  })
}
