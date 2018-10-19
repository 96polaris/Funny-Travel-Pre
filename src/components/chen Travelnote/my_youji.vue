<template>
  <div>
    <div id="s3">
      <h2> 用户游记 </h2>
      <div class="s1" v-for="item in mydata">
        <div>
          <p class="title">{{item.travelTitle}}</p>
          <div id="as1"><img :src="item.travelNoteImage"/></div>
          <div id="as2"><P style="text-indent:2em;" id="h2">{{item.travelNoteContent.substring(0,220)+'...'}}</P></div>
          <div id="shan">

            <el-row>
              <el-button type="danger"  @click="dialogVisible = true;">删除游记</el-button>
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
  </div>
</template>

<script>
  import axios from 'axios'


  export default {
    name: "my_youji",
    computed: {
      useId() {
        return this.$store.state.useId;
      }
    },
    data: function () {
      return {
        dialogVisible: false,
        mydata: [],
        currentData: [],
        pageindex: 0,
        pagecount: 2,
        id:''
      }
    },

       methods: {
         shanchu(id){
           // alert(id)
           axios.get(`http://localhost:3000/travelnote/addyj/${id}`).then(function(result){
             this.user = result.data;
             console.log(result.data)
           })
         },
         handleClose(done) {
           this.$confirm('确认关闭？')
             .then(_ => {
               done();
             })
             .catch(_ => {});
         }
       },
    mounted() {
      axios.get("http://localhost:3000/travelnote/gerenNote/" + this.$store.state.useId).then((result) => {
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
  #s3 {
    width: 100%;
    background-color: #feede5;
    height: 1500px;
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
    width: 220px;
    height: 190px;
    margin-left: 20px;
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
    margin-right: 20px;
    margin-top: 10px;
  }

  #h2 {
    margin-right: 40px;
  }
  #shan{
    float: right;
    margin-right: 20px;
  }


</style>
