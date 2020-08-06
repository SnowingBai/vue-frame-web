<template>
  <div>
    <el-button type="primary" @click="getUserInfo">获取用户信息</el-button>
  </div>
</template>

<script>
import { getUserInfo } from '@/api/user'
export default {
  name: 'Login',
  data() {
    return {}
  },
  methods: {
    getUserInfo() {
      getUserInfo({
        id: '13',
        name: 'test'
      }).then(res => {
        console.log(res)
      })
    }
  }
}
</script>

<style></style>
