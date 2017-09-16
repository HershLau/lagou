<template>
  <div id="app">
    <m-header></m-header>
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
    <m-footer></m-footer>
  </div>
</template>

<script type="text/ecmascript-6">
  import MHeader from './components/m-header/m-header'
  import MFooter from 'components/m-footer/m-footer'

  export default {
    components: {
      MHeader,
      MFooter
    }
  }
</script>
<style>
</style>
