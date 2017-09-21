<template>
  <div id="footer">
    <div class="wrapper">
      <i class="footer-lagou-icon"></i>
      <div class="inner-wrapper">
        <a class="footer-app">
          拉勾APP
          <i class="icon-new">NEW</i>
          <img v-if="false" width="160" height="160" src="https://static.lagou.com/i/image/M00/35/06/CgpFT1lDioCAFqS2AAEeWsD3HHo535.PNG">
        </a>
        <a v-for="i in links">{{i}}</a>
        <span class="tel">
          服务热线
          <em>4006-2828-35 (9:00 -18:00)</em>
        </span>
      </div>
      <div class="copyright">
        <span>
          <em>©</em>
          2017 Lagou
        </span>
        <a href="http://www.miitbeian.gov.cn/state/outPortal/loginPortal.action">京ICP备14023790号-2</a>
        <a href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=11010802024043">京ICP备14023790号-2</a>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    data() {
      return {
        links: [
          '拉勾微博',
          '拉勾微信',
          '拉勾小程序',
          '帮助中心',
          '联系我们',
          '招聘解决方案'
        ]
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  #footer
    min-width 1024px
    background-color #fff
    clear both
    height 67px
    border-top 1px solid #ebebeb
    position relative
    .wrapper
      width 1024px
      margin 0 auto
      position relative
      .footer-lagou-icon
        position absolute
        left 0
        top 9px
        z-index 1
        display block
        width 198px
        height 19px
        background url(//static.lagou.com/www/static/common/widgets/footer_c/modules/img/footer_lagou_icon_29db89e.png) 0 0 no-repeat
      .inner-wrapper
        padding-top 12px
        float right
        height 44px
        line-height 14px
        white-space nowrap
        a
        span.tel
          float left
          color #555
          font-size 14px
          text-decoration none
        a
          margin-right 12px
          .icon-new
            position relative
            top -1px
            display inline-block
            width 30px
            height 16px
            margin-left 3px
            overflow hidden
            background url(//static.lagou.com/www/static/common/widgets/footer_c/modules/img/app-download/new_v1_534bcc8.png) no-repeat
            vertical-align text-top
            text-indent -99em
        .tel
          margin-right 0
          em
            font-size 13px
            font-style normal

      .copyright
        clear both
        height 12px
        margin 0 auto
        padding-top 13px
        padding-bottom 14px
        color #d5d5d5
        font-size 12px
        line-height 12px
        text-align center
        em
          font-family Arial
          font-size 13px
          font-style normal
        a
          padding-right 0
          font-size 12px
          color #d5d5d5
          background-color transparent
          text-decoration none
</style>
