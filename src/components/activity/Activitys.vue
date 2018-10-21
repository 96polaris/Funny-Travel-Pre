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
    <!--主体部分-->
    <div id="main">
      <!--活动列表-->
      <div id="actShow">
        <div id="actInner" v-for="(item,index) in activitys"v-if="index<num">
          <div id="headPic"><img :src="headPic" alt=""></div>
          <!--<p>发布人：{{item.user_userId}}</p>-->
          <p>发布人：{{userName}}</p>
          <h4>活动主题：{{item.activityTitle}}</h4>
          <p>活动时长：{{item.activityDays}}</p>
          <p>活动开始时间：{{item.beginTime.substr(0,10)}}</p>
          <p>活动结束时间：{{item.endTime.substr(0,10)}}</p>
          <p>联系电话：{{item.telNum}}</p>
          <p id="myp">活动说明：{{item.activityIntroduce}}</p>
          <div class="nav nav-pills">
            <!--<router-link :to="'/user/'+ $route.params.id + '/edit'">编辑用户信息</router-link>-->
            <router-link id="showBtn" tag="li" active-class="active" role="presentation" :to="`/activitys/${item.activityId}`" exact><a>查看此活动详情</a></router-link>
          </div>
        </div>
      </div>

      <!--发布活动按钮-->
      <div class="nav nav-pills">
        <!--<router-link tag="li" active-class="active" role="presentation" to="/activitys/addAct" exact><a>发布活动</a></router-link>-->
        <button id="addBtn" type="button" class="btn btn-primary"@click="addAct">发布活动</button>
      </div>
      <!--分页-->
      <nav id="nav" aria-label="Page navigation">
        <ul class="pagination">
          <li>
            <a href="#" aria-label="Previous">
              <span aria-hidden="true"@click="back">&laquo;</span>
            </a>
          </li>
          <li><a href="#">1</a></li>
          <li><a href="#">2</a></li>
          <li><a href="#">3</a></li>
          <li><a href="#">4</a></li>
          <li><a href="#">5</a></li>
          <li>
            <a href="#" aria-label="Next">
              <span aria-hidden="true"@click="next">&raquo;</span>
            </a>
          </li>
        </ul>
      </nav>
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
        myActData:[],
        activitys:[],
        pageindex:0,
        pagecount:2,
        dataimg: [
          {src: require('../../assets/activityImg/01.jpg'),},
          {src: require('../../assets/activityImg/02.jpg'),},
          {src: require('../../assets/activityImg/03.jpg'),},
          {src: require('../../assets/activityImg/04.jpg'),}
        ],
        num:4
      }
    },
    computed:{
      userName(){
        return this.$store.state.userInfo.userName;
      },
      headPic(){
        return this.$store.state.userInfo.headPic;
      }
    },
    methods:{
      addAct(){
        this.$router.push({path:'/activitys/addAct'})
      },
      back(){
        this.num-=4
      },
      next(){
        this.num+=4
      }
    },
    //挂载 动态生成数据
    mounted(){
      axios.get("http://localhost:3000/activity").then((result) =>{
        this.myActData= result.data.data;
        console.log(result.data)
        for(var i = 0 ; i < 4; i++){
          this.activitys.push(this.myActData[i])
        }
      })
    },
  }
</script>

<style scoped>
  #nav{margin-left: 230px}
  #addBtn{
    margin-left:300px;
  }
  #actShow{
    width: 800px;
    height: 760px;
    border: 1px black solid;
  }
  #headPic{
    height: 70px;
    width: 70px;
    border-radius: 40px;
    /*border: 1px black solid;*/
  }
  #headPic img{
     width: 70px;
     height: 70px;
     border-radius: 35px;
     position: relative;
    margin-left: 10px;
    margin-top: 10px;
   }
  #actInner{
    width: 290px;
    height: 340px;
    background-color:bisque;
    /*border: 1px black solid;*/
    float: left;
    margin-left: 40px;
    margin-top: 20px;
    text-align: center;
    border-radius: 10px;
    box-shadow: 2px 2px 20px 5px gainsboro ;
  }
#showBtn{margin-left: 80px}
  #actShow :hover{
    transform:scale(1.1);
  }
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    width: 100%;
    height: 30%;
    position: relative;
    margin-left: 0.1%;
    margin-top: 0;
    z-index:1;
  }
  #main{
    width: 1200px;
    height: 1000px;
    margin: 0 auto;
    /*border: 1px solid black;*/
  }
  /*#actInner>p:last-child{*/
    /*font-size: 30px;*/
    /*background-color: black;*/
  /*}*/
  #myp{
    overflow: hidden;
    text-overflow:ellipsis;
    white-space: nowrap;
  }

</style>
