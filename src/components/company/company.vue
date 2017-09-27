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
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import CompanyBanner from 'components/company-banner/company-banner'
  import FilterBox from 'components/filter-box/filter-box'

  export default {
    data() {
      return {
        orders: ['默认排序', '职位数量 ↓', '面试评价数 ↓', '简历处理率 ↓'],
        checked: false
      }
    },
    components: {
      CompanyBanner,
      FilterBox
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
</style>
