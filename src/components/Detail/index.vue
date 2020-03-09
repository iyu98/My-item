<template>
  <div class="detail">
    <div class="wrapper" ref="detail-wrapper">
      <div class="content">
        <!-- 头像 -->
        <div class="film-avatar-wrap">
          <img v-lazy="movieInfo.poster" :alt="movieInfo.name">
        </div>
        <!-- 详情介绍 -->
        <div class="film-detail">
          <div class="film-name-wrap">
            <div class="film-name">
              <span class="name">{{ movieInfo.name }}</span>
              <span class="item">{{ movieInfo.filmType }}</span>
            </div>
            <div class="film-grade">
              <span class="grade">{{ movieInfo.grade }}</span>
              <span class="grade-text">&nbsp;分</span>
            </div>
          </div>
          <div class="film-category grey-text">
            {{ movieInfo.category }}
          </div>
          <div class="film-premiere-time grey-text">
            2020-01-25上映
          </div>
          <div class="film-nation-runtime grey-text">
            {{ movieInfo.nation }}&nbsp;|&nbsp;{{ movieInfo.runtime }}分钟
          </div>
          <div class="film-synopsis grey-text hidden" :style="{ height: filmInfoState?'auto':'38px' }" ref="film-info">
            {{ movieInfo.synopsis }}
          </div>
          <div class="toggle">
            <i class="iconfont" :style="{ transform: filmInfoState?'rotate(180deg)': '' }" @click="filmInfoShow">&#xe687;</i>
          </div>
        </div>
        <!-- 演员 -->
        <div class="actors">
          <div class="actors-title">
            <span class="actors-title-text">演职人员</span>
          </div>
          <div class="row-scroll">
            <ul class="items-nav clearfix">
              <li class="item"
                v-for="(item, index) in actors"
                :key="index"
              >
                <div class="actors-img">
                  <div class="img-wrap">
                    <img v-lazy="movieInfo.poster" alt="">
                  </div>
                </div>
                <span class="actors-name">{{ item.name }}</span>
                <span class="actors-role">导演</span>
              </li>
            </ul>
          </div>
        </div>
        <!-- 剧照 -->
        <div class="photos">
          <div class="photos-title">
            <span class="photos-title-text">剧照</span>
            <span class="photos-to-all">
              全部（5）
              <i class="iconfont">&#xe612;</i>
            </span>
          </div>
          <div class="photos-list row-scroll swiper-container">
            <ul class="photos-items-nav swiper-wrapper">
            	<li class="photos-item">
                <div class="photos-wrap swiper-slide">
                  <img src="https://pic.maizuo.com/usr/2019/0a0e2c3f83f7a4be1550c89cbff32486.jpg?x-oss-process=image/quality,Q_70" alt="">
                </div>
              </li>
              <li class="photos-item swiper-slide">
                <div class="photos-wrap">
                  <img src="https://pic.maizuo.com/usr/2019/7cb3c3155325dd6843337137cae6592e.jpg?x-oss-process=image/quality,Q_70" alt="">
                </div>
              </li>
              <li class="photos-item swiper-slide">
                <div class="photos-wrap">
                  <img src="https://pic.maizuo.com/usr/2019/997a5fed3141c00fa99dad88df80c29d.jpg?x-oss-process=image/quality,Q_70" alt="">
                </div>
              </li>
              <li class="photos-item swiper-slide">
                <div class="photos-wrap">
                  <img src="https://pic.maizuo.com/usr/2019/ac135627b556842a521405cc47811db6.jpg?x-oss-process=image/quality,Q_70" alt="">
                </div>
              </li>
              <li class="photos-item swiper-slide">
                <div class="photos-wrap">
                  <img src="https://pic.maizuo.com/usr/2019/b1c9fd4cd712c38756b0f1b8a71ae6f8.jpg?x-oss-process=image/quality,Q_70" alt="">
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <!-- 头部 -->
      <div class="film-header" ref="film-header">
        <div class="btn-back" @click="backFilmList">
          <i class="iconfont">&#xe612;</i>
        </div>
        <div class="film-title" ref="film-title">
          {{ movieInfo.name }}
        </div>
      </div>
      <a href="javascript:void(0)" class="buy-ticket">
        <div class="go-buy">
          选座购票
        </div>
      </a>
    </div>
  </div>
</template>

<script>
import BS from 'better-scroll'
import Swiper from 'swiper'
import { getMovieDetail } from 'api/api.js'
export default {
  data () {
    return {
      filmInfoState: false,
      movieInfo: [],
      actors: []
    }
  },
  methods: {
    initSwiper () {
      new Swiper('swiper-container', {})
    },
    backFilmList () {
      this.$router.go(-1)
    },
    filmInfoShow () {
      this.filmInfoState = !this.filmInfoState
    },
    headerShow () {
      this.$refs['film-header'].style.background = '#fff'
      this.$refs['film-title'].style.color = '#333'
    },
    initBs () {
      let wrapper = this.$refs['detail-wrapper']
      this.Bs = new BS(wrapper, { probeType: 3, click: true })
    }
  },
  created () {
    let filmid = this.$route.params.movieid
    getMovieDetail(filmid)
      .then((res) => {
        this.movieInfo = res.film
        this.actors = res.film.actors
      })
  },
  mounted () {
    this.initBs()
    this.initSwiper()
  }
}
</script>

