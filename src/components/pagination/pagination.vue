<template>
  <div id="pagination">
    <span class="pager-prev" @click.stop="prev">上一页</span>
    <span v-if="omit" v-for="n in total" :class="{'page-is-current':n===mCurrentPage}"
          @click.stop="toPage(n)">{{n}}</span>
    <span class="pager-next" @click.stop="next">下一页</span>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    data() {
      return {
        mCurrentPage: this.currentPage
      }
    },
    props: {
      total: {
        type: Number,
        default: 0
      },
      currentPage: {
        type: Number,
        default: 1
      },
      pageSize: {
        type: Number,
        default: 10
      }
    },
    computed: {
      omit() {
        let n = this.mCurrentPage
        if (n > 3 && n < 20) {
          return false
        }
        return true
      }
    },
    methods: {
      toPage(n) {
        this.mCurrentPage = n
        this.$emit('update:currentPage', this.mCurrentPage)
      },
      prev() {
        this.mCurrentPage -= 1
      },
      next() {
        this.mCurrentPage += 1
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  #pagination
    span
      cursor pointer
      color #555
      display inline-block
      border 1px solid #ededed
      height 21px
      line-height 21px
      padding 3px 10px
      margin 0 5px
      font-size 4px
      text-decoration none
      &:first-child
        margin 0 5px 0 0
    .pager-prev-disable
      color silver !important
      cursor default !important
    .page-is-current
      background-color #00b38a !important
      color #fff !important
      font-weight 700
      border-color #00b38a !important

</style>
