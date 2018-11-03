<template>
  <div>
    <div id="bx">
      <div id="ss"><img src="../../assets/noteSlide/5.jpg" alt=""></div>

      <div id="s3">
        <p class="title">{{currentData[0] && currentData[0].travelTitle}}</p>
        <img :src="(currentData[0] && currentData[0].travelNoteImage)"/>
        <div id="as2"><P style="text-indent:2em;" id="h2">{{currentData[0] && currentData[0].travelNoteContent}}</P>
        </div>

        <div id="xy">
          <p><span class="glyphicon glyphicon-edit" aria-hidden="true"></span>我也写篇游记吧</p>
          <!--<router-link tag="li" active-class="active" role="presentation" to="/user/myyouji" exact><a>我的游记</a></router-link>-->
          <hr style="border:1px solid gainsboro; ">
          <div id="yj">
            <el-row>
              <!--<a href="/user/addyouji"> <el-button type="primary" round>发表游记</el-button></a>-->
              <el-button type="primary" @click="fbyj()">发表游记</el-button>
            </el-row>
          </div>

        </div>

        <div id="pl">
          <p><span class="glyphicon glyphicon-comment" aria-hidden="true"></span>发个神评论吧</p>
          <hr style="border:1px solid gainsboro; ">
          <div id="shuru">
            <el-input
              type="textarea"
              :rows="4"
              placeholder="请输入内容"
              v-model="textareadata">
            </el-input>
            <div id="tj">
              <el-row>
                <el-button type="primary" @click="pinglun()">提交</el-button>
              </el-row>
            </div>
          </div>
        </div>
        <div id="dd">
          <div id="w1">
            <p>评论</p>
            <hr style="border:1px solid gainsboro; ">
          </div>
          <div class="s1" v-for="item in currentDatax">
            <img id="tu" :src="item.userImage"/>
            <p>{{item.userName}}</p>
            <div id="h">
              <P style="text-indent:2em;">{{item.comment}}</P>
            </div>
          </div>
          <div id="kk"></div>
        </div>
      </div>
    </div>
  </div>


</template>

<script>
  export default {
    components: {},
    computed: {
      useId() {
        return this.$store.state.userInfo.userId;
      }
    },
    data: function () {
      return {
        textareadata: '',
        mydata: [],
        currentData: [],
        pageindex: 0,
        pagecount: 2,
        currentDatax: [],
      }
    },
    beforeCreate() {
      axios.get("http://localhost:3000/travelnote/travelNoteId/" + this.$route.params.id).then((result) => {
        console.log(result.data)
        this.mydata = result.data.data;
        console.log(result.data)
        for (var i = 0; i < this.mydata[0].length; i++) {
          console.log(this.mydata[0][i]);
          this.currentData.push(this.mydata[0][i])
        }
      })

        axios.get("http://localhost:3000/travelnote/travelNoteIdpl/" + this.$route.params.id).then((result) => {
          console.log(result.data)
          this.mydata = result.data.data;
          console.log(result.data)
          for (var i = 0; i < this.mydata[0].length; i++) {
            console.log(this.mydata[0][i]);
            this.currentDatax.push(this.mydata[0][i])
          }
        })




    },
    methods: {
      pinglun() {
        if(sessionStorage.getItem('userId')==null){
          alert('请先登录！')
          this.$router.push({
            path:'/login'})
        }else {
          axios.post(`http://localhost:3000/travelnote/addpl`, {
            comment: this.textareadata,
            user_userId: sessionStorage.getItem('userId'),
            travelNote_travelNoteId: this.currentData[0].travelNoteId
          }).then(function (result) {
            // this.user = result.data;
            console.log(result.data)
          })
          alert("评论成功"),
            this.textareadata = null
        location.reload()
        }
      },
      fbyj(){
        console.log(sessionStorage.getItem('userId'))
        if(sessionStorage.getItem('userId')==null){
          alert('请先登录！')
          this.$router.push({
            path:'/login'})
        }else {
          this.$router.push({
            path:'/user/addyouji'
          })
        }
      }
    }
  }

</script>

<style scoped>
  #bx {
    width: 1200px;
    margin: 0 auto;
  }

  #ss > img {
    width: 1200px;
    height: 180px;
  }

  #s3 {
    width: 1000px;
    background-color: #e1ebff;
    margin-left: 100px;
    margin-bottom: 100px;
    margin-top: 30px;
  }

  .title {
    font-size: 25px;
    font-weight: bold;
    color: #ffa33d;
    margin-left: 380px;
  }

  #dd {
    margin-bottom: 50px;
  }

  #w1 > p {
    font-size: 20px;
    color: #ffa33d;
    margin-left: 40px;
    font-weight: bold;
    margin-top: 40px;
  }

  #s3 > img {
    width: 800px;
    height: 400px;
    margin-left: 100px;
    margin-top: 20px;
  }

  #as2 {
    width: 700px;
    margin-left: 150px;
    margin-top: 50px;
  }

  #h2 {
    font-size: 17px;
  }

  .s1 {
    margin-top: 20px;
    margin-left: 50px;
  }

  #tu {
    width: 30px;
    height: 30px;
    border-radius: 15px;
    float: left;
  }

  .s1 > p {
    width: 50px;
    margin-top: 5px;
    float: left;
    clear: left;
  }

  #h {
    width: 800px;
    height: 60px;
    margin-left: 50px;
    border-bottom: 1px #b5b7b3 dashed;
    /*border-bottom:  dashed;*/
  }

  #pl {
    height: 180px;
  }

  #pl > p {
    color: #ffa33d;
    font-size: 20px;
    margin-top: 40px;
    margin-left: 40px;
  }

  #shuru {
    width: 800px;
    margin-left: 100px;
  }

  #tj {
    margin-top: 20px;
    float: right;
  }

  #kk {
    width: 800px;
    height: 100px;
  }

  #xy > p {
    color: #ffa33d;
    font-size: 20px;
    margin-top: 40px;
    margin-left: 40px;
  }
#yj{
  float: right;
  margin-right: 100px;
}
</style>
