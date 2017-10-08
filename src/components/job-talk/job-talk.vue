<template>
    <div id="job-talk">
      <div class="banner">
        <h2>言职</h2>
        <h3>更真实的公司点评社区</h3>
      </div>
      <div class="container clearfix">
        <div class="content f1"></div>
        <div class="side f1">
          <div class="user-card">
            <div class="user-card-normal-box">
              <div class="userinfo-base clearfix">
                <div class="avatar">
                  <a>
                    <img>
                  </a>
                </div>
                <div class="username">
                  <a>
                    <span></span>
                    <i class="boy"></i>
                  </a>
                </div>
              </div>
              <a class="userinfo-edit">编辑</a>
              <p class="userinfo-job">
                <a></a>
              </p>
              <p class="userinfo-intro">
                <a></a>
              </p>
              <div class="user-status">
                <ul class="clearfix">
                  <li>
                    <a>
                      <em></em>
                      提问
                    </a>
                  </li>
                  <li>
                    <a>
                      <em></em>
                      回答
                    </a>
                  </li>
                  <li>
                    <a>
                      <em></em>
                      获赞
                    </a>
                  </li>
                </ul>
              </div>
              <a class="ask-btn btn">提个问题</a>
            </div>
          </div>
          <a class="more-topix-link btn-invert btn">查看更多话题</a>
        </div>
      </div>
    </div>
</template>

<script type="text/ecmascript-6">
  export default {}
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
      .f1
        float left
      .side
        width 234px
        .user-card
          width 100%
          .user-card-normal
            position relative
            padding-bottom 30px

</style>