<style lang="less" scoped>
@import '~style/index.less';
.detail {
  position: fixed;
  z-index: 3;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: #f4f4f4;
  .wrapper {
    width: 100%;
    height: 100vh;
    .content {
      padding-bottom: 1px;
    }
  }
  .film-header {
    width: 100%;
    height: 44px;
    position: fixed;
    z-index: 2;
    top: 0;
    left: 0;
    background: rgba(255, 255, 255, 0);
    .btn-back {
      position: absolute;
      top: 5px;
      left: 5px;
      width: 30px;
      height: 30px;
      border-radius: 50%;
      background-color: @white-05;
      text-align: center;
      line-height: 30px;
    }
    .film-title {
      font-size: @fs-l;
      line-height: 44px;
      text-align: center;
      width: 100vw;
      color: transparent;
    }
  }
  .film-avatar-wrap {
    width: 100%;
    opacity: 1;
    overflow: hidden;
    height: 56vw;
    display: flex;
    justify-content: center;
    align-items: center;
    img {
      transform: scale(0.6);
    }
  } 
  .film-detail {
    padding: 15px;
    padding-top: 12px;
    background: #fff;
    .film-name-wrap {
      display: flex;
      box-pack: start;
      justify-content: flex-start;
      box-align: center;
      align-items: center;
      .film-name {
        width: 256px;
        span {
          vertical-align: middle;
        }
        .name {
          color: #333;
          font-size: @fs-l;
          height: 24px;
          line-height: 24px;
          margin-right: 7px;
        }
        .item {
          font-size: @fs-xs;
          transform: scale(0.75);
          color: #fff;
          background: #d2d6dc;
          height: 14px;
          line-height: 14px;
          padding: 0 2px;
          border-radius: 2px;
        }
      }
      .film-grade {
        width: calc(100% - 250px);
        text-align: right;
        color: @color-orange;
        .grade {
          font-size: @fs-l;
          font-style: italic;
        }
        .grade-text {
          font-size: @fs-xs;
          transform: scale(0.5);
        }
      }
    }
    .grey-text {
      font-size: 13px;
      color: #797D82;
      margin-top: 4px;
    }
    .film-synopsis {
      // height: 211px;
      margin-top: 12px;
    }
    .hidden {
      // height: 38px;
      overflow: hidden;
    }
    .film-synopsis, .hidden {
      transition: height 0.5s ease;
    }
    .toggle {
      text-align: center;
      i {
        display: inline-block;
      }
    }
  }
  .actors {
    margin-top: 10px;
    background: #fff;
    .actors-title {
      width: 100%;
      padding: 15px;
      span {
        display: inline-block;
        height: 22px;
        line-height: 22px;
      }
      .actors-title-text {
        font-size: @fs-m;
        text-align: left;
        color: #333;
      }
    }
    .row-scroll {
      height: 150px;
      background: #fff;
      overflow-x: auto;
      overflow-y: hidden;
      .items-nav {
        overflow-x: hidden;
        display: flex;
        -webkit-box-pack: start;
        justify-content: flex-start;
        -webkit-box-align: center;
        align-items: center;
        width: 100%;
        padding-left: 15px;
        .item {
          width: 85px;
          min-width: 85px;
          margin-right: 10px;
          .actors-img {
            text-align: center;
            .img-wrap {
              width: 85px;
              height: 85px;
              position: relative;
              overflow: hidden;
              img {
                position: absolute;
                left: 0;
                top: 50%;
                transform: translateY(-50%);
              }
            }
          }
          .actors-name {
            display: block;
            box-sizing: content-box;
            text-align: center;
            padding-top: 10px;
            font-size: @fs-xs;
            color: #333;
            width: 85px;
            height: 18px;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
          }
          .actors-role {
            display: block;
            text-align: center;
            font-size: @fs-xs;
            transform: scale(0.9);
            color: #797d82;
          }
        }
      }
    }
  }
  .photos {
    margin-top: 10px;
    margin-bottom: 60px;
    background: #fff;
    .photos-title {
      height: 62px;
      width: 100%;
      padding: 15px;
      span {
        height: 22px;
        line-height: 22px;
      }
      .photos-title-text {
        font-size: @fs-m;
        text-align: left;
        color: #333;
      }
      .photos-to-all {
        font-size: @fs-s;
        color: #797d82;
        float: right;
        vertical-align: middle;
        i {
          transform: rotate(180deg);
          display: inline-block;
        }
      }
    }
    .photos-list {
      height: 130px !important;
      background: #fff;
      .photos-items-nav {
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-pack: start;
        -ms-flex-pack: start;
        justify-content: flex-start;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
        position: relative;
        width: 100%;
        padding: 15px;
        overflow-x: hidden;
        .photos-item {
          width: 150px;
          min-width: 150px;
          position: relative;
          margin-right: 10px;
          width: auto;
          .photos-wrap {
            width: 150px;
            height: 100px;
            background: #efefef;
            overflow: hidden;
            display: flex;
            align-items: center;
            img {
              vertical-align: middle;
            }
          }
        }
      }
    }
    .row-scroll {
      overflow-x: auto;
      overflow-y: hidden;
      -webkit-overflow-scrolling: touch;
      height: 236px
    }
  }
  .buy-ticket {
    position: fixed;
    bottom: 0;
    left: 0;
    height: 49px;
    // position: fixed;
    // bottom: 0px;
    width: 100%;
    .go-buy {
      position: fixed;
      bottom: 0;
      left: 0;
      height: 49px;
      width: 100%;
      text-align: center;
      background-color: #ff5f16;
      color: #fff;
      font-size: 16px;
      line-height: 49px;
    }
  }
}
</style>
