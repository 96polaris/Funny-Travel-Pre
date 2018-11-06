<template>
  <div>
    <!--轮播图-->
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


    <div style="width: 90%;margin:  0 auto">
      <!--<span class="glyphicon glyphicon-search" aria-hidden="true"></span>-->
      <span  style="font-size: 28px;color:#8a6d3b;margin-left: 10px;margin-left: 70px">
        全部活动
      </span>
      <hr style="color: black;border: 2px solid rosybrown">
    </div>

    <!--主体部分-->
    <div id="main">
      <div id="actShow">
        <div>
          <!--<span style="font-size: 28px;color: #8a6d3b;margin-top: 10px">点击可以查看活动详情并加入活动哦</span>-->
        </div>
        <div id="actInner"v-for="item in myActData1"@click="getDetails">

          <div id="img">
             <img :src="item.actImg" alt="">
            <router-link :to="`/activitys/${item.activityId}`">
              <div id="imgInner">
                <h4><p id="myp">活动说明：{{item.activityIntroduce}}</p></h4>
                <h4><p>活动主题：{{item.activityTitle}}</p></h4>
                <h4><p>开始时间：{{item.beginTime.substr(0,10)}}</p></h4>
                <h4><p>结束时间：{{item.endTime.substr(0,10)}}</p></h4>
              </div>
            </router-link>
          </div>

          <div id="word1">
            <p>活动主题：{{item.activityTitle}}</p>
            <p>时间：{{item.beginTime.substr(0,10)}}-{{item.endTime.substr(0,10)}}</p>
          </div>
        </div>

      </div>
      <!--侧边栏-->
      <div id="rightAside">

        <div style="margin-top: 30px;">
          <p><el-button style="width: 160px;" size="medium" @click="addAct">发布活动</el-button></p>
          <p><el-button style="width: 160px;" size="medium" @click="myAct">我的活动</el-button></p>
          <router-link to="/activity"><p><el-button style="width: 160px;" size="medium">查看全部活动</el-button></p></router-link>
        </div>

        <div style="margin-top: 30px;">
          <div>
            <h4 style="color: #8a6d3b">热门地点：</h4>
            <form action="" v-cloak>
              <input style="width: 150px;" type="text" v-model="searchString" @keyup.13="searchOne">
              <router-link :to="`/activity/${this.searchString}`">搜索</router-link>

              <div  v-show="searchString" id="searchInner">
                <ul>
                  <li v-for="act in searchAct">
                    <router-link :to="`/activitys/${act.activityId}`">{{act.activityTitle}}</router-link>

                    <!--{{act.activityTitle}}-->
                  </li>
                  <li v-if="hasNoData">您查找的活动不存在哦</li>
                </ul>

              </div>
            </form>

            <router-link to="/activity/拙政园"><el-button style="margin-top: 10px" size="medium" type="primary" plain>拙政园</el-button></router-link>
            <router-link to="/activity/寒山寺"><el-button style="margin-top: 10px" size="small" type="success" plain>寒山寺</el-button></router-link>
            <router-link to="/activity/平江路"><el-button style="margin-top: 10px"size="small" type="info" plain>平江路</el-button></router-link>
            <router-link to="/activity/金鸡湖"><el-button style="width: 100px;margin-top: 10px" type="small" plain>金鸡湖</el-button></router-link>
            <router-link to="/activity/博物馆"><el-button style="margin-top: 10px" size="medium" type="primary" plain>博物馆</el-button></router-link>
            <router-link to="/activity/枫桥"><el-button size="small"type="warning" plain>枫桥</el-button></router-link>
          </div>

          <!--<el-button type="medium" plain>金鸡湖</el-button>-->
        </div>
      </div>
    </div>

    <!--分页-->
    <div class="block">
      <span class="demonstration"></span>
      <el-pagination ref="elpage"
                     background
                     @current-change="change()"
                     :current-page.sync="pageIndex"
                     layout="prev, pager, next"
                     :total="pageCount"
                     :page-size = "pagesize"
      >
      </el-pagination>
    </div>

    <div >

    </div>

  </div>
</template>

