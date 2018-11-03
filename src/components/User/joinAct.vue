<template>
  <div class="contain">
    <el-row>
      <el-col :span="7" v-for="(value,index) in joinAct" style="margin-left: 25px;margin-top: 20px">
        <el-card :body-style="{ padding: '0px',width:'260px',height:'250px'}" >
          <img :src="value.actImg" class="image"@click="toAct(value.activityId)">
          <div class="acttext">
            <p>{{value.activityTitle}}</p>
            <!--<el-button type="text" class="button" @click="exitAct(value.activityId,userid)">退出活动</el-button>-->
            <el-button style="margin-left: 70px" type="primary"class="button" round size="small"@click="exitAct(value.activityId,userid)">退出活动</el-button>
          </div>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
    export default {
        name: "joinAct",
      data(){
          return{
            joinAct:[],
            userid:sessionStorage.getItem('userId')
          }
      },
      methods:{
        toAct(index){
          this.$router.push({path:`/activitys/${index}`})
        },
        //退出活动
        exitAct(actid,userid){
          let _this = this
          this.$confirm('此操作将退出该活动, 是否继续?', '提示', {
            confirmButtonText: '确定',
            cancelButtonText: '取消',
            type: 'warning'
          }).then(() => {
            this.$message({
              type: 'success',
              message: '退出成功!'
            });
            axios({
              method: 'get',
              url: `http://localhost:3000/activity/exit/${userid}/${actid}`,
            }).then(function (result) {
              console.log(result.data);
              // console.log(_this.myNote);
              // _this.sindex=result.data.data[i].scenicId
              //再次调用接口，渲染页面，获得新数据
              axios({
                method: 'post',
                url: 'http://localhost:3000/activity/showUserJohnAct',
                data:{
                  userId:_this.userid
                }
              }).then(function (result) {
                // console.log(result.data);
                _this.joinAct = result.data.data
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
      mounted:function () {
        let _this = this
        //显示用户参加活动
        axios({
          method: 'post',
          url: 'http://localhost:3000/activity/showUserJohnAct',
          data:{
            userId:sessionStorage.getItem('userId')
          }

        }).then(function (result) {
          // console.log(result.data);
          _this.joinAct = result.data.data
          console.log(result.data);

          console.log(11+_this.joinAct);
        }, function (err) {
          console.log(err);
        })

      }
    }
</script>

<style scoped>
  .contain{
    padding-left: 20px;
    min-height: 850px;
  }
  .image{
    width: 255px;
    height: 170px;
  }
  .acttext{
    width: 260px;
    height: 60px;
    padding: 14px;
    font-size: 16px;
  }
  .el-button--text{
    float: right;
    padding-top:5px;
  }
</style>
