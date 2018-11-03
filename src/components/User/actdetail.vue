<template>
<div>
  <h3>活动名称：{{actdetail.activityTitle}}</h3>
  <div class="tcontain">
    <el-table
      :data="tableData"
      style="width: 80%; margin:0 auto;">
      <el-table-column
        prop="userImage"
        label="用户头像"
        width="180">
        <!--//显示用户头像-->
        <template slot-scope="scope">
          <img  :src="scope.row.userImage" alt="" style="width: 50px;height: 50px;border-radius:50%;">
        </template>
      </el-table-column>
      <el-table-column
        prop="userName"
        label="用户名"
        width="180">
      </el-table-column>
      <el-table-column
        prop="userPhone"
        label="联系方式">
      </el-table-column>
    </el-table>
  </div>

</div>
</template>

<script>
  import axios from 'axios'
    export default {
      name: "actdetail",
      data() {
        return {
          actdetail: '',
          tableData:[]
        }
      },
      mounted: function () {
        let _this = this
        let actid = this.$route.params.actid
        //显示用户参加活动
        axios({
          method: 'get',
          url: `http://localhost:3000/activity/details/${actid}`,
        }).then(function (result) {
          _this.actdetail = result.data.data[0]
          // console.log( 'result结果'+result.data.data[0].activityId);
          console.log(_this.actdetail.activityTitle);

        }),
          axios.get(`http://localhost:3000/activity/joinDetails/${actid}`).then((result) => {
            console.log('--------111');
            console.log(result.data.data);
            _this.tableData = result.data.data;
            // console.log(data[0].userName);
            // for (var i = 0; i < data.length; i++) {
            //   var obj = {}
            //   var newdata = []
            //   obj.userName = data[i].userName
            //   obj.userPhone = data[i].userPhone
            //   obj.userImage = data[i].userImage
            //   console.log('--------222');
            //   console.log(obj);
            //   newdata[i] = obj;
            //   console.log('--------333');
            //   console.log(newdata);
            // }

            // _this.tableData = newdata;
            // console.log('--------444');
            // console.log(_this.tableData);

            // console.log('加入详情：'+result.data.data)
            // for(var i=0;i<joinData.length;i++){
            //   _this.joinDetails.push.joinData[i]
            // }
          })
      }
    }
</script>

<style scoped>
.tcontain{
  padding-top: 20px;
}
</style>
