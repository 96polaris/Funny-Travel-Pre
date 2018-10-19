<template>
  <div>
    <h2>找线路</h2>
    <div class="route">
      <div v-for="(value,index) in route" v-if="index<num" >
        <div class="routeone">
          <img :src="value.routeImage">
          <h3>{{value.routeName}}</h3>
          <div class="content">
            <p>
            {{value.routeIntroduction}}
          </p></div>
        </div>
      </div>
    </div>
    <div class="btn">
      <el-button type="primary" @click="more">︾</el-button>
      <el-button type="primary" @click="back">︽</el-button>
    </div>
  </div>
</template>

<script>
  import axios from'axios'
    export default {
        name: "route",
      data() {
        return {
          route: [],
          num:3
        }}
        ,
     mounted:function () {
       let _this = this
       axios({method: 'get', url: 'http://localhost:3000/manage/showHotRoute'}).then(function (result) {
         console.log(result.data);
         _this.route = result.data.data
         console.log(result.data.data);
         console.log(_this.route);
       }, function (err) {
         console.log(err);
       })
     },
      methods:{
        more(){
          this.num+=3;
        },
        back(){
          this.num=6
        }
      }
    }
</script>

<style scoped>
  .route{
    width: 100%;
    height: 20%;
    display:inline-block;
    /*background-color: purple;*/
  }
  .routecontainer{
    margin: 0 auto;
    width: 100%;
    height: 400px;
    display:inline-block;
    /*background-color: white;*/
    /*border: 1px solid red;*/
  }
  .routeone{
    width: 80%;
    height: 200px;
    float: left;
    margin: 0 auto;
    /*border: 1px solid black;*/
    margin-left: 100px;
    margin-top: 20px;
    display:inline-block;
    /*background-color: pink;*/

  }
  img{
    width: 200px;
    height: 200px;
    float: left;
  }
  .content{
    text-indent: 2em;
    padding-left: 250px;
  }
  h3{
    text-align: center;
  }
  .btn{
    width: 100%;
    margin: 0 auto;
  }
</style>
