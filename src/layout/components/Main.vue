<template>
  <section class="my-main-container">
    <transition name="fade-transform" mode="out-in">
      <keep-alive :max="10">
        <router-view :key="key" />
      </keep-alive>
    </transition>
  </section>
</template>

<script>
export default {
  name: 'AppMain',
  computed: {
    keepAliveRoutes() {
      return ''
    },
    key() {
      return this.$route.path
    }
  }
}
</script>

<style lang="scss" scoped>
.my-main-container {
  width: 100%;
  min-height: calc(100vh - 60px);
  margin-top: 60px;
  position: relative;
}
</style>
