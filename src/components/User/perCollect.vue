<template>
<div  class="contain">
<div>
      <h3>收藏景点</h3>
      <el-row class="row">
        <el-col :span="6" v-for="(value,index) in collScenic" style="margin-left: 25px;margin-top: 20px">
          <el-card :body-style="{ padding: '0px'}" >
            <img :src="value.scenicImage" class="image" @click="toScenic(value.scenicId)">
            <div style="padding: 14px;">
              <span>{{value.scenicName}}</span>
              <span class="glyphicon glyphicon-heart bottom" style="color: red;" @click="removeScenic(value.scenicId,userId)"></span>
            </div>
          </el-card>
        </el-col>
      </el-row>
      </div>
    <div class="RouteColl">
      <h3>收藏线路</h3>
      <el-row class="row">
        <el-col :span="6" v-for="(value,index) in collRoute" style="margin-left: 25px;margin-top: 20px">
          <el-card :body-style="{ padding: '0px' }" >
            <img :src="value.routeImage" class="image"@click="toRoute(value.routeId)">
            <div class="route-style">
              <div class="routetext">
                <span  >{{value.routeName}}</span>
              </div>

              <span class="glyphicon glyphicon-heart bottom" style="color: red;" @click="removeRoute(value.routeId,userId)"></span>

            </div>
          </el-card>
        </el-col>
      </el-row>
    </div>
</div>
</template>

<script>
  import axios from'axios'
    export default {
        name: "perCollect",
      data(){
          return{
            collScenic:[],
            collRoute:[],
            sindex:'',
            userId:sessionStorage.getItem('userId')
          }
      },
      methods:{
        toScenic(index){
          this.$router.push({path:'/Scenicdetails',query:{id:index}})

        },
        toRoute(index){
            this.$router.push({path:'/Routedetails',query:{id:index}})
            console.log(index);
        },
        //删除收藏景点
        removeScenic(scenicId,userId){
          let _this = this
          this.$confirm('此操作将取消该收藏, 是否继续?', '提示', {
            confirmButtonText: '确定',
            cancelButtonText: '取消',
            type: 'warning'
          }).then(() => {
            this.$message({
              type: 'success',
              message: '移除收藏成功!',});
              axios({
                      method: 'get',
                      url: `http://localhost:3000/collection/delscenic/${scenicId}/${userId}`,
          }).then(function (result) {
              console.log(result.data);
              // console.log(_this.myNote);
              // _this.sindex=result.data.data[i].scenicId

              //再次调用接口，渲染页面，获得新数据
                axios({
                  method: 'post',
                  url: 'http://localhost:3000/collection/ShowScenicColl',
                  data:{
                    userId:sessionStorage.getItem('userId')
                  }
                }).then(function (result) {
                  // console.log(result.data);
                  _this.collScenic = result.data.data
                  console.log(_this.collScenic[0].sceniImage);
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
        },
        removeRoute(routeId,userId){
          let _this = this
          this.$confirm('此操作将取消该收藏, 是否继续?', '提示', {
            confirmButtonText: '确定',
            cancelButtonText: '取消',
            type: 'warning'
          }).then(() => {
            this.$message({
              type: 'success',
              message: '移除收藏成功!',});
            axios({
              method: 'get',
              url: `http://localhost:3000/collection/delroute/${routeId}/${userId}`,
            }).then(function (result) {
              console.log(result.data);
              // console.log(_this.myNote);
              // _this.sindex=result.data.data[i].scenicId

              //再次调用接口，渲染页面，获得新数据
              axios({
                method: 'post',
                url: 'http://localhost:3000/collection/ShowRouteColl',
                data:{
                  userId:sessionStorage.getItem('userId')
                }
              }).then(function (result) {
                // console.log(result.data);
                _this.collRoute = result.data.data
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
        //显示收藏景点
        axios({
          method: 'post',
          url: 'http://localhost:3000/collection/ShowScenicColl',
          data:{
            userId:sessionStorage.getItem('userId')
          }
        }).then(function (result) {
          // console.log(result.data);
          _this.collScenic = result.data.data
          console.log(_this.collScenic[0].sceniImage);
        }, function (err) {
          console.log(err);
        })
//显示线路收藏
        axios({
          method: 'post',
          url: 'http://localhost:3000/collection/ShowRouteColl',
          data:{
            userId:sessionStorage.getItem('userId')
          }
        }).then(function (result) {
          // console.log(result.data);
          _this.collRoute = result.data.data
          // console.log(_this.collRoute[0].routeName);
          // _this.sindex=result.data.data[i].scenicId
        }, function (err) {
          console.log(err);
        })
      }
    }
</script>

<style scoped>
  .contain{
    padding-left: 35px;
    margin-top: -20px;
    min-height: 850px;
  }
  .bottom {
    padding:0px;
    float: right;
    width: 30px;
    height: 30px;
  }
  .glyphicon{
    width: 20px;
    height: 20px;
    padding-right: 5px;
    font-size: 20px;
  }
  .image{
    width: 223px;
    height: 170px;
  }
  .route-style{
    width: 221px;
    height: 48px;
    padding: 14px;
  }
  .routetext{
    width: 162px;
    overflow: hidden;
    text-overflow:ellipsis;
    white-space:nowrap;
    display: inline-block;
  }
  .routetext:hover{
    overflow: visible;
  }

</style>
