<template>
  <div id="app" ref="app" @click="_handleClick">
    <tool-bar :visible.sync="msgVisible"></tool-bar>
    <nav-bar ref="navBar" @openDialog="openDialog"></nav-bar>
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
    <m-footer></m-footer>
    <a v-if="currHeight" id="back-top" title="回到顶部" @click="backTop"></a>
    <v-dialog v-show="visible">
      <div class="content">
        <div class="loaded-content">
          <div class="change-city-box">
            <div class="change-city-header">
              <strong>亲爱的用户您好：</strong>
              <p class="tips">切换城市分站，让我们为您提供更准确的职位信息。</p>
            </div>
            <p class="check-tips">
              点击进入
              <a class="tab focus">{{selCity}}</a>
              or 切换到以下城市
            </p>
            <ul class="clearfix">
              <li v-for="city in cityList" @click="changeCity(city)">
                <a class="tab">{{city}}</a>
              </li>
            </ul>
            <p class="change-city-footer">其他城市正在开通中，敬请期待~</p>
          </div>
        </div>
        <div class="title">切换城市</div>
        <button class="close" @click="visible=false">close</button>
      </div>
    </v-dialog>
  </div>
</template>

<script type="text/ecmascript-6">
  import ToolBar from './components/tool-bar/tool-bar'
  import NavBar from './components/nav-bar/nav-bar'
  import MFooter from 'components/m-footer/m-footer'
  import vDialog from 'components/dialog/dialog'

  export default {
    components: {
      NavBar,
      MFooter,
      ToolBar,
      vDialog
    },
    data() {
      return {
        currHeight: 0,
        msgVisible: false,
        selCity: '全国站',
        cityList: ['北京站', '上海站', '杭州站', '广州站', '深圳站', '成都站'],
        visible: false
      }
    },
    watch: {
      selCity: function (val) {
        this.cityList = ['全国站', '北京站', '上海站', '杭州站', '广州站', '深圳站', '成都站']
        for (let i = 0; i < this.cityList.length; i++) {
          if (this.cityList[i] === val) {
            this.cityList.splice(i, 1)
          }
        }
      }
    },
    created() {
      window.addEventListener('scroll', this.handleScroll)
    },
    methods: {
      backTop() {
        this.currHeight = 0
        document.body.scrollTop = this.currHeight
        document.documentElement.scrollTop = this.currHeight
      },
      handleScroll(e) {
        this.currHeight = e.target.body.scrollTop || e.target.documentElement.scrollTop
      },
      _handleClick() {
        this.msgVisible = false
      },
      openDialog(visible) {
        this.visible = visible
      },
      changeCity(city) {
        this.selCity = city
        this.$refs.navBar.changeCity(city)
        this.visible = false
      }
    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus">
  @import "~common/stylus/base"

  #app
    #back-top
      display block
      background url(//static.lagou.com/www/static/common/widgets/footer_c/modules/img/backtop-new_0e4bcbc.png) left top no-repeat
      width 28px
      height 46px
      position fixed
      left 50%
      bottom 146px
      margin-left 631px
      cursor pointer
      &:hover
        background-position right top !important
    .content
      position relative
      float left
      width 502px
      height 484px
      .loaded-content
        margin-top 44px
        width 502px
        height 440px
        overflow hidden
        .change-city-box
          width 422px
          padding 30px 40px
          .change-city-header
            border-bottom 1px dotted #e5e5e5
            strong
              font-size 20px
              margin-bottom 10px
              color #333
              font-weight 400
            .tips
              font-size 16px
              color #555
              line-height 42px
              margin 0 0 25px
          .check-tips
            margin 26px 0 14px
          .tab
            display inline-block
            margin 0 12px
            font-size 16px
            width 100px
            height 50px
            color #999
            text-align center
            line-height 50px
            border 1px solid #dce4e6
            border-radius 1px
            cursor pointer
            &.focus
            &:hover
              border 2px solid #00b38a
              color #555
              width 98px
              height 48px
              line-height 48px
          ul
            list-style none
            padding-left 24px
            margin 0
            li
              float left
              width 102px
              margin 11px 12px
          .change-city-footer
            color #777
            font-size 14px
            margin 14px 0 0

      .title
        display block
        float left
        font-size 18px
        color #fff
        background #00b38a
        height 44px
        width 100%
        text-indent 1em
        position absolute
        top 0
        left 0
        line-height 44px
        margin 0
      .close
        position absolute
        top 12px
        right 12px
        background url(//static.lagou.com/www/static/common/components/jquery-colorbox-custom/img/controls_74ddda3.png) no-repeat
        width 19px
        height 19px
        text-indent -9999px
        border 0
        padding 0
        margin 0
        overflow visible

  @media (max-width: 1366px)
    #app
      #back-top
        left auto
        right 41px
        margin-left 0
</style>
