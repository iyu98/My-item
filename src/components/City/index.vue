<template>
  <div class="city">
    <div class="header">
      <i @click="back" class="iconfont">&#xe612;</i>
      <h3>当前城市</h3>
    </div>
    <div class="search">
      <div class="input-wrap">
        <i class="iconfont">&#xe609;</i>
        <input type="text" v-model="searchContent" placeholder="请输入城市名">
        <span @click="clearContent" v-show="searchContent">x</span>
      </div>
    </div>
    <div class="wrapper" ref="wrapper">
      <ul class="content">
        <li
          v-for="(item, index) in cityList"
          :key="index"
          :ref="item.title"
        >
          <h3>{{ item.title }}</h3>
          <div
            class="citys"
            v-for="(cItem, cIndex) in item.lists"
            :key="cIndex"
            @click="checkCity(cItem)"
          >
            <span>{{ cItem }}</span>
          </div>
        </li>
      </ul>
    </div>
    <div class="index-list">
      <ul ref="indexList">
        <li
          v-for="(item, index) in cityList"
          :key="index"
          @click="quickJump(item.title)"
          @touchstart="touchStart"
          @touchmove="touchMove"
          @touchend="touchEnd"
        >
          <span :class="currentLetter === item.title ? 'letter-sel' : ''">{{ item.title }}</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import BS from 'better-scroll'
import { mapMutations } from 'vuex'
import { getCityList } from 'api/api.js'
export default {
  data () {
    return {
      cityList: [],
      searchContent: null,
      indexListTop: null,
      indexListLetter: [],
      currentLetter: 'A'
    }
  },
  methods: {
    ...mapMutations(['changeCity']),
    touchStart (e) {
      let y = e.touches[0].pageY
      this.indexListTop = this.$refs.indexList.getBoundingClientRect().top
      let index = parseInt((y-(this.indexListTop+10))/20)
      this.currentLetter = this.indexListLetter[index]
      this.quickJump(this.indexListLetter[index])
    },
    touchMove (e) {
      let y = e.touches[0].pageY
      let index = parseInt((y-(this.indexListTop+10))/20)
      this.currentLetter = this.indexListLetter[index]
      if (index >= this.indexListLetter.length-1) {
        this.currentLetter = this.indexListLetter[this.indexListLetter.length-1]
      } else if(index <= 0) {
        this.currentLetter = this.indexListLetter[0]
      }
      if (index <= this.indexListLetter.length-1 && index >= 0) {
        this.quickJump(this.indexListLetter[index])
      }
    },
    touchEnd (e) {
    },
    quickJump (letter) {
      let clickLetter = this.$refs[letter][0]
      this.Bs.scrollToElement(clickLetter)
    },
    checkCity (city) {
      this.changeCity({ city: city })
      this.$router.push('/cinema')
    },
    clearContent () {
      this.searchContent = null
    },
    back () {
      this.$router.back(-1)
    },
    initBs () {
      let wrapper = this.$refs.wrapper
      this.Bs = new BS(wrapper, { probeType: 3, click: true })
    }
  },
  created () {
    getCityList()
      .then((res) => {
        this.cityList = res.list.city
        res.list.city.map((item, index) => {
          this.indexListLetter.push(item.title)
        })
      })
  },
  mounted () {
    this.initBs()
  }
}
</script>

<style lang="less" scoped>
@import '~style/index.less';
.city {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 99;
  background: #fff;
  overflow: hidden;
  .header {
    width: 100%;
    height: 44px;
    overflow: hidden;
    background: #fff;
    display: flex;
    position: relative;
    top: 0;
    left: 0;
    line-height: 44px;
    i {
      font-size: 20px;
      padding-left: 6px;
    }
    h3 {
      position: absolute;
      left: 50%;
      top: 0;
      transform: translateX(-50%);
      font-size: @fs-m;
    }
  }
  .search {
    height: 50px;
    background: #f4f4f4;
    width: 100%;
    box-sizing: border-box;
    padding: 10px 15px;
    .input-wrap {
      background: #fff;
      border-radius: 3px;
      height: 30px;
      width: 100%;
      position: relative;
      i {
        position: absolute;
        left: 7px;
        top: 0;
        line-height: 30px;
        color: #797d82;
      }
      input {
        position: absolute;
        width: 100%;
        left: 33px;
        line-height: 30px;
        border: 0;
        background: transparent;
        outline: none;
      }
      span {
        position: absolute;
        right: 15px;
        line-height: 30px;
      }
    }
  }
  .wrapper {
    position: fixed;
    overflow: hidden;
    top: 90px;
    bottom: 0;
    left: 0;
    right: 0;
    .content {
      li {
        h3 {
          background: #f4f4f4;
          color: #797d82;
          padding-left: 15px;
          height: 30px;
          line-height: 30px;
        }
        .citys {
          height: 48px;
          font-size: @fs-s;
          line-height: 48px;
          background: #fff;
          padding-left: 20px;
          border-bottom: 1px solid #efefef;
        }
      }
    }
  }
  .index-list {
    position: fixed;
    top: 50%;
    transform: translateY(-45%);
    right: 0;
    background: rgba(0, 0, 0, .2);
    border-radius: 20px;
    text-align: center;
    font-size: @fs-s;
    z-index: 14;
    padding: 10px 0;
    ul {
      li {
        width: 20px;
        height: 20px;
        .letter-sel {
          color: @color-orange;
        }
      }
    }
  }
}
</style>