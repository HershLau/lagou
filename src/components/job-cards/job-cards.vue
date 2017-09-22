<template>
  <div id="job-cards">
    <ul class="clearfix">
      <li v-for="job in jobList">
        <div class="top">
          <div class="pli-top-l clearfix">
            <div class="position-name">
              <h2>
                <a class="wordCut">{{job.position}}</a>
              </h2>
              <span class="create-time"> [{{job.createAt}}发布] </span>
            </div>
            <span class="salary">{{job.salary}}k</span>
          </div>
          <div class="position-main-info wordCut">
            <span>经验{{job.experience}}年</span>
            <span>{{job.education}}</span>
          </div>
          <div class="labels">
            <div class="pli-btm-l">
              <span class="wordCut" v-for="tag in job.tags">{{tag}}</span>
            </div>
          </div>
        </div>
        <div class="bottom">
          <a>
            <img :src="job.coverImg" width="40" height="40">
          </a>
          <div class="bottom-right">
            <div class="company-name">
              <a>{{job.company}}</a>
            </div>
            <div class="industry wordCut">
              <span>{{job.industry | industryConcat}}</span>
              <span>{{job.site}}</span>
            </div>
          </div>
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
        jobList: [
          {
            position: '运营经理（互联网方向）',
            createAt: '14:09',
            salary: '10-15',
            experience: '3-5',
            education: '大专',
            tags: ['广告营销', '总监', '活动运营'],
            coverImg: '//static.lagou.com/thumbnail_100x100/i/image/M00/26/1C/Cgp3O1cgaI6AY_TUAAEtJbC_KYk278.png',
            company: '荟友网络',
            industry: ['移动互联网', '数据服务'],
            scale: '成长性（A轮）',
            site: '广东'
          },
          {
            position: 'Windows客户端工程师',
            createAt: '14:05',
            salary: '20-40',
            experience: '5-10',
            education: '本科',
            tags: ['ATL/WTL/STL/MF', 'Visual'],
            coverImg: '//static.lagou.com/thumbnail_100x100/i/image/M00/C1/AD/Cgp3O1jYc_CAfdztAAAdx8UgWTs625.png',
            company: '文网亿联',
            industry: ['移动互联网'],
            scale: '成长性（A轮）',
            site: '北京'
          },
          {
            position: 'BD-客户经理',
            createAt: '14:08',
            salary: '10-15',
            experience: '3-5',
            education: '本科',
            tags: ['电商', '地推', '运营'],
            coverImg: '//static.lagou.com/thumbnail_100x100/image1/M00/00/2E/CgYXBlTUXHqAEUgrAAAwgab5fCY349.jpg',
            company: '丽人丽妆',
            industry: ['电子商务'],
            scale: '成长型（B轮）',
            site: '上海'
          },
          {
            position: 'Java开发工程师',
            createAt: '14:07',
            salary: '15-25',
            experience: '3-5',
            education: '本科',
            tags: ['MySQL', '后端'],
            coverImg: '//static.lagou.com/thumbnail_100x100/i/image/M00/0F/76/Cgp3O1beL0SAXXZQAAKr3DXC-kc096.png',
            company: '宏立城集团',
            industry: ['电子商务', '移动互联网'],
            scale: '成熟型(不需要融资)',
            site: '广东'
          },
          {
            position: '财务总监',
            createAt: '14:06',
            salary: '8-16',
            experience: '5-10',
            education: '本科',
            tags: ['金融', '税务', '融资'],
            coverImg: '//static.lagou.com/thumbnail_100x100/i/image/M00/54/7B/CgpFT1mBTLSAUxn3AAGwpxQ8wig393.jpg',
            company: '四川人人惠享',
            industry: ['电子商务', 'O2O'],
            scale: '成熟型(不需要融资) ',
            site: '四川'
          },
          {
            position: '销售主管',
            createAt: '14:05',
            salary: '7-10',
            experience: '3-5',
            education: '大专',
            tags: ['saas', '团购'],
            coverImg: '//static.lagou.com/thumbnail_100x100/image1/M00/00/2E/CgYXBlTUXHyAFygLAAA0fHylWOw885.jpg',
            company: 'SendCloud',
            industry: ['移动互联网', '企业服务'],
            scale: '成长型(A轮)',
            site: '上海'
          },
          {
            position: '产品经理 ',
            createAt: '14:04',
            salary: '15-20',
            experience: '3-5',
            education: '本科',
            tags: ['移动互联网', '产品设计', '互联网+'],
            coverImg: '//static.lagou.com/thumbnail_100x100/i/image/M00/23/5E/CgqKkVcXQfOAZdKBAAANFG8NI5Q925.png',
            company: '百安居',
            industry: ['O2O', '其他'],
            scale: '成熟型(不需要融资)',
            site: '上海'
          },
          {
            position: '法务主管',
            createAt: '14:03',
            salary: '6-8',
            experience: '1-3',
            education: '本科',
            tags: ['主管', '法务', '助理'],
            coverImg: '//static.lagou.com/thumbnail_160x160/i/image/M00/6E/24/CgqKkVghd2aAIhm3AABeYT_-upQ128.jpg',
            company: '物灵智能科技',
            industry: ['硬件', '移动互联网'],
            scale: '不需要融资',
            site: '北京 '
          },
          {
            position: 'java高级工程师 ',
            createAt: '14:03',
            salary: '15-25',
            experience: '3-5',
            education: '大专',
            tags: ['教育', '旅游', '电商'],
            coverImg: '//static.lagou.com/thumbnail_100x100/i/image/M00/52/03/CgpFT1l8BiaAQcg4AAGLQgH7n_c799.jpg',
            company: '环金科技',
            industry: ['电子商务'],
            scale: '初创型(未融资)',
            site: '广东'
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
  #job-cards
    ul
      width 1216px
      margin 0
      padding 0
      list-style none
      li
        float left
        box-sizing border-box
        position relative
        width 389px
        height 200px
        margin 16px 16px 0 0
        padding 20px 18px 0
        border 1px solid #eaeeed
        background-color #fff
        &:hover
          box-shadow 0 0 10px 0 rgba(56, 81, 76, .12)
        .top
          .pli-top-l
            .position-name
              height 22px
              font-size 0
              max-width 290px
              float left
              h2
                display inline-block
                vertical-align middle
                font-size 16px
                padding 0
                margin 0
                color #333
                a
                  max-width 145px
                  float left
                  color #555
                  background-color transparent
                  text-decoration none
                  cursor pointer
                  &:hover
                    color #00b38a
              .create-time
                color #999
                font-size 14px
                display inline-block
                vertical-align middle
            .salary
              font-size 16px
              color #fa6041
              float right
          .position-main-info
            height 30px
            line-height 30px
            color #777
            span:nth-child(2):before
              content ' / '

          .labels
            margin-top 5px
            .pli-btm-l
              margin-right 20px
              height 30px
              line-height 30px
              overflow hidden
              span
                display inline-block
                width 61px
                height 26px
                padding 0 5px
                font-size 12px
                line-height 24px
                color #999
                border 1px solid #f0f0f0
                border-radius 3px
                text-align center
                text-overflow ellipsis
                overflow hidden
                white-space nowrap
                word-wrap normal
                & + span
                  margin-left 6px
        .bottom
          margin-top 18px
          padding-top 18px
          border-top 1px dashed #e0e0e0
          a
            float left
            color #555
            background-color transparent
            text-decoration none
            img
              border 0
              vertical-align top
              display inline-block
              cursor pointer
          .bottom-right
            margin-left 54px
            .company-name
              height 20px
              line-height 20px
              font-size 14px
              color #333
              a
                color #555
                background-color transparent
                text-decoration none
                cursor pointer
                &:hover
                  color #00b38a
            .industry
              height 20px
              line-height 20px
              color #999
              span:nth-child(n+2):before
                content ' / '

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
