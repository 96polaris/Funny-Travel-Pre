<!--轮播图-->
<template>
  <div style="width: 1200px;">
    <div id="app">
      <el-row :gutter="0">
        <el-carousel :interval="2000" type="card" arrow="never" height="360px" >
          <el-carousel-item v-for="(item,index) in dataimg" :key="index">
            <div class="grid-content">
              <el-col :md="24" :offset="0">
                <div class="img">
                  <img :src="item.src" height="350px">
                </div>
              </el-col>
            </div>
          </el-carousel-item>
        </el-carousel>
      </el-row>
    </div>
  </div>
 </template>

<script>
import 'element-ui/lib/theme-chalk/index.css'

export default {
data(){
return{
  dataimg: [
    {src: require('../../assets/noteSlide/1.jpg'),},
    {src: require('../../assets/noteSlide/2.jpg'),},
    {src: require('../../assets/noteSlide/3.jpg'),},
    {src: require('../../assets/noteSlide/4.jpg'),}
  ],

}
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
    width: 1200px;
    height: 30%;
    position: relative;
    margin-left: 0.1%;
    margin-top: 0;
    z-index:1;
  }

</style>

