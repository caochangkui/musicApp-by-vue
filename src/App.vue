<template>
  <div id="app">
    <div class="nav"> <!-- 左上角显示更多 -->
      <img src="./common/image/more.png" width="30" height="30" class="img" @click="logClick" />
    </div>
    <div class="personal"> <!-- 右上角个人中心 -->
      <img src="./common/image/个人.png" width="20" height="20" class="img" @click="personalClick" />
    </div>
    <m-header></m-header>  <!-- 头部 -->
    <tab></tab>  <!-- 三个tab, 推荐、歌手、搜索 -->
    <keep-alive>
      <router-view></router-view>  <!-- 点击三个tab出现的页面，通过路由的形式实现 -->
    </keep-alive>
    <player></player> <!-- 播放器页面 -->
    <MyDialog :is-show="isShowDialog" @on-close="closeDialog">
    </MyDialog>
    <PersonalCenter :is-show="isShowPersonalCenter" @on-close-center="closePersonalCenter">
    </PersonalCenter>
  </div>
</template>

<script type="type/ecmascript-6">
import MHeader from 'components/m-header/m-header'
import Tab from 'components/tab/tab'
import Player from 'components/player/player'
import MyDialog from 'components/my-dialog/my-dialog'
import PersonalCenter from 'components/personal-center/personal-center'

export default {
  name: 'app',
  components: {
    MHeader,
    Tab,
    Player,
    MyDialog,
    PersonalCenter
  },
  data () {
    return {
      isShowDialog: false,
      isShowPersonalCenter: false
    }
  },
  methods: {
    closeDialog() {
      this.isShowDialog = false
    },
    closePersonalCenter() {
      this.isShowPersonalCenter = false
    },
    logClick() {
      this.isShowDialog = true
    },
    personalClick() {
      this.isShowPersonalCenter = true
    }
  }
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  .nav
    position: fixed
    border: 0px solid red
    top: 8px
    left: 8px
    .img
      position: absolute
      z-index: 100
      height: 30px
  .personal
    position: fixed
    top: 10px
    right: 30px
    .img
      position: absolute
      z-index: 100
</style>
