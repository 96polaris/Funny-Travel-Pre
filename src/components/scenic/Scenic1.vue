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
      <!--</div>-->

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

    <app-sceniclocation></app-sceniclocation>

    <router-view></router-view>
  </div>

</template>

<script>
  import Sceniclocation from './Sceniclocation1'

  //import Wuzhongqu from 'wuzhongqu'
    export default {
        name: "scenic",
      components:{
      'app-sceniclocation':Sceniclocation,
      },
      data(){
        return{
          imageList: [
            {
              src: require('../../assets/lineimg/bg5.jpg'),

            },
            {
              src: require('../../assets/lineimg/bg6.jpg'),
            }
            ,
            {
              src: require('../../assets/lineimg/bg7.jpg'),
            },
            {
              src: require('../../assets/lineimg/bg8.jpg'),
            }
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
  .img img{
    border-radius: 5px;
  }
.bgimage img{
  width:100%;
  height: 400px;
}


</style>
