<template>
  <div id="app" ref="app">
    <tool-bar></tool-bar>
    <nav-bar></nav-bar>
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
    <m-footer></m-footer>
    <a v-if="currHeight" id="back-top" title="回到顶部" @click="backTop"></a>
  </div>
</template>

<script type="text/ecmascript-6">
  import ToolBar from './components/tool-bar/tool-bar'
  import NavBar from './components/nav-bar/nav-bar'
  import MFooter from 'components/m-footer/m-footer'

  export default {
    components: {
      NavBar,
      MFooter,
      ToolBar
    },
    data() {
      return {
        currHeight: 0
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
</style>
