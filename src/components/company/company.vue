<template>
    <div id="company">
      <company-banner></company-banner>
      <div class="content-container">
        <div class="company-list-container">
          <div class="position-head">
            <filter-box></filter-box>
          </div>
        </div>
      </div>
    </div>
</template>

<script type="text/ecmascript-6">
  import CompanyBanner from 'components/company-banner/company-banner'
  import FilterBox from 'components/filter-box/filter-box'

  export default {
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
</style>
