<template>
  <div class="my">
    <div class="my-wrap">
      <!-- 用户头像 -->
      <div class="avatar" @click="gologin">
        <img src="/maizuo.png" class="avatar-icon" alt="">
        <div class="nick-name"  >{{ user ? user : '立即登录' }}</div>
      </div>
      <!-- 用户订单 -->
      <ul class="order-tab">
        <li>
          <i class="iconfont order-icon">&#xe64f;</i>
          <!-- <span></span> -->
          <p>电影订单</p>
        </li>
        <li>
          <i class="iconfont order-icon2">&#xe675;</i>
          <p>商品订单</p>
        </li>
      </ul>
      <!-- 剩余设置 -->
      <ul class="margin-set">
      	<li class="items">
          <img src="/card.png" />
          <span>卖座票</span>
          <i class="iconfont">&#xe612;</i>
        </li>
        <li class="items">
          <img src="/redwrap.png" />
          <span>组合红包</span>
          <i class="iconfont">&#xe612;</i>
        </li>
        <li class="items">
          <img src="/money.png" />
          <span>余额</span>
          <i class="iconfont">&#xe612;</i>
          <span class="value">
            <i>￥</i>
            <span class="money">0</span>
          </span>
        </li>
        <li class="items">
          <img src="/setting.png" />
          <span>设置</span>
          <i class="iconfont">&#xe612;</i>
        </li>
      </ul>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        user: null
      }
    },
    created () {
      this.user = sessionStorage.getItem('userlogin')
    },
    methods: {
      gologin () {
        if (!this.user) {
          window.location.hash = '/my/login'
        }
      }
    }
  }
</script>

<style lang="less" scoped>
@import '~style/index.less';
.my-wrap {
  position: relative;
  top: 0;
  left: 0;
  right: 0;
  margin-bottom: 59px;
  font-size: @fs-s;
  .avatar {
    text-align: center;
    height: 200px;
    padding: 64px 0 0 22px;
    display: flex;
    background: url('/bg0001.png');
    background-size: cover;
    -webkit-box-align: center;
    align-items: center;
    color: #fff;
    .avatar-icon {
      width: 63px;
      height: 63px;
      border-radius: 35px;
      margin-right: 20px;
      border: 2px solid #fff;
      background: rgba(255,255,255,0.5);
    }
    .nick-name {
      font-size: @fs-m;
    }
  }
  .order-tab {
    width: 100%;
    height: 79px;
    margin: 0 auto;
    display: flex;
    text-align: center;
    font-size: @fs-s;
    background: #fff;
    margin-bottom: 10px;
    align-items: center;
    -webkit-box-align: center;
    li {
      position: relative;
      flex: 1;
      .order-icon {
        font-size: 30px;
        color: #FFC82F;
      }
      .order-icon2 {
        font-size: 30px;
        color: #C6DA5C;
      }
      p {
        color: #333;
      }
    }
  }
  .margin-set {
    background: #fff;
    padding: 0 15px;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    flex-direction: column;
    .items {
      width: 90%;
      height: 49px;
      border-bottom: 1px solid #ccc;
      line-height: 49px;
      color: #191a1b;
      &>img {
        width: 20px;
        height: 20px;
      }
      &>span {
        vertical-align: middle;
        margin-left: 15px;
      }
      &>i {
        display: inline-block;
        transform: rotate(180deg);
        float: right;
        color: #c2c2c2;
      }
      .value {
        float: right;
        margin-right: 20px;
        color: #797d82;
      }
    }
    .items:last-of-type {
      border: 0;
    }
  }
}
</style>
