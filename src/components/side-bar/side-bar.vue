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
        isHover: false
      }
    },
    props: {
      categoryList: Array
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
