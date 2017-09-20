<template>
  <div>
    <ul class="banner-bg" ref="list">
      <li :class="carousel.class" v-for="carousel in carousels">
        <a :href="carousel.linkUrl">
          <img :src="carousel.imgUrl" width="840" height="346">
        </a>
      </li>
    </ul>
    <div class="banner-control"></div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    data() {
      return {
        carousels: [
          {class: 'banner_bg_2', linkUrl: 'https://activity.lagou.com/topic/mengxiangzheshiji.html', imgUrl: 'https://static.lagou.com/i/image2/M00/01/18/CgoB5lm-TzWAFMfFAAQti4HkJxQ580.JPG'},
          {class: 'banner_bg_1', linkUrl: 'https://activity.lagou.com/activity/dist/strength2017/pc/index.html', imgUrl: 'https://static.lagou.com/i/image2/M00/00/F5/CgotOVm95ciADu3eAAUOJI8DOvQ635.JPG'},
          {class: 'banner_bg_2', linkUrl: 'https://activity.lagou.com/topic/mengxiangzheshiji.html', imgUrl: 'https://static.lagou.com/i/image2/M00/01/18/CgoB5lm-TzWAFMfFAAQti4HkJxQ580.JPG'},
          {class: 'banner_bg_1', linkUrl: 'https://activity.lagou.com/activity/dist/strength2017/pc/index.html', imgUrl: 'https://static.lagou.com/i/image2/M00/00/F5/CgotOVm95ciADu3eAAUOJI8DOvQ635.JPG'}
        ]
      }
    },
    created() {
      this.distance = 0
      this.timer = setInterval(() => {
        this.distance -= 840
        this.autoPlay(this.distance)
      }, 2000)
    },
    methods: {
      autoPlay(distance) {
        this.$refs.list.style.transition = 'all 0.4s'
        this.$refs.list.style.left = `${distance}px`
        if (this.distance <= -2520) {
          console.log('aaa')
          this.distance = -840
          setTimeout(() => {
            this.$refs.list.style.transition = 'none'
            this.$refs.list.style.left = this.distance + 'px'
          }, 400)
        }
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .banner-bg
    zoom 1
    position absolute
    left -840px
    width 3360px
    transition all 0.4s
    li
      float left
      width 840px
      height 346px
      a
        color #555
        background-color transparent
        text-decoration none
        img
          border 0
          vertical-align top
          display inline-block
</style>