<script>
  import router from 'vue-router'
  import axios from 'axios'
  export default {
    name: "Activitys",
    data(){
      return {
        id:'',
        pageIndex: 1,
        pagesize: 6,
        pageCount:0,

        myActData:[],
        activitys:[],
        dataimg: [
          {src: require('../../assets/activityImg/01.jpg'),},
          {src: require('../../assets/activityImg/02.jpg'),},
          {src: require('../../assets/activityImg/03.jpg'),},
          {src: require('../../assets/activityImg/04.jpg'),}
        ],
        // name:'',
        checkName:'',

        searchString:'',
        searchAct:[],
        time:null
      }
    },
    computed:{
      hasNoData(){
        return !this.searchAct.length
      },
      userName(){
        return this.$store.state.userInfo.userName;
      },
      headPic(){
        return this.$store.state.userInfo.headPic;
      },
      myActData1() {
        return this.activitys
      }
    },
    watch:{

      'searchString':function () {
        let _this=this;
        axios.get('http://localhost:3000/activity/actData/'+`${_this.searchString}`).then(function (result){
          console.log('==========='+_this.searchString)
          _this.searchAct=result.data.data
          console.log(result.data.data)
        },function(err){
          console.log(err)
        })
        if (this.timer) {
          clearTimeout(this.timer)
        }
        if (!this.searchString){
          this.searchAct = []
          return
        }
      },
      '$route'(to,from){
        this.searchString=''
        // "$route":"getAllData",
      }

    },
    methods:{
      searchOne(){

        this.$router.push({path:`/activity/${this.searchString}`})
      },
      getDetails(){
        this.$router.push({path:`'/activitys/${item.activityId}'`})
      },
      addAct(){
        if(sessionStorage.getItem("userId")==null){
          alert('您还没有登录，请您先登录哦...')
          this.$router.push({path:'/login'})
        }else{
          this.$router.push({path:'/activitys/addAct'})
        }
      },
      myAct(){
        if(sessionStorage.getItem("userId")==null) {
          alert('您还没有登录，请您先登录哦...')
        }else{
          this.$router.push({path:'/personalCenter/joinAct'})
        }
      },
      loadData() {
        this.activitys = [];
        // console.log('this.pageInedx:' + this.pageIndex)
        // console.log('this.pageCount:' + this.pageCount)
        let start = (this.pageIndex-1) * this.pagesize;
        let end = start + this.pagesize;
        //pageindex:0 , start:0 ; end:4
        //pageindex:1 , start: 4; end:8
        //pageindex:2 , start:8 ; end:12
        //pageindex:3 , start:6 ; end:8
        console.log(this.myActData[1]);
        if(end>=this.pageCount){
          end=this.pageCount
        }
        for (var i = start; i < end; i++) {
          this.activitys.push(this.myActData[i])
        }
      },
      change() {
        // alert(this.pageIndex)
        this.loadData()
      },
      getAllData(){
        let _this=this
        // console.log("bbb")

        if(this.$route.params.activityTitle!=undefined){
          let activityTitle=this.$route.params.activityTitle
          axios.get(`http://localhost:3000/activity/actData/${activityTitle}`).then((result) =>{
            _this.myActData= result.data.data;
            console.log(result.data.data)
            _this.id=result.data.data.avtivityId;
            console.log(result.data)
            _this.pageCount=_this.myActData.length
            _this.loadData()
          })
        }else{
          console.log("ccc")
          axios.get("http://localhost:3000/activity").then((result) =>{
            _this.myActData= result.data.data;
            console.log(result.data.data)
            _this.id=result.data.data.avtivityId;
            console.log(result.data)
            _this.pageCount=_this.myActData.length
            _this.loadData()
          })
        }
      }
    },
    //挂载 动态生成数据
    mounted(){
      console.log("aaaaaaa")
      this.getAllData();
    },

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
    height: 40%;
    /*margin: 0 auto;*/
    position: relative;
    /*margin-left: 0.1%;*/
    margin-top: 20px;
    z-index:1;
  }
  /*版心设置*/
  #main{
    width: 1200px;
    /*height: 680px;*/
    margin: 0 auto;
    margin-top: 10px;
    /*border: 1px solid black;*/
    background-color: #eeee;
  }
  /*活动外围*/
  #actShow{
    width: 1000px;
    height: 645px;
    border: 1px solid transparent;
    float: left;
  }
  /*每个活动内容*/
  #actInner{
    width: 280px;
    height: 280px;
    float: left;
    margin-left: 30px;
    /*border: 1px solid black;*/
    margin-top: 30px;
  }
  /*活动图片*/
  #img img{
    width: 280px;
    height: 230px;
    /*border: 1px solid black;*/
    position: relative;
  }
  /*图片下面简介*/
  #word1{
    width: 280px;
    height: 50px;
    /*border: 1px solid black;*/
    text-align: center;
    font-weight: bold;
    font-size: 15px;
    background-color: white;
  }
  /*侧边栏*/
  #rightAside{
    width: 250px;
    height: 645px;
    border: 1px solid transparent;
    margin-left: 950px;
    background-color: beige;
  }
  /*分页*/
  .block{margin-left: 550px}
  /*悬浮放大效果*/
  #actInner :hover{transform:scale(1.01);}
  #imgInner{
    width: 280px;
    height: 230px;
    position: absolute;
    bottom: 0px;
    border: black 1px solid;
    display: none;
    text-align: center;
  }
  #actInner :hover #imgInner{
    display: block;
    opacity:0.6;
    color: white;
    background-color: black;
  }
  #myp{
    padding-top: 50px;
    overflow: hidden;
    text-overflow:ellipsis;
    white-space: nowrap;
  }
  #searchInner ul{position: absolute;cursor: pointer}
  #searchInner li{
    border-bottom: 1px dashed black;
    width: 150px;
    margin-left: 10px;
    background-color: white;
    list-style: none;
    line-height: 25px;
  }
</style>
