<template>
  <div class="login">
    <i class="iconfont cancel" @click="cancel">&#xe612;</i>
    <div class="login-logo">
      <img src="/logo.png" alt="">
    </div>
    <div class="logon-form">
      <div>
        <form>
          <div class="form-group">
            <input type="tel" maxlength="11" placeholder="手机号" class="input-control" v-model="phoneVal" @input="isPhoneVal">
            <div>
              <div class="clear-input" v-show="inputState">
                <i>x</i>
              </div>
            </div>
            <div class="get-code disabled" ref="get-code"  @click="sendCode">获取验证码</div>
          </div>
          <div class="form-group">
            <input type="text" placeholder="验证码" class="input-control" @input="ifGetCode" v-model="code">
          </div>
          <div class="submit" @click="submit">
            <span ref="submit">登录</span>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
  import { mapMutations } from 'vuex'
  export default {
    data () {
      return {
        inputState: false,
        phoneVal: '',
        code: '',
        user: {phone: '', randomCode: ''}
      }
    },
    methods: {
      ...mapMutations(['userLogin']),
      cancel () {
        this.$router.replace('/my')
      },
      submit () {
        if (!this.phoneVal && !this.code) return false;
        if (this.phoneVal == this.user.phone && this.code == this.user.randomCode) {
          this.userLogin({ username: this.phoneVal})
          this.$router.replace('/my')
        }
      },
      sendCode () {
        this.user.randomCode = ''
        if((/^1[3456789]\d{9}$/.test(this.phoneVal))) {
          let code = parseInt(Math.random()*9999)
          this.user.randomCode = code
          this.user.phone = this.phoneVal
          alert('随机验证码'+code)
        }
      },
      isPhoneVal () {
        if ((/^1[3456789]\d{9}$/.test(this.phoneVal))) {
          this.$refs['get-code'].classList.remove('disabled')
        } else {
          this.$refs['get-code'].classList.add('disabled')
        }
      },
      ifGetCode () {
        if (this.code != '' && this.phoneVal != '') {
          this.$refs.submit.style.opacity = 1
        } else {
          this.$refs.submit.style.opacity = '0.3'
        }
      }
    },
    watch: {
    }
    
  }
</script>

<style lang="less" scoped>
@import '~style/index.less';
.login {
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background: #fff;
  .cancel {
    display: block;
    position: fixed;
    font-size: 20px;
    top: 5px;
    left: 6px;
  }
  .login-logo {
    margin: 79px auto 40px;
    text-align: center;
    height: 60px;
    line-height: 60px;
    img {
      height: 60px;
      border-radius: 10px;
    }
  }
  .logon-form {
    width: 100%;
    position: relative;
    .form-group {
      line-height: 55px;
      margin: 0 25px;
      position: relative;
      border-bottom: 1px solid #efefef;
      .input-control {
        height: 15px;
        line-height: 15px;
        padding: 20px 0;
        width: 100%;
        font-size: @fs-s;
        border: 0;
      }
      .clear-input {
        font-size: @fs-xs;
        position: absolute;
        top: 8px;
        right: 0;
        display: inline-block;
        i {
          display: inline-block;
          position: absolute;
          right: 90px;
          line-height: 40px;
          font-size: 23px;
          color: rgb(189, 192, 197);
        }
      }
      .get-code {
        position: absolute;
        top: 13px;
        right: 0;
        line-height: 30px;
        width: 90px;
        text-align: right;
        float: right;
        font-size: 13px;
        border-radius: 3px;
        cursor: pointer;
      }
      .disabled {
        color: #bdc0c5;
      }
    }
    .submit {
      line-height: 45px;
      font-size: @fs-m;
      margin: 70px 25px 0;
      border-radius: 3px;
      text-align: center;
      background: @color-orange;
      height: 44px;
      color: #fff;
      cursor: pointer;
      span {
        opacity: .3;
      }
    }
  }
}
</style>
