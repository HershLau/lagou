<template>
  <div class="search-wrapper">
    <div class="search-box">
      <input v-model="keyword" class="search-input" type="text" :placeholder="placeholder" @focus="keyword=''" @blur="keyword='实力派'">
      <input class="search-btn" type="button" value="搜索">
    </div>
    <div class="pos-guess-wrapper">
      <div class="guess-wrapper">
        <span>猜你要搜</span>
        <ul>
          <li v-for="i in guessItems"></li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    data() {
      return {
        placeholder: '搜索职位、公司或地点',
        keyword: '实力派',
        guessItems: [
          'html5',
          'web前端实习',
          '网页设计',
          '前端开发',
          '测试',
          'javascript',
          'web前端开发',
          'node.js',
          'h5',
          '实习'
        ]
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .search-wrapper
    background #f2f5f4
    padding 30px 0 28px
    min-width 1200px
    .search-box
      border 0 solid #00b38a
      height 46px
      width 938px
      margin 0 auto
      position relative
      .search-input
        color rgb(153, 153, 153)
        width 762px
        height 100%
        line-height 20px
        float left
        font-size 16px
        padding 12px 16px
        margin 0
        border 1px solid #e8e8e8
        border-right 0
        &:focus
          border 1px solid #00b38a
          border-right 0
          outline 0 !important
      .search-btn
        float left
        width 142px
        height 46px
        font-size 18px
        color #fff
        border 0
        background #00b38a
    .pos-guess-wrapper
      position relative
      width 938px
      height 0
      margin 0 auto
      .guess-wrapper
        position absolute
        z-index 150
        width 795px
        background #fff
        box-shadow 0 2px 3px 0 rgba(0,0,0,.08)
        border-radius 3px
        font-size 14px
        span
          display block
          color #999
          padding 5px 17px
</style>
