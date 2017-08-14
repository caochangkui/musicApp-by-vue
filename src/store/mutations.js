import * as types from './mutation-types'  // 从mutation-types中拿到定义的常量

// mutations可以看做一个对象，里面有一些方法
// 通俗的理解mutations,里面装着一些改变数据方法的集合，这是Veux设计很重要的一点，就是把处理数据逻辑方法全部放在mutations里面，使得数据和视图分离。
// 里面这些方法的名字为：types.SET_SINGER等。。。
const mutations = {
  // 下面是types.SET_SINGER方法，有两个参数，一个参数state是当前的状态，第二个是提交mutations时传的参数
  [types.SET_SINGER](state, singer) {
    state.singer = singer
  },
  // 下面是音乐播放器的一些方法，有两个参数，一个参数state是当前的状态，第二个是提交mutations时传的参数
  [types.SET_PLAYING_STATE](state, flag) {
    state.playing = flag
  },
  [types.SET_FULL_SCREEN](state, flag) {
    state.fullScreen = flag
  },
  [types.SET_PLAYLIST](state, list) {
    state.playlist = list
  },
  [types.SET_SEQUENCE_LIST](state, list) {
    state.sequenceList = list
  },
  [types.SET_PLAY_MODE](state, mode) {
    state.mode = mode
  },
  [types.SET_CURRENT_INDEX](state, index) {
    state.currentIndex = index
  },
  [types.SET_DISC](state, disc) {
    state.disc = disc
  }
}

export default mutations
