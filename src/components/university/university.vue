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
        <div class="nav-tabs">
          <span class="tab-item" @click="selTab(index)" :class="{active:index===tabCurrIndex}" v-for="(tab,index) in tabs">{{tab}}</span>
        </div>
        <company-wall></company-wall>
      </section>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import USearchBar from 'components/u-search-bar/u-search-bar'
  import SideBar from 'components/side-bar/side-bar'
  import CompanyWall from 'components/company-wall/company-wall'

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
        tabs: [
          '北京',
          '上海',
          '广州',
          '深圳',
          '成都',
          '杭州',
          '其他'
        ],
        tabCurrIndex: 0
      }
    },
    created() {
      this.start()
    },
    components: {
      USearchBar,
      SideBar,
      CompanyWall
    },
    methods: {
      selTab(index) {
        this.tabCurrIndex = index
      },
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
        .nav-tabs
          line-height 22px
          color #999
          font-size 16px
          border-bottom 1px solid #e8e8e8
          .tab-item
            margin 0 60px 0 0
            padding 16px 0
            cursor pointer
            display inline-block
            &.active
              padding-bottom 14px
              color #333
              cursor default
              border-bottom 2px solid #333


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
