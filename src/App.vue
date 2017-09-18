<template>
  <div id="app">
    <tool-bar></tool-bar>
    <nav-bar></nav-bar>
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
    <m-footer></m-footer>
  </div>
</template>

<script type="text/ecmascript-6">
  import ToolBar from './components/tool-bar/tool-bar'
  import NavBar from './components/nav-bar/nav-bar'
  import MFooter from 'components/m-footer/m-footer'

  export default {
    components: {
      NavBar,
      MFooter,
      ToolBar
    }
  }
</script>
<style>
</style>
