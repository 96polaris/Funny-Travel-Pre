<template>
  <div>
    <div class="login">
      <div>
          <p>
            <span style="font-size: 20px;border: 1px">用户登录</span>
            <span>
        <router-link to="/registry">快速注册</router-link>
      </span>
          </p>
        <el-radio-group v-model="labelPosition" size="small">
        </el-radio-group>
        <div style="margin: 20px;"></div>
        <el-form :label-position="labelPosition" label-width="80px" :model="formLabelAlign">
          <el-form-item label="用户名">
            <el-input v-model="formLabelAlign.name"></el-input>
          </el-form-item>
          <el-form-item label="密码">
            <el-input type="password" v-model="formLabelAlign.pwd"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="submitForm()">登录</el-button>
          </el-form-item>
        </el-form>

      </div>
    </div>
  </div>
</template>

<script>
  import axios from'axios'
  export default {
    name: "userLogin",
    data() {
      return {
        labelPosition: 'left',
        formLabelAlign: {
          name: '',
          pwd: '',
          type: ''
        }
      }
    },
    methods: {
      submitForm() {
        let _this=this
        axios({
          method: 'post',
          url: 'http://localhost:3000/users/login',
          data:{
            userName:_this.formLabelAlign.name,
            userPwd:_this.formLabelAlign.pwd
          }
        }).then(function (result) {
          if(result.data.data!=0){
            //用户名保存在sessionStorage中
            // sessionStorage.setItem('userName',result.data.data.userName)
            // sessionStorage.setItem('userPwd',result.data.data.userPwd)
            // sessionStorage.setItem('userId',result.data.data.userId)
            // sessionStorage.setItem('userPhone',result.data.data.userPhone)
            //用户名存放vuex中
            // _this.$store.state.userName=''
            _this.$store.state.userName=result.data.data.userName
            console.log(_this.$store.state.userName);
            _this.$store.state.userPwd=result.data.data.userPwd
            _this.$store.state.userId=result.data.data.userId
            _this.$store.state.userPhone=result.data.data.userPhone
            alert('登录成功，即将跳转到首页')
            _this.$router.push({path:'/'})
          }else{
            alert('登录失败，即将跳转到登录页')
            _this.formLabelAlign.name=''
            _this.formLabelAlign.pwd=''

            _this.$router.push({path:'/login'})

          }
        }, function (err) {
          console.log(err);
        })

      }
    }
  }

</script>


<style scoped>
  .login {
    background: url("../../assets/user/login.jpg");
    height: 600px;
    background-size: 100% 100%;
    -moz-background-size: 100% 100%;
    -webkit-background-size: 100% 100%;
    position: relative;

  }

  .login > div {
    width: 400px;
    height: 400px;
    position: relative;
    float: right;
    margin: 70px 40px;
    padding:40px 20px 50px 20px;
    background-color: white;
    opacity: 0.9;
  }
  .login > div>p>span{
    margin-left: 10px;
    margin-right: 100px;
  }
</style>
