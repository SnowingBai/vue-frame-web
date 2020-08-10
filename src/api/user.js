import request from '@/utils/request'

export function getUserInfo(data) {
  return request({
    url: '/user/info',
    method: 'get',
    data
  })
}
