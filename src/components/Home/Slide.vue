<template>
    <div id="app">
      <el-row :gutter="0">
        <el-carousel :interval="2000" type="card" arrow="never" height="450px" >
          <el-carousel-item v-for="(img,index) in imageList" :key="index">
            <div class="grid-content">
              <el-col :md="24" :offset="0">
                <div class="img">
                  <img :src="img.src" height="600px">
                </div>
              </el-col>
            </div>
          </el-carousel-item>
        </el-carousel>
      </el-row>
    </div>
</template>

<script>
  export default {
        name: "Slide",
      data(){
          return{
            imageList: [
              {
                src: require('../../assets/slideImage/slide1.jpg'),

              },
              {
                src: require('../../assets/slideImage/slide2.jpg'),
              }
              ,
              {
                src: require('../../assets/slideImage/slide3.jpg'),
              },
              {
                src: require('../../assets/slideImage/slide4.jpg'),
              }
            ]
      }

      }
    }
</script>

<style scoped>
  .img{
    /*width: 80%;*/
    /*height: 30%;*/
    /*margin: 0 auto;*/
  }

  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    /*width: 80%;*/
    height: 40%;
    /*margin: 0 auto;*/
    position: relative;
    /*margin-left: 0.1%;*/
    margin-top: 20px;
    z-index:1;
  }
  .el-carousel__mask{
    width: 250px;
  }
</style>
