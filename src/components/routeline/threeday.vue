<template>
  <div class="container">
    <ul id="inner">
      <li tag="li" v-for="onedt in  day" >
        <div>
          <div class="row">
            <el-card class="p-inner">
              <div class="inner-list">
                <div class="thumbnail">
                  <img :src='onedt.routeImage' alt="" @click="go(onedt.routeId)">
                </div>
                <div class="caption">
                  <h3 @click="go(onedt.routeId)">{{onedt.routeName}}</h3>
                  <p>{{onedt.routeIntroduction}}</p>
                  <p class="caption-p"><span class="caption-tap">行程标签：</span>{{onedt.biaoqian}}</p>
                  <p class="days"><span>天数：</span>{{onedt.Days}}</p>
                </div>
              </div>
              <div class="more">
                <div class="more-in">
                  <a href="" @click="go(onedt.routeId)"><img src="../../assets/lineimg/jiantou.png" alt=""></a>
                </div>
                <div class="more-p">
                  <a href="" @click="go(onedt.routeId)"><p>查看详情</p></a>
                </div>
              </div>
            </el-card><!--p-inner结束-->
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: "threeday",
    data(){
      return{
        line:[],
        day:[],
      }
    },
    mounted() {
      axios.get('http://localhost:3000/route/getoneRoute?Days=3').then( res =>{
        this.line = res.data.data;
        // console.log(this.scenics)
        for(let i = 0;i<this.line.length;i++){
          this.day.push(this.line[i])
          console.log(this.day)
        }
      })
    },
    methods:{
      go(id){
        this.$router.push({path:'/Routedetails',query:{id:id}})
      }
    }
  }
</script>

<style scoped>
  #inner{
    width: 100%;
    list-style-type: none;
    margin-top: 50px;
  }
  #inner li{
    width: 100%;
    height: 300px;
    border:1px solid #ebeef5;
    overflow: hidden;
    margin-top: 20px;
  }
  #inner li:hover{
    border: 1px solid deepskyblue;
  }
  .p-inner{
    width: 100%;
    height: 300px;
  }
  .inner-list{
    width: 850px;
    height: 300px;
    float: left;
  }
  .thumbnail{
    margin-left: 20px;
    width:370px;
    height: 280px;
    float: left;
    margin-right: 30px;
    border-radius: 10px;
  }
  .thumbnail img{
    width: 340px;
    height: 240px;
    margin-top: 10px;
    border-radius: 10px;
  }
  .thumbnail img:hover{
    width: 350px;
    height: 250px;
  }
  .more{
    margin-top: 20px;
    width: 200px;
    height: 200px;
    background-color: darkseagreen;
    float: right;
    margin-right: 20px;
    border-radius: 10px;
  }
  .more a{
    text-decoration:none;
  }
  .more-in{
    width: 100px;
    height: 100px;
    position: absolute;
    margin-left: 50px;
    margin-top: 40px;
  }
  .more-p p{
    margin-left: 60px;
    margin-top: 150px;
    color: #fff;
    opacity: 0.9;
    font-size: 18px;
  }
  .more-p p:hover{
    font-size: 20px;
    color:linen;
  }
  .caption-p{
    margin-top: 30px;
  }
  .caption{
    width:400px;
    height: 280px;
    float: left;
  }
  .caption-tap{
    color: #999;
    margin-right: 10px;
  }
  .caption h3{
    height: 30px;
    text-align:center;
    margin-bottom: 20px;
  }
  .caption h3:hover{
    color: orange;
    font-size: 28px;
  }
  .days{
    margin-top: 20px;
  }
  .days span{
    margin-right: 20px;
  }
  .caption p{
    color: #666;
  }
</style>
