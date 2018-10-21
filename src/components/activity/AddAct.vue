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
  <!--主要信息-->
  <div id="main">
      <el-form ref="form" label-width="80px" size="mini">
        <el-form-item label="活动主题">
          <el-col :span="12">
          <el-input v-model="actTitle"></el-input>
          </el-col>
        </el-form-item>
        <el-form-item label="活动时长">
          <el-col :span="12">
            <el-input v-model="actDays"></el-input>
          </el-col>
        </el-form-item>
        <el-form-item label="活动开始时间">
        <el-col :span="6">
          <el-date-picker type="date" placeholder="选择日期" v-model="beginTime" style="width: 100%;"></el-date-picker>
        </el-col>
      </el-form-item>
        <el-form-item label="活动结束时间">
          <el-col :span="6">
            <el-date-picker type="date" placeholder="选择日期" v-model="endTime" style="width: 100%;"></el-date-picker>
          </el-col>
        </el-form-item>
        <el-form-item label="活动费用">
          <el-col :span="12">
            <el-input v-model="money"></el-input>
          </el-col>
        </el-form-item>
        <el-form-item label="活动人数">
          <el-col :span="12">
            <el-input v-model="personNum"></el-input>
          </el-col>
        </el-form-item>
        <el-form-item label="联系电话">
          <el-col :span="12">
            <el-input v-model="telNum"></el-input>
          </el-col>
        </el-form-item>
        <el-form-item label="活动说明">
          <el-col :span="12">
            <el-input v-model="actIntroduce"></el-input>
          </el-col>
        </el-form-item>
      </el-form>
  </div>
  <!--活动信息输入框-->
  <button id="addBtn" type="button" class="btn btn-primary"@click="addAct">确认发布</button>
  <router-view></router-view>
</div>
</template>

<script>
    export default {
        name: "AddAct",
      data:function () {
        return {
          dataimg: [
            {src: require('../../assets/activityImg/01.jpg'),},
            {src: require('../../assets/activityImg/02.jpg'),},
            {src: require('../../assets/activityImg/03.jpg'),},
            {src: require('../../assets/activityImg/04.jpg'),}
          ],
          actTitle:'',
          beginTime:'',
          endTime:'',
          personNum:'',
          telNum:'',
          actDays:'',
          money:'',
          actIntroduce:''
        }
      },
      methods: {
        addAct() {
          if (this.actTitle==''||this.actDays==''||this.beginTime==''||this.endTime==''||this.personNum==''||this.money==''||this.telNum==''||this.actIntroduce=='') {
            alert('请输入完整信息')
          } else {
            axios.post('http://localhost:3000/activity/addActivity', {
              activityTitle: this.actTitle,
              activityDays: this.actDays,
              beginTime: this.beginTime.toLocaleString(),
              endTime: this.endTime.toLocaleString(),
              personNum: this.personNum,
              money: this.money,
              telNum: this.telNum,
              activityIntroduce: this.actIntroduce,
              user_userId: 1,
            }).then((response) => {
              console.log()
              alert('发布成功！')
            }).catch((err) => {
              alert('发布失败')
              console.log(err)
            })
          }
        }
      }
    }
</script>

<style scoped>
.form-group{
  width: 700px;
}
  #fm{
    margin-top: 20px;
    margin-left: 200px;
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
  #addBtn{margin-left: 200px}
</style>
