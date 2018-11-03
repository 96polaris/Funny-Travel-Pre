<template>
  <div class="container">
    <h2 style=" font-weight: 700; font-size: 28px;line-height: 10px; display: inline-block">玩景点</h2>

    <div class="btn-group" role="group" aria-label="...">
      <button type="button" class="btn btn-default" v-on:click.native="hot">最热</button>
      <button type="button" class="btn btn-default" @click="sWuzhong">吴中区</button>
      <button type="button" class="btn btn-default" @click="sYuanqu">园区</button>
      <button type="button" class="btn btn-default" @click="sGaoxin">高新区</button>
      <button type="button" class="btn btn-default" @click="sKunshan">昆山</button>
      <button type="button" class="btn btn-default" @click="sXiangcheng">相城</button>
      <button type="button" class="btn btn-default" @click="sZhangjiagang">张家港</button>
      <button type="button" class="btn btn-default" @click="sChangshu">常熟</button>
      <button type="button" class="btn btn-default" @click="sGusu">姑苏</button>
      <button type="button" class="btn btn-default" @click="sTaicang">太仓</button>
    </div>


    <!--<el-tag v-on:click.native="hot">最热</el-tag>-->
    <!--<el-tag v-on:click.native="sWuzhong">吴中区</el-tag>-->
    <!--<el-tag v-on:click.native="sYuanqu">园区</el-tag>-->
    <!--<el-tag v-on:click.native="sGaoxin">高新区</el-tag>-->
    <!--<el-tag v-on:click.native="sKunshan">昆山</el-tag>-->
    <!--<el-tag v-on:click.native="sXiangcheng">相城</el-tag>-->
    <!--<el-tag v-on:click.native="sZhangjiagang">张家港</el-tag>-->
    <!--<el-tag v-on:click.native="sChangshu">常熟</el-tag>-->
    <!--<el-tag v-on:click.native="sGusu">姑苏</el-tag>-->
    <!--<el-tag v-on:click.native="sTaicang">太仓</el-tag>-->
    <hr class="line">
    <div class="scenic">
      <div v-for="(value,index) in scenic" v-if="index<num">
          <el-card  :body-style="{padding:'0px'}" class="scenicone" v-model="sindex" style="padding:0">
            <img :src="value.scenicImage" @click="getscenicId(value.scenicId)">
            <el-badge value="hot" class="item">
              <el-button size="middle" style="border: 0;font-weight:bolder;padding:5px" >{{value.scenicName}}</el-button>
            </el-badge>
            <h5>{{value.scenicLevel}}</h5>
          </el-card>

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
    name: "scenic",
    data() {
      return {
        scenic: [],
        num:8,
        sindex:'',
        activeIndex: '1',
        activeIndex2: '1'
      }
    },
    mounted: function () {
      let _this = this
      axios({method: 'get', url: 'http://localhost:3000/manage/showHotScenic'}).then(function (result) {
        console.log(result.data);
        _this.scenic = result.data.data
        console.log(_this.scenic);
        // _this.sindex=result.data.data[i].scenicId
        // console.log( _this.sindex);
      }, function (err) {
        console.log(err);
      })

    },
    methods:{
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      },
      getscenicId(index){
        this.$router.push({path:'/Scenicdetails',query:{id:index}})
        console.log(index);
      },
      more(){
        this.num+=4;
      },
      back(){
        this.num=8
      },
      sWuzhong(){
        let _this = this
        axios({method: 'get',
          url: 'http://localhost:3000/scenicLocation/getScenicLocation?scenicLocation_scenicLocationId=1'})
          .then(function (result) {
          console.log(result.data);
          _this.scenic = result.data.data
          // _this.sindex=result.data.data[i].scenicId
          console.log( 456+_this.sindex);
        }, function (err) {
          console.log(err);
        })
      },
      hot(){
        let _this = this
        axios({method: 'get',
          url: 'http://localhost:3000/manage/showHotScenic'})
          .then(function (result) {
            console.log(result.data);
            _this.scenic = result.data.data
            // _this.sindex=result.data.data[i].scenicId
            console.log( 456+_this.sindex);
          }, function (err) {
            console.log(err);
          })
      },
      sYuanqu(){
        let _this = this
        axios({method: 'get',
          url: 'http://localhost:3000/scenicLocation/getScenicLocation?scenicLocation_scenicLocationId=2'})
          .then(function (result) {
            console.log(result.data);
            _this.scenic = result.data.data
            // _this.sindex=result.data.data[i].scenicId
            console.log( 456+_this.sindex);
          }, function (err) {
            console.log(err);
          })
      },
      sGaoxin(){
        let _this = this
        axios({method: 'get',
          url: 'http://localhost:3000/scenicLocation/getScenicLocation?scenicLocation_scenicLocationId=3'})
          .then(function (result) {
            console.log(result.data);
            _this.scenic = result.data.data
            // _this.sindex=result.data.data[i].scenicId
            console.log( 456+_this.sindex);
          }, function (err) {
            console.log(err);
          })
      },
      sXiangcheng(){
        let _this = this
        axios({method: 'get',
          url: 'http://localhost:3000/scenicLocation/getScenicLocation?scenicLocation_scenicLocationId=5'})
          .then(function (result) {
            console.log(result.data);
            _this.scenic = result.data.data
            // _this.sindex=result.data.data[i].scenicId
            console.log( 456+_this.sindex);
          }, function (err) {
            console.log(err);
          })
      },
      sChangshu(){
        let _this = this
        axios({method: 'get',
          url: 'http://localhost:3000/scenicLocation/getScenicLocation?scenicLocation_scenicLocationId=8'})
          .then(function (result) {
            console.log(result.data);
            _this.scenic = result.data.data
            // _this.sindex=result.data.data[i].scenicId
            console.log( 456+_this.sindex);
          }, function (err) {
            console.log(err);
          })
      },
      sKunshan(){
        let _this = this
        axios({method: 'get',
          url: 'http://localhost:3000/scenicLocation/getScenicLocation?scenicLocation_scenicLocationId=4'})
          .then(function (result) {
            console.log(result.data);
            _this.scenic = result.data.data
            // _this.sindex=result.data.data[i].scenicId
            console.log( 456+_this.sindex);
          }, function (err) {
            console.log(err);
          })
      },
      sGusu(){
        let _this = this
        axios({method: 'get',
          url: 'http://localhost:3000/scenicLocation/getScenicLocation?scenicLocation_scenicLocationId=9'})
          .then(function (result) {
            console.log(result.data);
            _this.scenic = result.data.data
            // _this.sindex=result.data.data[i].scenicId
            console.log( 456+_this.sindex);
          }, function (err) {
            console.log(err);
          })
      },
      sZhangjiagang(){
        let _this = this
        axios({method: 'get',
          url: 'http://localhost:3000/scenicLocation/getScenicLocation?scenicLocation_scenicLocationId=6'})
          .then(function (result) {
            console.log(result.data);
            _this.scenic = result.data.data
            // _this.sindex=result.data.data[i].scenicId
            console.log( 456+_this.sindex);
          }, function (err) {
            console.log(err);
          })
      },
      sTaicang(){
        let _this = this
        axios({method: 'get',
          url: 'http://localhost:3000/scenicLocation/getScenicLocation?scenicLocation_scenicLocationId=7'})
          .then(function (result) {
            console.log(result.data);
            _this.scenic = result.data.data
            // _this.sindex=result.data.data[i].scenicId
            console.log( 456+_this.sindex);
          }, function (err) {
            console.log(err);
          })
      },

    },

  }

