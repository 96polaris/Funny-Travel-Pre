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
        活动详情
      </span>
    <hr style="color: black;border: 2px solid rosybrown">
  </div>
  <div id="main">
      <!--上半部分（活动相关）-->
    <div id="actInner" v-for="item in oneActData">
      <div id="actImg">
        <img :src="item.actImg" alt="">
      </div>


      <div id="actWord" v-for="u in fbusers">

        <div id="actPic">
          <div style="float: left;"><img :src="u.userImage" alt=""></div>
          <div style="margin-top: 6px;margin-left: 70px;">
            <span style="font-size: 15px;font-weight: bold">发布人：{{u.userName}}</span>
          </div>
          <div>
            <span style="font-size: 22px;font-weight: bold">【主题】：{{item.activityTitle}}</span>
          </div>
        </div>
        <br>
        <div class="mesg">
          【活动编号】：<span>{{item.activityId}}号</span>
        </div>
        <div class="mesg">
          【活动时长】：<span>{{item.activityDays}}天</span>
        </div>
        <div class="mesg">
          【活动时间】：<span>开始时间：{{item.beginTime.substr(0,10)}}&nbsp;|&nbsp;结束时间：{{item.endTime.substr(0,10)}}</span>
        </div>
        <div class="mesg">
          【活动人数】：<span>{{item.personNum}}人</span>
        </div>
        <div class="mesg">
          【活动费用】：<span>￥{{item.money}}</span>
        </div>
        <div class="mesg">
          【活动电话】：<span>{{item.telNum}}</span>
        </div>
        <div style="width: 650px;background-color: beige;border: 1px solid transparent;margin-left: -4px">
          <div style="margin-top: 10px;font-size: 18px">
            【活动说明】：<span>{{item.activityIntroduce}}</span>
          </div>
        </div>
      </div>
    </div>
    <div id="btn1">
      <el-button plain type="primary" @click="joinAct":disabled="isDisable">加入活动</el-button>
      <el-button plain type="primary" @click="exitAct">退出活动</el-button>
    </div>

    <!--选项卡切换-->
    <el-tabs id="tab" v-model="activeName2" type="card" @tab-click="handleClick">
      <el-tab-pane label="评论中心" name="first" style="width: 200px;">
        <!--发表评论-->
        <textarea style="margin-left: 20px" v-model="comText" name="" id="addComment" cols="159" rows="6"placeholder="等你来评论哦..."></textarea>
        <button type="button" class="addbtn btn btn-info"@click="addComment">发表评论</button>

        <!--显示评论-->
        <div id="comments" v-for="com in actComments1">
          <div id="comImg"><img :src="com.userImage" alt=""></div>
          <div id="comContent">
            <h5>{{com.userName}} | {{com.activityTime}}</h5>
            <h4><p>{{com.activityCommentContent}}</p></h4>
            <div>
              <span class="glyphicon glyphicon-thumbs-up"
                    style="cursor:pointer"
                    aria-hidden="true"
                    @click="clickZan(com.activityCommentId)">（{{com.zan}}）
              </span>
              <span style="cursor:pointer;font-size: 16px" v-on:click="reply()">| 回复</span>
            </div>
            <hr style="border: 0.5px brown solid">
            <!--显示回复的评论-->
            <div v-for="item in replyData">
              <p>{{item.replyContent}}</p>
            </div>
          </div>

          <!--回复评论-->
          <div v-if="type">
            <textarea style="margin-left: 20px" v-model="repText" name="" id="replyComment" cols="120" rows="3"placeholder="回复..."></textarea>
            <button type="button" class="addbtn btn btn-info"@click="replyComment(com.activityCommentId)">确认回复</button>
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


      </el-tab-pane>
      <el-tab-pane label="活动声明" name="second">
        <div class="tword">
          <h3>出行须知</h3>
          A、为了您人身、财产的安全，请您避免在公开场合暴露贵重物品及大量现金。上街时需时刻看管好首饰、相机等随身物品。<br>
          B、游泳、漂流、潜水、滑雪、溜冰、戏雪、冲浪、探险、热气球、高山索道等活动项目，均存在危险。
          参与前请根据自身条件，并充分参考当地相关部门及其它专业机构的相关公告和建议后量力而行。
          <h3>支付方式</h3>
          A、客户端支持的支付方式：支付宝支付、信用卡、银联支付(详情电话联系)。<br>
          B、在线支付支持的支付方式：微信扫码支付、支付宝支付、信用卡支付、网银支付、银联支付。<br>
          C、对公汇款：通过银行将相关款项汇至同程旅游指定对公账户。<br>
          D、门市支付：门市刷卡（为了您的支付方便和安全性，请优先选择刷卡支付）、转账支票，现金支付。<br>
        </div>

      </el-tab-pane>
      <el-tab-pane label="其他说明" name="third">
        <div class="tword">
          <h3 >安全须知</h3>
          为了确保旅游顺利出行，防止旅途中发生人身意外伤害事故，请旅游者在出行前做一次必要的身体检查，
          如存在下列情况，请遵医嘱，否则，对于旅途中可能出现的因旅游者身体原因造成的问题由旅游者自行负责：<br>
          1、传染性疾病患者，如传染性肝炎、活动期肺结核、伤寒等传染病人；<br>
          2、心血管疾病患者，如严重高血压、心功能不全、心肌缺氧、心肌梗塞等病人；<br>
          3、脑血管疾病患者，如脑栓塞、脑出血、脑肿瘤等病人；<br>
          4、呼吸系统疾病患者，如肺气肿、肺心病等病人；<br>
          5、精神病患者，如癫痫及各种精神病人；<br>
          6、严重贫血病患者，如血红蛋白量水平在50克/升以下的病人；<br>
          7、大中型手术的恢复期病患者；<br>
          8、孕妇及行动不便者；<br>
          游客须主动诚信告知自身身体状况，若同程旅游发现游客存在不宜出行的身体情况的，有权拒绝接待，敬请谅解。
        </div>

      </el-tab-pane>
    </el-tabs>

  </div>
