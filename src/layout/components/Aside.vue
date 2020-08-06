<template>
  <el-aside class="my-aside">
    <my-logo />
    <el-scrollbar wrap-class="scrollbar-wrapper">
      <el-menu :default-active="activeMenu" :collapse="collapsed">
        <el-menu-item index="1">
          <i class="el-icon-menu"></i>
          <span slot="title">导航二</span>
        </el-menu-item>
        <el-menu-item index="2">
          <i class="el-icon-document"></i>
          <span slot="title">导航三</span>
        </el-menu-item>
      </el-menu>
    </el-scrollbar>
  </el-aside>
</template>

<script>
import MyLogo from './Logo'
import { mapState } from 'vuex'

export default {
  name: 'Aside',
  components: {
    MyLogo
  },
  computed: {
    ...mapState({
      collapsed: state => state.app.collapsed
    }),
    activeMenu() {
      const route = this.$route
      const { meta, path } = route
      // if set path, the sidebar will highlight the path you set
      if (meta.activeMenu) {
        return meta.activeMenu
      }
      return path
    }
  }
}
</script>

<style lang="scss" scoped>
.my-aside {
  background: #000;
  .my-logo {
    display: inline-block;
    width: 100%;
    height: 60px;
    line-height: 60px;
    text-align: center;
    color: #fff;
  }
}
</style>
