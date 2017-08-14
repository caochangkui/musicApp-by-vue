<template>
  <div class="search">
    <div class="search-box-wrapper">
      <search-box ref="searchbox" @query="onQueryChange"></search-box>
    </div>
    <div class="shortcut-wrapper" v-show="!query">
      <div class="shortcut">
          <div class="hotkey">
            <h1 class="title">热门搜索</h1>
            <ul>
              <li 
                @click="addQuery(item.k)"
                class="item" 
                v-for="item in hotkey"
              >
                <span>{{item.k}}</span>
              </li>
            </ul>
          </div>
      </div>
    </div>
    <div class="search-result" v-show="query">
      <suggest :query="query"></suggest> 
    </div>
    <router-view></router-view>
  </div>
</template>

<script type="text/ecmascript-6">
  import SearchBox from 'base/search-box/search-box'
  import Suggest from 'components/suggest/suggest'
  import {getHotKey} from 'api/search'
  import {ERR_OK} from 'api/config'

  export default {
    components: {
      SearchBox,
      Suggest
    },
    data() {
      return {
        hotkey: [],
        query: ''
      }
    },
    created() {
      this._getHotKey()
    },
    methods: {
      _getHotKey() {
        getHotKey().then((res) => {
          if (res.code === ERR_OK) {
            // console.log(res.data.hotkey)
            this.hotkey = res.data.hotkey.slice(0, 20)
          }
        })
      },
      addQuery(query) {
        // 父组件可以通过this.$refs.xxx访问到子组件。xxxx即为你的组件的ref属性的值！里面的属性或者方法就可以直接取了。下面就是父组件调用子组件的setQuery方法
        this.$refs.searchbox.setQuery(query)
      },
      onQueryChange(query) {
        this.query = query
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "~common/stylus/variable"
  @import "~common/stylus/mixin"

  .search
    .search-box-wrapper
      margin: 20px
    .shortcut-wrapper
      position: fixed
      top: 178px
      bottom: 0
      width: 100%
      .shortcut
        height: 100%
        overflow: hidden
        .hotkey
          margin: 0 20px 20px 20px
          .title
            margin-top: 10px
            margin-bottom: 20px
            font-size: $font-size-large
            color: #ffcd32
            font-style: italic 
          .item
            display: inline-block
            padding: 5px 10px
            margin: 0 20px 10px 0
            border-radius: 6px
            background: $color-highlight-background
            font-size: $font-size-medium
            color: $color-text
    .search-result
      position: fixed
      width: 100%
      top: 178px
      bottom: 0
</style>
