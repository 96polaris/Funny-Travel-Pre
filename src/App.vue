<template>
  <div class="index">
    <!--页面顶部导航内容-->
    <home-header></home-header>
    <router-view></router-view>
    <!--页脚内容-->
    <home-footer></home-footer>

  </div>
</template>

<script>



  //<!--导入首页部分-->
  import Nav from './components/Home/Nav'
  import Foot from './components/Home/Foot'

  export default {
    name: 'App',
    components: {
      // 首页
      'home-header': Nav,
      'home-footer': Foot,
    },
    data() {
      return {data:[{}]}
    },


  }
</script>

<style>
  .index{
    margin: 0;
    padding: 0;
  }
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
</style>
