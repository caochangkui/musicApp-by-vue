<template>
  <div>
    <div class="dialog-wrap">
      <div class="dialog-cover" v-if="isShow" @click=closePersonalCenter></div>
        <transition name="drop">
          <div class="dialog-content" v-if="isShow" >
            <p class="dialog-close" @click=closePersonalCenter>×</p>
            <div class="login-form">
              <div class="g-form">
                <div class="g-form-line">
                  <span class="g-form-label">您的邮箱：</span>
                  <div class="g-form-input">
                    <input type="text"
                    v-model="usernameModel" placeholder="请输入用户名">
                  </div>
                  <span class="g-form-error">{{userErrors.errorText}}</span>
                </div>

                <div class="g-form-line">
                  <span class="g-form-label">输入密码：</span>
                  <div class="g-form-input">
                    <input type="password"
                    v-model="passwordModel" placeholder="请输入密码">
                  </div>
                  <span class="g-form-error">{{passwordErrors.errorText}}</span>
                </div>

                <div class="">
                  <span class="g-form-label">确认密码：</span>
                  <div class="g-form-input">
                    <input type="password"
                    v-model="passwordModel2" placeholder="请确认密码">
                  </div>
                </div>

                <div class="g-form-line">
                  <div class="g-form-btn">
                    <a class="button" @click="onLogin">注册</a>
                  </div>
                </div>
                <p class="g-form-error">{{errorText}}</p>
              </div>
            </div>
          </div>
        </transition>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    isShow: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      usernameModel: '',
      passwordModel: '',
      passwordModel2: '',
      errorText: ''
    }
  },
  computed: {
    userErrors () {
      let errorText, status
      if (!/@/g.test(this.usernameModel)) {
        status = false
        errorText = '邮箱格式不对'
      } else {
        status = true
        errorText = ''
      }
      if (!this.userFlag) {
        errorText = ''
        this.userFlag = true
      }
      return {
        status,
        errorText
      }
    },
    passwordErrors () {
      let errorText, status
      if (!/^\w{6,6}$/g.test(this.passwordModel)) {
        status = false
        errorText = '密码不是6位'
      } else {
        status = true
        errorText = ''
      }
      if (!this.passwordFlag) {
        errorText = ''
        this.passwordFlag = true
      }
      return {
        status,
        errorText
      }
    }
  },
  methods: {
    closePersonalCenter () {
      this.$emit('on-close-center')
    },
    onLogin () {
      if (!this.userErrors.status || !this.passwordErrors.status) {
        this.errorText = '用户名或者密码错误'
      } else {
        this.$emit('on-close-center')
        alert('恭喜，注册成功！')
      }
    }
  }
}
</script>

<style scoped>
.drop-enter-active {
  transition: all .5s ease;
}
.drop-leave-active {
  transition: all .5s ease;
}
.drop-enter {
  transform: scale(0.1,0.1);
  opacity: 0;
}
.drop-leave-active {
  transform: scale(0.1,0.1);
  opacity: 0; /*离开后的状态*/
}

.dialog-wrap {
}
.dialog-cover {
  background: #000;
  opacity: .7;
  position: fixed;
  z-index: 5;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
.dialog-content {
  width: 70%;
  position: fixed;
  overflow: auto;
  background: #363636;
  top: 20%;
  left: 50%;
  margin-left: -40%;
  z-index: 10;
  border: 2px solid #afc7de;
  border-radius: 10px;
  padding: 2% 4% 2% 4%;
  line-height: 1.6;
}
.dialog-close {
  position: absolute;
  font-size: 25px;
  right: 5px;
  top: 0px;
  width: 20px;
  height: 20px;
  text-align: center;
  cursor: pointer;
  color: #ffcd32;
}
.g-form-line {
  padding: 15px 0;
}
.g-form-label {
  /*width: 0px;*/
  font-size: 18px;
  padding-bottom: 5px;
  padding-left: 10px;
  display: inline-block;
  color: #ffcd32;
}
.g-form-input {
  display: inline-block;
}
.g-form-input input {
  height: 30px;
  width: 200px;
  line-height: 30px;
  vertical-align: middle;
  padding: 0 10px;
  border: 1px solid #ccc;
  border-radius: 10px;
}
.g-form-btn {
  padding-left: 100px;
  color: #ffcd32;
  font-size: 22px;
  margin-top: 5px;
}
.g-form-btn a{
  border: 1px solid #fff;
  color: #fff;
  padding: 5px 10px;
  border-radius: 10px;
  background: #3691ec;
}
.g-form-error {
  color: red;
  padding-left: 15px;
}
</style>
