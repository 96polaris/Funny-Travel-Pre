<template>
  <div style="width: 100%">
  <el-carousel :interval="5000" arrow="always" height="515px" width="100%">
    <el-carousel-item v-for="(img,index) in imgList" :key="index">
      <img v-bind:src="img.url">
    </el-carousel-item>
  </el-carousel>
    </div>
</template>
<script>
  import 'element-ui/lib/theme-chalk/index.css'
  import ElementUI from 'element-ui'
  export default {
       data(){
      return{
        imgList:[
          {url:require('../../assets/1.jpg')},
          {url:require('../../assets/2.jpg')},
          {url:require('../../assets/3.jpg')},
          {url:require('../../assets/4.jpg')},
        ]
      }
    }
  }
</script>

<style>
  .el-carousel__item img {
    color: #475669;
    font-size: 18px;
    opacity: 1;
    line-height: 300px;
    margin: 0;
  }

  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }

  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }

</style>
