const Mock = require('mockjs')

const user = require('./user')

const mocks = [...user]

function mockXHR() {
  for (const item of mocks) {
    Mock.mock(new RegExp(item.url), item.method)
  }
}

export default {
  mocks,
  mockXHR
}
