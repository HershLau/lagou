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
    <a class="list-more">查看更多</a>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    data() {
      return {
        companyList: [
          {
            coverImg: '//static.lagou.com/thumbnail_160x160/i/image/M00/3D/B0/CgpFT1lUsSSARRFDAAEFPvNrd4Y456.png',
            companyName: '陕西罗文网络司',
            industry: ['O2O'],
            scale: 'A轮',
            desc: '淘店客：限时特卖邮购类电商平台，只挑优惠精选',
            rating: 61,
            jobCount: 5,
            processingRate: 100
          },
          {
            coverImg: '//static.lagou.com/thumbnail_160x160/image1/M00/00/08/Cgo8PFTUWBCAcSJHAAB-yfiYxHM640.png',
            companyName: '同步推',
            industry: ['移动互联网'],
            scale: '上市公司',
            desc: '公司专注于互联网、移动互联网与信息化互动社区，致力并服务于推动手机用户的沟通和娱乐。',
            rating: 86,
            jobCount: 11,
            processingRate: 97
          },
          {
            coverImg: '//static.lagou.com/thumbnail_160x160/image1/M00/00/09/CgYXBlTUWBOAFtRVAAByunpeBCY582.jpg',
            companyName: '轩辕传媒',
            industry: ['企业服务', '广告营销'],
            scale: '不需要融资',
            desc: '互联网广告代理商，拥有各种一线媒体资源，提供专业的服务',
            rating: 134,
            jobCount: 37,
            processingRate: 100
          },
          {
            coverImg: '//static.lagou.com/thumbnail_160x160/image1/M00/00/01/Cgo8PFTUV_SASXOjAACX7StHJmA601.jpg',
            companyName: '环球网',
            industry: ['文化娱乐'],
            scale: '不需要融资',
            desc: '　环球网（www.huanqiu.com）是由人民网和环球时报社共同投资成立的中央级重点新闻网站。',
            rating: 110,
            jobCount: 39,
            processingRate: 100
          },
          {
            coverImg: '//static.lagou.com/thumbnail_160x160/image1/M00/00/03/CgYXBlTUV_uADQtmAADXLfqhvPY925.png',
            companyName: '南京智搜',
            industry: ['数据服务', '文化娱乐'],
            scale: '天使轮',
            desc: '海量数据智能分析领导者',
            rating: 8,
            jobCount: 5,
            processingRate: 100
          },
          {
            coverImg: '//static.lagou.com/thumbnail_160x160/i/image/M00/58/32/CgqKkVfShFmARUPKAAANDL-WAR4962.jpg',
            companyName: '宏途科技',
            industry: ['移动互联网', '数据服务'],
            scale: '未融资',
            desc: '成为世界排名第一的科技公司',
            rating: 0,
            jobCount: 6,
            processingRate: 84
          },
          {
            coverImg: '//static.lagou.com/thumbnail_160x160/i/image/M00/6E/2E/CgpEMlmvwF6AJQdSAAA6v9RlIc4942.jpg',
            companyName: '时光小屋',
            industry: ['移动互联网', '数据服务'],
            scale: 'A轮',
            desc: '最专业的宝宝成长记录，在台湾每天每10个新生儿中至少有5个的父母是我们的用户',
            rating: 61,
            jobCount: 5,
            processingRate: 100
          },
          {
            coverImg: '//static.lagou.com/thumbnail_160x160/i/image/M00/00/27/Cgp3O1YvRyCAWVnPAAAQn68x9sA727.jpg',
            companyName: '微爱',
            industry: ['移动互联网', '社交网络'],
            scale: 'A轮',
            desc: '公司在情侣细分市场有3年的经验，希望把微爱做成极致、创新、直指人心的产品，并做到细分市场压倒性领先',
            rating: 42,
            jobCount: 5,
            processingRate: 16
          }
        ]
      }
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
