<template>
  <nav class="navbar navbar-default" id="nav-bar">
    <div class="container nav-container">
      <div class="nav-l">
        <a class="logo"><h1>拉勾网</h1></a>
        <div class="suggest-city">
          <strong>全国站</strong>
          <em>[切换城市]</em>
        </div>
      </div>
      <ul class="nav-wrap">
        <li v-for="(i,index) in navItems">
          <router-link exact tag="a" :to="i.url" :key="index" active-class="current">{{i.name}}</router-link>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script type="text/ecmascript-6">
  export default {
    data() {
      return {
        navItems: [
          {name: '首页', url: '/'},
          {name: '公司', url: '/company'},
          {name: '校园', url: '/university'},
          {name: '言职', url: '/yanzhi'},
          {name: '大鲲', url: '/dakun'}
        ],
        isActive: '首页'
      }
    },
    methods: {
      chooseItem(name) {
        this.isActive = name
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  #nav-bar
    margin 0
    height 54px
    background-color #fafafa
    border-top 1px solid #d2d2d2
    border-bottom 1px solid #e5e5e5
    .nav-container
      width 1200px
      margin 0 auto
      .nav-l
        width 260px
        float left
        .logo
          color #555
          background-color transparent
          text-decoration none
          cursor pointer
          h1
            float left
            width 97px
            height 34px
            margin 10px 0 0
            padding 0
            background-image url(//static.lagou.com/www/static/common/widgets/header_c/modules/img/logo_d0915a9.png)
            overflow hidden
            text-indent -99em
        .suggest-city
          float left
          height 44px
          padding-top 10px
          padding-left 12px
          font-size 18px
          line-height 44px
          strong
            margin-right 8px
            color #333
            font-size 18px
            font-weight 400
          em
            color #999
            font-size 12px
            cursor pointer
            font-style normal
      .nav-wrap
        float left
        li
          display inline-block
          margin 0 16px
          padding 0
          position relative
          a
            display block
            font-size 18px
            color #999
            line-height 53px
            padding 0 5px
            &:hover
              color #333 !important
              border-bottom 2px solid #00b38a
              text-decoration none
              cursor pointer
    .current
      color #333 !important
      border-bottom 2px solid #00b38a
      text-decoration none
      cursor pointer
</style>
