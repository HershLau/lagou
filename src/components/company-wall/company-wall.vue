<template>
  <div id="company-wall" class="clearfix">
    <ul class="nav-companies clearfix">
      <li class="nav-logo" v-for="(logo,index) in companies">
        <div class="nav-img" @click="selLogo(index)">
          <img :src="logo.imgUrl" width="70" height="70">
          <div class="nav-hover-cycle" :class="{'nav-logo-selected':currIndex===index}"></div>
        </div>
        <div class="company-short-name">{{logo.title}}</div>
      </li>
    </ul>
    <a class="company-intro">
      <h3>{{companies[currIndex]&&companies[currIndex].title}}</h3>
      <ul class="company-base-info">
        <li>
          <i class="fa fa-th-large" aria-hidden="true"></i>
          {{companies[currIndex]&&companies[currIndex].industry}}
        </li>
        <li>
          <i class="fa fa-line-chart" aria-hidden="true"></i>
          {{companies[currIndex]&&companies[currIndex].financeStage}}
        </li>
        <li>
          <i class="fa fa-user-o" aria-hidden="true"></i>
          {{companies[currIndex]&&companies[currIndex].scale}}
        </li>
        <li>
          <i class="fa fa-map-marker" aria-hidden="true"></i>
          {{companies[currIndex]&&companies[currIndex].site}}
        </li>
        <li>
          <i class="fa fa-search" aria-hidden="true"></i>
          {{companies[currIndex]&&companies[currIndex].jobCount}}个校招职位
        </li>
      </ul>
      <div class="company-desc">
        {{companies[currIndex]&&companies[currIndex].desc}}
      </div>
      <ul class="company-imgs">
        <li v-for="pic in companies[currIndex].pics" :style="{backgroundImage:'url('+pic+')'}"></li>
      </ul>
    </a>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    data() {
      return {
        companies: [
          {
            imgUrl: 'https://static.lagou.com/i/image/M00/4C/50/CgpEMllofwqAEKNQAAAs_j5TrEo719.jpg',
            title: '搜狗',
            industry: '移动互联网,数据服务',
            financeStage: 'C轮',
            scale: '2000人以上',
            site: '北京',
            jobCount: 6,
            desc: '搜狗是中国互联网领先的搜索、输入法、浏览器和其它互联网产品及服务提供商。',
            pics: [
              'https://static.lagou.com/thumbnail_200x200/i/image/M00/14/B5/CgqKkVbqH0SAIfDvABQH4GVouqc645.JPG',
              'https://static.lagou.com/thumbnail_200x200/i/image/M00/14/B5/CgqKkVbqH3eAFfBHAAF-_Ir4KPA478.jpg',
              'https://static.lagou.com/thumbnail_200x200/i/image/M00/14/B5/CgqKkVbqH6iAac-OABokwtbua7o649.JPG',
              'https://static.lagou.com/thumbnail_200x200/i/image/M00/14/B6/Cgp3O1bqICaAaEZ9AADxXMO2aCA930.png'
            ]
          },
          {
            imgUrl: 'https://static.lagou.com/i/image2/M00/01/B5/CgoB5lm_Z2eAO7g_AAAsw5Ww4Ig707.jpg',
            title: '京东商城',
            industry: '电子商务',
            financeStage: '上市公司',
            scale: '2000人以上',
            site: '北京',
            jobCount: 13,
            desc: '让生活变得简单快乐',
            pics: [
              'https://static.lagou.com/thumbnail_200x200/i/image/M00/4C/0A/Cgp3O1ehZM-AO198ABersHvHPWE819.jpg',
              'https://static.lagou.com/thumbnail_200x200/i/image/M00/4C/0A/Cgp3O1ehZN6APP4lADCyuaFjmUQ224.jpg',
              'https://static.lagou.com/thumbnail_200x200/i/image/M00/4C/0A/Cgp3O1ehZQmAShOpAClGbDIhdAU181.JPG',
              'https://static.lagou.com/thumbnail_200x200/i/image/M00/4C/0A/Cgp3O1ehZTGAAFh0AAGac0vntk4762.jpg',
              'https://static.lagou.com/thumbnail_200x200/i/image/M00/4C/0A/Cgp3O1ehZUWAZJn9AAHRtm5uqDg544.jpg'
            ]
          },
          {
            imgUrl: 'https://static.lagou.com/i/image/M00/00/20/Cgp3O1YtmkSAZjX1AAA78knErXc273.jpg',
            title: '滴滴出行',
            industry: '移动互联网',
            financeStage: '不需要融资',
            scale: '2000人以上',
            site: '北京',
            jobCount: 17,
            desc: '公司管理扁平化，技术氛围特别融洽',
            pics: [
              'https://static.lagou.com/thumbnail_200x200/i/image/M00/41/69/CgpEMllUsVSAIILnAAhiAZFLyHE493.jpg',
              'https://static.lagou.com/thumbnail_200x200/i/image/M00/41/69/CgpEMllUsV2AVBnwABRVCpyM97o094.jpg',
              'https://static.lagou.com/thumbnail_200x200/i/image/M00/3D/B0/CgpFT1lUsWaAB0G_AAbMVKt0CMA960.jpg',
              'https://static.lagou.com/thumbnail_200x200/i/image/M00/3D/B0/CgpFT1lUsYSAAJjSAA9s4iqUPr8595.jpg',
              'https://static.lagou.com/thumbnail_200x200/i/image/M00/41/6B/CgpEMllUsxeAGtMzAAtnnuwOWoI225.jpg'
            ]
          },
          {
            imgUrl: 'https://static.lagou.com/i/image/M00/87/D0/Cgp3O1hrjr6AQX3MAAAvdAp6Y8g723.JPG',
            title: '阿里巴巴大优酷',
            industry: '数据服务,文化娱乐',
            financeStage: '上市公司',
            scale: '2000人以上',
            site: '北京',
            jobCount: 1,
            desc: '大优酷是阿里巴巴文化娱乐集团两大核心平台引擎之一，是中国最大的数字娱乐平台。',
            pics: [
              'https://static.lagou.com/thumbnail_200x200/i/image/M00/01/40/CgqKkVZlWA6ARb6uAAAjdkhzM3g819.jpg',
              'https://static.lagou.com/thumbnail_200x200/i/image/M00/01/40/Cgp3O1ZlWBOAbmFAAAAn_5jOBHk307.jpg',
              'https://static.lagou.com/thumbnail_200x200/i/image/M00/01/40/CgqKkVZlWBiAbp7gAABKd9upK5g434.jpg',
              'https://static.lagou.com/thumbnail_200x200/i/image/M00/01/40/Cgp3O1ZlWBuAUCs1AAA6dLShUMA864.jpg',
              'https://static.lagou.com/thumbnail_200x200/i/image/M00/01/40/CgqKkVZlWD2AMJTyAAA8r0DkET8575.jpg'
            ]
          },
          {
            imgUrl: 'https://static.lagou.com/image1/M00/00/01/Cgo8PFTUV_OAH8cPAACZoNxm1EI176.jpg',
            title: '今日头条',
            industry: '移动互联网,数据服务',
            financeStage: 'C轮',
            scale: '500-2000人',
            site: '济南',
            jobCount: 238,
            desc: '我们不刷存在感，我们只追求卓越',
            pics: [
              'https://static.lagou.com/thumbnail_200x200/i/image/M00/52/67/Cgp3O1e7t3OAXisUAACRDkC8ksI828.jpg',
              'https://static.lagou.com/thumbnail_200x200/i/image/M00/52/67/CgqKkVe7t4mAdKWBAASLou3VZHM938.jpg',
              'https://static.lagou.com/thumbnail_200x200/i/image/M00/52/67/CgqKkVe7t42AWNbIAACRDgemEzM410.png',
              'https://static.lagou.com/thumbnail_200x200/i/image/M00/52/67/Cgp3O1e7t6qAZbCVABY5VarY_ng862.jpg',
              'https://static.lagou.com/thumbnail_200x200/i/image/M00/52/67/CgqKkVe7t8qAQPr9AAejcQWdLBM756.jpg'
            ]
          },
          {
            imgUrl: 'https://static.lagou.com/image2/M00/02/0C/CgqLKVXmqjiAaeEZAAAeKXFs1hs950.jpg',
            title: '暴风影音',
            industry: '文化娱乐',
            financeStage: '上市公司',
            scale: '2000人以上',
            site: '北京',
            jobCount: 18,
            desc: '富有竞争力的薪酬，丰厚的福利，真诚、简单、优秀的同事，还在等什么，加入暴风吧！',
            pics: [
              'https://static.lagou.com/thumbnail_200x200/i/image/M00/27/89/CgqKkVcoSIaAV1UiAACO7sI1Mxs068.jpg',
              'https://static.lagou.com/thumbnail_200x200/i/image/M00/27/89/Cgp3O1coSJOAYTMQABnJhsvakGw610.JPG'
            ]
          },
          {
            imgUrl: 'https://static.lagou.com/i/image/M00/00/60/CgqKkVZFhiKAe07DAAAMN2gO144456.jpg',
            title: '搜狐媒体',
            industry: '移动互联网,广告营销',
            financeStage: '上市公司',
            scale: '2000人以上',
            site: '北京',
            jobCount: 11,
            desc: '中国互联网文化运动的先驱、中国综合门户网站的创始者',
            pics: [
              'https://static.lagou.com/thumbnail_200x200/i/image/M00/00/60/CgqKkVZFfVGAGEXgAAEOhwwneeQ274.jpg',
              'https://static.lagou.com/thumbnail_200x200/i/image/M00/00/60/Cgp3O1ZFfYuAK44hAAGndG5eeCY315.jpg',
              'https://static.lagou.com/thumbnail_200x200/i/image/M00/00/60/CgqKkVZFfZWAGObMAAEeDSmMcK8885.jpg',
              'https://static.lagou.com/thumbnail_200x200/i/image/M00/00/60/Cgp3O1ZFfZuAf8jbAAEnnjcraeA446.jpg',
              'https://static.lagou.com/thumbnail_200x200/i/image/M00/00/60/CgqKkVZFfaGAd7dgAAFpmEnaQfw597.jpg'
            ]
          },
          {
            imgUrl: 'https://static.lagou.com/i/image/M00/10/6F/CgpEMljrK6-AZlbIAADr49BzvVY513.png',
            title: '链家网',
            industry: '移动互联网,O2O',
            financeStage: 'C轮',
            scale: '500-2000人',
            site: '北京',
            jobCount: 1,
            desc: '链家网让房屋交易不再难！',
            pics: [
              'https://static.lagou.com/thumbnail_200x200/i/image/M00/08/AB/CgqKkVbQTUaAfR2NAAFxzgZCcn0518.jpg',
              'https://static.lagou.com/thumbnail_200x200/i/image/M00/08/AB/Cgp3O1bQTX-AS-10AAgcO4VpNDU582.jpg',
              'https://static.lagou.com/thumbnail_200x200/i/image/M00/08/AB/CgqKkVbQTYiAWnMeAArnVZ6pa6o082.jpg',
              'https://static.lagou.com/thumbnail_200x200/i/image/M00/08/AB/CgqKkVbQTZaAZv-jAAGUD1cfR6U765.jpg',
              'https://static.lagou.com/thumbnail_200x200/i/image/M00/08/AC/CgqKkVbQTa6AASCPABA2VlDMRsM784.JPG'
            ]
          },
          {
            imgUrl: 'https://static.lagou.com/i/image/M00/21/3E/CgpFT1kVdzeAJNbUAABJB7x9sm8374.png',
            title: '百度',
            industry: '移动互联网,数据服务',
            financeStage: '不需要融资',
            scale: '2000人以上',
            site: '北京',
            jobCount: 41,
            desc: '用科技让复杂的世界更简单',
            pics: [
              'https://static.lagou.com/thumbnail_200x200/i/image/M00/26/58/CgpFT1kiXQKANZmNAAA5saMSjKs850.png'
            ]
          },
          {
            imgUrl: 'https://static.lagou.com/image1/M00/00/35/Cgo8PFTUXJeAJhm5AAAyDX2QCwc674.jpg',
            title: '新浪网',
            industry: '文化娱乐',
            financeStage: '上市公司',
            scale: '2000人以上',
            site: '北京',
            jobCount: 31,
            desc: '知名互联网公司',
            pics: [
              'https://static.lagou.com/thumbnail_200x200/i/image/M00/00/6C/CgqKkVZJivWAdmZqAADXQ22CXGo164.png',
              'https://static.lagou.com/thumbnail_200x200/i/image/M00/00/6C/Cgp3O1ZJivuAX178AAC_4iO5OGI988.jpg',
              'https://static.lagou.com/thumbnail_200x200/i/image/M00/00/6C/CgqKkVZJiwOAPH_MAACJYjukHEQ607.jpg',
              'https://static.lagou.com/thumbnail_200x200/i/image/M00/00/6C/Cgp3O1ZJiwiAF2wxAAC3vEsYkio774.jpg',
              'https://static.lagou.com/thumbnail_200x200/i/image/M00/00/6C/CgqKkVZJixCAdbOaAACB7JsNOrE325.jpg'
            ]
          },
          {
            imgUrl: 'https://static.lagou.com/i/image/M00/00/ED/CgqKkVZbw3eAS5NKAAAptNglgQY659.jpg',
            title: '知乎',
            industry: '移动互联网,社交网络',
            financeStage: 'D轮及以上',
            scale: '150-500人',
            site: '北京',
            jobCount: 13,
            desc: '与世界分享你的知识、经验和见解',
            pics: [
              'https://static.lagou.com/thumbnail_200x200/i/image/M00/00/EE/Cgp3O1Zb2eWAPwW7AAGFvwImRkc432.png',
              'https://static.lagou.com/thumbnail_200x200/i/image/M00/01/09/Cgp3O1Zeb42AfjAHAAHezDgNZF8570.JPG',
              'https://static.lagou.com/thumbnail_200x200/i/image/M00/01/09/CgqKkVZeb8SANePSAAFkpaU_0XM989.JPG',
              'https://static.lagou.com/thumbnail_200x200/i/image/M00/01/09/Cgp3O1Zeb86Ac8phAAFNxD9Ws_0521.JPG'
            ]
          },
          {
            imgUrl: 'https://static.lagou.com/i/image/M00/66/2A/CgpEMlmdK9mAHhMwAAALxO00jJU575.jpg',
            title: '网易',
            industry: '电子商务,移动互联网',
            financeStage: '上市公司',
            scale: '2000人以上',
            site: '杭州',
            jobCount: 76,
            desc: '以匠心，致创新',
            pics: [
              'https://static.lagou.com/thumbnail_200x200/i/image/M00/4D/B4/CgqKkVeoQxKAe4YQAA6UzjRy2gs884.jpg',
              'https://static.lagou.com/thumbnail_200x200/i/image/M00/4D/B7/CgqKkVeoSEiAYbeMAB09ndkvw38818.JPG',
              'https://static.lagou.com/thumbnail_200x200/i/image/M00/4D/B8/Cgp3O1eoSY-ACvJgABGeRmp2gaY425.jpg',
              'https://static.lagou.com/thumbnail_200x200/i/image/M00/4D/B8/CgqKkVeoSaOAHO6UABb4G9v6NW8134.jpg',
              'https://static.lagou.com/thumbnail_200x200/i/image/M00/4D/B8/Cgp3O1eoScWAA7LXABRFs2sBvmM961.JPG'
            ]
          },
          {
            imgUrl: 'https://static.lagou.com/image1/M00/26/1E/Cgo8PFVUDROAf7zrAABr5cEcbGQ572.jpg',
            title: '360',
            industry: '移动互联网,游戏',
            financeStage: '上市公司',
            scale: '50-150人',
            site: '北京',
            jobCount: 17,
            desc: '我们的核心价值观：用户至上、创业心态、持续创新、不断反思、 开放协作',
            pics: []
          },
          {
            imgUrl: 'https://static.lagou.com/i/image/M00/97/AC/Cgp3O1idm3CAUuraAAK4M8uoNew039.jpg',
            title: '阿里巴巴—高德',
            industry: '移动互联网',
            financeStage: '上市公司',
            scale: '2000人以上',
            site: '北京',
            jobCount: 5,
            desc: '高德是国内领先的数字地图内容、导航和位置服务解决方案提供商。',
            pics: [
              'https://static.lagou.com/thumbnail_200x200/i/image/M00/00/07/Cgp3O1YkheiASYDQAAEhlyEPEB8394.jpg',
              'https://static.lagou.com/thumbnail_200x200/i/image/M00/00/09/CgqKkVYkwBaAVW0TAABBCupvJWI422.png',
              'https://static.lagou.com/thumbnail_200x200/i/image/M00/00/09/Cgp3O1YkwBmAYdG2AABdO5juw5k993.png',
              'https://static.lagou.com/thumbnail_200x200/i/image/M00/00/09/CgqKkVYkwB2Adg8pAACX_CzCxuo649.png',
              'https://static.lagou.com/thumbnail_200x200/i/image/M00/00/09/Cgp3O1YkwCeAR19NAAD1wRJ4-QM380.jpg'
            ]
          },
          {
            imgUrl: 'https://static.lagou.com/i/image2/M00/07/82/CgotOVnMsHiAXCywAAAVGy9sMiM585.jpg',
            title: '爱奇艺',
            industry: '广告营销,文化娱乐',
            financeStage: 'D轮及以上',
            scale: '2000人以上',
            site: '北京',
            jobCount: 23,
            desc: '做一家以科技创新为驱动的伟大娱乐公司',
            pics: [
              'https://static.lagou.com/thumbnail_200x200/i/image/M00/60/BB/CgqKkVf6CRqAQnfvAABoMVTcCAU886.jpg',
              'https://static.lagou.com/thumbnail_200x200/i/image/M00/65/DE/CgpEMlmc2yiAaHuzABS8H-vWtzg027.jpg',
              'https://static.lagou.com/thumbnail_200x200/i/image/M00/65/E9/CgpEMlmc5P6AJ8StAAB0Bmmlc3g987.jpg',
              'https://static.lagou.com/thumbnail_200x200/i/image2/M00/02/7D/CgotOVnAtraAdHb5ABSx0Gy5VaQ004.jpg',
              'https://static.lagou.com/thumbnail_200x200/i/image2/M00/02/7F/CgoB5lnAtteACSFIABL_BlHf054163.jpg'
            ]
          },
          {
            imgUrl: 'https://static.lagou.com/i/image/M00/6A/05/Cgp3O1gW8zSAUwUsAABMptH-XY087.jpeg',
            title: '美团点评',
            industry: '移动互联网,O2O',
            financeStage: 'D轮及以上',
            scale: '2000人以上',
            site: '北京',
            jobCount: 63,
            desc: '点亮未来，共同成长。',
            pics: [
              'https://static.lagou.com/thumbnail_200x200/image1/M00/45/43/CgYXBlXarWmAY-9BAAB60AzF7qM150.PNG',
              'https://static.lagou.com/thumbnail_200x200/image1/M00/45/42/Cgo8PFXarYaAKKswAADDBF7E5gU651.PNG'
            ]
          }
        ],
        currIndex: 0
      }
    },
    methods: {
      selLogo(index) {
        this.currIndex = index
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  #company-wall
    .nav-companies
      .nav-logo
        display inline-block
        margin 30px 87px 28px 0
        overflow hidden
        cursor pointer
        .nav-img
          position relative
          &:hover
            .nav-hover-cycle
              position absolute
              left 0
              top 0
              width 66px
              height 66px
              border 2px solid #00b38a
              border-radius 50%
          img
            border-radius 50%
          .nav-logo-selected
            position absolute
            left 0
            top 0
            width 66px
            height 66px
            border 2px solid #00b38a
            border-radius 50%
        .company-short-name
          width 69px
          height 16px
          margin-top 16px
          text-align center
          overflow hidden
        &:nth-child(8n+8)
          margin-right 0
    .company-intro
      display block
      padding 25px 30px 30px
      overflow hidden
      background #fafafa
      h3
        height 28px
        margin 0
        line-height 28px
        font-size 20px
        color #333
      .company-base-info
        height 20px
        margin-top 15px
        line-height 20px
        font-size 14px
        color #777
        li
          display inline-block
          &+li
            margin-left 50px
        i
          margin-right 10px
          font-size 14px
      .company-desc
        line-height 20px
        margin-top 20px
        font-size 14px
        color #777
      .company-imgs
        margin-top 30px
        li
          display inline-block
          width 219px
          height 130px
          background-size cover
          &+li
            margin-left 11px
</style>
