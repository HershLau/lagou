<template>
  <div id="school">
    <u-search-bar></u-search-bar>
    <div class="except-search-container">
      <div class="under-search clearfix">
        <div class="fl nav-container">
          <side-bar class="side-bar" :categoryList="categoryList"></side-bar>
        </div>
        <div class="fr carouser-container home-banner" @mouseover="_bgOverHandler" @mouseout="_bgOutHandler">
          <transition-group name="list" tag="ul" class="banner-bg">
            <li v-show="index===bgCurrIndex" class="banner-item" v-for="(bg,index) in bgs" :key="index">
              <a>
                <img :src="bg.bgUrl">
              </a>
            </li>
          </transition-group>
          <div class="banner-control">
            <ul class="thumbs">
              <li class="thumb-item" v-for="(bg,index) in bgs" @mouseover="_ctrOverHandler(index)">
                <img :src="bg.ctrUrl">
                <div class="thumb-border" :class="{'thumb-item-selected':index===bgCurrIndex}"></div>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <section class="company-wall-container">
        <nav-tabs :tabs="siteTabs" :tabCurrIndex.sync="siteTabCurrIndex"></nav-tabs>
        <company-wall></company-wall>
      </section>
      <section class="job-container">
        <nav-tabs :tabs="posTabs" :tabCurrIndex.sync="posTabCurrIndex"></nav-tabs>
        <div class="jobs">
          <ul class="job-list">
            <li class="job-item" v-for="job in positions">
              <div class="header">
                <a class="job-link">
                  <h4 class="title">
                    <span class="job-name">{{job.title}}</span>
                    <span class="salary"></span>
                  </h4>
                  <p class="experience">{{job.exp}}</p>
                </a>
              </div>
              <div class="company">
                <a class="company-link">
                  <h4 class="title">{{job.company}}</h4>
                  <p class="infos">{{job.industry}}/{{job.site}}</p>
                  <img class="logo" :src="job.logo" width="50" height="50">
                </a>
              </div>
            </li>
          </ul>
        </div>
      </section>
      <section class="gallery-container">
        <nav-tabs :tabs="galleryTabs"></nav-tabs>
        <div class="galleries">
          <ul class="gallery-list">
            <li class="gallery-item" :class="{'larger-item':index===0||index===7}" :style="{backgroundImage:'url('+g.coverImg+')'}" v-for="(g,index) in galleries">
              <a class="gallery-link" :href="g.link">
                <span class="text">{{g.text}}</span>
              </a>
            </li>
          </ul>
        </div>
      </section>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import USearchBar from 'components/u-search-bar/u-search-bar'
  import SideBar from 'components/side-bar/side-bar'
  import CompanyWall from 'components/company-wall/company-wall'
  import NavTabs from 'components/nav-tabs/nav-tabs'

  export default {
    data() {
      return {
        categoryList: [
          {
            name: '技术',
            hotWords: ['Java', 'PHP', 'C++', 'Android'],
            detail: {
              '后端开发': ['Java', 'C++', '数据挖掘', '搜索算法', '精准推荐', 'C', 'C#', '全栈工程师', '.NET', 'Hadoop', 'Python', 'Delphi', 'VB', 'Perl', 'Ruby', 'Node.js', 'Go', 'ASP', 'Shell', '后端开发其他'],
              '移动开发': ['HTML5', 'Android', 'ios', 'WP', '移动开发其他']
            }
          },
          {
            name: '产品',
            hotWords: ['产品总监', '产品经理'],
            detail: {
              '产品经理': ['产品经理', '网页产品经理', '移动产品经理', '产品助理', '数据产品经理', '电商产品经理', '游戏策划', '产品实习生']
            }
          },
          {
            name: '设计',
            hotWords: ['UI设计师', '交互设计', '网页设计师'],
            detail: {
              '视觉设计': ['视觉设计师', '网页设计师', 'Flash设计师']
            }
          },
          {
            name: '运营',
            hotWords: ['新媒体运营', '编辑', '数据运营'],
            detail: {
              '运营': ['用户运营', '产品运营', '数据运营'],
              '编辑': ['副主编', '内容编辑', '文案策划', '记者'],
              '客服': ['售前咨询', '售后客服', '淘宝客服', '客服经理']
            }
          },
          {
            name: '市场与销售',
            hotWords: ['市场推广', '市场总监'],
            detail: {
              '市场/营销': ['SEO', 'SEM', '商务渠道'],
              '公关': ['媒介经理', '销售经理', '客户代表', 'BD经理'],
              '供应链': ['物流', '仓储']
            }
          },
          {
            name: '职能',
            hotWords: ['HR', '行政', '财务', '审计'],
            detail: {
              '人力资源': ['人力资源', '招聘', 'HRBP'],
              '行政': ['助理', '前台', '行政', '总助', '文秘'],
              '财务': ['会计', '出纳'],
              '法务': ['法务', '律师', '专利']
            }
          }
        ],
        bgs: [
          {
            bgUrl: 'https://static.lagou.com/i/image2/M00/07/EC/CgoB5lnOE0yAQzTiAARJJ5SphmM512.JPG',
            ctrUrl: 'https://static.lagou.com/i/image2/M00/07/EC/CgoB5lnOE0-AKMsQAACB8Abs_wU903.JPG'
          }, {
            bgUrl: 'https://static.lagou.com/i/image2/M00/07/12/CgotOVnLaW6AFVHCAANaTASzW5A059.JPG',
            ctrUrl: 'https://static.lagou.com/i/image2/M00/07/14/CgoB5lnLaXCAdLZMAABNv5aanbI504.JPG'
          }, {
            bgUrl: 'https://static.lagou.com/i/image/M00/70/D7/CgpEMlm2UO-AIFLIAAYP4-r1Vko98.JPEG',
            ctrUrl: 'https://static.lagou.com/i/image/M00/70/D7/CgpEMlm2UPKASnC4AADJrCxNZ-I91.JPEG'
          }, {
            bgUrl: 'https://static.lagou.com/i/image2/M00/07/0F/CgoB5lnLY6qAMtXjAAQbeoPAsG4288.JPG',
            ctrUrl: 'https://static.lagou.com/i/image2/M00/07/0E/CgotOVnLY62AH_XOAAClKThfqFQ617.JPG'
          }, {
            bgUrl: 'https://static.lagou.com/i/image2/M00/06/88/CgoB5lnKDuCAUnJdAAc6BzC5-QA275.JPG',
            ctrUrl: 'https://static.lagou.com/i/image2/M00/06/F9/CgotOVnLR8mAXMpKAABZ1tXmUYQ586.PNG'
          }
        ],
        bgCurrIndex: 0,
        siteTabs: [
          '北京',
          '上海',
          '广州',
          '深圳',
          '成都',
          '杭州',
          '其他'
        ],
        posTabs: [
          '技术',
          '产品',
          '运营',
          '设计',
          '市场',
          '销售',
          '职能'
        ],
        siteTabCurrIndex: 0,
        posTabCurrIndex: 0,
        positions: [
          {
            title: 'Java开发（版本升级模块）',
            exp: '本科',
            logo: 'https://static.lagou.com/image1/M00/00/33/CgYXBlTUXI-AC08_AACIkHlny3Y866.jpg',
            company: '泛微',
            industry: '移动互联网,企业服务',
            site: '上海'
          },
          {
            title: '游戏测试实习生',
            exp: '本科',
            logo: 'https://static.lagou.com/i/image/M00/C3/CB/Cgp3O1jcvUOATXv_AABZ6zpEAKk174.jpg',
            company: '陌陌',
            industry: '社交网络',
            site: '北京'
          },
          {
            title: 'Java开发实习生（2018届）',
            exp: '本科',
            logo: 'https://static.lagou.com/i/image/M00/25/FF/CgpEMlkZJL6AAbnbAAAMGLhQkjw565.png',
            company: '亲宝宝',
            industry: '移动互联网,社交网络',
            site: '杭州'
          },
          {
            title: '软件测试实习生（南京）',
            exp: '本科',
            logo: 'https://static.lagou.com/i/image/M00/1B/E5/CgqKkVb-JPiAH55zAAAGmR36eIM506.png',
            company: '北森云计算',
            industry: '企业服务,数据服务',
            site: '南京'
          },
          {
            title: '测试实习生',
            exp: '本科',
            logo: 'https://static.lagou.com/image1/M00/00/06/CgYXBlTUWAeANQBuAABHTL1SBa8889.jpg',
            company: '去哪儿网',
            industry: '移动互联网',
            site: '北京'
          },
          {
            title: '测试实习生',
            exp: '本科',
            logo: 'https://static.lagou.com/i/image/M00/7D/D7/CgqKkVhIy6mAWdXiAAAuG0CkxhU755.png',
            company: '饿了么',
            industry: '移动互联网',
            site: '北京'
          },
          {
            title: '软件工程师（实习生）',
            exp: '本科',
            logo: 'https://static.lagou.com/i/image/M00/83/08/Cgp3O1hYy2CALCDTAAAbl7AOZZg842.jpg',
            company: '埃森哲',
            industry: '企业服务,数据服务',
            site: '上海'
          },
          {
            title: 'Python实习生',
            exp: '本科',
            logo: 'https://static.lagou.com/i/image/M00/7D/D7/CgqKkVhIy6mAWdXiAAAuG0CkxhU755.png',
            company: '饿了么',
            industry: '移动互联网',
            site: '北京'
          },
          {
            title: 'C++',
            exp: '本科',
            logo: 'https://static.lagou.com/i/image/M00/57/05/CgqKkVfOIv6AQwyPAAEg94dso0Q147.png',
            company: '乐易网络',
            industry: '移动互联网,游戏',
            site: '深圳'
          },
          {
            title: '后台开发实习生-核心广告系统',
            exp: '本科',
            logo: 'https://static.lagou.com/image1/M00/00/01/Cgo8PFTUV_OAH8cPAACZoNxm1EI176.jpg',
            company: '今日头条',
            industry: '移动互联网,数据服务',
            site: '北京'
          },
          {
            title: '前端开发工程师',
            exp: '大专',
            logo: 'https://static.lagou.com/i/image/M00/4A/DE/CgpFT1ltsZuAZKJZAAAUAX88bcY941.jpg',
            company: '上海聪充网络科技有限公司',
            industry: '移动互联网,电子商务',
            site: '上海'
          },
          {
            title: '测试',
            exp: '本科',
            logo: 'https://static.lagou.com/i/image/M00/65/83/CgpFT1mlFSWAJrrnAACWcSWNiu8425.png',
            company: '小肚皮App',
            industry: '移动互联网',
            site: '北京'
          }
        ],
        galleryTabs: ['活动广场'],
        galleries: [
          {
            link: 'https://activity.lagou.com/topic/yanzhijingxuan1.html',
            coverImg: 'https://static.lagou.com/i/image/M00/54/36/CgpEMll4dYGAUmyEAACweuserZA288.JPG',
            text: '玩转秋招，拿下心仪offer的必备技能'
          },
          {
            link: 'https://activity.lagou.com/topic/campufestival.html',
            coverImg: 'https://static.lagou.com/i/image2/M00/01/DD/CgoB5lm_isWARAovAAC-PD1WuDs291.JPG',
            text: '100+名企邀你投递'
          },
          {
            link: 'https://activity.lagou.com/topic/graduation.html',
            coverImg: 'https://static.lagou.com/i/image/M00/50/65/CgpFT1l4Wa2AK5l9AADRRJiG-qQ203.JPG',
            text: '梦想不毕业 · 校招专场'
          },
          {
            link: 'https://activity.lagou.com/topic/campousassembly.html',
            coverImg: 'https://static.lagou.com/i/image/M00/54/36/CgpEMll4dnWAJPuzAAC9nCPRFbc690.JPG',
            text: '千峰教育 | 校园集结号'
          },
          {
            link: 'https://activity.lagou.com/topic/jianlinaxieshi.html',
            coverImg: 'https://static.lagou.com/i/image/M00/50/69/CgpFT1l4XKSAKmUkAADCvX2PQLo031.JPG',
            text: '手把手教你写出满分简历'
          },
          {
            link: 'https://activity.lagou.com/topic/guanguozhibo.html',
            coverImg: 'https://static.lagou.com/i/image/M00/54/13/CgpEMll4TpWAKsyQAADM4MxEk7E417.JPG',
            text: '直播行业特别火，快上车'
          },
          {
            link: 'https://activity.lagou.com/topic/diantai.html',
            coverImg: 'https://static.lagou.com/i/image/M00/50/5E/CgpFT1l4Up6AN8dqAACACIMyB10127.JPG',
            text: '这次我们要相遇在电波里'
          },
          {
            link: 'https://activity.lagou.com/topic/smallbeautiful2.html',
            coverImg: 'https://static.lagou.com/i/image/M00/54/18/CgpEMll4UvaAL2aqAADNGxoPa7o945.JPG',
            text: '那些你可能错过的“小”公司'
          },
          {
            link: 'http://activity.lagou.com/topic/365wen.html',
            coverImg: 'https://static.lagou.com/i/image/M00/50/62/CgpFT1l4VfuAWl3QAACmkfFRobY436.JPG',
            text: '说说BAT的那些事'
          },
          {
            link: 'https://activity.lagou.com/topic/jiagoushi.html',
            coverImg: 'https://static.lagou.com/i/image/M00/50/60/CgpFT1l4VCOAENckAAD32UvACNc617.JPG',
            text: '寻找未来架构师'
          }
        ]
      }
    },
    created() {
      this.start()
    },
    components: {
      USearchBar,
      SideBar,
      CompanyWall,
      NavTabs
    },
    methods: {
      autoPlay() {
        this.bgCurrIndex++
        if (this.bgCurrIndex > this.bgs.length - 1) {
          this.bgCurrIndex = 0
        }
      },
      start() {
        this.timer = setInterval(() => {
          this.autoPlay()
        }, 5000)
      },
      stop() {
        clearInterval(this.timer)
      },
      _ctrOverHandler(index) {
        this.bgCurrIndex = index
        this.stop()
      },
      _bgOverHandler() {
        this.stop()
      },
      _bgOutHandler() {
        this.start()
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  #school
    .except-search-container
      margin 0 auto
      width 1200px
      .under-search
        height 300px
        margin-top 47px
        .nav-container
          position relative
          top -20px
          width 320px
          .side-bar
            .menu-sub
              width 309px
        .home-banner
          position relative
          width 840px
          height 290px
          overflow hidden
          .banner-bg
            position relative
            left 0
            height 220px
            list-style none
            margin 0
            padding 0
            overflow hidden
            width 500%
            .banner-item
              position absolute
              width 20%
              a
                color #555
                background-color transparent
                text-decoration none
                img
                  width 100%
                  cursor pointer
                  vertical-align top

          .banner-control
            width 840px
            height 60px
            margin-top 10px
            .thumbs
              list-style none
              margin 0
              padding 0
              .thumb-item
                position relative
                display inline-block
                width 160px
                height 60px
                overflow hidden
                & + .thumb-item
                  margin-left 10px
                img
                  width 100%
                  cursor pointer
                .thumb-border
                  position absolute
                  top 0
                  left 0
                  box-sizing border-box
                  width 100%
                  height 100%
              .thumb-item-selected
                border 3px solid #00b38a
      .company-wall-container
        margin-top 40px
      .job-container
        margin 57px 0 40px
        line-height 22px
        color #333
        font-size 16px
        .job-list
          margin 20px -5px 0
          padding 0
          list-style none
          overflow hidden
          .job-item
            margin 5px
            padding 16px 20px 20px
            width 292px
            height 160px
            border 1px solid #eaeeed
            box-sizing border-box
            float left
            .title
              margin 0
              text-overflow ellipsis
              overflow hidden
              white-space nowrap
            .header
              position relative
              border-bottom 1px dashed #d1d8d6
            .job-link
              cursor pointer
              .title
                padding 0 72px 0 0
                position relative
                .salary
                  color #ff5b42
                  right 0
                  top 0
                  position absolute
              .experience
                margin 6px 0 8px
                line-height 20px
                color #999
                font-size 14px
            .company
              margin 14px 0 0
              padding 0 0 0 64px
              position relative
              .infos
                margin 5px 0 0
                line-height 20px
                color #777
                font-size 14px
              .logo
                width 50px
                height 50px
                left 0
                top 0
                position absolute
            .company-link
              cursor pointer
      .gallery-container
        line-height 22px
        color #333
        font-size 16px
        .galleries
          margin 30px -5px 64px
          overflow hidden
        .gallery-item
          margin 5px
          width 200px
          height 200px
          background-repeat no-repeat
          cursor pointer
          position relative
          float left
          &.larger-item
            width 360px
          .gallery-link
            display block
            width 100%
            height 100%
            cursor pointer
          .text
            position absolute
            left 0
            right 0
            bottom 0
            display block
            background-color rgba(0, 0, 0, .2)
            font-size 14px
            color #fff
            line-height 38px
            height 38px
            padding 0 0 0 16px

  .list-enter-active
    transition all .3s ease
    transform translateX(0)

  .list-leave-active
    transition all .3s ease
    transform translateX(-100%)

  .list-enter
    transform translateX(100%)

  .list-leave
    transform translateX(0)
</style>
