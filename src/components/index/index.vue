<template>
  <div id="index">
    <search-bar></search-bar>
    <div class="container-body">
      <div class="clearfix">
        <div class="side-bar">
          <side-bar></side-bar>
        </div>
        <div class="carousel">
          <v-carousel></v-carousel>
        </div>
        <tab-bar :tabList="jobTabs"></tab-bar>
        <job-cards></job-cards>
        <tab-bar :tabList="companyTabs"></tab-bar>
        <company-cards :companyList="companyList" type="more"></company-cards>
        <div class="linkbox" :class="{'show-link':status==='展开'}">
          <dl>
            <dt>
              <span class="current" v-for="tag in tags">{{tag}}</span>
            </dt>
            <dd class="links">
              <a class="friend-link" v-for="link in links">{{link}}</a>
              <a class="more">更多</a>
            </dd>
            <span class="expansion" @click="toggle">{{status}}<i :class="{'i-up': status==='收起'}"></i></span>
          </dl>
        </div>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import SearchBar from 'components/search-bar/search-bar'
  import SideBar from 'components/side-bar/side-bar'
  import VCarousel from 'components/v-carousel/v-carousel'
  import TabBar from 'components/tab-bar/tab-bar'
  import JobCards from 'components/job-cards/job-cards'
  import CompanyCards from 'components/company-cards/company-cards'

  export default {
    components: {
      SearchBar,
      SideBar,
      VCarousel,
      TabBar,
      JobCards,
      CompanyCards
    },
    data() {
      return {
        tags: ['友情链接'],
        links: ['拉勾网', '大鲲', '招聘', 'app下载', '拉勾云', '中大网校', '人人都是产品经理', '教师招聘', '新疆人才网', '研究报告', '互联网的一些事', '人才招聘网', '找工作', '字典', '中国考试网', '生意经商业百科', '猫扑大杂烩', '装修效果图', '招聘网', '中华考试网', '招聘素材', '杭州招聘', '上海招聘', '法律咨询', '爱思英语网', '徐州英才网', 'thinkphp', '考研网', '银行招聘网', '语文学习网', '智联招聘', '职业圈', '股城财经', '法律咨询网', '兼职吧', '招聘网', '爱问共享资料', '百姓网', '招聘', '会计网', '简历模版', '服装人才网', '创意服务外包', '西陆军事', '中公公务员网校', '老人网', '找工作', '招聘网', '前瞻网', '安徽招聘网', '台州人才网', '苏州人才网 ', '教师网', '重庆人才网', '中国会计网', '齐鲁人才网', '邮编生活网', '义乌人才网', 'PHP100中文网', '培训网'],
        status: '展开',
        jobTabs: ['推荐职位', '热门职位', '最新职位'],
        companyTabs: ['热门公司'],
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
    methods: {
      toggle() {
        console.log(this.status)
        if (this.status === '展开') {
          this.status = '收起'
        } else {
          this.status = '展开'
        }
      }
    }
  }

</script>

<style lang="stylus" rel="stylesheet/stylus">
  #index
    padding-bottom 39px
    .container-body
      margin 26px auto 0
      width 1200px
      .side-bar
        float left
        position relative
        width 321px
        margin-left -15px
      .carousel
        position relative
        margin-left 360px
        margin-top 20px
        height 346px
        overflow hidden
        background-color #f2f5f4
      .linkbox
        position relative
        margin-top 52px
        overflow hidden
        &.show-link
          height 99px
        dl
          position relative
          dt
            border-bottom 1px solid #e8e8e8
            font-size 16px
            color #333
            margin-bottom 21px
            .current
              display inline-block
              padding 14px 0
              border-bottom 2px solid #333
          .links
            position relative
            width 1120px
            color #555
            font-size 14px
            overflow hidden
            a
              white-space nowrap
              float left
              padding 8px 18px 8px 0
              line-height 15px
              color #555
              text-decoration none
              cursor pointer
              &:hover
                color #00b38a
                text-decoration underline
              &.more
                text-decoration underline
          .expansion
            height 22px
            position absolute
            right 3px
            top 78px
            cursor pointer
            color #999
            i
              display inline-block
              width 12px
              height 12px
              margin-left 5px
              background-image url(//static.lagou.com/www/static/index/modules/friendlink/img/arrow_down2_bf33e8a.png)
              background-repeat no-repeat
              background-position 0 3px
              background-size 12px 6px
              &.i-up
                transform rotate(180deg)
                vertical-align 0
</style>
