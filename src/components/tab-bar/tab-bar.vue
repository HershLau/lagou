<template>
  <ul id="tab-bar">
    <li v-for="(i,index) in jobList" :class="{current:index===currentIndex}" @click="chooseTab(index)">{{i}}</li>
  </ul>
</template>

<script type="text/ecmascript-6">
  export default {
    data() {
      return {
        jobList: ['推荐职位', '热门职位', '最新职位'],
        currentIndex: 0
      }
    },
    methods: {
      chooseTab(index) {
        this.currentIndex = index
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  #tab-bar
    margin-top 52px
    margin-bottom 14px
    font-size 0
    border-bottom 1px solid #e8e8e8
    li
      cursor pointer
      display inline-block
      padding 14px 0
      margin-right 58px
      font-size 16px
      color #999
      &.current
        border-bottom 2px solid #333
        background #fff
        color #333
</style>
