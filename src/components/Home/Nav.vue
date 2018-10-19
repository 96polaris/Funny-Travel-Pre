<template id="mynav">
  <!--//首页顶部-->
  <div class="nav">
    <div class="logo">
      <img src="../../assets/logo.png"/>
      <div class="login" v-if="this.$store.state.userName==''">
        <div class="nav-top"><span>您好，请<router-link to="/login">登录</router-link></span>
          <span><router-link to="/registry"> 免费注册</router-link></span>
        </div>
      </div>

      <div class="login" v-else="this.$store.state.userName!=''">
        <div class="nav-top" ><span>您好，欢迎<span>{{userInfo}}</span></span>
          <span @click="clear" class="btn">注销</span>
        </div>
      </div>

    </div>   <!--顶部导航栏-->
      <el-menu
        :default-active="activeIndex2"
        class="el-menu-demo"
        mode="horizontal"
        router=true
        @select="handleSelect"
        background-color="#00c07b"
        text-color="#fff"
        active-text-color="#ffd04b">
        <el-menu-item index="/">首页</el-menu-item>
        <el-menu-item index="2">景点推荐</el-menu-item>
        <el-menu-item index="3">线路推荐</el-menu-item>
        <el-menu-item index="/youji">游记</el-menu-item>
        <el-menu-item index="5">出行方式</el-menu-item>
        <el-menu-item index="/user">个人中心</el-menu-item>
        <el-menu-item index="7">伴旅</el-menu-item>
      </el-menu>
    </div>
</template>

<script>
  export default {
    name: "Nav",
    data() {
      return {
        activeIndex2: '1',

      }
    },
    methods: {
      handleSelect(key, keyPath) {
      },
      clear(){
       this.$store.state.userName=''

      }
    },
    computed:{
      userInfo(){
        return this.$store.state.userName
      }
    }

  }

</script>

<style scoped>
  .nav-top {
    display: inline-block;
    text-align: center;
    margin-right: 20px;
    position: relative;
    z-index: 9999;
  }

  .el-menu-item {
    width: 14%;
    text-align: center;
  }

  .logo img {
    height: 60px;
  }

  .login {
    display: inline-block;
  }
  .btn:hover{
    color: red;
    cursor: pointer;
  }
 .el-menu-demo el-menu--horizontal el-menu {
   height: 53px;
 }
  .el-menu-item{
     height: 42px;
    line-height: 42px;
   }
</style>
