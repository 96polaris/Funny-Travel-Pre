<template>
<div class="noteContainer">
  <el-button type="primary" icon="el-icon-edit" class="edit" @click="editNote">写游记</el-button>
  <el-row class="row">
    <el-col :span="7" v-for="(value,index) in myNote" style="margin-left: 25px;margin-top: 20px">
      <el-card :body-style="{ padding: '0px',width:'255px',height:'250px'}" >
        <img :src="value.travelNoteImage" class="image"@click="toNote(value.travelNoteId)">
        <div style="padding: 5px;">
          <span>{{value.travelTitle}}</span>
        </div>
        <div class="bottom clearfix">
          <time class="time">{{value.fbtime.substr(0,10)}}</time>
          <!--<el-button type="text" @click="open2">点击打开 Message Box</el-button>-->
          <el-button style="margin-left: 80px" type="primary" size="small" plain @click="delmynote(value.travelNoteId)">删除</el-button>
          <!--<el-button type="danger" icon="el-icon-delete" circle @click="delmynote(value.travelNoteId)"></el-button>-->
          <!--<el-button type="button"size="medium" class="button" @click="delmynote(value.travelNoteId)">删除</el-button>-->
        </div>
      </el-card>
    </el-col>
  </el-row>
</div>


</template>

<script>
  export default {
    name: "myNote",
    data(){
      return{
        myNote:[]
      }
    },
    methods:{
      toNote(index){
        this.$router.push({path:`/youji/youjixq/${index}`})

      },
      editNote(){
        this.$router.push({path:`/user/addyouji`})
      },
      //删除游记
      delmynote(index){
        let _this = this
          this.$confirm('此操作将永久删除该游记, 是否继续?', '提示', {
            confirmButtonText: '确定',
            cancelButtonText: '取消',
            type: 'warning'
          }).then(() => {
            this.$message({
              type: 'success',
              message: '删除成功!'
            });
            axios({
              method: 'get',
              url: `http://localhost:3000/travelnote/delyj/${index}`,
            }).then(function (result) {
              console.log(result.data);
              // console.log(_this.myNote);
              // _this.sindex=result.data.data[i].scenicId

              //再次调用接口，渲染页面，获得新数据
              axios({
                method: 'get',
                url: `http://localhost:3000/travelnote/gerenNote/${sessionStorage.getItem('userId')}`,
              }).then(function (result) {
                // console.log(result.data);
                _this.myNote = result.data.data
                // console.log(_this.myNote);
                // _this.sindex=result.data.data[i].scenicId
              }, function (err) {
                console.log(err);
              })

            }, function (err) {
              console.log(err);
            })

          }).catch(() => {
            this.$message({
              type: 'info',
              message: '已取消删除'
            });
          });
      }

    },
    mounted: function () {
      let _this = this
      axios({
        method: 'get',
        url: `http://localhost:3000/travelnote/gerenNote/${sessionStorage.getItem('userId')}`,
      }).then(function (result) {
        // console.log(result.data);
        _this.myNote = result.data.data
        // console.log(_this.myNote);
        // _this.sindex=result.data.data[i].scenicId
      }, function (err) {
        console.log(err);
      })
    }
  }
</script>

<style scoped>
.image{
  width: 255px;
  height: 170px;
}
  .el-card is-always-shadow{
    width: 255px;
  }
  .noteContainer{
    padding-left: 50px;
    /*height:min-height;*/
    min-height: 850px;

  }
   .row{
    clear: both !important;
     /*margin-top: 30px;*/

  }
  .edit{
    float: right;
   margin-top: 10px;
    margin-right: 20px;
  }

.bottom {
  padding-left: 14px;
  margin-top: 5px;
  line-height: 12px;

}


.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}

.clearfix:after {
  clear: both
}

</style>
