<template>
  <div id="pagination">
    <span class="item" :class="{'pager-disable':1===mCurrentPage}" @click.stop="prev">上一页</span>
    <span class="item" :class="{'page-is-current':1===mCurrentPage}" @click.stop="toPage({index:1})">1</span>
    <span v-show="mCurrentPage>4">···</span>
    <span class="item" v-if="n.visible" v-for="n in pageArr" :class="{'page-is-current':n.index===mCurrentPage}"
          @click.stop="toPage(n)">{{n.index}}</span>
    <span v-show="mCurrentPage<total-3">···</span>
    <span class="item" :class="{'page-is-current':total===mCurrentPage}"
          @click.stop="toPage({index:total})">{{total}}</span>
    <span class="item" :class="{'pager-disable':total===mCurrentPage}" @click.stop="next">下一页</span>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    data() {
      return {
        mCurrentPage: this.currentPage,
        pageArr: []
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
    created() {
      for (let i = 0; i < this.total - 2; i++) {
        let page = {
          index: i + 2,
          visible: false
        }
        if (i < 2) {
          page.visible = true
        }
        this.pageArr.push(page)
      }
    },
    watch: {
      mCurrentPage: function (n) {
        this.pageArr.forEach(function (p) {
          p.visible = true
        })
        if (n < this.total - 3) {
          for (let i = n + 3; i < this.total; i++) {
            this.pageArr[i - 2].visible = false
          }
        }
        if (n > 4) {
          for (let i = 2; i < n - 2; i++) {
            this.pageArr[i - 2].visible = false
          }
        }
      }
    },
    methods: {
      toPage(n) {
        this.mCurrentPage = n.index
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
    .item
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
      &.pager-disable
        color silver !important
        cursor default !important
    .page-is-current
      background-color #00b38a !important
      color #fff !important
      font-weight 700
      border-color #00b38a !important

</style>
