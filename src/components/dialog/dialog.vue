<template>
  <div id="dialog">
    <div class="cover"></div>
    <div class="panel">
      <div>
        <div class="top-left border fl"></div>
        <div class="top-center border fl"></div>
        <div class="top-right border fl"></div>
      </div>
      <div style="clear: left">
        <div class="middle-left border fl"></div>
        <div class="content fl">
          <slot></slot>
        </div>
        <div class="middle-right border fl"></div>
      </div>
      <div style="clear: left">
        <div class="bottom-left border fl"></div>
        <div class="bottom-center border fl"></div>
        <div class="bottom-right border fl"></div>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {}
</script>

<style lang="stylus" rel="stylesheet/stylus">
  $panel-width = 528px
  $panel-height = 510px

  #dialog
    .cover
      position fixed
      width 100%
      height 100%
      top 0
      left 0
      z-index 9999
      overflow hidden
      background url(//static.lagou.com/www/static/common/components/jquery-colorbox-custom/img/overlay_c2e5558.png) repeat 0 0
      opacity 0.9
      cursor pointer
      visibility visible
    .panel
      position fixed
      top 40%
      left 50%
      width $panel-width
      height $panel-height
      margin-left -($panel-width/ 2)
      margin-top -($panel-height/ 2)
      overflow hidden
      z-index 9999
      .border
        width 13px
        height 13px
        background #3a3a3a
        opacity .5
      .fl
        float left
      .top-center
        width 502px
      .middle-left
        height 484px
      .content
        width 502px
        height 484px
        overflow hidden
        background #fff
      .middle-right
        height 484px
      .bottom-center
        width 502px
</style>
