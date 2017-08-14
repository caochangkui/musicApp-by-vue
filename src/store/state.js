import {playMode} from 'common/js/config'

const state = {  // 定义state
  singer: {},  // 存放每个歌手的状态
  playing: false, // 播放器播放/暂停，默认播放状态为：暂停
  fullScreen: false,  // 播放器展开/收起，默认状态为全屏
  playlist: [],  // 存放此时的播放列表
  sequenceList: [], // 随机播放列表（不过当用户选择顺序播放时，这个sequenceList==playlist）
  mode: playMode.sequence, // 播放模式
  currentIndex: -1, // 当前播放歌曲的索引
  disc: {}    // 存放推荐列表中歌单的状态
}

export default state   // 传出state
