<template>
  <div>

    <div class="demo">
      <h2 style=" font-weight: 700; font-size: 28px;line-height: 10px; display: inline-block">找线路</h2>
      <hr>
      <div class="container">
        <div class="row"  >
          <div class="col-md-4 col-sm-6" v-for="(value,index) in route" v-if="index<num" style="margin-top: 20px">
            <div class="box" >
              <img :src="value.routeImage" @click="getrouteId(value.routeId)">
              <div class="box-content">
                <h3 class="title">{{value.routeName}}</h3>
                <span class="post">{{value.routeIntroduction}}</span>
                <ul class="icon">
                  <li @click="getrouteId(value.routeId)"><a><i class="fa fa-link"></i></a></li>
                </ul>
              </div>
            </div>
          </div>
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
  import '../../css/demo.css'
  // import '../../css/style.css'
  import '../../css/bootstrap-grid.min.css'


  import axios from 'axios'

  export default {
    name: "route",
    data() {
      return {
        route: [],
        num: 9
      }
    }
    ,
    mounted: function () {
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
    methods: {
      more() {
        this.num += 3;
      },
      back() {
        this.num = 9
      },
      getrouteId(index) {
        this.$router.push({path: '/Routedetails', query: {id: index}})
        console.log(index);
      },
    }
  }
</script>

<style scoped>

  .demo{padding: 2em 0;width: 1200px;
    margin: 0 auto;}
  .box{
    text-align: center;
    overflow: hidden;
    position: relative;
    top:20px;

    /*margin: 0;*/
  }
  .box:before{
    content: "";
    width: 0;
    height: 100%;
    background: #000;
    padding: 14px 18px;
    position: absolute;
    top: 0;
    left: 50%;
    opacity: 0;
    transition: all 500ms cubic-bezier(0.47, 0, 0.745, 0.715) 0s;
  }
  .box:hover:before{
    width: 360px;
    left: 0;
    opacity: 0.5;
  }
  .box img{
    padding-top: 0;
    width: 360px;
    height: 220px;
  }
  .box .box-content{
    width: 100%;
    padding: 14px 18px;
    color: #fff;
    position: absolute;
    top: 20%;
    left: 0;
  }
  .box .title{
    font-size: 25px;
    font-weight: 600;
    line-height: 30px;
    text-transform: uppercase;
    color: orangered;
    margin: 0;
    opacity: 0;
    transition: all 0.5s ease 0s;
  }
  .box .post{
    font-size: 15px;
    text-transform: capitalize;
    opacity: 0;
    transition: all 0.5s ease 0s;
    display: block;

    text-overflow: -o-ellipsis-lastline;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }
  .box:hover .title,
  .box:hover .post{
    opacity: 1;
    transition-delay: 0.7s;
  }
  .box .icon{
    padding: 0;
    margin: 0;
    list-style: none;
    margin-top: 15px;
  }
  .box .icon li{
    display: inline-block;
  }
  .box .icon li a{
    display: block;
    width: 40px;
    height: 40px;
    line-height: 40px;
    border-radius: 50%;
    background: #f74e55;
    font-size: 20px;
    font-weight: 700;
    color: #fff;
    margin-right: 5px;
    opacity: 0;
    transform: translateY(50px);
    transition: all 0.5s ease 0s;
  }
  .box:hover .icon li a{
    opacity: 1;
    transform: translateY(0px);
    transition-delay: 0.5s;
  }
  .box:hover .icon li:last-child a{
    transition-delay: 0.8s;
  }
  @media only screen and (max-width:990px){
    .box{ margin-bottom: 30px; }
  }

  /*.route {*/
    /*width: 1200px;*/
    /*height: 20%;*/
    /*display: inline-block;*/
    /*!*background-color: purple;*!*/
  /*}*/

  /*.routecontainer {*/
    /*margin: 0 auto;*/
    /*width: 100%;*/
    /*height: 400px;*/
    /*display: inline-block;*/
    /*!*background-color: white;*!*/
    /*!*border: 1px solid red;*!*/
  /*}*/

  /*.routeone {*/
    /*width: 80%;*/
    /*height: 200px;*/
    /*float: left;*/
    /*margin: 0 auto;*/
    /*!*border: 1px solid black;*!*/
    /*margin-left: 100px;*/
    /*margin-top: 20px;*/
    /*display: inline-block;*/
    /*!*background-color: pink;*!*/

  /*}*/

  /*.el-card {*/
    /*width: 288px;*/
    /*height: 270px;*/
    /*display: inline-block;*/
    /*float: left;*/
    /*!*padding-top: 0px;*!*/
    /*margin-left: 5px;*/
    /*margin-top: 5px;*/
  /*}*/

  /*img:hover {*/
    /*opacity: 0.6;*/
  /*}*/

  /*.content {*/
    /*text-indent: 2em;*/
    /*padding-left: 250px;*/
  /*}*/

  /*h3 {*/
    /*text-align: center;*/
  /*}*/

  /*h3:hover {*/
    /*color: red;*/
    /*font-weight: bold;*/
  /*}*/

  .btn {
    width: 100%;
    margin: 0 auto;
  }

  /*.container {*/
    /*width: 1200px;*/
    /*margin: 0 auto;*/
  /*}*/

</style>
