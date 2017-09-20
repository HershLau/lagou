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
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import SearchBar from 'components/search-bar/search-bar'
  import SideBar from 'components/side-bar/side-bar'
  import VCarousel from 'components/v-carousel/v-carousel'

  export default {
    components: {
      SearchBar,
      SideBar,
      VCarousel
    }
  }

</script>

<style lang="stylus" rel="stylesheet/stylus">
  #index
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
</style>
