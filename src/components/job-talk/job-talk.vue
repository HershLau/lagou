<template>
  <div id="job-talk">
    <div class="banner">
      <h2>言职</h2>
      <h3>更真实的公司点评社区</h3>
    </div>
    <div class="container clearfix">
      <div class="content fl">
        <div class="news">
          <div class="news-tab">
            <ul>
              <li @click="selTab" :class="{current:currTab==='最新动态'}">最新动态</li>
              <li @click="selTab" :class="{current:currTab==='精选推荐'}">精选推荐</li>
            </ul>
          </div>
          <div class="news-list">
            <ul class="list">
              <li v-for="news in newsList">
                <div class="news-question item">
                  <div class="item-header">
                    <strong class="topic-name" v-for="topic in news.topics">
                      <a>{{topic}}</a>
                    </strong>
                    收到一个新的问题
                    <span class="item-time fr">{{news.date}}</span>
                  </div>
                  <h4 class="item-question">
                    <a>{{news.title}}</a>
                  </h4>
                  <p class="item-question-desc">
                    <a>{{news.question}}</a>
                  </p>
                  <div class="item-content clearfix">
                    <div class="item-status">
                      <span class="status-item">
                        <a>
                          <em>{{news.answer}}</em>个回答
                        </a>
                      </span>
                      <span class="status-item">
                        <a>
                          <em>{{news.attention}}</em>人关注
                        </a>
                      </span>
                      <span class="status-item">
                        <a>分享</a>
                      </span>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="side fl">
        <div class="user-card">
          <div class="user-card-normal">
            <div class="userinfo-base clearfix">
              <div class="avatar">
                <a>
                  <img src="//static.lagou.com/www/static/community/modules/common/img/avatar_default_7225407.png">
                </a>
              </div>
              <div class="username">
                <a>
                  <span>{{userInfo.name}}</span>
                  <i class="boy"></i>
                </a>
              </div>
            </div>
            <a class="userinfo-edit">编辑</a>
            <p class="userinfo-job">
              <a>{{userInfo.job}}</a>
            </p>
            <p class="userinfo-intro">
              <a>{{userInfo.intro}}</a>
            </p>
            <div class="user-status">
              <ul class="clearfix">
                <li>
                  <a>
                    <em>{{userInfo.ask}}</em>
                    提问
                  </a>
                </li>
                <li>
                  <a>
                    <em>{{userInfo.answer}}</em>
                    回答
                  </a>
                </li>
                <li>
                  <a>
                    <em>{{userInfo.thumbUp}}</em>
                    获赞
                  </a>
                </li>
              </ul>
            </div>
            <a class="ask-btn btn">提个问题</a>
          </div>
        </div>
        <a class="more-topic-link btn-invert btn">查看更多话题</a>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    data() {
      return {
        userInfo: {
          avatar: '',
          name: '刘浩轩',
          job: 'web前端开发、全栈开发',
          intro: 'hersh',
          ask: 0,
          answer: 0,
          thumbUp: 0
        },
        newsList: [
          {
            topics: ['薪酬福利'],
            title: '月饼节到了，你司的月饼节怎么过的？',
            date: '9月28日',
            question: '中秋节是个团圆的日子，公司在这个节日为员工准备的心意很能体现一家企业的文化和员工关怀，想知道大家的公司都有什么福利、惊喜和温暖呢？',
            answer: 11,
            attention: 21
          },
          {
            topics: ['薪酬福利'],
            title: '月饼节到了，你司的月饼节怎么过的？',
            date: '9月28日',
            question: '中秋节是个团圆的日子，公司在这个节日为员工准备的心意很能体现一家企业的文化和员工关怀，想知道大家的公司都有什么福利、惊喜和温暖呢？',
            answer: 11,
            attention: 21
          }
        ],
        currTab: '最新动态'
      }
    },
    methods: {
      selTab(e) {
        this.currTab = e.target.innerText
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  #job-talk
    .banner
      min-width 1024px
      height 125px
      padding-top 35px
      background-color #ebf0ef
      background #100f06 url(//static.lagou.com/www/static/community/modules/index/banner/img/banner-bg_21a3371.jpg) center center no-repeat
      h2
        margin-bottom 6px
        font-size 30px
        font-weight 700
        line-height 40px
        color #fff
        text-align center
        margin 0
      h3
        margin-bottom 4px
        font-size 26px
        line-height 36px
        color #fff
        text-align center
    .container
      margin-top 45px
      width 1024px
      margin 35px auto 0
      padding-bottom 80px
      .fl
        float left
      .fr
        float right
      .content
        position relative
        width 710px
        margin-right 40px
        padding-right 40px
        box-shadow 5px 0 5px -5px #ededed
        word-break break-all
        text-align justify
        .news
          margin-bottom 30px
          .news-tab
            position absolute
            top -65px
            height 30px
            font-size 0
            li
              display inline-block
              height 18px
              margin-right 30px
              padding-bottom 10px
              font-size 18px
              line-height 18px
              color #fff
              font-weight 700
              cursor pointer
              &:hover
                color #00b38a
                border-bottom 2px solid #00b38a
              &.current
                color #00b38a
                border-bottom 2px solid #00b38a

          .list
            margin-bottom 35px
            &>li
              padding 25px 0
              &:first-child
                padding-top 0
              &+li
                border-top 1px solid #ededed
            .item
              font-size 14px
              color #333
              .item-time
                font-size 12px
                color #999
              .item-question
                max-height 60px
                margin-bottom 6px
                font-size 20px
                line-height 30px
                overflow hidden
                word-wrap break-word
                a
                  font-size 20px
              .item-question-desc
                max-height 48px
                margin-bottom 6px
                overflow hidden
                font-size 14px
                line-height 24px
                color #555
                a
                  color #555
              .item-status
                height 22px
                line-height 22px
                font-size 0
                span
                  font-size 12px
                  color #b1b1b1
                  a
                    font-size 12px
                    color #b1b1b1
                .status-item
                  &+.status-item
                    display inline-block
                    &:before
                      display inline-block
                      width 1em
                      text-align center
                      content '·'
                  a:hover
                    color #00b38a
            .news-question
              .item-header
                position relative
                height 22px
                margin-bottom 4px
                font-size 12px
                line-height 22px
                color #b1b1b1
                strong
                  font-weight 400
                  a
                    display inline-block
                    margin 2px 0
                    padding 0 10px
                    font-size 12px
                    line-height 18px
                    color #00b38a
                    border 1px solid #00b38a
                    border-radius 10px
                    &:hover
                      color #fff
                      background-color #00b38a
                      border-color #00b38a
                      text-decoration none
      .side
        width 234px
        .user-card
          width 100%
          .user-card-normal
            position relative
            padding-bottom 30px
            .userinfo-base
              .avatar
                width 96px
                margin 0 auto 20px
                img
                  display block
                  width 96px
                  height 96px
                  overflow hidden
                  border-radius 48px
                  background-color #f0f0f0
              .username
                height 28px
                margin-bottom 10px
                overflow hidden
                text-align center
                a
                  font-size 18px
                  line-height 28px
                  color #333
                  span
                    display inline-block
                    max-width 210px
                    height 30px
                    overflow hidden
                    text-overflow ellipsis
                    white-space nowrap
                    word-wrap normal
                    vertical-align middle
                i
                  display inline-block
                  width 16px
                  height 16px
                  vertical-align middle
                  overflow hidden
                  text-indent -999em
                  border-radius 2px
                  &.boy
                    background url(//static.lagou.com/www/static/community/modules/common/user-card/img/user-icon-boy-v1_f56b6f0.png) center center no-repeat
            .userinfo-edit
              position absolute
              right 0
              top 0
              padding-left 16px
              font-size 14px
              line-height 14px
              color #00b38a
              background url(//static.lagou.com/www/static/community/modules/common/img/icon-edit_f904e19.png) left center no-repeat
              &:hover
                color #00a57f
            .userinfo-job
              height 24px
              margin-bottom 10px
              font-size 14px
              line-height 24px
              color #333
              text-align center
              overflow hidden
              text-overflow ellipsis
              word-wrap normal
              white-space pre
              a
                color #333
            .userinfo-intro
              max-height 46px
              margin-bottom 20px
              overflow hidden
              font-size 13px
              line-height 23px
              color #777
              text-align center
              word-wrap normal
              white-space pre-wrap
              a
                color #777
            .user-status
              margin-bottom 35px
              line-height 1
              li
                float left
                width 77px
                height 41px
                font-size 13px
                color #999
                text-align center
                & + li
                  border-left 1px solid #ededed
                a
                  color #999
                em
                  display block
                  margin-bottom 8px
                  font-size 20px
                  color #333
            a.ask-btn
              display block
              height 46px
              margin 0 auto
              font-size 18px
              line-height 46px
        .btn-invert
          line-height 28px
          color #00b38a
          border 1px solid #00b38a
          background-color transparent
          &:hover
            color #fff
            background-color #00b38a
        .more-topic-link
          display block
          height 46px
          margin -10px auto 30px
          font-size 18px
          line-height 46px

  .btn
    display inline-block
    box-sizing border-box
    min-width 66px
    height 30px
    padding 0 12px
    font-size 14px
    line-height 30px
    color #fff
    text-align center
    border 0
    border-radius 3px
    background-color #00b38a
    &:hover
      color #fff
      background-color #00a57f
  a
    cursor pointer
</style>
