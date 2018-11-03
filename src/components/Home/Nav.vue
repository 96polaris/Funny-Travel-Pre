<template id="mynav">
  <!--//首页顶部-->
  <div class="nav">
    <div class="logo">
      <img src="../../assets/logo.png"/>
      <div class="login" v-if="this.userName==null">
        <div class="nav-top"><span>您好，请<router-link to="/login">登录</router-link></span>
          <span><router-link to="/registry"> 免费注册</router-link></span>
        </div>
      </div>

      <div class="login" v-else="this.userName!=null">
        <div class="nav-top" ><span>您好，欢迎 <span>{{this.userName}}</span></span>
          <span @click="clear" class="btn">注销</span>
        </div>
      </div>

    </div>   <!--顶部导航栏-->
      <el-menu
        :default-active="activeIndex2"
        class="el-menu-demo"
        mode="horizontal"
        router
        @select="handleSelect"
        background-color="#00c07b"
        text-color="#fff"
        active-text-color="#ffd04b">
        <el-menu-item style="font-size: 16px" index="/">首页</el-menu-item>
        <el-menu-item style="font-size: 16px"index="/scenic/wuzhongqu">景点推荐</el-menu-item>
        <el-menu-item style="font-size: 16px"index="/routeline/oneday">线路推荐</el-menu-item>
        <el-menu-item style="font-size: 16px"index="/youji">游记</el-menu-item>
        <el-menu-item style="font-size: 16px"index="/5">出行方式</el-menu-item>
        <el-menu-item style="font-size: 16px"index="" @click="checkLogin()">个人中心</el-menu-item>
        <el-menu-item style="font-size: 16px"index="/activity">伴旅</el-menu-item>
      </el-menu>
    </div>
</template>

<script>
  export default {
    name: "Nav",
    data() {
      return {
        activeIndex2: '1',
        userName:sessionStorage.getItem('userName')

      }
    },
    methods: {
      handleSelect(key, keyPath) {
      },
      clear(){
       this.$store.state.userName=''
        sessionStorage.clear()
        this.$router.push({path:'/login'})

      },
      checkLogin(){
        if(sessionStorage.getItem('userId')==null){
          alert('请登陆后查看个人中心')
          this.$router.push({path:'/login'})
        }else{
          this.$router.push({path:'/personalCenter'})
        }
      }
    },
    watch: {
      '$route' (to, from) {
        this.$router.go(0);
      }},
    computed:{
      userInfo(){
        return sessionStorage.getItem('userName')
        console.log(sessionStorage.getItem('userName'));
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
    float: right;
    margin-top: 25px;
  }
  .btn:hover{
    color: red;
    cursor: pointer;
  }
  .el-menu-demo el-menu--horizontal el-menu{
    height: 50px;
  }
  .el-menu-item{
    height: 50px;
    line-height: 50px;
  }

</style>
