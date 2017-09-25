<template>
  <div id="company-banner">
    <div class="banner-bg">
      <img src="//static.lagou.com/i/image/M00/A4/21/Cgp3O1iq07CARCHgAADVkjLYjBo764.JPG" width="100%" height="389">
    </div>
    <div class="banner-content">
      <h3>什么值得投</h3>
      <div class="it-content">
        <div v-show="prevVisible" class="prev" @click="_prev">上一页</div>
        <div v-show="nextVisible" class="next" @click="_next">下一页</div>
        <div class="it-list">
          <ul class="l-panel-list" ref="list">
            <li v-for="company in companyList">
              <div class="l-panel">
                <img :src="company.coverImg" width="142" height="142">
                <p class="l-panel-b">{{company.coverText}}</p>
                <div class="l-panel-cont">
                  <div class="l-panel-det">
                    <p>{{company.desc}}</p>
                    <div>
                      <a class="go-btn">进入公司主页</a>
                    </div>
                  </div>
                </div>
              </div>
              <div class="time">
                {{company.time}}
                <span class="bottom-bg"></span>
                <span class="bottom-bg first"></span>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    data() {
      return {
        companyList: [
          {
            coverImg: '//static.lagou.com/i/image/M00/60/EB/CgpFT1majCKAUe_SAAS6pYcds-g886.png',
            coverText: '无职级,有分工，一切唯结果说话',
            desc: '顶级基金 B 轮融资/四合院+健身房/双休/季度奖金/免费零食饮料晚餐',
            time: '09/22'
          }, {
            coverImg: '//static.lagou.com/i/image/M00/3E/02/Cgp3O1dzdCaAEtKmAAA_2mJ0_q0467.png',
            coverText: '探迹让销售更精准',
            desc: '国内领先的基于大数据和人工智能的企业客户智能预测解决方案提供商',
            time: '09/21'
          }, {
            coverImg: '//static.lagou.com/image1/M00/00/4C/CgYXBlTUXPaAfyWSAABYGalloE8984.png',
            coverText: '成为小而美的优秀企业',
            desc: '深圳市尚游网络科技有限公司成立于2007年8月,注于网络游戏的开发、运营与服务',
            time: '09/20'
          }, {
            coverImg: '//static.lagou.com/i/image/M00/8B/28/CgqKkVh4d8qAA657AAA3NIpBKRk507.jpg',
            coverText: '五险一金、带薪年假、包吃三餐',
            desc: '成都市米彩科技有限公司成立于2016年4月,专注于从事移动终端应用软件开发',
            time: '09/19'
          }, {
            coverImg: '//static.lagou.com/i/image/M00/07/17/Cgp3O1bNjT-AFsa6AAA83c0vejw711.jpg',
            coverText: '境外自由行智能搜索引擎',
            desc: '鼓励让每一个人变得更有趣，追求用技术的力量不断提升出境旅行的体验，让自由更简单',
            time: '09/18'
          }, {
            coverImg: '//static.lagou.com/i/image/M00/8D/1C/CgqKkViEWbOAN2b-AAAOf4c1CaQ783.png',
            coverText: '专注企业餐饮福利消费市场',
            desc: '国内领先的企业员工餐综合解决方案提供商，为数千家企业客户提供员工餐饮解决方案',
            time: '09/17'
          }, {
            coverImg: '//static.lagou.com/i/image/M00/BF/99/CgqKkVjQh0yAYEp8AAEp8fwZArs205.jpg',
            coverText: '信息校园、智慧校园',
            desc: '为教育主管部门及学校提供教育信息化整体解决方案，为家庭和孩子提供全方位的教育信息',
            time: '09/16'
          }, {
            coverImg: 'https://static.lagou.com/i/image/M00/73/1E/CgpEMlm57G6ATWX_AAAa533rsoc873.PNG',
            coverText: '吃什么，找食探，不随便',
            desc: '食探愿景：成为全国最具影响力、最受消费者信赖的美食推荐平台',
            time: '09/15'
          }, {
            coverImg: '//static.lagou.com/i/image/M00/C3/BF/CgqKkVjcrIyAMu7cAADjw9yM37U65.jpeg',
            coverText: '公众号自媒体集团',
            desc: '司团队均是90后成员，性格活泼易相处，工作氛围轻松有趣',
            time: '09/14'
          }, {
            coverImg: '//static.lagou.com/image2/M00/09/10/CgqLKVYGAluAM2LkAAA9y0DEEBc034.jpg',
            coverText: '欢乐互动，快乐感动',
            desc: '团队以专注和勤奋的态度，努力打造为用户提供快乐的精品游戏',
            time: '09/13'
          }, {
            coverImg: '//static.lagou.com/image1/M00/27/C6/CgYXBlVcKSSAVHrLAABtiWHaEpo614.png',
            coverText: '移动互联网英语学习平台',
            desc: '旨在为用户提供全方位的英语学习解决方案，真正做到“为用户的学习效果负责”',
            time: '09/12'
          }, {
            coverImg: '//static.lagou.com/i/image/M00/66/AB/CgpFT1mnc9qAW5utAAAZPTBrPD4069.png',
            coverText: '全民阅读，共创辉煌',
            desc: '致力于将阅文集团打造为服务“全民阅读”的优秀民族文化品牌',
            time: '09/11'
          }, {
            coverImg: '//static.lagou.com/image1/M00/43/7B/Cgo8PFXRmXeASWiJAAAZSwXwrgE995.jpg',
            coverText: '六险一金，活动多多',
            desc: '独立的游戏研发和游戏运营能力，在国内外众多渠道和平台上实现游戏研营一体化',
            time: '09/10'
          }, {
            coverImg: '//static.lagou.com/i/image/M00/69/13/CgpEMlmk4z-Abm7GAAAPkORtX_g560.png',
            coverText: '小镜头 大世界',
            desc: '致力于打造最大最好玩的移动视频原创UGC平台',
            time: '09/09'
          }, {
            coverImg: '//static.lagou.com/image2/M00/09/92/CgpzWlYKDLuACXd8AAC303c5Jy8550.png',
            coverText: '周末出去玩，就用要出发',
            desc: '坚持精打细算去寻找全网最低价格，帮助用户选择性价比最高的产品',
            time: '09/08'
          }, {
            coverImg: '//static.lagou.com/image1/M00/00/4B/CgYXBlTUXPSAYO2SAAANBKms328483.png',
            coverText: '屈臣氏,亚洲最大的保健美容零售商',
            desc: '令顾客每天都能LOOK GOOD, FEEL GREAT',
            time: '09/07'
          }, {
            coverImg: '//static.lagou.com/i/image/M00/67/5E/CgpEMlmfq-CAE4qkAAAcCLUwk3k272.png',
            coverText: '忆年，让共享回忆更简易',
            desc: '致力于打造全球最大的多人共享空间和图像大数据云空间，为亲密圈记录生命中精彩时刻',
            time: '09/06'
          }, {
            coverImg: '//static.lagou.com/i/image/M00/5D/42/CgpEMlmKvMmARqGMAAAQUQ5aWq8654.jpg',
            coverText: '互联网+慢病管理整体解决方案服务',
            desc: '致力于为患者找到最佳“慢病管理整体解决方案”，探索慢病精准医疗发展新模式。',
            time: '09/05'
          }, {
            coverImg: '//static.lagou.com/i/image/M00/41/75/Cgp3O1d8yACADmGKAAdUQGpGMFk136.png',
            coverText: '一个你来了就不想走的团队',
            desc: '倾力打磨出以客户为中心、以市场需求为导向的SaaS客服产品',
            time: '09/04'
          }, {
            coverImg: '//static.lagou.com/i/image/M00/08/A0/CgqKkVbQMyOAXXZOAAEKX4X42qM875.png',
            coverText: '打造中国最好的手机电视直播软件',
            desc: '公司秉承专注、好玩、分享、创新精神，推出云图直播、A8体育受亿万用户所喜爱的产品',
            time: '09/03'
          }
        ],
        left: 0,
        prevVisible: false,
        nextVisible: true
      }
    },
    created() {
    },
    watch: {
      left: function (val) {
        this.prevVisible = true
        this.nextVisible = true
        if (val >= 0) {
          this.prevVisible = false
        }
        if (val <= -3210) {
          this.nextVisible = false
        }
      }
    },
    methods: {
      _prev() {
        if (this.left >= 0) {
          this.prevVisible = false
        } else {
          this.prevVisible = true
        }
        this.left += 1070
        this.$refs.list.style.left = this.left + 'px'
      },
      _next() {
        if (this.left <= -3210) {
          this.nextVisible = false
        } else {
          this.nextVisible = true
        }
        this.left -= 1070
        this.$refs.list.style.left = this.left + 'px'
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  #company-banner
    position relative
    width 100%
    height 389
    .banner-bg
      position absolute
      left 0
      top 0
      width 100%
      z-index 0
      img
        border 0
        vertical-align top
        display inline-block
    .banner-content
      position relative
      z-index 1
      h3
        font-size 30px
        color #fff
        margin-top 0
        margin-bottom 10px
        text-shadow 0 3px 9px rgba(0, 0, 0, .25)
        height 42px
        padding 25px 0 20px
        text-align center
      .it-content
        width 1120px
        padding 0 30px
        margin 0 auto
        position relative
        box-sizing content-box
        .prev
        .next
          cursor pointer
          display block
          width 46px
          height 240px
          text-indent -2000px
          background-image url(//static.lagou.com/www/static/company-list/modules/banner/img/arrow_0030b9a.png)
          background-repeat no-repeat
          position absolute
          top 0
          opacity .2
        .prev
          left -46px
          background-position left center
        .next
          right -46px
          background-position right center
        .it-list
          width 100%
          overflow hidden
          height 300px
          .l-panel-list
            width 20000px
            position relative
            left 0
            zoom 1
            transition .5s
            li
              width 160px
              height 220px
              float left
              position relative
              margin 10px 0 10px 54px
              .l-panel
                position absolute
                left 0
                top 0
                width 142px
                height 202px
                background-color rgba(255, 255, 255, .8)
                padding 9px
                &:hover
                  .l-panel-cont
                    width 180px
                    height 240px
                    left -10px
                    top -10px
                    opacity .95
                img
                  display block
                .l-panel-b
                  text-align center
                  padding 0 3px
                  margin-top 13px
                  line-height 22px
                  font-family microsoft Yahei
                .l-panel-cont
                  position absolute
                  left 0
                  top 0
                  width 160px
                  height 220px
                  opacity 0
                  overflow hidden
                  transition all .15s
                  .l-panel-det
                    position absolute
                    left 50%
                    top 50%
                    box-sizing content-box
                    margin-left -90px
                    margin-top -120px
                    width 126px
                    height 186px
                    padding 26px
                    border 1px solid #03fe56
                    background #fff
                    color #444
                    p
                      line-height 22px
                      font-family microsoft Yahei
                    .go-btn
                      display block
                      text-align center
                      border-radius 1px
                      width 128px
                      height 40px
                      line-height 40px
                      background-color #00b38a
                      color #fff
                      font-size 15px
                      position absolute
                      bottom 25px
                      cursor pointer
                      &:hover
                        text-decoration none
              .time
                position absolute
                left 0
                bottom -50px
                width 100%
                text-align center
                font-size 16px
                color #fff
                .bottom-bg
                  display block
                  position absolute
                  left 126px
                  top 6px
                  width 120px
                  height 11px
                  background url(//static.lagou.com/www/static/company-list/modules/banner/img/it_bottom_v1_17d4c54.png) no-repeat
                  &.first
                    width 106px
                    background-position -14px 0
                    left -75px
</style>