</div>
</template>
<script>
  import axios from 'axios'
    export default {
      name: "AddAct",
      data(){
        return {
          fbusers:'',
          oneUser:[],

          oneActData:[],
          actDetails:[],

          actComments:[] ,
          oneActComment:[],

          type:false,

          pageIndex:1,
          pagesize:5,
          pageCount:0,

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

          activeName2: 'first',
          userId:sessionStorage.getItem("userId"),

          repText:'',

          replyData:'',

          isDisable:false,

          actComId:[],
          click:false
        }
      },
      computed:{
        actComments1() {
          return this.oneActComment
        }
      },
      methods:{
        reply(){
          this.type=!this.type
        },
        clickZan(activityCommentId){
          if(this.click==false){
            axios.get(`http://localhost:3000/activity/end/click/${activityCommentId}`,{
            }).then((response)=>{
              axios.get(`http://localhost:3000/activity/comment/${this.id}`).then((res) => {
                let _this = this
                _this.actComments = res.data.data;
                for (var i = 0; i < _this.actComments.length; i++) {
                  _this.actComId.push(_this.actComments[i].activityCommentId)
                }
                console.log(res.data)
                _this.pageCount = _this.actComments.length
                _this.loadData()
              })
              alert('点赞成功')
              this.click=true
              // window.location.reload()
            }).catch((err)=>{
              alert('点赞失败')
              console.log(err)
            })
          }else{
            axios.post(`http://localhost:3000/activity/end/cancel/${activityCommentId}`,{
            }).then((res)=>{

              axios.get(`http://localhost:3000/activity/comment/${this.id}`).then((res) => {
                let _this = this
                _this.actComments = res.data.data;
                for (var i = 0; i < _this.actComments.length; i++) {
                  _this.actComId.push(_this.actComments[i].activityCommentId)
                }
                console.log(res.data)
                _this.pageCount = _this.actComments.length
                _this.loadData()
              })

              alert('取消点赞')
              this.click=false
            })
          }

        },
        //分页
        loadData() {
          this.oneActComment = [];
          // console.log('this.pageInedx:' + this.pageIndex)
          // console.log('this.pageCount:' + this.pageCount)
          let start = (this.pageIndex-1) * this.pagesize;
          let end = start + this.pagesize;
          //pageindex:0 , start:0 ; end:4
          //pageindex:1 , start: 4; end:8
          //pageindex:2 , start:8 ; end:12
          //pageindex:3 , start:6 ; end:8

          console.log(this.actComments[1]);
          if(end>=this.pageCount){
            end=this.pageCount
          }
          for (var i = start; i < end; i++) {
            this.oneActComment.push(this.actComments[i])
          }
        },
        change() {
          this.loadData()
        },
        // 加入活动的方法
        joinAct(){
          if(this.userId==null){
            alert('您还没有登录，请您先登录哦...')
          }else{
            axios.post('http://localhost:3000/activity/joinActivity',{
              provideId:this.provideId,
              user_userId: sessionStorage.getItem("userId"),
              activity_activityId:this.id,
            }).then((response)=>{
              console.log('----------------------------------')
              console.log(response)
              alert('您已发出申请，请耐心等待审核哦，我们会第一时间通知您！')

              this.isDisable = true
              setTimeout(() => {
                this.isDisable = false
              }, 100000000)

            }).catch((err)=>{
              alert('加入失败')
              console.log(err)
            })
          }
        },
        // 退出活动的方法
        exitAct(){
          axios.get(`http://localhost:3000/activity/exit/${this.userId}/${this.activityId}`)
            .then((response)=>{

            console.log('----------------------------------')
            console.log(response.data.data.affectedRows)
              if(this.userId==null){
              alert('您还没有登录，请您先登录哦...')
            }
            else if(response.data.data.affectedRows==0){
              alert('你还没有加入这个活动哦')
            }else{
              alert('退出成功 ')
                this.isDisable = false
            }
            // // alert('退出成功 ')
            // if(response.affectedRows==0) {
            //   alert('你还没有加入这个活动哦')
            // }
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
          if(this.userId==null){
            alert('请你先登录哦...')
            this.$router.push({path:'/login'})
          } else if(this.comText==''){
            alert('你还没有输入评论内容哦')
          }else{
            console.log('-----------------'),
            console.log('--------------------')
            console.log( sessionStorage.getItem("userId"))
            axios.post('http://localhost:3000/activity/end',{
              // activityCommentId:12,
              activityTime:new Date().toLocaleString(),
              activityCommentContent:this.comText,
              userId: sessionStorage.getItem("userId"),
              activity_activityId:this.id,
            }).then((response)=>{
              console.log(response.data);
              axios.get(`http://localhost:3000/activity/comment/${this.id}`).then((res) =>{
                let _this=this
                _this.actComments= res.data.data;
                _this.pageCount=_this.actComments.length
                _this.loadData();
              })
              if(response.data.data.affectedRows==1) {
                alert('评论成功！')
                this.comText=''
              }else{
                alert('评论失败！')
                this.comText=''
              }
                // window.location.reload()
            }).catch((err)=>{
              alert('评论失败')
              console.log(err)
            })
          }
          },
        handleClick(tab, event) {
          console.log(tab, event);
        },

        //回复评论
        // replyComment(activityCommentId){
        //   if(sessionStorage.getItem('userId')==null){
        //     alert('请你先登录哦...')
        //   }else if(this.repText==''){
        //     alert('你还没有输入评论内容哦')
        //   }else{
        //     axios.post('http://localhost:3000/activity/end/reply',{
        //       replyTime:new Date().toLocaleString(),
        //       replyContent:this.repText,
        //       userId: sessionStorage.getItem("userId"),
        //       actCommentId:activityCommentId,
        //     }).then((response)=>{
        //
        //       axios.get(`http://localhost:3000/activity/comment/${this.id}`).then((res) =>{
        //         let _this=this
        //         _this.actComments= res.data.data;
        //         console.log(res.data)
        //         _this.pageCount=_this.actComments.length
        //         _this.loadData()
        //       })
        //
        //       // if(response.status==200) {
        //       alert('回复成功！')
        //       // window.location.reload()
        //     }).catch((err)=>{
        //       alert('回复失败')
        //       console.log(err)
        //     })
        //   }
        //   }

      },

      //挂载  动态生成数据
      mounted(){
        let _this = this;
        // 某一条活动
        axios.get(`http://localhost:3000/activity/details/${_this.id}`).then((result) =>{

          _this.oneActData= result.data.data;
          _this.provideId = result.data.data[0].user_userId;
          _this.activityId = result.data.data[0].activityId;
          console.log('------------------------------')
          // console.log(result.data.data[0].user_userId)
          console.log(this.provideId)
          console.log(result.data)
          for(var i = 0 ; i < 1; i++){
            this.actDetails.push(this.oneActData[i])
          }
          // 获取发布活动的用户的信息
          axios.get(`http://localhost:3000/activity/oneUser/${this.provideId}`).then((result) =>{
            _this.fbusers= result.data.data;
            console.log(result.data)
            console.log(_this.fbusers);
            for(var i = 0 ; i <  _this.fbusers.length; i++){
              _this.oneUser.push(_this.fbusers[i])
              console.log(_this.oneUser);
            }
          })
        }),
          // 某一条活动的所有评论
        axios.get(`http://localhost:3000/activity/comment/${this.id}`).then((res) =>{
          let _this=this
          _this.actComments= res.data.data;
          console.log('---------------')
          console.log(_this.actComments);
          for(var i = 0 ; i <  _this.actComments.length; i++){
            _this.actComId.push(_this.actComments[i].activityCommentId)
          }
          console.log(res.data)
          _this.pageCount=_this.actComments.length
          _this.loadData()

          // 获取 显示回复评论
          // for(let i=0;i<_this.actComId.length;i++){
          //   axios.post(`http://localhost:3000/activity/replyDetails/${_this.actComId[i]}`).then((res) =>{
          //     console.log('...........')
          //     console.log(res.data.data);
          //     _this.replyData=res.data.data
          //   })
          // }


        })


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
#main{
  width: 1200px;
  margin: 0 auto;
  background-color: #eeee;
  color: black;
  /*border: 1px solid black;*/
}
#actImg{
  float: left;
  height: 300px;
  /*border: 1px solid black;*/
  margin-left: 20px;
  margin-top: 20px;
}
  #actImg img{
    width: 500px;
    height: 300px;
  }
  /*#myp{margin-top: 30px}*/
  #actWord{
    width: 650px;
    /*height: 320px;*/
    margin-left: 550px;
    border: 1px solid transparent;
    /*margin-top: 20px;*/
  }
  #actPic{
    width: 650px;
    height: 60px;
    margin-top: 30px;
    border: 1px solid transparent;
    /*background-color: beige;*/

  }
  #actPic img{
    width: 60px;
    height: 60px;
    border-radius: 30px;
    /*float: left;*/
  }
  .mesg{margin-top: 5px}
#btn1{margin-left: 555px;margin-top: 20px}
#tab{margin-top: 20px}
.addbtn{margin-left: 950px;margin-top: 10px}
  .tword{margin-top: 20px;margin-left: 20px;margin-bottom: 20px}
  #comImg{float: left;margin-top: 10px}
  #comImg img{
    width: 60px;
    height: 60px;
    border-radius: 30px;
    margin-left: 20px;
  }
  #comContent{
    width: 1000px;
    height: 108px;
    border: 1px solid transparent;
    margin-left: 100px;
  }
.block{margin-left: 500px}
</style>
