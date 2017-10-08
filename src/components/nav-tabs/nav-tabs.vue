<template>
  <div id="nav-tabs">
    <span class="tab-item" @click="selTab(index)" :class="{active:index===tabCurrIndex}" v-for="(tab,index) in tabs">{{tab}}</span>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    props: {
      tabs: Array,
      tabCurrIndex: 0
    },
    methods: {
      selTab(index) {
        this.$emit('update:tabCurrIndex', index)
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  #nav-tabs
    line-height 22px
    color #999
    font-size 16px
    border-bottom 1px solid #e8e8e8
    .tab-item
      margin 0 60px 0 0
      padding 16px 0
      cursor pointer
      display inline-block
      &.active
        padding-bottom 14px
        color #333
        cursor default
        border-bottom 2px solid #333
</style>
