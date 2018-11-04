<template>
  <div style="width: 1200px;">
    <div id="bx">
      <div id="s3">
        <div class="s1" v-for="item in mydata">
          <div>
            <router-link :to="'/youji/youjixq/'+item.travelNoteId" style="text-decoration:none;"> <p class="title">{{item.travelTitle}}</p></router-link>
            <router-link :to="'/youji/youjixq/'+item.travelNoteId" style="text-decoration:none;"><div id="as1"><img :src="item.travelNoteImage"/></div></router-link>
            <div id="as2"><P style="text-indent:2em;" id="h2">{{item.travelNoteContent.substring(0,220)+'...'}}</P></div>

            <div id="shan">
              <el-row>
                <el-button type="danger" @click="dialogVisible = true;">删除游记</el-button>
                <el-dialog
                  title="提示"
                  :visible.sync="dialogVisible"
                  width="30%"
                  :before-close="handleClose">
                  <span>确认删除该游记吗？</span>
                  <span slot="footer" class="dialog-footer">
    <el-button @click="dialogVisible = false">取 消</el-button>
    <el-button type="primary" @click="dialogVisible = false;shanchu(item.travelNoteId)">确 定</el-button>
  </span>
                </el-dialog>
              </el-row>
            </div>
          </div>

        </div>
      </div>
      <div id="bb2"></div>
    </div>
    </div>

</template>

<script>
  import axios from 'axios'


  export default {
    name: "my_youji",
    computed: {
      useId() {
        return this.$store.state.userInfo.userId;
      }
    },
    data: function () {
      return {
        dialogVisible: false,
        mydata: [],
        currentData: [],
        pageindex: 0,
        pagecount: 2,
        id: ''
      }
    },

    methods: {
      shanchu(id) {
        // alert(id)
        axios.get(`travelnote/addyj/${id}`).then(function (result) {
          this.user = result.data;
          console.log(result.data)
        })
      },
      handleClose(done) {
        this.$confirm('确认关闭？')
          .then(_ => {
            done();
          })
          .catch(_ => {
          });
      }
    },
    mounted() {
      axios.get("travelnote/gerenNote/" + sessionStorage.getItem('userId')      ).then((result) => {
        console.log(result.data)
        this.mydata = result.data.data;
        console.log(result.data)
        for (var i = 0; i < 4; i++) {
          this.currentData.push(this.mydata[i])
        }
      })
    },


  }
</script>

<style scoped>
  #bx{
    width: 1200px;
    margin: 0 auto;
  }
  #s3 {
    width: 100%;
    background-color: #d1feb9;

  }
  #bb2{
    height: 80px;
  }

  .s1 {
    width: 800px;
    height: 320px;
    background-color: #b0fff8;
    margin-top: 60px;
    margin-left: 200px;

  }

  .title {
    font-size: 20px;
    font-weight: bold;
    color: #eb9331;
    margin-left: 30px;
  }

  p {
    font-size: 16px;
  }

  #as1 > img {
    width: 240px;
    height: 210px;
    margin-left: 10px;
    border-radius:15px;
  }

  #as1 {
    width: 250px;
    height: 200px;
    float: left;
    margin-top: 10px;

  }

  #as2 {
    width: 520px;
    height: 180px;
    float: right;
    margin-right: 10px;
    margin-top: 10px;
  }

  #h2 {
    margin-right: 30px;
  }
#h2:hover{
  color: #eb9331;
}
  #shan {
    float: right;
    margin-right: 20px;
  }


</style>
