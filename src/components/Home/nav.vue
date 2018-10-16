<template>
  <!--//首页顶部-->
  <div class="nav">
    <div class="nav-top"><span>您好，请<router-link to="/login"><a href="">登录</a></router-link></span>
      <span><router-link to="/registry"><a href=""> 免费注册</a></router-link></span></div>

    <h2>苏之旅</h2>
    <!--顶部导航栏-->
    <el-menu
      :default-active="activeIndex2"
      class="el-menu-demo"
      mode="horizontal"
      router="true"
      @select="handleSelect"
      background-color="#00c07b"
      text-color="#fff"
      active-text-color="#ffd04b">
      <el-menu-item index="/">首页</el-menu-item>
      <el-menu-item index="2">景点推荐</el-menu-item>
      <el-menu-item index="3">线路推荐</el-menu-item>
      <el-menu-item index="4">游记</el-menu-item>
      <el-menu-item index="5">出行方式</el-menu-item>
      <el-menu-item index="6">个人中心</el-menu-item>
      <el-menu-item index="7">伴旅</el-menu-item>
    </el-menu>
  </div>
</template>

<script>

  export default {
    name: "nav",
    data() {
      return {
        activeIndex2: '1'
      }
    },
    methods: {
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      },

      //获取热门线路
      gethotRoute() {
        axios({method: 'get', url: 'http://localhost:3000/manage/showHotRoute'}).then(function (result) {
          console.log(result.data.data);
        }, function (err) {
          console.log(err);
        })
      },
      //获取热门游记
      gethotRoute() {
        axios({method: 'get', url: 'http://localhost:3000/manage/showHotNote'}).then(function (result) {
          console.log(result.data.data);
        }, function (err) {
          console.log(err);
        })
      }
    },
  }

</script>

<style scoped>
.nav-top{
  margin: 0;
  padding-left:20px;
  background: #fafafa;
  border-bottom: 1px solid #eee;
  position: relative;
  z-index: 9999;
}
</style>
