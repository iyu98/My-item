<template>
  <div id="app">
    <router-view></router-view>
    <Tab></Tab>
  </div>
</template>

<script>
import Tab from 'components/Tab/index.vue'
export default {
  components: { Tab }
}
</script>

<style lang="less">
@import '~style/index.less';
#app {
  width: 100vw;
  height: 100vh;
  background: #f4f4f4;
}
</style>
