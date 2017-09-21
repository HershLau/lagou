<template>
  <div id="main-navs">
    <div class="menu-box" :class="{current: isHover===category.name}" @mouseover="_mouseOverHandler(category.name)"
         @mouseout="_mouseOutHandler(category.name)"
         v-for="category in categoryList">
      <div class="menu-main">
        <div class="category-list">
          <h2>{{category.name}}</h2>
          <a v-for="h in category.hotWords">{{h}}</a>
          <i class="arrow"></i>
        </div>
      </div>
      <div class="menu-sub" v-show="isHover===category.name">
        <dl v-for="(arr, key) in category.detail">
          <dt>
            <span>{{key}}</span>
          </dt>
          <dd>
            <a v-for="i in arr">{{i}}</a>
          </dd>
        </dl>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
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
          },
          {
            name: '金融',
            hotWords: ['投资', '融资', '并购', '风控'],
            detail: {
              '风控': ['资信评估', '合规稽查', '律师'],
              '审计税务': ['审计', '法务', '会计', '清算'],
              '高端职位': ['投资总监', '融资总监']
            }
          }
        ],
        isHover: false
      }
    },
    methods: {
      _mouseOverHandler(name) {
        this.isHover = name
      },
      _mouseOutHandler(name) {
        this.isHover = ''
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  #main-navs
    .current
      .menu-main
        box-shadow 0 0 4px 2px rgba(0, 0, 0, .09)
        border-top-left-radius 2px
        border-bottom-left-radius 2px
        background #fff
        padding 18px 0 17px
        position relative
        outline 0
      &:after
        content ''
        position absolute
        top 0
        bottom 0
        right -1px
        width 7px
        background #fff
        z-index 102
    a
      color #555
      background-color transparent
      text-decoration none
      &:hover
        color #00b38a
        text-decoration underline
        cursor pointer
    .menu-box
      position relative
      .menu-main
        position relative
        padding 18px 0 17px
        .category-list
          position relative
          height 20px
          line-height 20px
          overflow hidden
          border-right 0
          h2
            display inline-block
            padding-left 15px
            margin 0
            font-size 18px
            font-weight 500
          a
            margin 0 5px 5px 0
            padding 0 8px
            white-space nowrap
          .arrow
            position absolute
            right 0
            top 6px
            width 6px
            height 11px
            margin-right 8px
            background url(//static.lagou.com/www/static/index/modules/sidebar/img/arrow_32aaad2.png) 0 0 no-repeat
      .menu-sub
        position absolute
        left 321px
        top 0
        width 600px
        padding 20px 10px 0 12px
        z-index 10
        background #fff
        box-shadow 0 0 4px 2px rgba(0, 0, 0, .09)
        border-radius 2px
        border-top-left-radius 0
        dl
          margin 0 0 17px
          dt
            position relative
            width 70px
            margin 0
            padding-left 10px
            font-size 14px
            line-height 20px
            margin-bottom 6px
            span
              position relative
              display inline-block
              padding 0
              color #333
          dd
            color #555
            font-size 0
            overflow hidden
            a
              display inline-block
              position relative
              margin-left -1px
              padding 0 11px
              font-size 14px
              line-height 28px
              white-space nowrap
              &:before
                content ''
                position absolute
                width 1px
                height 12px
                background #d8d8d8
                top 8px
                left 0
</style>
