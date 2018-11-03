<template>
  <div id="large">
    <img style="width: 100%;height: 300px;"src="../../assets/activityImg/06.jpg" alt="">

    <!--主要信息-->
    <div id="main">
      <h3>修改活动信息</h3>
      <hr style="border: 2px brown solid">
      <el-form ref="form" label-width="80px" size="mini" id="inner" >
        <div style="margin-left: 60px; border: #c1e2b3 solid 1px;width: 150px;height: 150px;">
          <img  style="":src="pic" alt="">
        </div>
        <!--<span class="glyphicon glyphicon-plus" aria-hidden="true"></span><br>-->
        <el-tag style="margin-left: 40px">提示：点击上方方框上传图片</el-tag>
        <input  id="provide" type="file" name="avatar"
                @change="changeImage($event)"
                accept="image/gif,image/jpeg,image/jpg,image/png"
                ref="avatarInput"
                multiple><br/>
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
        <el-form-item label="开始时间">
          <el-col :span="6">
            <el-input  placeholder="选择日期" v-model="beginTime" style="width: 100%;"></el-input>
          </el-col>
        </el-form-item>
        <el-form-item label="结束时间">
          <el-col :span="6">
            <el-input placeholder="选择日期" v-model="endTime" style="width: 100%;"></el-input>
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
          <el-col :span="20" >
            <el-input v-model="actIntroduce"></el-input>
          </el-col>
        </el-form-item>
      </el-form>
    </div>
    <!--活动信息输入框-->
    <button id="addBtn" type="button" class="btn btn-primary"@click="edit">确认修改</button>
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
        actIntroduce:'',
        upath:'',

        oneActData:'',
        id:this.$route.params.id,
        pic:'',
        activityId:''
      }
    },
    methods: {
      edit() {
        var zipFormData = new FormData();
        zipFormData.append('activityTitle', this.actTitle)
        zipFormData.append('activityDays', this.actDays)
        zipFormData.append('beginTime', this.beginTime.toLocaleString())
        zipFormData.append('endTime', this.endTime.toLocaleString())
        zipFormData.append('personNum', this.personNum)
        zipFormData.append('money', this.money)
        zipFormData.append('telNum', this.telNum)
        zipFormData.append('activityIntroduce', this.actIntroduce)
        zipFormData.append('actImg', this.upath[0])
        zipFormData.append('activityId', this.activityId)
        let config = {headers: {'Content-Type': 'multipart/form-data'}};

          axios.post('http://localhost:3000/activity/updateAct', zipFormData, config)
            .then(function (result) {
              console.log(result.data)
            })
          alert("修改成功")
          // this.$router.push({path:'/personalCenter/myAct'})
      },
      //选中文件后，将文件保存到实例的变量中
      changeImage(e) {

        this.upath = e.target.files;
        console.log(this.upath);
        let $target = e.target || e.srcElement
        let file = $target.files[0]
        var reader = new FileReader()
        reader.onload = (data) => {
          let res = data.target || data.srcElement
          this.pic = res.result
        }
        reader.readAsDataURL(file)

      }
    },
    mounted(){
      let _this=this
      axios.get(`http://localhost:3000/activity/details/${_this.id}`).then((result) => {
        _this.oneActData = result.data.data;
        _this.actTitle=result.data.data[0].activityTitle
        _this.beginTime=result.data.data[0].beginTime
        _this.endTime=result.data.data[0].endTime
        _this.personNum=result.data.data[0].personNum
        _this.telNum=result.data.data[0].telNum
        _this.actDays=result.data.data[0].activityDays
        _this.money=result.data.data[0].money
        _this.actIntroduce=result.data.data[0].activityIntroduce
        _this.activityId=result.data.data[0].activityId
        _this.pic=result.data.data[0].actImg
        console.log('------------------------------')
        // console.log(result.data.data[0].user_userId)
        console.log(result.data.data);

      })
    }
  }
</script>

<style scoped>
  #main{
    width: 1200px;
    margin: 0 auto;
    border: 1px solid transparent;
    /*text-align: center;*/
    /*background-color: green;*/
    /*background-image: url("../../assets/activityImg/08.jpg");*/
  }
  #inner{

    width: 800px;
    border: 1px solid burlywood;
    margin: 0 auto;
    background-color: white;
    /*background-image: url("../../assets/activityImg/010.jpg");*/
  }
  #addBtn{margin-left: 680px;margin-top: 10px}
  #provide{
    width: 150px;
    height: 150px;
    opacity: 0;
    border-radius: 50%;
    overflow: hidden;
    margin-top: -150px;
    z-index: 999;
    margin-left: 60px;
    /*font-size: 130px;*/
  }
  img{
    width: 150px;
    height: 150px;
    display: flex;
    overflow: hidden;
  }
  #large{
    width: 100%;
    height: 100%;
    background-color: #eeee;
  }
</style>
