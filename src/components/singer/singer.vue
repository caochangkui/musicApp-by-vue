<template>
  <div class="singer">
    <list-view :data="singers" @select="selectSinger"></list-view>
    <router-view></router-view>
  </div>
</template>

<script type="text/ecmascript-6">
  import ListView from 'base/listview/listview'
  import {getSingerList} from 'api/singer'
  import {ERR_OK} from 'api/config'
  import Singer from 'common/js/singer'
  import {mapMutations} from 'vuex'  // vuex使用第一步：mapMutations是写数据的语法糖，对mutations做了封装，方便使用
  // import {playlistMixin} from 'common/js/mixin'

  const HOT_NAME = '热门'
  const HOT_SINGER_LEN = 10

  export default {
    components: {
      ListView
    },
    data() {
      return {
        singers: []
      }
    },
    created() {
      this._getSingerList()
    },
    methods: {
      selectSinger(singer) {
        // console.log(singer.id)
        this.$router.push({
          path: `/singer/${singer.id}`
        })
        this.setSinger(singer) // // vuex使用第三步: 这里就将singer的状态写进了state，然后可以在singer-detail组件中取到singer的数据
      },
      _getSingerList() {
        getSingerList().then((res) => {
          if (res.code === ERR_OK) {
            this.singers = this._normalizeSinger(res.data.list)
            console.log('排列后的歌手列表：\n')
            console.log(this.singers)
          }
        })
      },
      _normalizeSinger(list) { // 规范化歌手列表的数据，按字母排列
        let map = {
          hot: {
            title: HOT_NAME,
            items: []
          }
        }

        list.forEach((item, index) => { // forEach() 方法用于调用数组的每个元素，并将元素传递给回调函数。
          if (index < HOT_SINGER_LEN) {
            // 热门歌手列表获取
            map.hot.items.push(new Singer({
              name: item.Fsinger_name,
              id: item.Fsinger_mid
            }))
          }
          // 按字母歌手列表获取
          const key = item.Findex
          if (!map[key]) { // 如果列表中没有这个字母，则创建一个以这个字母为标题的对象，对象下面存放的都是该字母打头的歌手
            map[key] = {
              title: key,
              items: []
            }
          }
          map[key].items.push(new Singer({
            name: item.Fsinger_name,
            id: item.Fsinger_mid
          }))
        })

        // 为了得到有序列表，我们需要处理 map
        let ret = []
        let hot = []
        for (let key in map) {
          let val = map[key]
          if (val.title.match(/[a-zA-Z]/)) {
            ret.push(val)
          } else if (val.title === HOT_NAME) {
            hot.push(val)
          }
        }
        ret.sort((a, b) => {
          return a.title.charCodeAt(0) - b.title.charCodeAt(0)
        })
        return hot.concat(ret)
      },
      ...mapMutations({
        setSinger: 'SET_SINGER'  // vuex使用第二步：做一个映射，mutations中的SET_SINGER映射到一个方法名：setSinger
      })
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  .singer
    position: fixed
    top: 88px
    bottom: 0
    width: 100%
</style>
