<template>
  <ul id="filter-box">
    <div class="details">
      <div class="has-more workcity">
        <li class="clearfix">
          <span class="title">公司地点：</span>
          <div class="city-wrapper">
            <a v-for="site in sites" :class="{active:site===selSite}" @click="choseSite(site)">{{site}}</a>
          </div>
          <a class="btn-more">更多 <i></i></a>
        </li>
        <div class="more more-position">
          <li class="hot">
            <span class="title">公司地点：</span>
            <div class="city-wrapper">
              <a v-for="site in sites" :class="{active:site===selSite}" @click="choseSite(site)">{{site}}</a>
            </div>
          </li>
          <li class="other">
            <a v-for="other in otherSites">{{other}}</a>
          </li>
        </div>
      </div>
      <li class="multi-chosen financeStage clearfix">
        <span class="title">融资阶段：</span>
        <a :class="{active:fs===selFS}" v-for="fs in financeStages" @click="choseFS(fs)">{{fs}}<i
          class="delete"></i></a>
      </li>
      <div class="has-more industry clearfix">
        <li class="multi-chosen">
          <span class="title">行业领域：</span>
          <a :class="{active:i===selIndustry}" v-for="i in industries" @click="choseIndustry(i)">{{i}}<i
            class="delete"></i></a>
          <span class="btn-more-hy">更多 <i></i></span>
        </li>
      </div>
    </div>
  </ul>
</template>

<script type="text/ecmascript-6">
  export default {
    data() {
      return {
        sites: ['全国', '北京', '上海', '深圳', '广州', '杭州', '成都', '南京', '武汉', '西安', '厦门', '长沙', '苏州', '天津'],
        otherSites: ['重庆', '郑州', '青岛', '合肥', '福州', '济南', '大连', '珠海', '无锡', '佛山', '东莞', '宁波', '常州', '沈阳', '石家庄', '昆明', '南昌', '南宁', '哈尔滨', '海口', '中山', '惠州', '贵阳', '长春', '太原', '嘉兴', '泰安', '昆山', '烟台', '兰州', '泉州'],
        financeStages: ['不限', '未融资', '天使轮', 'A轮', 'B轮', 'C轮', 'D轮及以上', '上市公司', '不需要融资'],
        industries: ['不限', '移动互联网', '电子商务', '金融', '企业服务', '教育', '文化娱乐', '游戏', 'O2O', '硬件'],
        selSite: '全国',
        selFS: '不限',
        selIndustry: '不限'
      }
    },
    methods: {
      choseSite(site) {
        this.selSite = site
      },
      choseFS(fs) {
        this.selFS = fs
      },
      choseIndustry(industry) {
        this.selIndustry = industry
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  #filter-box
    position relative
    margin-top 35px
    padding 8px 0
    background-color #fafafa
    border 1px solid #ededed
    min-height 36px
    .details
      position relative
      overflow visible
      background #fafafa
      .workcity
        z-index 10
      .industry
        z-index 8
      .has-more
        position relative
      li
        position relative
        padding 4px 0
        zoom 1
        color #555
        border-bottom 1px dashed transparent
        span
        a
        .btn-more
          display block
          float left
          margin-right 5px
          padding 4px 8px
          height 14px
          line-height 14px
          cursor pointer
          &:hover
            background-color #fafafa
            color #333
        a:hover
          background #00b38a
          color #fff
        .title
          font-weight 600
          margin-right -5px
          margin-left 15px
        .city-wrapper
          width 1038px
          height 22px
          overflow hidden
          position absolute
          display inline-block
          a
            padding 4px 8px
            cursor pointer
        .btn-more
          color #555
          font-weight 400
          position relative
          z-index 11
          float right
          margin 0 16px
          background-color transparent
          i
            position absolute
            top 9px
            right -3px
            font-size 0
            height 0
            width 0
            border-width 6px 6px 0
            border-style solid dashed
            border-color #00b38a transparent transparent
            overflow hidden
            transition all .4s ease 0s
        .btn-more-hy
          color #555
          font-weight 400
          position relative
          z-index 11
          float right
          margin 0 16px
          background-color transparent
          i
            position absolute
            top 9px
            right -3px
            font-size 0
            height 0
            width 0
            border-width 6px 6px 0
            border-style solid dashed
            border-color #00b38a transparent transparent
            overflow hidden
            transition all .4s ease 0s
    .active
      background #00b38a
      color #fff
</style>
