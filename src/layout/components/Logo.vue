<template>
  <div class="my-logo" :class="{ 'hide-aside': collapsed }">
    <transition name="asideLoginFade">
      <router-link class="logo-link" to="/">
        <img :src="logo" alt="logo" class="logo-img" />
        <h1 v-if="!collapsed" class="logo-title">{{ title }}</h1>
      </router-link>
    </transition>
  </div>
</template>

<script>
import { mapState } from 'vuex'
const Logo =
  'https://wpimg.wallstcn.com/69a1c46c-eb1c-4b46-8bd4-e9e686ef5251.png'
const Title = 'xxx管理中心'

export default {
  data() {
    return {
      logo: Logo,
      title: Title
    }
  },
  computed: {
    ...mapState({
      collapsed: state => state.app.collapsed
    })
  }
}
</script>

<style lang="scss" scoped>
.my-logo {
  height: 60px;
  .logo-img {
    display: block;
    height: 30px;
    margin: 5px auto;
  }
  .logo-title {
    height: 20px;
    line-height: 20px;
    color: #fff;
    font-size: 12px;
    font-weight: normal;
  }
  &.hide-aside {
    .logo-img {
      margin: 15px auto;
    }
  }
}
</style>
