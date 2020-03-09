<template>
  <div class="movie">
    <div class="movie-wrapper">
      <ul class="nav">
        <li @click="changeInkBar(0)">
          <router-link to="/movie/reying" tag="div" active-class="nav-sel">
            <span>正在热映</span>
          </router-link>
        </li>
        <li @click="changeInkBar(100)">
          <router-link to="/movie/coming" tag="div" active-class="nav-sel">
            <span>即将上映</span>
          </router-link>
        </li>
        <div class="nav-ink-bar-wrapper" ref="navInkBar">
          <span></span>
        </div>
      </ul>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  methods: {
    changeInkBar (position) {
      let inkBar = this.$refs.navInkBar
      inkBar.style.transform = `translate3d(${position}%, 0px, 0px)`
    }
  }
}
</script>

<style lang="less" scoped>
@import '~style/index.less';
.movie {
  .movie-wrapper {
    background: #fff;
    .nav {
      position: relative;
      display: flex;
      height: 49px;
      justify-content: flex-start;
      li {
        width: 50%;
        text-align: center;
        line-height: 49px;
        cursor: pointer;
      }
      .nav-ink-bar-wrapper {
        position: absolute;
        bottom: 0;
        left: 0;
        width: 50%;
        margin: auto;
        transform: translate3d(0%, 0px, 0px);
        transition: transform 0.2s cubic-bezier(.35,0,.25,1),-webkit-transform .2s cubic-bezier(.35,0,.25,1);
        span {
          display: block;
          border-radius: 20px;
          margin: auto;
          width: 56px;
          border-bottom: 2px solid @color-orange;
        }
      }
    }
  }
}
</style>
