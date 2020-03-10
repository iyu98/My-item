<template>
  <div class="cinemas">
    <div class="header">
      <div class="city" @click="toggleCity">
        <span>{{ this.$store.state.currentCity }}</span><i class="iconfont">&#xe687;</i>
      </div>
      <div class="title">
        <h3>影院</h3>
      </div>
      <div class="search">
        <i class="iconfont">&#xe609;</i>
      </div>
    </div>
    <div class="cinemas-tag">
      <label>
        <span>全城</span><i class="iconfont">&#xe687;</i>
      </label>
      <label>
        <span>APP订票</span><i class="iconfont">&#xe687;</i>
      </label>
      <label>
        <span>最近去过</span><i class="iconfont">&#xe687;</i>
      </label>
    </div>
    <div class="wrapper" ref="wrapper">
      <ul class="content">
        <li v-for="(item, index) in cinemas" :key="index">
          <a :href="'#/cinema/'+item.cinemaId">
            <div class="cinema-wrap">
              <div class="left">
                <span>{{ item.name }}</span>
                <span>{{ item.address }}</span>
              </div>
              <div class="right">
                <div class="price">
                  <i>￥</i><span>{{ parseFloat(item.lowPrice/100) }}</span><span>起</span>
                </div>
                <span class="distance">距离未知</span>
              </div>
            </div>
          </a>
        </li>
      </ul>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
import BS from 'better-scroll'
import { getCinemas } from 'api/api.js'
export default {
  data () {
    return {
      cinemas: []
    }
  },
  methods: {
    toggleCity () {
      this.$router.push('city')
    },
    initBs () {
      let wrapper = this.$refs.wrapper
      this.Bs = new BS(wrapper, {probeType: 3, click: true})
    }
  },
  created () {
    getCinemas()
      .then((res) => {
        this.cinemas = res.data.cinemas
        this.$nextTick(() => {
          this.initBs()
        })
      })
  }
}
</script>

<style lang="less" scoped>
@import '~style/index.less';
  .cinemas {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    i, span { vertical-align: middle; }
    .header {
      width: 100%;
      height: 44px;
      overflow: hidden;
      background: #fff;
      display: flex;
      position: relative;
      z-index: 13;
      top: 0;
      left: 0;
      line-height: 44px;
      .city {
        min-width: 15%;
        display: flex;
        -webkit-box-pack: start;
        justify-content: flex-start;
        -webkit-box-align: center;
        align-items: center;
        margin-left: 15px;
      }
      .title {
        text-align: center;
        font-size: @fs-m;
        -webkit-box-flex: 1;
        flex: 1;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
      .search {
        width: 15%;
        display: flex;
        -webkit-box-pack: center;
        justify-content: center;
        -webkit-box-align: center;
        align-items: center;
        margin-right: 15px;
      }
    }
    .cinemas-tag {
      position: fixed;
      top: 43px;
      height: 50px;
      width: 100%;
      text-align: center;      
      background: #fff;
      z-index: 13;
      label {
        float: left;
        line-height: 49px;
        width: 33.3%;
        letter-spacing: -.2px;
        font-size: @fs-s;
      }
      & .sel {
        color: @color-orange;
        i {
          display: inline-block;
          transform: rotate(180deg);
        }
      }
    }
    .wrapper {
      position: fixed;
      top: 93px;
      bottom: 49px;
      width: 100%;
      background: #fff;
      .content {
        li {
          position: relative;
          color: #fff;
          padding: 15px;
          border-bottom: 1px solid #eff;
          a {
            width: 100%;
            display: flex;
            -webkit-box-pack: start;
            justify-content: flex-start;
            -webkit-box-align: center;
            align-items: center;
            .left {
              width: calc(100% - 65px);
              text-align: left;
              padding-right: 15px;
              float: left;
              span {
                display: block;
                color: #333;
                font-size: @fs-s;
                float: left;
                max-width: 75%;
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;
                &:nth-of-type(2) {
                  color: #797d82;
                  font-size: @fs-xs;
                  margin-top: 5px;
                }
              }
            }
            .right {
              position: absolute;
              right: 15px;
              width: 70px;
              text-align: center;
              float: right;
              margin-right: -5px;
              .price {
                color: @color-orange;
                i {
                  font-size: @fs-xs;
                }
                span {
                  font-size: @fs-s;
                  &:nth-of-type(2) {
                    display: inline-block;
                    font-size: 12px;
                    transform: scale(0.75);
                    vertical-align: bottom;
                    text-indent: 1px;
                  }
                }
              }
              .distance {
                margin-top: 5px;
                font-weight: 400;
                display: block;
                color: #797d82;
                font-size: @fs-xs;
                transform: scale(0.9);
              }
            }
          }
        }
      }
    }
  }
</style>
