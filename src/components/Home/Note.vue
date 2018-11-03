<template>
  <!--鼠标悬停-->
  <div class="contain" >
    <div>
    <h2 style=" font-weight: 700; font-size: 28px;line-height: 10px; display: inline-block">看游记</h2>
    <el-row class="block-col-5" style="float:right">
      <el-col :span="24">
        <el-dropdown>
  <span class="el-dropdown-link" style="font-size:20px">
  排序<i class="el-icon-arrow-down el-icon--right"></i>
  </span>
          <el-dropdown-menu slot="dropdown" style="clear: both" placement="top-star">
            <el-dropdown-item v-on:click.native="recommend">按推荐</el-dropdown-item>
            <el-dropdown-item v-on:click.native="hot">按热度</el-dropdown-item>
            <el-dropdown-item v-on:click.native="time">按时间</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </el-col>
    </el-row>
    <hr>
      <div class="box" v-for="(value,index) in note" v-if="index<num">
        <img :src=" value.travelNoteImage" alt="" />
        <div class="box-content">
          <h3 class="title" @click="getnoteId(value.travelNoteId)">{{value.travelTitle}}</h3>
          <p class="description">
            {{value.travelNoteContent}}
          </p>
        </div>
      </div>


    <div class="btn">
      <el-button type="primary" @click="more">︾</el-button>
      <el-button type="primary" @click="back">︽</el-button>
    </div>
</div>
  </div>
</template>

<script>
  import axios from 'axios'
  export default {
    name: "note",
    data() {
      return {
        note: [],
        num: 4
      }
    },
    mounted: function () {
      let _this = this
      axios({method: 'get', url: 'http://localhost:3000/manage/showHotNote'}).then(function (result) {
        console.log(result.data.data);
        _this.note = result.data.data
        console.log(_this.note);
      }, function (err) {
        console.log(err);
      })
    },
    methods: {
      getnoteId(index) {
        this.$router.push({path: `/youji/youjixq/${index}`})
      },
      more() {
        this.num +=4;
      },
      back() {
        this.num = 4
      },
      recommend() {
        let _this = this
        axios({method: 'get', url: 'http://localhost:3000/manage/showHotNote'}).then(function (result) {
          console.log(result.data);
          _this.note = result.data.data
          // console.log(result.data.data[0].travelNoteImage);
        }, function (err) {
          console.log(err);
        })
      },
      hot() {
        let _this = this
        axios({method: 'get', url: 'http://localhost:3000/travelnote/hotNote'}).then(function (result) {
          console.log(22 + result.data);
          _this.note = result.data.data
          // console.log(result.data.data[0].trv-on:click.native=avelNoteImage);
        }, function (err) {
          console.log(err);
        })
      },
      time() {
        let _this = this
        axios({method: 'get', url: 'http://localhost:3000/travelnote/zuixinNote'}).then(function (result) {
          console.log(result.data);
          _this.note = result.data.data
          // console.log(result.data.data[0].travelNoteImage);
        }, function (err) {
          console.log(err);
        })
      }
    },

  }


</script>

<style scoped>
  /*hover*/


  .box{
    /*border: 1px solid #333;*/
    position: relative;
    overflow: hidden;
    width: 285px;
    height: 220px;
    display: inline-block;
    margin-left: 10px;
  }
  .box img{
    width: 285px;
    height: 220px;
  }
  .box .box-content{
    width: 285px;
    height: 220px;
    position: absolute;
    top: 0;
    left: 0;
    color: #fff;
    text-align: center;
    padding: 20% 20px;
    background: rgba(0,0,0,0.6);
    transform: rotate(-90deg);
    transform-origin: left top 0;
    transition: all 0.50s ease 0s;
  }

  .box .title{
    display: inline-block;
    font-size: 22px;
    color: #fff;
    margin: 0 0 15px 0;
    position: relative;
    transform: rotate(180deg);
    transform-origin: right top 0;
    transition: all .3s ease-in-out 0.2s;
  }
  .box .post{
    display: block;
    font-size: 18px;
    margin-bottom: 15px;
    transform: rotate(180deg);
    transform-origin: right top 0;
    transition: all .3s ease-in-out 0.4s;
  }

  .box .description{
    font-size: 15px;
    margin-bottom: 20px;
    padding: 0 5px;
    text-indent:2em;
    transform: rotate(180deg);
    transform-origin: right top 0;
    transition: all .3s ease-in-out 0.6s;
    overflow : hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 4;
    -webkit-box-orient: vertical;
  }
  .box .read{
    font-size: 20px;
    font-weight: bold;
    color: #fff;
    display: block;
    letter-spacing:2px;
    text-transform: uppercase;
    transform: rotate(180deg);
    transform-origin: right top 0;
    transition: all 0.3s ease-in-out 0.8s;
  }
  .box .read:hover{
    /*color: #e8802e;*/
    text-decoration: none;
  }
  .box:hover .box-content,
  .box:hover .title,
  .box:hover .post,
  .box:hover .description,
  .box:hover .read {
    transform:rotate(0deg);
  }







  /*hover*/



  img {
    width: 360px;
    height: 220px;
  }

  img:hover {
    opacity: 0.8;
  }

  h3 {
    text-align: center;
  }
  .btn {
    width: 100%;
    margin: 0 auto;
  }
  .contain {
    width: 1200px;
    margin: 0 auto;

  }
</style>
