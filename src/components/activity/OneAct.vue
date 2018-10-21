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

  <div id="main">
    <!--显示活动详情-->
    <div v-for="item in oneActData">
      <div id="actInner">
        <!--<p>发布人：{{item.user_userId}}</p>-->
        <div id="headPic"><img :src="headPic" alt=""></div>
        <p>发布人：{{userName}}</p>
        <p>活动编号：{{item.activityId}}</p>
        <p>活动主题：{{item.activityTitle}}</p>
        <p>活动时长：{{item.activityDays}}</p>
        <p>活动开始时间：{{item.beginTime}}</p>
        <p>活动结束时间：{{item.endTime}}</p>
        <p>活动人数：{{item.personNum}}</p>
        <p>活动费用：{{item.money}}</p>
        <p>联系电话：{{item.telNum}}</p>
        <p>活动说明：{{item.activityIntroduce}}</p>
      </div>
      <br>
    </div>
    <button type="button" class="btn btn-warning"@click="joinAct">加入活动</button>
    <button type="button" class="btn btn-danger"@click="exitAct">退出活动</button>
    <!--<button type="button" class="btn btn-success" @click="editAct">修改活动信息</button>-->

    <!--发表评论-->
    <textarea v-model="comText" name="" id="addComment" cols="100" rows="10"placeholder="等你来评论哦..."></textarea>
    <button type="button" class="btn btn-info"@click="addComment">发表评论</button>

    <!--显示评论-->
    <div id="comments" v-for="com in actComments">
      <!--<div id="headPic">-->
        <img :src="headPic" alt="">
        {{userName}}
        {{com.activityTime}}
      <p>{{com.activityCommentContent}}</p>
    </div>

    <!--分页-->
    <nav aria-label="Page navigation">
      <ul class="pagination">
        <li>
          <a href="#" aria-label="Previous">
            <span aria-hidden="true">&laquo;</span>
          </a>
        </li>
        <li><a href="#">1</a></li>
        <li><a href="#">2</a></li>
        <li><a href="#">3</a></li>
        <li><a href="#">4</a></li>
        <li><a href="#">5</a></li>
        <li>
          <a href="#" aria-label="Next">
            <span aria-hidden="true">&raquo;</span>
          </a>
        </li>
      </ul>
    </nav>
  </div>
  <router-view></router-view>
</div>
</template>
<script>
  import axios from 'axios'
    export default {
      name: "AddAct",
      data(){
        return {
          oneActData:[],
          actDetails:[],
          oneActComment:[],
          actComments:[],
          pageindex:0,
          pagecount:2,
          dataimg: [
            {src: require('../../assets/activityImg/01.jpg'),},
            {src: require('../../assets/activityImg/02.jpg'),},
            {src: require('../../assets/activityImg/03.jpg'),},
            {src: require('../../assets/activityImg/04.jpg'),}
          ],
          id:this.$route.params.id,
          comText:'',
          provideId:'',
          activityId:'',
          // num:4,
        }
      },
      //store的数据必须用计算属性定义
      computed:{
        userId(){
          return this.$store.state.userInfo.userId;
        },
        userName(){
          return this.$store.state.userInfo.userName;
        },
        headPic(){
          return this.$store.state.userInfo.headPic;
        }
      },
      methods:{
        // 加入活动的方法
        joinAct(){
          axios.post('http://localhost:3000/activity/joinActivity',{
            provideId:this.provideId,
            user_userId:this.userId,
            activity_activityId:this.id,
          }).then((response)=>{
              alert('您已发出申请，请耐心等待审核哦，我们会第一时间通知您！')
          }).catch((err)=>{
            alert('加入失败')
            console.log(err)
          })
        },
        // 退出活动的方法
        exitAct(){
          axios.get(`http://localhost:3000/activity/exit/${this.userId}/${this.activityId}`)
            .then((response)=>{
              console.log(this.userId)
              console.log(this.activityId)
            console.log('----------------------------------')
            console.log(response.data.data.affectedRows)
            // if(response.data.data.affectedRows==0){
            //   alert('你还没有加入这个活动哦')
            // }else{alert('退出成功 ')}
            alert('退出成功 ')
            if(response.affectedRows==0) {
              alert('你还没有加入这个活动哦')
            }
          }).catch((err)=>{
            alert('退出失败')
            console.log(err)
          })
        },
        // 修改活动
        // editAct(){
        //   axios.get(`http://localhost:3000/activitys/${this.id}/editAct`,{
        //    activityTitle:
        //    activityDays:
        //    beginTime:
        //    endTime:
        //    personNum:
        //    money:
        //    telNum:
        //    activityIntroduce:
        //   }).then((response)=>{
        //     alert('修改成功')
        //   }).catch((err)=>{
        //     alert('修改失败')
        //     console.log(err)
        //   })
        // },
        // 发表评论
        addComment(){
          if(this.comText==''){
            alert('你还没有输入评论内容哦')
          }else{
            axios.post('http://localhost:3000/activity/end',{
              // activityCommentId:12,
              activityTime:new Date().toLocaleString(),
              activityCommentContent:this.comText,
              userid:this.userId,
              activity_activityId:this.id,
            }).then((response)=>{
              // console.log('++++++++++++++++++++')
              // console.log(response)
              // if(response.status==200) {
                alert('评论成功！')
              // }
              // }else{}
              // else alert('评论失败')
            }).catch((err)=>{
              alert('评论失败')
              console.log(err)
            })
          }
          }
      },

      //挂载  动态生成数据
      mounted(){
        // 某一条活动
        axios.get(`http://localhost:3000/activity/details/${this.id}`).then((result) =>{
          this.oneActData= result.data.data;
          this.provideId = result.data.data[0].user_userId;
          this.activityId = result.data.data[0].activityId;
          console.log('------------------------------')
          // console.log(result.data.data[0].user_userId)
          console.log(result.data)
          for(var i = 0 ; i < 1; i++){
            this.actDetails.push(this.oneActData[i])
          }
        }),
          // 某一条活动的所有评论
        axios.get(`http://localhost:3000/activity/comment/${this.id}`).then((res) =>{
          this.oneActComment= res.data.data;
          console.log(res.data)
          for(var i = 0 ; i < 2; i++){
            this.actComments.push(this.oneActComment[i])
          }
        })
      },
    }
</script>

<style scoped>
#addComment{
  width: 1150px;
  height: 150px;
  margin-top: 10px;
}
  #comments{
    width: 1000px;
    height: 100px;
    border: 1px solid black;
    margin-top: 10px;
    background-color: #67b168;
  }
  #actInner{
    width: 600px;
    height: 400px;
    background-color: #67b168;
    margin-top: 10px;
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
    margin: 0 auto;
    border: 1px solid black;
  }
  #comments img{
    width: 70px;
    height: 70px;
    border-radius: 35px;
    position: relative;
  }
  #comments p{margin-left: 80px}
#headPic img{
  width: 70px;
  height: 70px;
}
</style>
