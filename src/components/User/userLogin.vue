<template>
  <div>
    <h1>用户登录界面</h1>
    <div>
      <img src=""></div>
    <div class="login">
      <el-radio-group v-model="labelPosition" size="small">
      </el-radio-group>
      <div style="margin: 20px;"></div>
      <el-form :label-position="labelPosition" label-width="80px" :model="formLabelAlign">
        <el-form-item label="用户名">
          <el-input v-model="formLabelAlign.name"></el-input>
        </el-form-item>
        <el-form-item label="密码">
          <el-input v-model="formLabelAlign.pwd"></el-input>
        </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm('formLabelAlign')">登录</el-button>
      </el-form-item>
      </el-form>
      <span>
        <router-link to="/registry">快速注册</router-link>
      </span>
    </div>
  </div>
</template>

<script>
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
    methods:{
      submitForm(formLabelAlign){

      }
    }
  }

</script>


<style scoped>
  .login{
    width: 500px;
    height: 300px;
  }
</style>
