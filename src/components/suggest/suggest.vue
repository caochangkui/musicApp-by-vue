<template>
  <scroll class="suggest" :data="result">
    <ul class="suggest-list">
      <li 
        class="suggest-item" 
        v-for="item in result"
        @click="selectItem(item)"
      >
        <div class="icon">
          <i class="icon-music"></i>
        </div>
        <div class="name">
          <p class="text" v-html="showName(item)"></p>
        </div>
      </li>
    </ul>
    <!-- 当个歌曲列表没有完全加载完成时，出现“正在加载。。。” -->
    <div class="loading-container" v-show="!result.length">
      <loading></loading>
    </div>
  </scroll>
</template>

<script type="text/ecmascript-6">
  import Scroll from 'base/scroll/scroll'
  import Loading from 'base/loading/loading'
  import {search} from 'api/search'
  import {ERR_OK} from 'api/config'
  import {createSong} from 'common/js/song'
  import {mapActions} from 'vuex'

  export default {
    components: {
      Scroll,
      Loading
    },
    data() {
      return {
        page: 1,  // 当前页码的变量
        result: [], // 搜索结果
        show: false
      }
    },
    props: {
      query: { // 搜索框检索词，当值变化时，不断从服务端检索数据，并调用，下面通过watch方法监听其变化
        type: String,
        default: ''
      },
      showSinger: { // 是否显示歌手的变量
        type: Boolean,
        default: false
      }
    },
    watch: {
      query() { // 这里通过watch监听query(检索词)的变化，并调用search方法
        this.search()
      }
    },
    methods: {
      search() {
        search(this.query, this.page, this.showSinger).then((res) => {
          if (res.code === ERR_OK) {
            this.result = this._getResult(res.data)
            console.log('搜索结果:')
            console.log(this.result)
          }
        })
      },
      _getResult(data) {
        let ret = []
        if (data.song) { // 当有歌qu信息时，就连接到数组中
          ret = ret.concat(this._normalizeSongs(data.song.list))
        }
        return ret
      },
      _normalizeSongs(list) {
        let ret = []
        list.forEach((musicData) => {
          if (musicData.songid && musicData.albummid) {
            ret.push(createSong(musicData))
          }
        })
        return ret
      },
      showName(item) {
        return `${item.name}-${item.singer}`
      },
      selectItem(item) {
        this.insertSong(item)
      },
      ...mapActions([
        'insertSong'
      ])
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "~common/stylus/variable"
  @import "~common/stylus/mixin"

  .suggest
    height: 100%
    overflow: hidden
    .suggest-list
      padding: 0 30px
      .suggest-item
        display: flex
        align-items: center
        padding-bottom: 20px
      .icon
        flex: 0 0 30px
        width: 30px
        [class^="icon-"]
          font-size: 14px
          color: $color-text-d
      .name
        flex: 1
        font-size: $font-size-medium
        color: $color-text-d
        overflow: hidden
        .text
          no-wrap()
    .no-result-wrapper
      position: absolute
      width: 100%
      top: 50%
      transform: translateY(-50%)
</style>