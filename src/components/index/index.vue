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
        <company-cards></company-cards>
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
        companyTabs: ['热门公司']
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
