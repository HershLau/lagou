<template>
  <nav class="m-nav">
    <div class="left-bar">
      <a class="icon" :href="appUrl">拉勾APP</a>
      <a class="os" :href="osUrl">进入企业版</a>
    </div>
    <ul class="list-inline pull-right right-bar">
      <li class="right-bar-item" v-for="i in userBar">
        <a :href="i.url">{{i.name}}</a>
      </li>
    </ul>
  </nav>
</template>

<script type="text/ecmascript-6">
  export default {
    data() {
      return {
        appUrl: 'https://www.lagou.com/app/download.html',
        osUrl: 'https://easy.lagou.com/dashboard/index.htm?from=c_index',
        userBar: [
          {name: '消息', url: 'javascript: void 0;'},
          {name: '我的简历', url: ''},
          {name: '投递箱', url: ''},
          {name: '收藏夹', url: ''},
          {name: 'user', url: ''}
        ]
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "~common/stylus/index"
  @import "~common/stylus/variable"

  .m-nav
    background #333
    height 30px
    line-height 30px
    a
      color #c4c3c3
      &:hover
        color #fff
        text-decoration none
    .left-bar
      float left
      .icon
        color #08d7a2
        background url(//static.lagou.com/www/static/common/widgets/header_c/modules/img/app_icon_7554d8e.png) 10px 0px no-repeat
        padding 0 12px 0 27px
        &:hover
          color #05eaaf
      .os
        border-left 1px solid #5d5d5d
        padding 0 12px
        margin 7px 0 0
    .right-bar
      .right-bar-item
        padding 0
        a
          border-right 1px solid #5d5d5d
          padding 0 12px
          margin 7px 0 0
</style>
