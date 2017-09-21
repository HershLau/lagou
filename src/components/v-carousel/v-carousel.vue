<template>
  <div id="carousel" @mouseover="_mouseOverHandler" @mouseout="_mouseOutHandler">
    <transition-group name="list" class="slide-ul" tag="ul">
      <li :class="carousel.class" v-show="index===currentIndex" v-for="(carousel,index) in carousels" :key="index">
        <a :href="carousel.linkUrl">
          <img :src="carousel.imgUrl" width="840" height="346">
        </a>
      </li>
    </transition-group>
    <div class="slide-control">
      <div v-show="controlVisible">
        <em class="control-left" @click.stop="prev"></em>
        <em class="control-right" @click.stop="next"></em>
      </div>
      <ul class="thumbs">
        <li v-for="(carousel,index) in carousels" @click.stop="change(index)"><i :class="{current: index===currentIndex}" class="circle"></i></li>
      </ul>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    data() {
      return {
        carousels: [
          {
            class: 'banner_bg_1',
            linkUrl: 'https://activity.lagou.com/activity/dist/strength2017/pc/index.html',
            imgUrl: 'https://static.lagou.com/i/image2/M00/00/F5/CgotOVm95ciADu3eAAUOJI8DOvQ635.JPG'
          },
          {
            class: 'banner_bg_2',
            linkUrl: 'https://activity.lagou.com/topic/mengxiangzheshiji.html',
            imgUrl: 'https://static.lagou.com/i/image2/M00/01/18/CgoB5lm-TzWAFMfFAAQti4HkJxQ580.JPG'
          },
          {
            class: 'banner_bg_3',
            linkUrl: 'https://www.lagou.com/gongsi/262324.html',
            imgUrl: 'https://static.lagou.com/i/image2/M00/03/D2/CgotOVnDHR2AKbUpAAgNb89Cl3g008.JPG'
          }
        ],
        currentIndex: 0,
        controlVisible: false
      }
    },
    created() {
      this.start()
    },
    methods: {
      autoPlay() {
        this.currentIndex++
        if (this.currentIndex > this.carousels.length - 1) {
          this.currentIndex = 0
        }
      },
      stop() {
        clearInterval(this.timer)
      },
      start() {
        this.timer = setInterval(() => {
          this.autoPlay()
        }, 4000)
      },
      change(index) {
        this.currentIndex = index
      },
      next() {
        this.currentIndex++
        if (this.currentIndex > this.carousels.length - 1) {
          this.currentIndex = 0
        }
      },
      prev() {
        this.currentIndex--
        if (this.currentIndex < 0) {
          this.currentIndex = this.carousels.length - 1
        }
      },
      _mouseOverHandler() {
        this.controlVisible = true
        this.stop()
      },
      _mouseOutHandler() {
        this.controlVisible = false
        this.start()
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  #carousel
    .slide-ul
      width 100%
      height 100%
      li
        position absolute
        list-style none
    .slide-control
      .control-left
      .control-right
        position absolute
        top 156px
        width 18px
        height 34px
        background-repeat no-repeat
        background-size 18px 34px
        cursor pointer
        z-index 500
      .control-left
        left 20px
        background-image url(//static.lagou.com/www/static/index/modules/banner/img/banner_arrow_left_d3b0e08.png)
        &:hover
          background-image url(//static.lagou.com/www/static/index/modules/banner/img/banner_arrow_left_highlight_5ac917a.png)
      .control-right
        right 20px
        background-image url(//static.lagou.com/www/static/index/modules/banner/img/banner_arrow_right_3f34f72.png)
        &:hover
          background-image url(//static.lagou.com/www/static/index/modules/banner/img/banner_arrow_right_highlight_52214c7.png)
      .thumbs
        position absolute
        bottom 16px
        left 50%
        list-style none
        margin 0
        padding 0
        li
          float left
          width 15px
          height 6px
          cursor pointer
          text-align center
          .circle
            display block
            margin 0 auto
            width 6px
            height 6px
            border-radius 3px
            background-color rgba(255, 255, 255, .5)
            transition width .2s ease-in-out, background-color .1s
            &.current
              width 12px
              background-color #fff

  .list-enter-active
    transition all .3s ease
    transform translateX(0)

  .list-leave-active
    transition all .3s ease
    transform translateX(-100%)

  .list-enter
    transform translateX(100%)

  .list-leave
    transform translateX(0)
</style>
