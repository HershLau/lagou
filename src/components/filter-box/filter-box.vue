<template>
    <ul id="filter-box">
      <div class="details">
        <li>
          <span class="title"></span>
          <div class="city-wrapper">
            <a class="active">公司地点：</a>
          </div>
          <a class="btn-more">更多 <i></i></a>
        </li>
      </div>
    </ul>
</template>

<script type="text/ecmascript-6">
  export default {}
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
      li
        padding 4px 0
        zoom 1
        color #555
        border-bottom 1px dashed transparent
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
          .active
            background #00b38a
            color #fff
          a
            display block
            padding 4px 8px
            cursor pointer
            float left
            margin-right 5px
            height 14px
            line-height 14px
        .btn-more
          color #555
          font-weight 400
          position relative
          z-index 11
          float right
          margin 0 16px
          background-color transparent
          display block
          padding 4px 8px
          height 14px
          line-height 14px
</style>
