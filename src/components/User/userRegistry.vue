<template>
  <div>
    <div class="registry">
      <div>
        <p>
          <span style="font-size: 20px;border: 1px">用户注册</span>
          <span>
        <router-link to="/login">已有账号？快速登录</router-link>
      </span>
        </p>

        <el-form :model="ruleForm2" status-icon :rules="rules2" ref="ruleForm2" label-width="100px"
                 class="demo-ruleForm">
          <el-form-item label="手机号" prop="phone">
            <el-input v-model.number="ruleForm2.phone"></el-input>
          </el-form-item>
          <el-form-item label="昵称" prop="name">
            <el-input v-model="ruleForm2.name"></el-input>
          </el-form-item>
          <el-form-item label="密码" prop="pass">
            <el-input type="password" v-model="ruleForm2.pass" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="确认密码" prop="checkPass">
            <el-input type="password" v-model="ruleForm2.checkPass" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="submitForm('ruleForm2')">提交</el-button>
            <el-button @click="resetForm('ruleForm2')">重置</el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "userRegistry",
    data() {
      var checkNum = (rule, value, callback) => {
        if (!value) {
          return callback(new Error('手机号不能为空'));
        }
        setTimeout(() => {
          if (!Number.isInteger(value)) {
            callback(new Error('请输入数字值'));
          }
            // else {
          //   if (value.length!=11) {
          //     callback(new Error('请输入正确的手机号'));
          //   } else {
          //     callback();
          //   }
          // }
        }, 1000);
      };
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
        ruleForm2: {
          name:'',
          pass: '',
          checkPass: '',
          phone: ''
        },
        rules2: {
          pass: [
            {validator: validatePass, trigger: 'blur'}
          ],
          checkPass: [
            {validator: validatePass2, trigger: 'blur'}
          ],
          phone: [
            {validator: checkNum, trigger: 'blur'}
          ]
        }
      };
    },
    methods: {
      submitForm(formName) {
        let _this=this
        axios({
          method: 'post',
          url: 'http://localhost:3000/users/addUser',
          data:{
            userName:this.ruleForm2.name,
            userPwd:this.ruleForm2.pass,
            userPhone:this.ruleForm2.phone
          }
        }).then(function (result) {
            if(result.data.data!=0){
              alert('注册成功，即将跳转到登录页面')
              this.$router.push({path:'/login'})
            }
          }
        , function (err) {
          console.log(err);
        })

        // this.$refs[formName].validate((valid) => {
        //   if (valid) {
            // alert('submit!');
        //   } else {
        //     console.log('error submit!!');
        //     return false;
        //   }
        // });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      }
    }
  }
</script>

<style scoped>
  .registry {
    background-image: url("../../assets/user/registry.jpg");
    height: 600px;
    background-size: 100% 100%;
    -moz-background-size: 100% 100%;
    -webkit-background-size: 100% 100%;
  }
  .registry > div {
    width: 400px;
    height: 450px;
    /*position: relative;*/
    float: right;
    margin: 70px 40px;
    padding:40px 20px 40px 20px;
    background-color: antiquewhite;
    opacity: 0.9;
  }
  .registry > div>p>span{
  margin-left: 20px;
  margin-right: 100px;
  }
</style>
