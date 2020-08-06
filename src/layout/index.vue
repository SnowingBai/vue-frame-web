<template>
  <el-container class="layout-wrap" :class="{ 'hide-aside': collapsed }">
    <my-aside class="aside-comtainer" />

    <section class="main-container">
      <my-header />
      <my-main />
    </section>
  </el-container>
</template>

<script>
import MyHeader from './components/Header'
import MyAside from './components/Aside'
import MyMain from './components/Main'
import { mapState } from 'vuex'

export default {
  name: 'Layout',
  components: {
    MyHeader,
    MyAside,
    MyMain
  },
  computed: {
    ...mapState({
      collapsed: state => state.app.collapsed
    })
  }
}
</script>

<style lang="scss">
.layout-wrap {
  width: 100%;
  height: 100%;
  position: relative;
  .aside-comtainer {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    width: $asideWidth !important;
    height: 100%;
    background-color: #000;
    z-index: 1001;
    font-size: 0px;
    overflow: hidden;
    transition: width 0.28s;
  }
  .main-container {
    width: 100%;
    min-height: 100%;
    transition: margin-left 0.28s;
    margin-left: $asideWidth;
    position: relative;
  }
  &.hide-aside {
    .aside-comtainer {
      width: 54px !important;
    }
    .main-container {
      margin-left: 54px;
    }
  }
}
</style>
