<template>
  <div id="company-cards">
    <ul class="company-list clearfix">
      <li class="company-item" v-for="company in companyList">
        <div class="top">
          <p>
            <a>
              <img :src="company.coverImg" width="80" height="80">
            </a>
          </p>
          <p class="company-name wordCut">
            <a>{{company.companyName}}</a>
          </p>
          <p class="indus-stage wordCut">
            <span>{{company.industry | industryConcat}}</span>
            <span>{{company.scale}}</span>
          </p>
          <p class="advantage wordCut">{{company.desc}}</p>
        </div>
        <div class="bottom clearfix">
          <a class="bottom-item f1">
            <p class="green">
              <span>{{company.rating}}</span>
            </p>
            <p class="gray">面试评价</p>
          </a>
          <a class="bottom-item f1">
            <p class="green">
              <span>{{company.jobCount}}</span>
            </p>
            <p class="gray">在招职位</p>
          </a>
          <a class="bottom-item f1">
            <p class="green">
              <span>{{company.processingRate}}%</span>
            </p>
            <p class="gray">简历处理率</p>
          </a>
        </div>
      </li>
    </ul>
    <a v-if="type==='more'" class="list-more">查看更多</a>

  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    data() {
      return {
      }
    },
    props: {
      companyList: Array,
      type: String
    },
    filters: {
      industryConcat: function (val) {
        return val.join(',')
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  #company-cards
    width inherit
    .company-list
      width 1216px
      .company-item
        box-sizing border-box
        float left
        width 288px
        height 270px
        margin-top 16px
        margin-right 16px
        border 1px solid #eee
        &:hover
          box-shadow 0 0 10px 0 rgba(56, 81, 76, .12)
        .top
          margin 0 13px
          padding 20px 0 14px
          text-align center
          border-bottom 1px dashed #e0e0e0
          p
            line-height 22px
            a
              color #555
              background-color transparent
              text-decoration none
              img
                border 0
                vertical-align top
                display inline-block
                cursor pointer
          .company-name
            height 22px
            margin-top 13px
            font-size 16px
            color #333
            a
              color #555
              background-color transparent
              text-decoration none
              cursor pointer
              &:hover
                color #00b38a
          .indus-stage
            height 22px
            margin-top 3px
            color #999
            span:last-child:before
              content ' / '
          .advantage
            margin-top 5px
            color #555
        .bottom
          .f1
            float left
          .bottom-item
            width 90px
            position relative
            display block
            margin-top 17px
            text-align center
            cursor pointer
            &:hover
              text-decoration none
              .gray
                color #00b38a
            .green
              line-height 1
              color #00b38a
            .gray
              margin-top 4px
              font-size 12px
              color #999
            &:nth-last-child(n+2):after
              position absolute
              top 0
              right 0
              content ''
              height 30px
              width 1px
              background #ededed

    .list-more
      display block
      width 387px
      height 42px
      line-height 42px
      margin 16px auto 0
      background #fff
      border 1px solid #00b38a
      font-size 16px
      color #00b38a
      text-align center
      transition background .3s, color .1s
      text-decoration none
      cursor pointer
      &:hover
        color #fff
        background-color #00b38a
  .wordCut
    text-overflow ellipsis
    overflow hidden
    white-space nowrap
    word-wrap normal
</style>
