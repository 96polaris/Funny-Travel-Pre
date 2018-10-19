<template>
  <div>
    <nav class="navbar navbar-inverse">
      <div class="container-fluid">
        <div class="navbar-header">
          <button type="button" class="navbar-toggle collapsed marginT1" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
            <span class="sr-only">Toggle navigation</span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>
          <a class="navbar-brand">
            <img alt="骑趣" src="../assets/logo1.png">
          </a>
        </div>
        <div class="collapse navbar-collapse marginT" id="bs-example-navbar-collapse-1">
          <ul class="nav navbar-nav">
            <router-link tag="li" role="presentation" to="/" exact><a>首页</a></router-link>
            <router-link tag="li" role="presentation" to="/information" exact><a>资讯</a></router-link>
            <router-link tag="li" role="presentation" to="/strategy" exact><a>攻略</a></router-link>
            <router-link tag="li" role="presentation" to="/bike" exact><a>装备</a></router-link>
            <router-link tag="li" role="presentation" to="/share" exact><a>分享</a></router-link>
          </ul>
          <!--<form class="navbar-form navbar-left">-->
            <!--<div class="form-group">-->
              <!--<input type="text" class="form-control" placeholder="Search">-->
            <!--</div>-->
            <!--<button type="button" class="btn glyphicon glyphicon-search"></button>-->
          <!--</form>-->
          <ul class="nav navbar-nav navbar-right co-2">
            <li><a class="glyphicon glyphicon-search"></a></li>
            <router-link tag="li" to="/login" class="s1" v-if="this.$store.state.index == ''"><a class="glyphicon glyphicon-user">
              <span>登录</span>
            </a></router-link>
            <li class="b1" @mouseover="ulOver" @mouseout="ulOut" v-else="this.$store.state.index == 1">
              <a class="glyphicon glyphicon-user"></a>
              <ul style="display: none;" ref="ulStyle">
                <li class="li1 li2"><a href="#">个人空间</a></li>
                <!--<li class="li2"><a href="#">个人设置</a></li>-->
                <router-link tag="li" class="li2" to="/setting"><a>个人设置</a></router-link>
                <li class="li2"><a href="#">个人订单</a></li>
                <li class="li2"><a href="#">退出登录</a></li>
              </ul>
            </li>
            <li><a class="glyphicon glyphicon-comment"></a></li>
            <!--<router-link tag="li" to="/setting"><a class="glyphicon glyphicon-comment"></a></router-link>-->
          </ul>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
    export default {
        name: "Header",
      computed:{
        index(){
          return this.$store.state.index;
        }
      },
      methods:{
        ulOver(){
          const self = this;
          self.$refs.ulStyle.style.display = 'block';
        },
        ulOut(){
          const self = this;
          self.$refs.ulStyle.style.display = 'none';
        }
      }
    }
</script>


<style scoped>
  .navbar{
    margin-bottom: 0;
    height: 100px;
    background-color: black;
  }
  .marginT1{margin-top: 33px;}
  .navbar-right{margin-right: 1%}
  .marginT{margin-top: 25px;}
  .s1{position: relative;}
  .s1>a>span{position: absolute;bottom: -8px;left: 9px;
      display: none;
  }
  .b1{position: relative;background-color: #666;border-radius:12px;}
  .b1>.glyphicon-user{color: gray;}
  .b1>ul{
    list-style: none;
    width: 100px;
    background-color: black;
    padding-left: 0;
    position: absolute;
    top: 50px;
    left: -28px;
    z-index:999;
  }
  .b1>ul>.li1{margin-top: 40px;}
  .b1>ul>.li2{margin-bottom: 20px;}
  .b1>ul>li>a{text-decoration: none;color: gray;}
  .b1>ul>li>a:hover{color: white;}
  .s1:hover>a>span{display: block;}
  .co-2>li>a{color: yellow;}
  .co-2>li{margin-right: 30px;}
</style>
