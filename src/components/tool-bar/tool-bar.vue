<template>
  <nav class="m-nav" id="lg_tbar">
    <div class="left-bar">
      <a class="icon" :href="appUrl">拉勾APP</a>
      <a class="os" :href="osUrl">进入企业版</a>
    </div>
    <ul class="list-inline right-bar">
      <li class="right-bar-item" v-for="i in userBar" @click.stop="_clickTool(i.name)" @mouseenter="_mouseEnterHangdle(i.name)" @mouseleave="_mouseLeaveHangdle(i.name)">
        <a class="item-link" :href="i.url">{{i.name}}</a>
        <i class="icon" v-if="i.name==='user'" ></i>
        <div class="msg-popup" v-if="i.name==='消息'&&msgVisible" @click.stop>
          <div class="msg-pu-body">
            <div class="no-body">
              <p class="no-msg">暂时没有新的消息~</p>
            </div>
          </div>
          <div class="msg-pu-footer">
            <a class="setting">
              <i class="msg-avatar"></i>
            </a>
            <a class="msg-more">查看更多</a>
          </div>
        </div>
        <ul v-if="i.name==='user'&&userDropdowmVisible" class="user-dropdown">
          <li><a>我的订阅</a></li>
          <li><a>职位邀请</a></li>
          <li><a>账号设置</a></li>
          <li><a>去企业版</a></li>
          <li><a>退出</a></li>
        </ul>
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
          {name: '我的简历', url: 'https://www.lagou.com/resume/myresume.html'},
          {name: '投递箱', url: 'https://www.lagou.com/mycenter/delivery.html'},
          {name: '收藏夹', url: 'https://www.lagou.com/mycenter/collections.html'},
          {name: 'user', url: 'javascript: void 0;'}
        ],
        msgVisible: false,
        userDropdowmVisible: false
      }
    },
    props: [
      'visible'
    ],
    watch: {
      visible: function (val) {
        this.msgVisible = val
      }
    },
    methods: {
      _clickTool(name) {
        if (name === '消息') {
          this.msgVisible = !this.msgVisible
          this.$emit('update:visible', this.msgVisible)
        } else {
          this.msgVisible = false
          this.$emit('update:visible', this.msgVisible)
        }
      },
      _mouseEnterHangdle(name) {
        if (name === 'user') {
          this.userDropdowmVisible = true
        }
      },
      _mouseLeaveHangdle(name) {
        if (name === 'user') {
          this.userDropdowmVisible = false
        }
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .m-nav
    background #333
    height 30px
    line-height 30px
    a
      color #c4c3c3
      &:hover
        color #fff
        text-decoration none
      &:focus
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
      float right
      .right-bar-item
        position relative
        padding 0
        float left
        .item-link
          border-right 1px solid #5d5d5d
          padding 0 12px
          margin 7px 0 0
        .icon
          position absolute
          top 12px
          right 10px
          font-size 0
          height 0
          width 0
          border-width 5px 4px 0
          border-style solid dashed
          border-color #fff transparent transparent
          overflow hidden
          transition all .4s ease 0s
        .msg-popup
          position absolute
          left -20px
          top 32px
          overflow-x auto
          width 320px
          border 1px solid #e7e7e7
          border-radius 3px
          box-shadow -1px 1px 1px #e7e7e7
          z-index 100
          background #fff
          .msg-pu-body
            width 100%
            max-height 250px
            overflow auto
            .no-body
              padding-top 20px
              height 60px
              .no-msg
                padding-left 44px
                width 130px
                margin 0 auto
                line-height 36px
                background #fff url(//static.lagou.com/www/static/common/widgets/header_c/modules/img/msg_popup_39fadf7.png) no-repeat
                background-position 0 -16px
                display block
          .msg-pu-footer
            width 100%
            background #fafafa
            border-top 1px solid #e7e7e7
            height 40px
            line-height 40px
            vertical-align middle
            .setting
              float left
              padding-left 10px
              display inline-block
              margin 0
              cursor pointer
              i
                display inline-block
                width 17px
                height 17px
                vertical-align middle
                &.msg-avatar
                  background-position 0 0
                  background #fff url(//static.lagou.com/www/static/common/widgets/header_c/modules/img/msg_popup_72c460d.png) no-repeat
            .msg-more
              color #00B38A
              text-decoration underline
              padding-right 10px
              cursor pointer
              float right
        .user-dropdown
          overflow hidden
          width 100%
          min-width 80px
          padding-bottom 8px
          background-color #333
          position absolute
          right 0
          top 30px
          z-index 1000
          margin 0
          padding 0
          a
            width 100%
            min-width 56px
            display block
            color #c4c3c3
            line-height 30px
            padding 0 12px
            margin 0
            cursor pointer
            &:hover
              color #fff
              background-color #474747
        &:last-child
          .item-link
            margin-right 12px
            border-right none
          &:hover
            i
              transform rotate(180deg)
              animation-fill-mode forwards
</style>
