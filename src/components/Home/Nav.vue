<template>
  <!--//首页顶部-->
  <div class="nav">
    <div class="logo">
      <img src="../../assets/logo.png"/>
      <div class="nav-top"><span>您好，请<router-link to="/login"><a href="">登录</a></router-link></span>
        <span><router-link to="/registry"><a href=""> 免费注册</a></router-link></span>
    </div>
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
  </div>
</template>

<script>

  export default {
    name: "Nav",
    data() {
      return {
        activeIndex2: '1'
      }
    },
    methods: {
      handleSelect(key, keyPath) {
      },
    },
  }

</script>

<style scoped>
.nav-top{
  display: inline-block;
  text-align: center;
  margin-right: 20px;
  position: relative;
  z-index: 9999;
}
  .el-menu-item{
    width: 14%;
    text-align: center;
  }
.logo img{
  height: 60px;
     }
</style>
