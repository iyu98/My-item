<template>
  <div class="tab">
    <ul class="tab-wrapper">
      <li>
        <router-link to="/movie" tag="div" active-class="tab-sel">
          <i class="iconfont">&#xe600;</i>
          <h5>电影</h5>
        </router-link>
      </li>
      <li>
        <router-link to="/cinema" tag="div" active-class="tab-sel">
          <i class="iconfont">&#xe655;</i>
          <h5>影院</h5>
        </router-link>
      </li>
      <li>
        <router-link to="/information" tag="div" active-class="tab-sel">
          <i class="iconfont">&#xe63f;</i>
          <h5>资讯</h5>
        </router-link>
      </li>
      <li>
        <router-link to="/my" tag="div" active-class="tab-sel">
          <i class="iconfont">&#xe601;</i>
          <h5>我的</h5>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
</script>

<style lang="less" scoped>
@import '~style/index.less';
.tab {
  width: 100%;
  height: 49px;
  position: fixed;
  bottom: 0;
  left: 0;
  background: #fff;
  .tab-wrapper {
    li {
      float: left;
      width: 25%;
      cursor: pointer;
      div {
        text-align: center;
        color: #797d82;
        i {
          font-size: @fs-pc;
          display: inline-block;
        }
      }
      .tab-sel {
        color: @color-orange;
      }
    }
  }
}
</style>
