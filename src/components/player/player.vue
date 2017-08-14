<template>
  <div>
    <transition name="song">
      <div class="player" v-show="fullScreen">
        <div class="normal-plaer">
          <div class="background">  <!-- 播放器的背景图 -->
            <img :src="currentSong.image" width="100%" height="100%" alt="">
          </div>
          <div class="top">
            <div class="back" @click="back">  <!-- 返回按钮 -->
              <i class="icon-back"></i>
            </div>
            <h1 class="title" v-html="currentSong.name"></h1>
            <h2 class="subtitle" v-html="currentSong.singer"></h2>
          </div>
          <div class="middle">
            <div class="middle-l">
              <div class="cd-wrapper">
                <div class="cd" :class="cdRotate"> <!-- 中间有一张唱片，图片 -->
                  <img :src="currentSong.image"  class="image" alt="">
                </div>
              </div>
            </div>
          </div>
          <div class="bottom"> <!-- 底部播放按钮 -->
            <div class="progress-wrapper">
              <span class="time time-l">播放进度：{{format(currentTime)}}</span>
              <span class="time time-r">歌曲时长：{{format(currentSong.duration)}}</span>
            </div>
            <div class="operators">
              <div class="icon i-center">
                <i 
                  @click="togglePlaying" 
                  :class="playIcon"
                ></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </transition>
    <audio ref="audio" :src="currentSong.url" @timeupdate="updataTime"></audio>
  </div>
</template>

<script type="text/ecmascript-6">
  import {mapGetters, mapMutations} from 'vuex'

  export default {
    data() {
      return {
        currentTime: 0
      }
    },
    computed: {
      cdRotate() {
        return this.playing ? 'play' : 'play pause'
      },
      playIcon() { // 定义播放或者暂停时的按钮状态
        return this.playing ? 'icon-pause' : 'icon-play'
      },
      ...mapGetters([
        'fullScreen',
        'playlist',
        'currentSong',
        'playing'
      ])
    },
    methods: {
      back() {
        this.setFullScreen(false)
      },
      togglePlaying() {
        this.setPlayingState(!this.playing)
      },
      updataTime(e) {
        this.currentTime = e.target.currentTime
      },
      format(interval) {
        interval = interval | 0  // 向下取整
        const minute = interval / 60 | 0
        const second = this._pad(interval % 60)
        return `${minute}:${second}`
      },
      _pad(num, n = 2) {
        let len = num.toString().length
        while (len < n) {
          num = '0' + num
          len++
        }
        return num
      },
      ...mapMutations({
        setFullScreen: 'SET_FULL_SCREEN',
        setPlayingState: 'SET_PLAYING_STATE'
      })
    },
    watch: {
      currentSong() {
        this.$nextTick(() => {  // $nextTick 是在下次 DOM 更新循环结束之后执行延迟回调
          this.$refs.audio.play()
          console.log(this.currentSong.url)
        })
      },
      playing(newplaying) {
        const audio = this.$refs.audio
        this.$nextTick(() => {
          newplaying ? audio.play() : audio.pause()
        })
      }
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
    @import "~common/stylus/variable"
    @import "~common/stylus/mixin"

  .song-enter-active,.song-leave-active{
    transition: all 0.6s;
  }
  .song-enter,.song-leave-to{
    opacity: 0.1;
    transform: translate3d(0, 100%, 0);
    transform: rotateX(90deg)
  }

  .player
    position: fixed
    left: 0
    right: 0
    top: 0
    bottom: 0
    z-index: 150
    background: $color-background
    .background
      position: absolute
      left: 0
      top: 0
      width: 100%
      height: 100%
      z-index: -1
      opacity: 0.6
      filter: blur(20px)

    .top
      position: relative
      margin-bottom: 25px
      .back
        position absolute
        top: 10px
        left: 15px
        z-index: 50
        font-size: 25px
        color: $color-theme
        transform: rotate(-90deg)

      .title
        width: 70%
        margin: 0 auto
        line-height: 40px
        text-align: center
        no-wrap()
        font-size: $font-size-large
        color: $color-text
      .subtitle
        line-height: 20px
        text-align: center
        font-size: $font-size-medium
        color: $color-text

    .middle
      position: fixed
      width: 100%
      top: 80px
      bottom: 170px
      white-space: nowrap
      font-size: 0
      .middle-l
        display: inline-block
        vertical-align: top
        position: relative
        width: 100%
        height: 0
        padding-top: 80%
        .cd-wrapper
          position: absolute
          left: 10%
          top: 0
          width: 80%
          height: 100%
          .cd
            width: 100%
            height: 100%
            box-sizing: border-box
            border: 10px solid rgba(255, 255, 255, 0.1)
            border-radius: 50%
            &.play
              animation: rotate 10s linear infinite
              -webkit-animation: rotate 10s linear infinite
              -moz-animation: rotate 10s linear infinite
            &.pause
              animation-play-state: paused
              -webkit-animation-play-state: paused
              -moz-animation-play-state: paused
            .image
              position: absolute
              left: 0
              top: 0
              width: 100%
              height: 100%
              border-radius: 50%

    .bottom
      position: absolute
      bottom: 50px
      width: 100%
      .progress-wrapper
        display: flex
        align-items: center
        width: 80%
        margin: 0px auto
        padding: 10px 0
        .time
          color: $color-text
          font-size: $font-size-middle
          flex: 1
          line-height: 50px
          &.time-l
            text-align: center
          &.time-r
            text-align: center
      .operators
        display: flex
        align-items: center
        .icon
          flex: 1
          color: $color-theme
          &.disable
            color: $color-theme-d
          i
            font-size: 50px
        .i-center
          padding: 0 20px
          text-align: center

  @keyframes rotate
    0%
      transform: rotate(0)
    100%
      transform: rotate(360deg)
  @-webkit-keyframes rotate
    0%
      transform: rotate(0)
    100%
      transform: rotate(360deg)
  @-moz-keyframes rotate
    0%
      transform: rotate(0)
    100%
      transform: rotate(360deg)

</style>