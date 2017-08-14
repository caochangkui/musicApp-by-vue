<template>
  <div>
    <div class="dialog-wrap">
      <div class="dialog-cover" v-if="isShow" @click=closeMyself></div>
        <transition name="drop">
          <div class="dialog-content" v-if="isShow" >
            <div class="user">
              <img src="../../common/image/bg.jpg" alt="">
              <span @click="change">{{text}}</span>
            </div>
            <ul>
              <li>
                <img src="../../common/image/消息.png" alt="" />
                <span>我的消息</span>
                <i class="num">8</i>
              </li>
              <li>
                <img src="../../common/image/会员.png" alt="" />
                <span>会员中心</span>
              </li>
              <li>
                <img src="../../common/image/商城.png" alt="" />
                <span>商城</span>
              </li>
              <li>
                <img src="../../common/image/好友.png" alt="" />
                <span>我的好友</span>
              </li>
              <li>
                <img src="../../common/image/定时.png" alt="" />
                <span>定时停止播放</span>
              </li>
              <li>
                <img src="../../common/image/皮肤.png" alt="" />
                <span>个性皮肤</span>
              </li>
              <li>
                <img src="../../common/image/扫一扫.png" alt="" />
                <span>扫一扫</span>
              </li>
            </ul>
            <div class="bottom">
              <div class="set">
                <img src="../../common/image/设置.png" alt="" />
                <span>设置</span>
              </div>
              <div class="out" @click=closeMyself>
                <img src="../../common/image/退出.png" alt="" />
                <span>退出</span>
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
      text: '签 到'
    }
  },
  methods: {
    closeMyself () {
      this.$emit('on-close')
    },
    change() {
      this.text = '已签到'
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
  transform: translateX(-500px); /*进入前的状态*/
}
.drop-leave-active {
  transform: translateX(-500px); /*离开后的状态*/
}

.dialog-wrap {

}
.dialog-cover {
  background: #000;
  opacity: .8;
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
  top: 0;
  bottom: 0;
  left: 0;
  z-index: 10;
  /*border-radius: 10px;*/
  line-height: 1.6;
}
.user{
  /*border: 1px solid red*/
  position: relative;
}
.user img{
  width: 100%;
  padding: 0;
  margin: 0;
  opacity: 0.6;
}
.user span{
  position: absolute;
  bottom: 10px;
  right: 5px;
  border: 1px solid #ffcd32;
  padding: 4px 8px 4px 8px;
  border-radius: 10px;
  font-size: 14px;
  line-height: 14px;
  color: #ffcd32;
}
li{
  position: relative;
  /*border: 1px solid #ffcd32;*/
  padding: 0px;
  margin-top: 10px;
  margin-left: 10px;

}
li img{
  margin-right: 10px;
  width: 20px;
  height: 20px;
}
li span{
  position: absolute;
  font-size: 16px;
  margin-top: 0;
}
.num{
  position: absolute;
  right: 10px;
  top: 0px;
  width: 20px;
  height: 20px;
  padding: 0px;
  text-align: center;
  vertical-align: middle;
  border-radius: 50%;
  background: red;
}
.bottom{
  position: fixed;
  height: 40px;
  width: 70%;
  /*background: #4F4F4F;*/
  bottom: 0;
  left: 0;
  right: 0;
}
.bottom img{
  width: 20px;
  height: 20px;
}
.bottom div{
  position: absolute;
  display: inline-block;
  bottom: 0;
  width: 100px;
}
.set{
  left: 0;
}
.out{
  left: 180px;
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
}
.dialog-close:hover {
  color: #4fc08d;
}
</style>
