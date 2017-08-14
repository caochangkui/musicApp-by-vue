<template>
  <div class="recommend">
    <scroll ref="scroll" class="recommend-content" :data="discList">
      <div>
        <div v-if="recommends.length" class="slider-wrapper">
          <slider :interval="interval">
            <div class="" v-for="item in recommends">
              <a>
                <img class="needsclick" @load="loadImage" :src="item.picUrl" alt="">
              </a>
            </div>
          </slider>
        </div>
        <div class="recommend-list">
          <h1 class="list-title">热门歌单推荐</h1>
          <ul>
            <li @click="selectItem(item)" v-for="item in discList" class="item">
              <div class="icon">
                <img class="img" v-lazy="item.imgurl" />
              </div>
              <div class="text">
                <h2 class="name" v-html="item.creator.name"></h2>
                <p class="disc" v-html="item.dissname"></p>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div class="loading-container" v-show="!discList.length">
        <Loading></loading>
      </div>
    </scroll>
    <router-view></router-view>
  </div>
</template>

<script type="text/ecmascript-6">
  import Loading from 'base/loading/loading'
  import Scroll from 'base/scroll/scroll'
  import Slider from 'base/slider/slider'
  import {getRecommend} from 'api/recommend'
  import {ERR_OK} from 'api/config'
  import {mapMutations} from 'vuex'

  export default {
    components: {
      Slider,
      Scroll,
      Loading
    },
    data() {
      return {
        recommends: [],
        interval: 2000,
        discList: [
          {
            dissid: '2372394141',
            createtime: '2017-08-10',
            commit_time: '2017-08-10',
            dissname: '最爱星爷，周星驰电影ost合辑',
            imgurl: 'http://p.qpic.cn/music_cover/0Fvp5LwdLLDtCTPt1WSVefqISbb00pW97ofuMxDic4jXRslsLTkgpcQ/600?n=1',
            introduction: '',
            listennum: 14497,
            score: 0.0,
            version: 0,
            creator: {
              type: 0,
              qq: 2753358585,
              encrypt_uin: 'owSkoiokNe4F7v**',
              name: '像疯一样自由',
              isVip: 0,
              avatarUrl: '',
              followflag: 0
            }
          },
          {
            dissid: '3271048482',
            createtime: '2017-07-23',
            commit_time: '2017-07-23',
            dissname: '中国最经典的八十七首摇滚乐',
            imgurl: 'http://p.qpic.cn/music_cover/HPxMlQbCxoz3afs74a3Bx66CVzTzFtcib6HNHvKMMYpY4ZAGqhe8qOA/600?n=1',
            introduction: '',
            listennum: 141848,
            score: 0,
            version: 0,
            creator: {
              type: 0,
              qq: 1363113948,
              encrypt_uin: 'oKosoi65oiEPNn**',
              name: '忘了',
              isVip: 0,
              avatarUrl: '',
              followflag: 0
            }
          },
          {
            dissid: '2973374182',
            createtime: '2017-08-07',
            commit_time: '2017-08-07',
            dissname: '《情歌王》里所有的情歌：不会唱也能哼两句',
            imgurl: 'http://p.qpic.cn/music_cover/UROl51JnIAk9Ipxmv4b86r8vlSsz9VHEYicu9FFFU8muNCgl55q6B7Q/600?n=1',
            introduction: '',
            listennum: 1596267,
            score: 0,
            version: 0,
            creator: {
              type: 0,
              qq: 2434697687,
              encrypt_uin: 'owvi7eCq7iCF7z**',
              name: '我同事的嘴很甜',
              isVip: 0,
              avatarUrl: '',
              followflag: 0
            }
          },
          {
            dissid: '1771777767',
            createtime: '2017-07-20',
            commit_time: '2017-07-20',
            dissname: '在KTV不唱这些粤语歌，怎么秒杀全场',
            imgurl: 'http://p.qpic.cn/music_cover/5UwnKDyGzxmbdx6K81P8kx45vVvfubUyF0ZhMrUJlicr3PXeibXFrWxQ/600?n=1',
            introduction: '',
            listennum: 1093867,
            score: 0,
            version: 0,
            creator: {
              type: 0,
              qq: 276606083,
              encrypt_uin: 'owSs7wnsoeci',
              name: '夏天',
              isVip: 0,
              avatarUrl: '',
              followflag: 0
            }
          },
          {
            dissid: '1771665511',
            createtime: '2017-07-19',
            commit_time: '2017-07-19',
            dissname: '出租车司机听了都会开慢点的经典爵士乐',
            imgurl: 'http://p.qpic.cn/music_cover/7NGsMuRjkehMLp0KVR8X4u5DMHbTxibJHrnLfLOjUbPf1SuzDiclhnJA/600?n=1',
            introduction: '',
            listennum: 69568,
            score: 0,
            version: 0,
            creator: {
              type: 0,
              qq: 2672739483,
              encrypt_uin: 'owClowSiNKvFoz**',
              name: 'Wuli凡凡',
              isVip: 0,
              avatarUrl: '',
              followflag: 0
            }
          },
          {
            dissid: '3269971894',
            createtime: '2017-07-12',
            commit_time: '2017-07-12',
            dissname: '大写的服！暑假一定会重播的电视剧',
            imgurl: 'http://p.qpic.cn/music_cover/7ib5z5gTa2MbAYjQY4P8NcLkznCd5HrLPqibdSiakzicRdqVVac7YLG55w/600?n=1',
            introduction: '',
            listennum: 2025046,
            score: 0,
            version: 0,
            creator: {
              type: 0,
              qq: 2837317748,
              encrypt_uin: 'owci7io57iSPNn**',
              name: '孤独的一点点患者',
              isVip: 0,
              avatarUrl: '',
              followflag: 0
            }
          },
          {
            dissid: '1474454760',
            createtime: '2017-07-25',
            commit_time: '2017-07-25',
            dissname: '粤语 | 重温80-90年代那些经典之作',
            imgurl: 'http://p.qpic.cn/music_cover/ibntviciboJuwCoCNK8ibZkjehsRicibV2Jun3w8HKYSJZqSQT6JB07uo5oQ/600?n=1',
            introduction: '',
            listennum: 125603,
            score: 0,
            version: 0,
            creator: {
              type: 0,
              qq: 3024244602,
              encrypt_uin: 'oinA7e-P7eCzoc**',
              name: 'Allen',
              isVip: 0,
              avatarUrl: '',
              followflag: 0
            }
          },
          {
            dissid: '1172228261',
            createtime: '2017-07-25',
            commit_time: '2017-07-25',
            dissname: '90年代粤语男声：声音都带点帅气',
            imgurl: 'http://p.qpic.cn/music_cover/zQaicIWxK9eIGux02nRsJyX6qlbUIssXc4pLGdCVOIfvia9osGhjkuLA/600?n=1',
            introduction: '',
            listennum: 120313,
            score: 0,
            version: 0,
            creator: {
              type: 0,
              qq: 3153936651,
              encrypt_uin: 'oi6koiEi7wCkov**',
              name: '随风',
              isVip: 0,
              avatarUrl: '',
              followflag: 0
            }
          },
          {
            dissid: '876470643',
            createtime: '2017-07-18',
            commit_time: '2017-07-18',
            dissname: '经典情怀 | 追忆香港电影中的警察故事',
            imgurl: 'http://p.qpic.cn/music_cover/UdEFGcpUxCS32Gkib6dX8eFicGKssibPpQNWZMdaqzzIhWWrYIiaJH7sbw/600?n=1',
            introduction: '',
            listennum: 175275,
            score: 0,
            version: 0,
            creator: {
              type: 0,
              qq: 2117222820,
              encrypt_uin: 'ow657i-AowcAon**',
              name: '当然是选择原谅她啊',
              isVip: 0,
              avatarUrl: '',
              followflag: 0
            }
          },
          {
            dissid: '874827001',
            createtime: '2017-07-06',
            commit_time: '2017-07-06',
            dissname: 'BBC票选：史上最伟大吉他Riff歌曲',
            imgurl: 'http://p.qpic.cn/music_cover/Xh9w3XT51TT9sbShMd8OrLicAzLrOefWNc2qniav2eDjiaycgBEianPCDw/600?n=1',
            introduction: '',
            listennum: 17514,
            score: 0,
            version: 0,
            creator: {
              type: 0,
              qq: 3313854020,
              encrypt_uin: 'oio5oick7enAon**',
              name: '万利达李宗盛',
              isVip: 0,
              avatarUrl: '',
              followflag: 0
            }
          },
          {
            dissid: '2372376387',
            createtime: '2017-07-05',
            commit_time: '2017-07-05',
            dissname: '来自贫民窟的挣扎呐喊 匪帮说唱的真谛',
            imgurl: 'http://p.qpic.cn/music_cover/HhRfwkaJkMuHFA6SCcvUmtOFMdiaX6jvgzn0YibdIdBfxFMbLImSibdicA/600?n=1',
            introduction: '',
            listennum: 31127,
            score: 0,
            version: 0,
            creator: {
              type: 0,
              qq: 49043945,
              encrypt_uin: '7eEz7eoq7e4*',
              name: '麦昆',
              isVip: 0,
              avatarUrl: '',
              followflag: 0
            }
          },
          {
            dissid: '3269150711',
            createtime: '2017-07-06',
            commit_time: '2017-07-06',
            dissname: '你中学时代用过哪句歌词写情书？',
            imgurl: 'http://p.qpic.cn/music_cover/OSAR0v6fibBw0icAxIk2EX0FDLMPTSHsbfmrh3Ry3fpGJskbxqYtADHg/600?n=1',
            introduction: '',
            listennum: 5908280,
            score: 0,
            version: 0,
            creator: {
              type: 0,
              qq: 3012233478,
              encrypt_uin: 'oin5ow-ioivlNn**',
              name: '做歌单真的很开心',
              isVip: 0,
              avatarUrl: '',
              followflag: 0
            }
          },
          {
            dissid: '2674990861',
            createtime: '2017-07-31',
            commit_time: '2017-07-31',
            dissname: '经典之声：有一种回忆叫做回到1997年',
            imgurl: 'http://p.qpic.cn/music_cover/5jvDX14RLylr9k5PnsA7jp2S1gohsibI5LjgkBuE5CawY0Je6BkDeTg/600?n=1',
            introduction: '',
            listennum: 578903,
            score: 0,
            version: 0,
            creator: {
              type: 0,
              qq: 2455175706,
              encrypt_uin: 'owvk7K6l7KSz7c**',
              name: '胸毛少女',
              isVip: 0,
              avatarUrl: '',
              followflag: 0
            }
          },
          {
            dissid: '3271043357',
            createtime: '2017-07-27',
            commit_time: '2017-07-27',
            dissname: '谁说中国没有经典摇滚乐！？',
            imgurl: 'http://p.qpic.cn/music_cover/HPxMlQbCxoz3afs74a3Bx66CVzTzFtcibOfZVXMZWibqV2pBfurxSHiaw/600?n=1',
            introduction: '',
            listennum: 87392,
            score: 0,
            version: 0,
            creator: {
              type: 0,
              qq: 1363113948,
              encrypt_uin: 'oKosoi65oiEPNn**',
              name: '忘了',
              isVip: 0,
              avatarUrl: '',
              followflag: 0
            }
          },
          {
            dissid: '2070168787',
            createtime: '2017-07-27',
            commit_time: '2017-07-27',
            dissname: '带你领略经典：一听就爱上的英文极致良曲',
            imgurl: 'http://p.qpic.cn/music_cover/kztj4hibpYiby0kChwzAZ71wMc92XhX1icIia7piaXiaN1ouXLVnBfPAxzww/600?n=1',
            introduction: '',
            listennum: 1416611,
            score: 0,
            version: 0,
            creator: {
              type: 0,
              qq: 1226527774,
              encrypt_uin: 'oK-A7w4A7iSl7n**',
              name: '-    愛里九死一生',
              isVip: 0,
              avatarUrl: '',
              followflag: 0
            }
          },
          {
            dissid: '1772734970',
            createtime: '2017-07-27',
            commit_time: '2017-07-27',
            dissname: '粤语丨岁月流情，回味旧时光中的情歌对唱',
            imgurl: 'http://p.qpic.cn/music_cover/5UwnKDyGzxmbdx6K81P8kib8Le6b5ugBN20QGJkKJMJibwiaWEwtP0hCQ/600?n=1',
            introduction: '',
            listennum: 622732,
            score: 0,
            version: 0,
            creator: {
              type: 0,
              qq: 276606083,
              encrypt_uin: 'owSs7wnsoeci',
              name: '夏天',
              isVip: 0,
              avatarUrl: '',
              followflag: 0
            }
          },
          {
            dissid: '2971516799',
            createtime: '2017-07-25',
            commit_time: '2017-07-25',
            dissname: '80-90年代粤语女声：时光有声，旋律永恒',
            imgurl: 'http://p.qpic.cn/music_cover/UROl51JnIAk9Ipxmv4b86oe4Cze9OLcbCOnYF2NxAzHxq8ckYohloQ/600?n=1',
            introduction: '',
            listennum: 618652,
            score: 0,
            version: 0,
            creator: {
              type: 0,
              qq: 2434697687,
              encrypt_uin: 'owvi7eCq7iCF7z**',
              name: '我同事的嘴很甜',
              isVip: 0,
              avatarUrl: '',
              followflag: 0
            }
          },
          {
            dissid: '3271048482',
            createtime: '2017-07-23',
            commit_time: '2017-07-23',
            dissname: '中国最经典的八十七首摇滚乐',
            imgurl: 'http://p.qpic.cn/music_cover/HPxMlQbCxoz3afs74a3Bx66CVzTzFtcib6HNHvKMMYpY4ZAGqhe8qOA/600?n=1',
            introduction: '',
            listennum: 141848,
            score: 0,
            version: 0,
            creator: {
              type: 0,
              qq: 1363113948,
              encrypt_uin: 'oKosoi65oiEPNn**',
              name: '忘了',
              isVip: 0,
              avatarUrl: '',
              followflag: 0
            }
          },
          {
            dissid: '2973374182',
            createtime: '2017-08-07',
            commit_time: '2017-08-07',
            dissname: '《情歌王》里所有的情歌：不会唱也能哼两句',
            imgurl: 'http://p.qpic.cn/music_cover/UROl51JnIAk9Ipxmv4b86r8vlSsz9VHEYicu9FFFU8muNCgl55q6B7Q/600?n=1',
            introduction: '',
            listennum: 1596267,
            score: 0,
            version: 0,
            creator: {
              type: 0,
              qq: 2434697687,
              encrypt_uin: 'owvi7eCq7iCF7z**',
              name: '我同事的嘴很甜',
              isVip: 0,
              avatarUrl: '',
              followflag: 0
            }
          },
          {
            dissid: '1771777767',
            createtime: '2017-07-20',
            commit_time: '2017-07-20',
            dissname: '在KTV不唱这些粤语歌，怎么秒杀全场',
            imgurl: 'http://p.qpic.cn/music_cover/5UwnKDyGzxmbdx6K81P8kx45vVvfubUyF0ZhMrUJlicr3PXeibXFrWxQ/600?n=1',
            introduction: '',
            listennum: 1093867,
            score: 0,
            version: 0,
            creator: {
              type: 0,
              qq: 276606083,
              encrypt_uin: 'owSs7wnsoeci',
              name: '夏天',
              isVip: 0,
              avatarUrl: '',
              followflag: 0
            }
          },
          {
            dissid: '1771665511',
            createtime: '2017-07-19',
            commit_time: '2017-07-19',
            dissname: '出租车司机听了都会开慢点的经典爵士乐',
            imgurl: 'http://p.qpic.cn/music_cover/7NGsMuRjkehMLp0KVR8X4u5DMHbTxibJHrnLfLOjUbPf1SuzDiclhnJA/600?n=1',
            introduction: '',
            listennum: 69568,
            score: 0,
            version: 0,
            creator: {
              type: 0,
              qq: 2672739483,
              encrypt_uin: 'owClowSiNKvFoz**',
              name: 'Wuli凡凡',
              isVip: 0,
              avatarUrl: '',
              followflag: 0
            }
          },
          {
            dissid: '3269971894',
            createtime: '2017-07-12',
            commit_time: '2017-07-12',
            dissname: '大写的服！暑假一定会重播的电视剧',
            imgurl: 'http://p.qpic.cn/music_cover/7ib5z5gTa2MbAYjQY4P8NcLkznCd5HrLPqibdSiakzicRdqVVac7YLG55w/600?n=1',
            introduction: '',
            listennum: 2025046,
            score: 0,
            version: 0,
            creator: {
              type: 0,
              qq: 2837317748,
              encrypt_uin: 'owci7io57iSPNn**',
              name: '孤独的一点点患者',
              isVip: 0,
              avatarUrl: '',
              followflag: 0
            }
          },
          {
            dissid: '1474454760',
            createtime: '2017-07-25',
            commit_time: '2017-07-25',
            dissname: '粤语 | 重温80-90年代那些经典之作',
            imgurl: 'http://p.qpic.cn/music_cover/ibntviciboJuwCoCNK8ibZkjehsRicibV2Jun3w8HKYSJZqSQT6JB07uo5oQ/600?n=1',
            introduction: '',
            listennum: 125603,
            score: 0,
            version: 0,
            creator: {
              type: 0,
              qq: 3024244602,
              encrypt_uin: 'oinA7e-P7eCzoc**',
              name: 'Allen',
              isVip: 0,
              avatarUrl: '',
              followflag: 0
            }
          },
          {
            dissid: '1172228261',
            createtime: '2017-07-25',
            commit_time: '2017-07-25',
            dissname: '90年代粤语男声：声音都带点帅气',
            imgurl: 'http://p.qpic.cn/music_cover/zQaicIWxK9eIGux02nRsJyX6qlbUIssXc4pLGdCVOIfvia9osGhjkuLA/600?n=1',
            introduction: '',
            listennum: 120313,
            score: 0,
            version: 0,
            creator: {
              type: 0,
              qq: 3153936651,
              encrypt_uin: 'oi6koiEi7wCkov**',
              name: '随风',
              isVip: 0,
              avatarUrl: '',
              followflag: 0
            }
          },
          {
            dissid: '876470643',
            createtime: '2017-07-18',
            commit_time: '2017-07-18',
            dissname: '经典情怀 | 追忆香港电影中的警察故事',
            imgurl: 'http://p.qpic.cn/music_cover/UdEFGcpUxCS32Gkib6dX8eFicGKssibPpQNWZMdaqzzIhWWrYIiaJH7sbw/600?n=1',
            introduction: '',
            listennum: 175275,
            score: 0,
            version: 0,
            creator: {
              type: 0,
              qq: 2117222820,
              encrypt_uin: 'ow657i-AowcAon**',
              name: '当然是选择原谅她啊',
              isVip: 0,
              avatarUrl: '',
              followflag: 0
            }
          },
          {
            dissid: '1136089575',
            createtime: '2016-11-02',
            commit_time: '2016-11-02',
            dissname: '90年代TVB经典剧集的经典主题曲',
            imgurl: 'http://p.qpic.cn/music_cover/Ej7F4g676QjYgica7iamaB8rNacIQdbXc8rXyf0ecNXfjC3yHAn57aJw/600?n=1',
            introduction: '',
            listennum: 1841730,
            score: 0.0,
            version: 0,
            creator: {
              type: 0,
              qq: 1925286211,
              encrypt_uin: 'oKEA7K-F7w-5ov**',
              name: '微风吹过呼呼声',
              isVip: 0,
              avatarUrl: '',
              followflag: 0
            }
          },
          {
            dissid: '874827001',
            createtime: '2017-07-06',
            commit_time: '2017-07-06',
            dissname: 'BBC票选：史上最伟大吉他Riff歌曲',
            imgurl: 'http://p.qpic.cn/music_cover/Xh9w3XT51TT9sbShMd8OrLicAzLrOefWNc2qniav2eDjiaycgBEianPCDw/600?n=1',
            introduction: '',
            listennum: 17514,
            score: 0,
            version: 0,
            creator: {
              type: 0,
              qq: 3313854020,
              encrypt_uin: 'oio5oick7enAon**',
              name: '万利达李宗盛',
              isVip: 0,
              avatarUrl: '',
              followflag: 0
            }
          },
          {
            dissid: '2372376387',
            createtime: '2017-07-05',
            commit_time: '2017-07-05',
            dissname: '来自贫民窟的挣扎呐喊 匪帮说唱的真谛',
            imgurl: 'http://p.qpic.cn/music_cover/HhRfwkaJkMuHFA6SCcvUmtOFMdiaX6jvgzn0YibdIdBfxFMbLImSibdicA/600?n=1',
            introduction: '',
            listennum: 31127,
            score: 0,
            version: 0,
            creator: {
              type: 0,
              qq: 49043945,
              encrypt_uin: '7eEz7eoq7e4*',
              name: '麦昆',
              isVip: 0,
              avatarUrl: '',
              followflag: 0
            }
          },
          {
            dissid: '3269150711',
            createtime: '2017-07-06',
            commit_time: '2017-07-06',
            dissname: '你中学时代用过哪句歌词写情书？',
            imgurl: 'http://p.qpic.cn/music_cover/OSAR0v6fibBw0icAxIk2EX0FDLMPTSHsbfmrh3Ry3fpGJskbxqYtADHg/600?n=1',
            introduction: '',
            listennum: 5908280,
            score: 0,
            version: 0,
            creator: {
              type: 0,
              qq: 3012233478,
              encrypt_uin: 'oin5ow-ioivlNn**',
              name: '做歌单真的很开心',
              isVip: 0,
              avatarUrl: '',
              followflag: 0
            }
          },
          {
            dissid: '2374515522',
            createtime: '2017-07-21',
            commit_time: '2017-07-21',
            dissname: '你曾鼓励过我们走出困境，为什么自己却...',
            imgurl: 'http://p.qpic.cn/music_cover/RrXobiciaW7sU0htwoU8XrKPrKRWXpZUnuclicpJ35KkAvrYiaXiaDOenlg/600?n=1',
            introduction: '',
            listennum: 2122678,
            score: 0,
            version: 0,
            creator: {
              type: 0,
              qq: 3210113365,
              encrypt_uin: 'oi-5oe65oios7v**',
              name: '大大熊',
              isVip: 0,
              avatarUrl: '',
              followflag: 0
            }
          },
          {
            dissid: '3249113425',
            createtime: '2017-02-05',
            commit_time: '2017-02-05',
            dissname: 'Bobby的音乐回忆之旅（一）',
            imgurl: 'http://p.qpic.cn/music_cover/RbwTcfm1uBrzcGMmrezuQmvnQshVbTS8Rr2SILDLSTyQU8jUd8zfhg/600?n=1',
            introduction: '',
            listennum: 19303,
            score: 0,
            version: 0,
            creator: {
              type: 0,
              qq: 990683588,
              encrypt_uin: 'NKEz7wci7KcF',
              name: '一根筋',
              isVip: 0,
              avatarUrl: '',
              followflag: 0
            }
          },
          {
            dissid: '1751567055',
            createtime: '2017-03-10',
            commit_time: '2017-03-10',
            dissname: '20世纪前半期的人们都在听什么（欧美篇）',
            imgurl: 'http://p.qpic.cn/music_cover/KBCvCo8WK3vqbRQSI6l6oPpDNQCwgEnF6cm904JEcPUic6Db0k2e3Ow/600?n=1',
            introduction: '',
            listennum: 24630,
            score: 0,
            version: 0,
            creator: {
              type: 0,
              qq: 2812320843,
              encrypt_uin: 'owc5owoAoecPoz**',
              name: '怪叔叔',
              isVip: 0,
              avatarUrl: '',
              followflag: 0
            }
          },
          {
            dissid: '3228831649',
            createtime: '2016-10-20',
            commit_time: '2016-10-20',
            dissname: '【摇摆乐】我听这种音乐的时候最摇摆',
            imgurl: 'http://p.qpic.cn/music_cover/uHPJPQ7JzhMkibvVLGzmoWxb3wbIpx1zSmA9xH7rz67FMA7ITJ95ykA/600?n=1',
            introduction: '',
            listennum: 84658,
            score: 0,
            version: 0,
            creator: {
              type: 0,
              qq: 632471508,
              encrypt_uin: '7woA7eS57KnF',
              name: 'Ivyyy',
              isVip: 0,
              avatarUrl: '',
              followflag: 0
            }
          },
          {
            dissid: '1349109134',
            createtime: '2016-10-20',
            commit_time: '2016-10-20',
            dissname: '流淌的醇红酒',
            imgurl: 'http://p.qpic.cn/music_cover/KzujPuunZOYeNAsUPc3yibq30zkuBe4TjXdX1ea4icGlia2ecuH7OGYog/600?n=1',
            introduction: '',
            listennum: 68451,
            score: 0,
            version: 0,
            creator: {
              type: 0,
              qq: 185238642,
              encrypt_uin: 'oKckowoF7wvA',
              name: '空',
              isVip: 0,
              avatarUrl: '',
              followflag: 0
            }
          },
          {
            dissid: '3550519604',
            createtime: '2017-02-02',
            commit_time: '2017-02-02',
            dissname: '摇滚入门-60、70年代的摇滚',
            imgurl: 'http://p.qpic.cn/music_cover/20PiclS0pnuorS7TjcsAiaeTwvVjMQNrFW6pnzQavyaNhicz4YgTibJGOQ/600?n=1',
            introduction: '',
            listennum: 23670,
            score: 0,
            version: 0,
            creator: {
              type: 0,
              qq: 1850032149,
              encrypt_uin: 'oKckoeniow6PNv**',
              name: '丰',
              isVip: 0,
              avatarUrl: '',
              followflag: 0
            }
          },
          {
            dissid: '1151389724',
            createtime: '2017-02-21',
            commit_time: '2017-02-21',
            dissname: '「治愈」裹一缕悠扬缎带去流浪',
            imgurl: 'http://p.qpic.cn/music_cover/pK9iaj790oM9mNPUnqOBgrcEMCM5RgNt82Ciajdt6ibyavDIFRZXIOMCA/600?n=1',
            introduction: '',
            listennum: 31332,
            score: 0,
            version: 0,
            creator: {
              type: 0,
              qq: 670247041,
              encrypt_uin: '7wSzowvloev5',
              name: 'Raicy',
              isVip: 0,
              avatarUrl: '',
              followflag: 0
            }
          },
          {
            dissid: '1760056782',
            createtime: '2017-05-27',
            commit_time: '2017-05-27',
            dissname: '这是一张使人嘴角上扬的歌单',
            imgurl: 'http://p.qpic.cn/music_cover/KBCvCo8WK3vqbRQSI6l6oM4Xibo6OjBq45e7Yafvhyib6QOicV0qCml6g/600?n=1',
            introduction: '',
            listennum: 29829,
            score: 0,
            version: 0,
            creator: {
              type: 0,
              qq: 2812320843,
              encrypt_uin: 'owc5owoAoecPoz**',
              name: '怪叔叔',
              isVip: 0,
              avatarUrl: '',
              followflag: 0
            }
          },
          {
            dissid: '1438208276',
            createtime: '2017-01-12',
            commit_time: '2017-01-12',
            dissname: '去广州吧 粤菜吃完再听听粤式情歌',
            imgurl: 'http://p.qpic.cn/music_cover/TTQibyKjrickzz1QOHwk3oHXQcdLawsHGBgItWVUNzww7v2kQaeU2MYw/600?n=1',
            introduction: '',
            listennum: 50306,
            score: 0,
            version: 0,
            creator: {
              type: 0,
              qq: 53221122,
              encrypt_uin: '7KoAow65ow-*',
              name: 'miki',
              isVip: 0,
              avatarUrl: '',
              followflag: 0
            }
          },
          {
            dissid: '1525267787',
            createtime: '2017-02-06',
            commit_time: '2017-02-06',
            dissname: '鎏金二十余载，月亮公主孟庭苇',
            imgurl: 'http://p.qpic.cn/music_cover/QvJ6g6zbG9SzzBEROTnia5pmD0WDahUbibgVBQYyTSlCfZDAyU4LIaEA/600?n=1',
            introduction: '',
            listennum: 42429,
            score: 0,
            version: 0,
            creator: {
              type: 0,
              qq: 2373115923,
              encrypt_uin: 'owoloi657KEAoz**',
              name: '　　　　　　　　　　　　',
              isVip: 0,
              avatarUrl: '',
              followflag: 0
            }
          },
          {
            dissid: '1465961900',
            createtime: '2017-05-24',
            commit_time: '2017-05-24',
            dissname: '百首经典吉他riff，无限冲击你的耳膜',
            imgurl: 'http://p.qpic.cn/music_cover/2FHxTgRa99ake3zjGXYNINgKZUtRR1w9RAfEMnzvC7XBKZrkFhl6vg/600?n=1',
            introduction: '',
            listennum: 35008,
            score: 0,
            version: 0,
            creator: {
              type: 0,
              qq: 3532465982,
              encrypt_uin: 'oi4iowvs7KEFoc**',
              name: '伸手碰阳光',
              isVip: 0,
              avatarUrl: '',
              followflag: 0
            }
          }
        ]
      }
    },
    created() {
      this._getRecommend()
      // this._getDiscList()
    },
    methods: {
      selectItem(item) {
        this.$router.push({
          path: `/recommend/${item.dissid}`
        })
        this.setDisc(item)
      },
      _getRecommend() {
        getRecommend().then((res) => {
          if (res.code === ERR_OK) {
            console.log('轮播图数据' + ':' + res.data.slider)
            this.recommends = res.data.slider // 将取到的轮播图数据复制给recommends。然后通过data传给slider组件
          }
        })
      },
      // _getDiscList() {
      //   getDiscList().then((res) => {
      //     if (res.code === ERR_OK) {
      //       console.log('歌单列表数据：')
      //       console.log(res.data.list)
      //       this.discList = res.data.list
      //     }
      //   })
      // },
      loadImage() {
        if (!this.checkLoaded) {
          this.$refs.scroll.refresh()
          this.checkLoaded = true
        }
      },
      ...mapMutations({
        setDisc: 'SET_DISC'
      })
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "~common/stylus/variable"

  .recommend
    position: fixed
    /*border: 1px solid red*/
    width: 100%
    top: 88px
    bottom: 0
    .recommend-content
      height: 100%
      overflow: hidden
      .slider-wrapper
        position: relative
        width: 100%
        overflow: hidden
      .recommend-list
        .list-title
          height: 65px
          line-height: 65px
          text-align: center
          font-size: $font-size-large
          color: $color-theme
        .item
          display: inline-block
          box-sizing: border-box
          background: #1C1C1C
          width: 50%
          border: 2px solid #000
          padding: 6px
          .icon
            width: 100%
            height: 100%
            .img
              width: 100%
              height: 100%
          .text
            display: flex
            flex-direction: column
            justify-content: center
            flex: 1
            line-height: 20px
            overflow: hidden
            font-size: $font-size-medium
            .name
              margin-bottom: 4px
              color: $color-text
            .desc
              color: $color-text-d
      .loading-container
        position: absolute
        width: 100%
        top: 50%
        transform: translateY(-50%)
</style>
