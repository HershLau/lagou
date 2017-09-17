<template>
  <div id="app">
    <tool-bar></tool-bar>
    <m-header></m-header>
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
    <m-footer></m-footer>
  </div>
</template>

<script type="text/ecmascript-6">
  import ToolBar from './components/tool-bar/tool-bar'
  import MHeader from './components/m-header/m-header'
  import MFooter from 'components/m-footer/m-footer'

  export default {
    components: {
      MHeader,
      MFooter,
      ToolBar
    }
  }
</script>
<style>
</style>
