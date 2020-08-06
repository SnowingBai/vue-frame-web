module.exports = [
  // get user info
  {
    url: '/user/info',
    method: 'get',
    response: config => {
      const { data } = config.query
      if (!data) {
        return {
          code: 400,
          message: 'Unable to get user details'
        }
      }

      return {
        code: 200,
        data
      }
    }
  }
]
