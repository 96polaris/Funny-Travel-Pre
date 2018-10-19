<template>
  <div id="s3">
    <p class="title">{{currentData[0].travelTitle}}</p>
    <img :src="currentData[0].travelNoteImage"/>
    <div id="as2"><P style="text-indent:2em;" id="h2">{{currentData[0].travelNoteContent}}</P></div>
    <div id="w1">
      <p>评论</p>
      <hr style="border:1px solid gainsboro; ">
    </div>
    <div class="s1" v-for="item in currentData">
      <img id="tu" :src="item.userImage"/>
      <p>{{item.userName}}</p>
      <div id="h">
        <P style="text-indent:2em;" >{{item.comment}}</P>
      </div>
    </div>
    <div id="pl">
      <p><span class="glyphicon glyphicon-comment" aria-hidden="true"></span>发个神评论吧</p>
      <div id="shuru">
        <el-input
          type="textarea"
          :rows="4"
          placeholder="请输入内容"
          v-model="textarea">
        </el-input>
      </div>

    </div>


  </div>

</template>
<script>
  import luobotu from './luobutu'

  export default {
    name: "youji_xiangqing",
    components: {
      'youji-luobotu': luobotu,
    },
      data() {
        return {
          textarea: ''
        }
      },

    data: function () {
      return {
        mydata: [],
        currentData: [],
        pageindex: 0,
        pagecount: 2,
      }
    },
    mounted() {
      axios.get("http://localhost:3000/travelnote/travelNoteId/" + this.$route.params.id).then((result) => {
        console.log(result.data)
        this.mydata = result.data.data;
        console.log(result.data)
        for (var i = 0; i < 5; i++) {
          console.log(this.mydata[0][i]);
          this.currentData.push(this.mydata[0][i])
        }
      })
    },
  }
</script>

<style scoped>
  #s3 {
    width: 1000px;
    background-color: #9afff0;
    margin-left: 160px;
    margin-bottom: 100px;
    margin-top: 50px;
  }

  .title {
    font-size: 25px;
    font-weight: bold;
    color: #ffa33d;
    margin-left: 350px;
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
  .s1>p{
    width: 50px;
    margin-top: 5px;
    float: left;
    clear: left;
  }
  #h {
    width: 800px;
    height: 60px;
    margin-left: 50px;
    border-bottom:1px #b5b7b3 dashed;
    /*border-bottom:  dashed;*/
    }
  #pl{
    height: 200px;
  }
  #pl>p{
    color: #ffa33d;
    font-size: 20px;
    margin-top: 40px;
    margin-left: 40px;
  }
  #shuru{
    width: 800px;
    margin-left: 100px;
  }

</style>
