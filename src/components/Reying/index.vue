<template>
  <div class="reying">
    <div class="film-list-wrapper wrapper" ref="film-wrapper">
      <ul class="film-list content">
        <li class="items"
          v-for="(item, index) in reyingMovieList"
          :key="index"
          @click="goDetail(item.filmId)"
        >
          <a href="javascript:void(0)" class="now-playing-film">
            <div class="film-img">
              <img v-lazy="item.poster" :alt="item.name"/>
            </div>
            <div class="film-info">
              <div class="film-name info-col">
                <span class="name">{{ item.name }}</span>
                <span class="item">{{ item.filmType }}</span>
              </div>
              <div class="film-grade info-col">
                <span class="label">观众评分</span>
                <span class="grade">{{ item.grade }}</span>
              </div>
              <div class="film-actor info-col">
                <span class="label">主演:</span>
                <span class="label"
                  v-for="(aItem, aIndex) in item.actorStr.split(',')"
                  :key="aIndex"
                >&nbsp;{{ aItem }}</span>
              </div>
              <div class="film-detail info-col">
                <span class="label">{{ item.nation }}&nbsp;|&nbsp;{{ item.runtime }}分钟</span>
              </div>
            </div>
            <div class="film-buy">
              购票
            </div>
          </a>
        </li>
        <div class="no-more">
          - 无更多电影 -
        </div>
      </ul>
    </div>
  </div>
</template>

<script>
import BS from 'better-scroll'
import { getMovieReying } from 'api/api.js'
export default {
  data () {
    return {
      reyingMovieList: []
    }
  },
  created () {
    // 获取热映电影列表
    getMovieReying()
      .then((res) => {
        this.reyingMovieList = res.films
      })
  },
  methods: {
    goDetail (filmid) {
      this.$router.push(`${filmid}`)
    },
    initBs () {
      let wrapper = this.$refs['film-wrapper']
      this.Bs = new BS(wrapper, {probeType: 3, click: true})
    }
  },
  mounted () {
    this.initBs()
  }
}
</script>

<style lang="less" scoped>
@import '~style/index.less';
.reying {
  .film-list-wrapper {
    position: fixed;
    bottom: 0;
    right: 0;
    top: 49px;
    left: 0;
    overflow: hidden;
    .film-list {
      width: 100%;
      background: #fff;
      .items {
        padding: 15px;
        height: 94px;
        position: relative;
        box-sizing:content-box;
        .now-playing-film {
          display: flex;
          -webkit-box-pack: start;
          justify-content: flex-start;
          box-align: center;
          align-items: center;
          .film-img {
            width: 66px;
            height: 94px;
            background: rgb(249, 249, 249);
            float: left;
            position: relative;
            img {
              width: 100%;
              position: absolute;
              top: 50%;
              transform: translateY(-50%);
            }
          }
          .film-info {
            float: left;
            width: calc(100% - 116px);
            padding: 0 10px;
            .info-col {
              overflow: hidden;
              text-overflow: ellipsis;
              white-space: nowrap;
              width: 100%;
            }
            .film-name {
              span {
                vertical-align: middle;
              }
              .name {
                max-width: calc(100% - 25px);
                color: #191a1b;
                font-size: @fs-m;
                height: 22px;
                line-height: 22px;
                margin-right: 5px;
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;
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
              .label {
                font-size: 13px;
                margin-top: 4px;
                color: @color-gray;
              }
              .grade {
                color: #ffb232;
                font-size: @fs-s;
                padding-left: 5px;
              }
            }
            .film-actor {
              .label {
                font-size: 13px;
                margin-top: 4px;
                color: @color-gray;
              }
            }
            .film-detail {
              .label {
                font-size: 13px;
                margin-top: 4px;
                color: @color-gray;
              }
            }
          }
          .film-buy {
            float: right;
            line-height: 25px;
            height: 25px;
            width: 50px;
            color: @color-orange;
            font-size: 13px;
            text-align: center;
            border-radius: 2px;
            position: relative;
          }
          .film-buy:after {
            content: '';
            transform: scale(0.5);
            position: absolute;
            border: 1px solid @color-orange;
            top: -50%;
            right: -50%;
            bottom: -50%;
            left: -50%;
            border-radius: 4px;
          }
        }
      }
    }
  }
}
</style>
