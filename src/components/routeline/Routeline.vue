<template>
  <div>
    <!--<div class="bgimage row">-->
      <!--<img src="../../assets/bg.png" class="img-responsive" alt="Responsive image">-->
    <!--</div>-->
    <!--<div class="search row">-->
      <!--<div class="input-group col-sm-4 col-sm-offset-4 col-md-4 col-md-offset-4">-->
        <!--<input type="text" class="form-control" placeholder="">-->
        <!--<span class="input-group-btn">-->
          <!--<button class="btn btn-default" type="button">搜索</button>-->
        <!--</span>-->
      <!--</div>&lt;!&ndash; /input-group &ndash;&gt;-->

    <div id="app">
      <el-row :gutter="0">
        <el-carousel :interval="2000" type="card" arrow="never" height="360px" >
          <el-carousel-item v-for="(img,index) in imageList" :key="index">
            <div class="grid-content">
              <el-col :md="24" :offset="0">
                <div class="img">
                  <img :src="img.src" height="350px">

                </div>
              </el-col>
            </div>
          </el-carousel-item>
        </el-carousel>
      </el-row>
    </div>

   <div class="nav-day">
        <ul class="routeday nav nav-pills ">
          <!--exact可以避免根路由使用始终激活的样式-->
          <router-link  tag="li" role="presentation" :to="{path:'/routeline/oneday'}" ><a>一日游</a></router-link>
          <router-link  tag="li" role="presentation"  :to="{path:'/routeline/twoday'}" ><a>二日游</a></router-link>
          <router-link  tag="li" role="presentation"  :to="{path:'/routeline/threeday'}" ><a>三日游</a></router-link>
        </ul>

    </div>


    <router-view></router-view>
  </div>

</template>

<script>
    export default {
        name: "Routeline",
      data(){
        return{
          imageList: [
            // {
            //   src: require('../../assets/lineimg/bg1.jpg'),
            //
            // },
            // {
            //   src: require('../../assets/lineimg/bg2.jpg'),
            // }
            // ,
            // {
            //   src: require('../../assets/lineimg/bg3.jpg'),
            // },
            // {
            //   src: require('../../assets/lineimg/bg4.jpg'),
            // }
            {src: require('../../assets/activityImg/01.jpg'),},
            {src: require('../../assets/activityImg/02.jpg'),},
            {src: require('../../assets/activityImg/03.jpg'),},
            {src: require('../../assets/activityImg/04.jpg'),}
          ]
        }
      }

    }
</script>

<style scoped>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    /*width: 80%;*/
    height: 30%;
    /*margin: 0 auto;*/
    position: relative;
    /*margin-left: 0.1%;*/
    margin-top: 20px;
    z-index:1;
  }
  /*.bgimage img{*/
    /*width:100%;*/
    /*height: 400px;*/
  /*}*/
  /*.search{*/
   /*margin-top: -150px;*/
  /*}*/

  .routeday{
    margin-top: 10px;
    width: 500px;
    margin: 0 auto;

  }
  .nav-day{
    width: 100%;
    /*background-color: mediumseagreen;*/
  }
  .routeday li{
    width:150px;
    height: 50px;
    line-height: 30px;
    text-align: center;
  }
  .routeday li a{
    font-size: 18px;
  }
  .routeday li a:hover{
    font-size: 20px;
  }
  .img img{
    border-radius: 5px;
  }
</style>
