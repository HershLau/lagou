<template>
  <div id="carousel">
    <transition-group name="list" class="slide-ul">
      <li :class="carousel.class" v-show="index===currentIndex" v-for="(carousel,index) in carousels" :key="index">
        <a :href="carousel.linkUrl">
          <img :src="carousel.imgUrl" width="840" height="346">
        </a>
      </li>
    </transition-group>
    <div class="banner-control"></div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    data() {
      return {
        carousels: [
          {class: 'banner_bg_1', linkUrl: 'https://activity.lagou.com/activity/dist/strength2017/pc/index.html', imgUrl: 'https://static.lagou.com/i/image2/M00/00/F5/CgotOVm95ciADu3eAAUOJI8DOvQ635.JPG'},
          {class: 'banner_bg_2', linkUrl: 'https://activity.lagou.com/topic/mengxiangzheshiji.html', imgUrl: 'https://static.lagou.com/i/image2/M00/01/18/CgoB5lm-TzWAFMfFAAQti4HkJxQ580.JPG'}
        ],
        currentIndex: 0
      }
    },
    created() {
      this.timer = setInterval(() => {
        this.autoPlay()
      }, 2000)
    },
    methods: {
      autoPlay() {
        this.currentIndex++
        if (this.currentIndex > this.carousels.length - 1) {
          this.currentIndex = 0
        }
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
  .list-enter-active
    transition all .4s ease
    transform translateX(0)
  .list-leave-active
    transition all .4s ease
    transform translateX(-100%)
  .list-enter
    transform translateX(100%)
  .list-leave
    transform translateX(0)
</style>
