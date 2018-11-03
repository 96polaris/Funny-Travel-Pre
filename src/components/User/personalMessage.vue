<template>
  <div class="msg">
    <el-card v-model="sindex" style="">
      <div style="margin-right: 20px;width: 180px;height: 250px;display: inline-block;float: right">
        <img :src="userImage">

        <form method="post" enctype="multipart/form-data">
          <div style="display: inline-block">
            <input
              style="width: 150px;height: 150px;"
              type="file" name="avatar"
              @change="changeImage($event)"
              accept="image/gif,image/jpeg,image/jpg,image/png"
              ref="avatarInput"
              class="pic-input">
            <!--//传递当前用户id给后端接口-->
            <input type="text" v-model="mydata" style="display: none;">
            <br>
            <el-tag>提示：点击图片修改头像</el-tag>
            <br>
            <div class="row button4">
              <el-button type="primary" round size="mini" class="btn btn-default" @click="edit" style="margin-left: 50px;margin-top: 6px">确认修改</el-button>
            </div>
            <br>
          </div>
        </form>
      </div>
<h3>
  用户基本信息
</h3><br>
      <h4>用户名：{{username}}</h4><br>
      <h4>手机号：{{userphone}}</h4>
    </el-card>


    <!--<el-upload-->
    <!--class="avatar-uploader"-->
    <!--:action="http://localhost:3000/users/uploadfile"-->
    <!--:data="upLoadData"-->
    <!--name="importfile"-->
    <!--:http-request="submit"-->
    <!--:show-file-list="false"-->
    <!--:on-preview="handlePictureCardPreview"-->
    <!--:on-success="handleAvatarSuccess"-->
    <!--:before-upload="beforeAvatarUpload">-->
    <!--<img v-if="imageUrl" :src="imageUrl" class="avatar">-->
    <!--<i v-else class="el-icon-plus avatar-uploader-icon"></i>-->
    <!--</el-upload>-->
    <!--<button @click="submit()">提交</button>-->

  </div>
</template>

<script>
  import axios from'axios'
  export default {
    name: "personalMessage",
    methods: {
      edit() {
        let _this=this
        console.log(this.upath);
        var zipFormData = new FormData();
        //依次添加多个文件
        for (var i = 0; i < this.upath.length; i++) {
          zipFormData.append('filename', this.upath[i]);
        }
        //添加其他的表单元素
        zipFormData.append('mydata', this.mydata)
        let uId = sessionStorage.getItem('userId')
        let config = {headers: {'Content-Type': 'multipart/form-data'}};
        axios.post('http://localhost:3000/users/upload', zipFormData, config)
          .then(function (response) {

    })
        alert('头像修改成功')
        // axios({
        //   method: 'post',
        //   url: 'http://localhost:3000/users/showPic',
        //   data:{
        //     userId:sessionStorage.getItem('userId')}
        //   }).then(function (result) {
        //   console.log("userimage"+result.data.userImage);
        //   _this.userImage=result.data.userImage
        //   console.log(_this.userImage);
        // })
      // location .reload()

      } ,//选中文件后，将文件保存到实例的变量中
      changeImage(e) {
          this.upath = e.target.files;
          console.log(this.upath);
          let $target = e.target || e.srcElement
          let file = $target.files[0]
          var reader = new FileReader()
          reader.onload = (data) => {
            let res = data.target || data.srcElement
            this.userImage = res.result
          }
          reader.readAsDataURL(file)
        }
      },
      data() {
        return {
          username: '',
          userphone: '',
          upath: '',  //保存选中的文件
          mydata: sessionStorage.getItem('userId'),
          sindex: '',
          userImage: '',
          imageUrl: '',
          uId: '',
          sindex:''
        }

      },
    updated:function(){
      axios({
        method: 'post',
        url: 'http://localhost:3000/users/showPic',
        data:{
          userId:sessionStorage.getItem('userId'),
        }
      }).then(function (result) {
        console.log(result);
        sessionStorage.setItem('userImage',result.data.data.userImage)
      })
    },
      mounted: function () {
        if (sessionStorage.getItem('userName') != null) {
          this.username = sessionStorage.getItem('userName')
          this.userphone = sessionStorage.getItem('userPhone')
          this.userImage = sessionStorage.getItem('userImage')
        } else {
          alert('请登录后查看个人信息')
          this.$router.push({path: '/login'})
        }

      }

    }
</script>

<style scoped>
  .pic-input{
    width: 150px;
    height: 150px;
    opacity: 0;
    border-radius: 50%;
    overflow: hidden;
    margin-top: -150px;
    z-index: 999;
    /*margin-left: 15px;*/
    /*font-size: 130px;*/

  }
  img {
    width: 150px;
    height: 150px;
    display: flex;
    border-radius: 50%;
    overflow: hidden;

  }

  .avatar-uploader .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }

  .avatar-uploader .el-upload:hover {
    border-color: #409EFF;
  }

  .avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 178px;
    height: 178px;
    line-height: 178px;
    text-align: center;
  }

  .avatar {
    width: 178px;
    height: 178px;
    display: block;
  }

</style>
