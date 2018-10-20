<template>
  <div>
    <h2>玩景点</h2>
    <h5>更多>></h5>
    <hr class="line">

    <div class="scenic">
      <div v-for="(value,index) in scenic" v-if="index<num">
          <el-card class="scenicone" v-model="sindex" @click="getscenicId(value.scenicId)">
            <img :src="value.scenicImage">
            <h4>{{value.scenicName}}</h4>
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
        num:6,
        sindex:''
      }
    },
    mounted: function () {
      let _this = this
      axios({method: 'get', url: 'http://localhost:3000/manage/showHotScenic'}).then(function (result) {
        console.log(result.data);
        _this.scenic = result.data.data
        _this.sindex=result.data.data[i].scenicId
        console.log( _this.sindex);
      }, function (err) {
        console.log(err);
      })

    },
    methods:{
      getscenicId(index){
        this.$router.push({path:`/scenicdetails/${index}`})
      },
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
.scenic{
  width: 100%;
  height: 20%;
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
  width: 300px;
  height: 200px;
  float: left;
  position: relative;
  margin: 0 auto;
  /*border: 1px solid black;*/
  margin-left: 100px;
  margin-top: 20px;
  display:inline-block;
  /*background-color: pink;*/
     }
img{
  width: 250px;
  height: 150px;
}
img:hover{
  opacity: 0.6;
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
  .line{
    height: 10px;
    color: red;
  }
  .btn{
    width: 100%;
    margin: 0 auto;
  }
</style>
