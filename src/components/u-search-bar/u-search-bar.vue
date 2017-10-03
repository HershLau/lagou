<template>
  <div id="u-search-bar">
    <div class="search-box">
      <input v-model="keyword" class="search-input" type="text" placeholder="请输入公司名/职位名" @input="visible=true" @blur="visible=false">
      <input class="search-btn" type="button" value="搜索">
    </div>
    <div v-if="visible" class="pos-guess-wrapper" ref="guess">
      <div class="guess-wrapper">
        <ul>
          <li v-for="i in guessItems" @click="chooseItem(i)">{{i}}</li>
        </ul>
      </div>
    </div>
    <dl class="relate-search">
      <dt>相关搜索：</dt>
      <dd v-for="i in relatedSearchItems">
        <a class="highlight">{{i}}</a>
      </dd>
    </dl>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    data() {
      return {
        relatedSearchItems: [
          '上海实习',
          '北京实习',
          '应届JAVA'
        ],
        guessItems: ['1'],
        visible: false,
        keyword: ''
      }
    },
    watch: {
      keyword: function(val) {
        if (!val) {
          this.visible = false
        }
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  #u-search-bar
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
        height 20px
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
        outline 0 !important
        &:hover
          background #00a57f
    .pos-guess-wrapper
      position relative
      width 938px
      height 0
      margin 0 auto
      .guess-wrapper
        position absolute
        z-index 150
        width 762px
        background #fff
        box-shadow 0 2px 3px 0 rgba(0, 0, 0, .08)
        border-radius 3px
        font-size 14px
        span
          display block
          color #999
          padding 5px 17px
        ul
          margin 0
          padding 0
          list-style none
          li
            color #555
            padding 8px 17px
            cursor pointer
            &:hover
              background-color #00b38a
              color #fff
    .relate-search
      width 938px
      height 22px
      overflow hidden
      margin 6px auto 0
      dt
        margin-right 10px
        font-size 14px
        color #777
        float left
      dd
        margin-right 20px
        color #999
        float left
        .highlight
          cursor pointer
          &:hover
            color #00b38a
</style>
