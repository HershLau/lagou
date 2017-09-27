<template>
  <div id="company">
    <company-banner></company-banner>
    <div class="content-container">
      <div class="company-list-container">
        <div class="position-head">
          <filter-box></filter-box>
          <ul class="sub-filter">
            <li class="wrapper clearfix">
              <div class="item order">
                <span class="title">排序方式</span>
                <a v-for="o in orders">{{o}}</a>
              </div>
              <div class="item page" @click.stop="checked=!checked">
                <span class="icon" :class="{checked: checked}"></span>
                有面试评价
              </div>
            </li>
          </ul>
        </div>
        <div class="company-list">
          <company-cards :companyList="companyList"></company-cards>
        </div>
        <div class="item-con-pager">
          <pagination :total="20" :currentPage.sync="currentPage"></pagination>
        </div>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import CompanyBanner from 'components/company-banner/company-banner'
  import FilterBox from 'components/filter-box/filter-box'
  import CompanyCards from 'components/company-cards/company-cards'
  import Pagination from 'components/pagination/pagination'

  export default {
    data() {
      return {
        orders: ['默认排序', '职位数量 ↓', '面试评价数 ↓', '简历处理率 ↓'],
        checked: false,
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
          },
          {
            coverImg: '//static.lagou.com/thumbnail_200x200/image1/M00/0F/B8/CgYXBlT9dyqAftjKAABei8DK6ZY292.png',
            companyName: 'oTMS',
            industry: ['移动互联网'],
            scale: '成长型(B轮)',
            desc: '引领互联运输之道',
            rating: 27,
            jobCount: 16,
            processingRate: 76
          },
          {
            coverImg: '//static.lagou.com/thumbnail_200x200/i/image/M00/61/4A/Cgp3O1f7ZaqADHK_AAJC0uttL8o028.jpg',
            companyName: '对啊网',
            industry: ['移动互联网'],
            scale: '成熟型(C轮)',
            desc: '对啊网|重塑职业未来，国内领先的在线职业教育网站',
            rating: 67,
            jobCount: 86,
            processingRate: 88
          },
          {
            coverImg: '//static.lagou.com/thumbnail_200x200/i/image/M00/5D/25/CgpFT1mSXQSAak9xAAApt0f_mZE65.jpeg',
            companyName: '大鱼自助游',
            industry: ['旅游'],
            scale: '成长型(B轮)',
            desc: '我们用旅行创造世界！',
            rating: 644,
            jobCount: 64,
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
        ],
        currentPage: 2
      }
    },
    components: {
      CompanyBanner,
      FilterBox,
      CompanyCards,
      Pagination
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  #company
    .content-container
      width 1200px
      margin 0 auto
      .company-list-container
        padding-bottom 100px
      .position-head
        margin-bottom 20px
        .sub-filter
          position relative
          margin-top 13px
          background-color #fafafa
          border 1px solid #ededed
          .wrapper
            zoom 1
            color #555
            font-size 14px
            .item
              float left
              padding 10px 0
              height 23px
              line-height 23px
              &.order
                margin-right 35px
                padding-left 16px
                span
                a
                  float left
                  margin-right 5px
                  padding 5px 8px
                  height 14px
                  line-height 14px
                  cursor pointer
                  &:hover
                    background-color #00b38a
                    color #fff
              .title
                margin-right -5px
                font-weight 600
              &.page
                float right
                width 114px
                margin-right 18px
                text-align right
                cursor default
                .icon
                  display inline-block
                  vertical-align middle
                  margin -3px 3px 0
                  width 18px
                  height 15px
                  background-image url(//static.lagou.com/www/static/company-list/modules/order/img/check_f5603cd.png?__sprite)
                  background-repeat no-repeat
                  &.checked
                    background-position -18px top
      .company-list
        padding-top 4px
      .item-con-pager
        margin 35px 0
        text-align center
</style>
