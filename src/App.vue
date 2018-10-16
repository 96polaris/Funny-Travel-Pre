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

 import axios from'axios'

  //<!--导入首页部分-->
  import nav from './components/Home/nav'
  import center from './components/Home/center'
  import footer from './components/Home/footer'
  //导入用户部分
  import userlogin from './components/User/userLogin.vue'
  import userregistry from './components/User/userRegistry.vue'

  export default {
    name: 'App',
    components: {
      // 首页
      'home-header': nav,
      'home-center': center,
      'home-footer': footer,
      //用户部分
      'user-login': userlogin,
      'user-registry': userregistry
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
