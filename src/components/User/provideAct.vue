<template>
  <div class="contain">

    <el-row class="row">
      <el-col :span="7" v-for="(value,index) in joinAct" style="margin-left: 25px;margin-top: 20px">
        <el-card :body-style="{ padding: '0px',width:'260px',height:'250px'}" >
          <img :src="value.actImg" class="image"@click="toAct(value.activityId)">
          <div style="padding: 14px;width: 260px;">
            <span>{{value.activityTitle}}</span>
          </div>
          <div class="bottom clearfix" style="padding-left:150px">
            <router-link :to="'/personalCenter/'+value.activityId"><el-button type="primary" round size="small">查看加入详情</el-button></router-link>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <!--<router-link :to="`/activitys/${value.activityId}/editAct`"><el-button type="primary" round size="small">修改活动信息</el-button></router-link>-->
            <!--<el-button type="primary" round size="small" @click="check(value.activityId)">查看加入详情</el-button>-->
          </div>
        </el-card>
      </el-col>
    </el-row>



    <!--<el-row>-->
    <!--<el-col :span="6" v-for="(value,index) in joinAct" style="margin-left: 25px;margin-top: 20px">-->
    <!--<el-card :body-style="{ padding: '0px',width:'240px',height:'240px' }" >-->
    <!--&lt;!&ndash;<img :src="value.scenicImage" class="image"@click="toScenic(value.scenicId)">&ndash;&gt;-->
    <!--&lt;!&ndash;<div style="padding: 0px;text-align: center">&ndash;&gt;-->
    <!--<img style="width: 240px;height: 130px;" :src="value.actImg" alt="">-->
    <!--<h4>{{value.activityTitle}}</h4>-->
    <!--&lt;!&ndash;<span>{{value.activityIntroduce}}</span>&ndash;&gt;-->
    <!--<p>活动编号：{{value.activityId}}</p>-->
    <!--<el-button type="primary" round size="small" @click="check(value.activityId)">查看加入详情</el-button>-->
    <!--&lt;!&ndash;<button @click="check(value.activityId)">查看加入详情</button>&ndash;&gt;-->
    <!--&lt;!&ndash;</div>&ndash;&gt;-->
    <!--</el-card>-->
    <!--</el-col>-->
    <!--</el-row>-->

    <!--<el-row>-->
    <!--<el-col :span="6" v-for="j in joinData" :offset="index > 0 ? 2 : 0" style="margin-top: 30px">-->
    <!--<el-card :body-style="{ padding: '0px',width:'240px',height:'200px' }" >-->
    <!--&lt;!&ndash;<img :src="value.scenicImage" class="image"@click="toScenic(value.scenicId)">&ndash;&gt;-->
    <!--<div style="padding: 0px;">-->
    <!--<img :src="j.userImage" alt="" class="upic">-->
    <!--用户名：  <span>{{j.userName}}</span><br>-->
    <!--&lt;!&ndash;<span>{{value.activityIntroduce}}</span>&ndash;&gt;-->
    <!--用户手机号：<span>{{j.userPhone}}</span>-->
    <!--</div>-->
    <!--</el-card>-->
    <!--</el-col>-->
    <!--</el-row>-->


  </div>
</template>

<script>
  import axios from 'axios'
  export default {
    name: "joinAct",
    data(){
      return{
        joinAct:[],
        activityId:'',

      }
    },
    methods:{
      check(activityId){
        let _this=this
        axios.get(`http://localhost:3000/activity/joinDetails/${activityId}`).then((result) =>{
          console.log(result.data.data);
          let data= result.data.data;
          // console.log(data[0].userName);
          for(var i=0;i<data.length;i++){
            var obj={}
            var newdata=[]
            obj.userName=data[i].userName
            obj.userPhone=data[i].userPhone
            obj.userImage=data[i].userImage
            console.log(obj);
            newdata[i]=obj;
          }
          _this.tableData= newdata;
          // console.log('加入详情：'+result.data.data)
          // for(var i=0;i<joinData.length;i++){
          //   _this.joinDetails.push.joinData[i]
          // }
        })
      },
      toAct(index){
        this.$router.push({path:`/activitys/${index}`})
      }
    },
    mounted:function () {
      let _this = this
      //显示用户参加活动
      axios({
        method: 'post',
        url: 'http://localhost:3000/activity/showUserProvideAct',
        data:{
          userId:sessionStorage.getItem('userId')
        }

      }).then(function (result) {
        _this.joinAct = result.data.data
        _this.activityId=result.data.data[0].activityId;
        console.log( 'result结果'+result.data.data[0].activityId);
        console.log(result.data);

      }, function (err) {
        console.log(err);
      })

    }
  }
</script>

<style scoped>
  .contain{
    padding-left: 30px;
    min-height: 850px;
  }
  .upic{
    width: 90px;
    height: 90px;
    display: flex;
    border-radius: 50%;
    overflow: hidden;

  }
  .image{
    width: 260px;
    height: 170px;
  }

</style>
