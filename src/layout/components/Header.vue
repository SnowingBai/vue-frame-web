<template>
  <el-header class="my-header" :class="{ 'hide-aside': collapsed }">
    <el-row class="my-header-row">
      <el-col :span="12">
        <i
          class="iconfont icon-zhankai"
          :class="{ 'is-revert': !collapsed }"
          @click="toggleAside"
        />
      </el-col>
      <el-col :span="12" class="user-actions text-right">
        <span class="action-item">用户：张三</span>
        <router-link to="/login/change-pwd" class="action-item">
          <i class="iconfont icon-xiugaimima1" />
          修改密码
        </router-link>
        <a href="javascript:;" class="action-item" @click="logout">
          <i class="iconfont icon-tuichu5" />
          退出
        </a>
      </el-col>
    </el-row>
  </el-header>
</template>

<script>
import { mapState, mapActions, mapMutations } from 'vuex'

export default {
  name: 'Header',
  computed: {
    ...mapState({
      collapsed: state => state.app.collapsed
    })
  },
  methods: {
    ...mapMutations({
      toggleAside: 'app/TOGGLE_ASIDE'
    }),
    ...mapActions({
      logout: 'user/logout'
    })
  }
}
</script>

<style lang="scss" scoped>
.my-header {
  width: calc(100% - #{$asideWidth});
  line-height: 60px;
  background: #000;
  color: #fff;
  position: fixed;
  top: 0;
  right: 0;
  z-index: 9999;
  transition: width 0.28s;

  .icon-zhankai {
    display: inline-block;
    font-size: 20px;
    cursor: pointer;
    transition: 0.2s;
    &.is-revert {
      transform: rotate(180deg);
    }
  }

  .user-actions {
    .action-item {
      margin-left: 28px;
      .iconfont {
        margin-right: 5px;
      }
    }
  }

  &.hide-aside {
    width: calc(100% - 54px);
  }
}
</style>
