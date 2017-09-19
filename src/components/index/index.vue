<template>
  <div id="index">
    <search-bar></search-bar>
    <div class="container-body">
      <div class="clearfix">
        <div class="side-bar">
          <side-bar></side-bar>
        </div>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import SearchBar from 'base/search-bar/search-bar'
  import SideBar from 'base/side-bar/side-bar'

  export default {
    components: {
      SearchBar,
      SideBar
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
</style>
