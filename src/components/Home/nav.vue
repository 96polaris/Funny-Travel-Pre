<template>
  <!--//首页顶部-->
  <div>

    <span>您好，请<router-link to="/userlogin"><a href="">登录</a></router-link></span>
    <span><router-link to="/userregistry"><a href=""> 免费注册</a></router-link></span>
    <h2>苏之旅</h2>
    <!--顶部导航栏-->
    <ul class="nav nav-pills">
      <router-link tag="li" role="presentation" to="/" @click="toHome" class="active" exact><a href="">首页</a></router-link>
      <router-link tag="li" role="presentation" to=""><a href="">景点推荐</a></router-link>
      <router-link tag="li" role="presentation" to=""><a href="">线路推荐</a></router-link>
      <router-link tag="li" role="presentation" to=""><a href="">游记</a></router-link>
      <router-link tag="li" role="presentation" to=""><a href="">出行方式</a></router-link>
      <router-link tag="li" role="presentation" to=""><a href="">个人中心</a></router-link>
      <router-link tag="li" role="presentation" to=""><a href="">伴旅</a></router-link>
    </ul>

  </div>
</template>

<script>
  export default {
    name: "nav",
    methods:{
      toHome(){
        router.push({path:'/home'})
      }
    },

  }
</script>

<style scoped>

</style>
