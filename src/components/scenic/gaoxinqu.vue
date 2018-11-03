<template>
  <div class="container">
    <ul id="inner">
      <el-card v-for="sc in scenicdata">
        <div>
          <div class="row">
            <div class="p-inner">
              <div class="p-innerlist">
                <div class="thumbnail">
                  <img :src='sc.scenicImage' alt="" @click="go(sc.scenicId)">
                </div>
                <div class="caption">
                  <!--<router-link tag="h3" :to="'/Scenicdetails/'+ sc.scenicId">{{sc.scenicName}}</router-link>-->
                  <!--<router-link tag="h3" :to="{path:'/scenic/wuzhongqu/Scenicdetails',query:{id:sc.scenicId}}">{{sc.scenicName}}</router-link>-->
                  <h3 @click="go(sc.scenicId)">{{sc.scenicName}}</h3>
                  <p class="p1"><b>地址：</b>{{sc.scenicAddress}}</p>
                  <p class="p1"><b>特色：</b>{{sc.tese}}</p>
                  <p class="p1"><b>开放时间：</b>{{sc.openHours}}</p>
                  <p class="grade">{{sc.scenicLevel}}</p>
                </div>

              </div>
              <div class="more">
                <div class="more-in">
                  <a href="" @click="go(sc.scenicId)"><img src="../../assets/lineimg/jiantou.png" alt=""></a>
                </div>
                <div class="more-p">
                  <a href="" @click="go(sc.scenicId)"><p>查看详情</p></a>
                </div>
              </div>
            </div><!--p-inner结束-->
          </div>
        </div>
      </el-card>
    </ul>

  </div>
</template>

<script>
  import axios from 'axios'
  export default {
    name: "wuzhongqu",
    data(){
      return{
        scenics:[],
        scenicdata:[],
      }
    },
    mounted() {
      axios.get('http://localhost:3000/scenicLocation/getScenicLocation?scenicLocation_scenicLocationId=3').then( res =>{
        this.scenics = res.data.data;
        // console.log(this.scenics)
        for(let i = 0;i<this.scenics.length;i++){
          this.scenicdata.push(this.scenics[i])

        }
      })
    },
    methods:{
      go(id){
        this.$router.push({path:'/Scenicdetails',query:{id:id}})
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
    width: 750px;
    height: 210px;
    border: 1px solid #ccc;
    overflow: hidden;
    margin-top: 20px;
  }
  .thumbnail{
    width:360px;
    height: 210px;
    float: left;
    margin: 20px 0px;
    margin-left:20px;
    margin-right:30px;
    border-radius: 10px;
  }
  .thumbnail img{
    width: 340px;
    height: 190px;
    border-radius: 10px;
  }
  .thumbnail img:hover{
    width: 350px;
    height: 200px;
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
    font-size: 19px;
    color:linen;
  }
  .caption{
    width:350px;
    height: 220px;
    float: left;
  }
  .caption h3{
    height: 30px;
    margin-bottom: 25px;
  }
  .caption h3:hover{
    font-size: 28px;
    color: orange;
  }
  .p1{
    font-size: 16px;
  }
  .grade{
    width: 80px;
    height: 40px;
    line-height: 40px;
    text-align: center;
    color: orangered;
    border:1px solid orangered;
    border-radius: 5px;
    margin-top: 20px;
    font-size: 16px;
  }
  .grade:hover{
    width: 85px;
    height: 45px;
    line-height: 45px;
    text-align: center;
  }
</style>