</script>

<style scoped>
  .btn-group{
    margin-left: 15px;
  }
  .btn-group>button{
    width: 100px;
    height: 32px;
    line-height: 30px;
    font-size:17px;
    float: left;
    border: none;
    margin-top: -15px;
    margin-left: 15px;
    color:#409EFF;

  }


  .btn:focus,
  .btn:active:focus,
  .btn.active:focus,
  .btn.focus,
  .btn:active.focus,
  .btn.active.focus {
    outline: none;
    box-shadow:none;}





  .el-tag{
    border: 0;background-color: white;font-size: 17px;
    padding-left: 30px;
  }
  .el-tag:hover{
    cursor: pointer;
    /*background-color:pink;*/
  }
.scenic{
  width: 1200px;
  height: 20%;
  margin-top: -30px;
  /*padding-left: 50px;*/
  display:inline-block;

  /*background-color: lightblue;*/
}
  .scenicontainer{
    margin: 0 auto;
    width: 100%;
    height: 400px;
    display:inline-block;
    /*background-color: white;*/
    /*border: 1px solid red;*/
  }
.scenicone{
  width: 290px;
  height: 250px;
  float: left;
  position: relative;
  margin: 0 auto;
  /*border: 1px solid black;*/
  margin-left: 5px;
  margin-top: 10px;
  display:inline-block;
  /*background-color: pink;*/
     }
img{
  width: 285px;
  height: 220px;
  padding-top:0;
  margin: 0 auto;
}
img:hover{
  opacity:0.6;
}
h4{
  display: inline-block;
  float: left;
  overflow: hidden;
  text-overflow:ellipsis;
white-space:nowrap;
width:130px;
  }
  h5{
    display: inline-block;
    float: right;
    padding-bottom: 0;
    height: 10px;
  }
  .btn{
    width: 100%;
    margin: 0 auto;
  }
  .container{
    width: 1200px;
    margin: 0 auto;
  }
  .el-button el-button--success{
    background-color:#67C23A
  }
</style>
