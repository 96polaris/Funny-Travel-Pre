<template>
  <div class="container">
    <!--页面顶部导航内容-->
    <home-header ></home-header>

    <!--页脚内容-->
    <home-footer></home-footer>
    <router-view></router-view>
  </div>
</template>

<script>
  // <!--导入首页部分-->
  import nav from './components/Home/nav'
  import center from './components/Home/center'
  import footer from './components/Home/footer'

export default {
  name: 'App',
  components:{
    // 首页
    'home-header':nav,
    'home-center':center,
    'home-footer':footer,
  },
  methods:{

  }

}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
