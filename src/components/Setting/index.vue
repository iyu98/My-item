<template>
  <div class="setting">
    <i class="iconfont cancel" @click="cancel">&#xe612;</i>
    <button class="exit-btn" @click="exit">退出登录</button>
  </div>
</template>

<script>
export default {
  methods: {
    cancel () {
      this.$router.replace('/my')
    },
    exit () {
      sessionStorage.removeItem('username')
      this.cancel()
    }
  }  
}
</script>

<style lang="less" scoped>
@import '~style/index.less';
.setting {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: #efefef;
  z-index: 99;
  .cancel {
    display: block;
    position: fixed;
    top: 5px;
    left: 6px;
    font-size: 20px;
  }
  .exit-btn {
    position: fixed;
    top: 50px;
    left: 50%;
    transform: translateX(-50%);
    height: 35px;
    width: 80%;
    background: @color-orange;
    color: #fff;
    border: 0;
    outline: transparent;
  }
  .exit-btn:active {
    color: #333;
    opacity: 0.8;
  }
}
</style>