<template>
  <div id="forget">
    <el-steps :active="active+1" class="step" finish-status="success" simple style="margin-top: 20px">
      <el-step title="验证手机号"></el-step>
      <el-step title="用户名及密码设置"></el-step>
      <el-step title="完成"></el-step>
    </el-steps>
    <div class="content" >
      <div id="check1" v-if="active===0">
        <el-input class='code' v-model="ruleForm2.phone"  placeholder="请输入手机号"></el-input>
        <br>
        <br>
        <el-input class='checkCode' v-model="checkmsg" placeholder="请输入验证码"></el-input>
        <el-button type="primary"  @click="getmessage">获取验证码</el-button>
        <br><br>

      </div>
      <div id="check2" v-if="active===1">
        <el-form :model="ruleForm2" status-icon :rules="rules2" ref="ruleForm2" label-width="100px" class="demo-ruleForm">
          <el-form-item  prop="name" label="用户名">
            <el-input  v-model="ruleForm2.name" autocomplete="off"placeholder="请输入用户名"></el-input>
          </el-form-item>
          <el-form-item  prop="pass" label="输入密码">
            <el-input type="password" v-model="ruleForm2.pass" autocomplete="off"placeholder="请输入密码"></el-input>
          </el-form-item>
          <el-form-item  prop="checkPass" label="确认密码">
            <el-input type="password" v-model="ruleForm2.checkPass" autocomplete="off"placeholder="请确认密码"></el-input>
          </el-form-item>
        </el-form>
      </div>
      <div id="check3" v-if="active===2">
        <span>√</span><a class="success">注册成功</a><br><br>
        <a class='skip' @click="tologin">点击跳转至登录页面</a>
      </div>
      <el-button class="button2" type="primary" plain @click="next" v-if="active==0||active==1">下一步</el-button>
    </div>
  </div>
</template>

<script>
  import axios from'axios'
  export default {
    data() {
      var validatePass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入密码'));
        } else {
          if (this.ruleForm2.checkPass !== '') {
            this.$refs.ruleForm2.validateField('checkPass');
          }
          callback();
        }
      };
      var validatePass2 = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请再次输入密码'));
        } else if (value !== this.ruleForm2.pass) {
          callback(new Error('两次输入密码不一致!'));
        } else {
          callback();
        }
      };
      return {
        active: 0,

        checkmsg:'',
        code:'',
        ruleForm2: {
          phone:'',
          name:'',
          pass: '',
          checkPass: '',
        },
        rules2: {
          pass: [
            {validator: validatePass, trigger: 'blur'}
          ],
          checkPass: [
            {validator: validatePass2, trigger: 'blur'}
          ],
        }
      };
    },
    methods: {
      getmessage(){
        let _this=this
        for(let i =0;i<6;i++){
          this.code += Math.floor(Math.random()*10);
          console.log(this.code);
        }
        // axios({
        //   method:'get',
        //   url:'http://v.juhe.cn/sms/send?mobile='+_this.phone+'&tpl_id=108216&tpl_value=%23code%23%3D'+_this.code+ '&key=aca2c573f614de2336213f17d3b0f51f'
        // }).then(function () {
        // })
      },
      next() {
        let _this=this
        if(this.active==0){
            if (this.checkmsg==this.code) {
              this.active++
            }else{
              alert('短信验证码错误')
              this.checkmsg=''
            }
        }
        else if(this.active==1){
          axios({
            method: 'post',
            url: 'http://localhost:3000/users/addUser',
            data:{
              userName:_this.ruleForm2.name,
              userPwd:_this.ruleForm2.pass,
              userPhone:_this.ruleForm2.phone
            }
          }).then(function (result) {
              if(result.data.data==1){
                console.log(result.data.data);
                _this.active++
                // alert('注册成功，即将跳转到登录页面')
                // _this.$router.push({path:'/login'})
              }else{
                alert('注册失败，用户名已存在，即将重新跳转到注册页面')
                _this.$router.push({path:'/registry'})
              }
            }
            , function (err) {
              console.log(err);
            })

        }
        else if (this.active++ > 2) this.active = 0;
      },
      tologin() {
        this.$router.push({path: '/login'})
      },
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            alert('修改成功!');
          } else {
            console.log('修改失败!!');
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      }
    }
  }
</script>

<style scoped>
  #forget {
    width: 90%;
    height: 90%;
    position:absolute;
    float: left;
    margin-left: 5%;
    background-color: white;
  }

  .step {
    margin-top: 100px;
    width: 70%;
    height: 60px;
    position: absolute;
    float: left;
    margin-left: 15%;
  }

  .code {
    width: 300px;
    height: 50px;
  }

  .checkCode {
    width: 180px;
  }

  .skip {
    font-size: 20px;
  }

  #check1, #check2, #check3 {
    width: 400px;
    min-height: 100px;
    margin-top: 20px;
    text-align: center;
  }
  #check2{
    margin-left: -50px;
  }
  .button2 {
    width: 300px;
    margin-left:50px;
    text-align: center;
  }

  .success {
    font-size: 60px;
    font-family: Microsoft YaHei UI;
    color: #333;
  }

  a {
    text-decoration: none;
  }

  span {
    display: inline-block;
    width: 100px;
    height: 100px;
    border-radius: 100px;
    font-size: 80px;
    font-family: Microsoft YaHei UI;
    color: white;
    background-color: #409EFF;
    text-align: center;
  }
.content{
  width: 400px;
  min-height:300px;
  position: absolute;
  left: 50%;
  margin-top: 100px;
  margin-left: -200px;
  clear: both;
}
</style>
