<template>
  <div>
    <div class="container formStyle">
      <h2 class="text-left">注册</h2>
      <hr/>
      <div class="row borderL">
        <form>
          <div class="row formStyle">
            <input type="text" class="form-control leftStyle" placeholder="请输入手机号" v-model="mobile">
            <span :mobile="mobile">{{tiShi1}}</span>
          </div>
          <div class="row buttonStyle">
            <input type="text" class="form-control col-xs-6 formStyle3" placeholder="请输入验证码" v-model="vCode">
            <button type="button" class="btn btn-default col-xs-6 col-xs-offset-1 formStyle3" @click="sendCode">获取短信验证码</button>
            <span :vCode="vCode" class="spanW">{{tiShi3}}</span>
          </div>
          <div class="row formStyle1">
            <input type="password" class="form-control leftStyle" placeholder="请输入密码" v-model="Pwd1">
            <span :Pwd1="Pwd1">{{tiShi4}}</span>
          </div>
          <div class="row formStyle1">
            <input type="password" class="form-control leftStyle" placeholder="再次输入密码" v-model="Pwd2">
            <span :Pwd2="Pwd2">{{tiShi5}}</span>
          </div>
          <button type="button" class="btn btn-default formStyle2" @click="register">注册</button>
        </form>
      </div>
    </div>
    <app-foot></app-foot>
  </div>
</template>

<script>
  import Foot from '../Foot.vue'
  import axios from 'axios'
  export default {
    name: "register",
    data(){
      return {
        vCode:'',
        mobile:'',
        Num:'',
        Pwd1:'',
        Pwd2:'',
        tiShi1:'',
        tiShi3:'',
        tiShi4:'',
        tiShi5:'',
      }
    },
    watch:{
      mobile(newmobile,oldmobile){
        const ha = this;
        const reg = /^(13[0-9]|14[579]|15[0-3,5-9]|16[6]|17[0135678]|18[0-9]|19[89])\d{8}$/;
        if(!(reg.test(ha.mobile))){
          ha.tiShi1 = '手机号为空或者您输入的手机号不正确！'
        }else{
          // axios.post('http://localhost:3000/users/add',{
          //   mLogin:this.mobile,
          // }).then(function (res) {
          //   if(res.data.data == 0){
          //     ha.tiShi1 = '该手机号已经被注册过了,请重新输入手机号！'
          //   }else {
          //
          //   }
          // })
          //   .catch(function (error) {
          //     console.log(error);
          //   });
          ha.tiShi1 = ''
        }
      },
      vCode(newmobile,oldmobile){
        const ha = this;
        if(ha.vCode != ha.Num){
          ha.tiShi3 = '验证码为空或者输入的验证码不正确！'
        }else {
          ha.tiShi3 = ''
        }
      },
      Pwd1(newmPwd,oldmPwd){
        const ha = this;
        const reg = /^([a-zA-Z0-9]|[._]){6,12}$/;
        if(!reg.test(ha.Pwd1)){
          ha.tiShi4 = '请输入6-12个数字、字母或者带“_”、“.”的密码'
        }else {
          ha.tiShi4 = ''
        }
      },
      Pwd2(newmPwd,oldmPwd){
        const ha = this;
        if(ha.Pwd2 != ha.Pwd1){
          ha.tiShi5 = '请输入相同的密码'
        }else {
          ha.tiShi5 = ''
        }
      },
    },
    methods:{
      sendCode(){
        this.Num = '';
        let num = this.Num;      //容器
        for(let i =0;i<6;i++){   //循环六次
          num += Math.floor(Math.random()*10);
        }
        this.Num = num;
        console.log(this.Num)
        // axios.get('/proxy?mobile=' + this.mobile + '&tpl_id=107464&tpl_value=%23code%23%3D' +
        // this.Num + '&key=18fe7a1509f021d5af8849af2d6a370c')
        //   .then((res)=>{
        //     console.log(res)
        //   }).catch(err=>{console.log(err)})
      },
      register(){
        const self = this;
        if(self.mobile == '') {
          self.tiShi1 = '手机号不能为空！'
        }else if(self.vCode == ''){
          self.tiShi3 = '验证码不能为空！'
        }else if(self.Pwd1 == ''){
          self.tiShi4 = '密码不能为空！'
        }else if(self.Pwd2 == ''){
          self.tiShi5 = '密码不能为空！'
        }else{
          axios.post('http://localhost:3000/users/add', {
            mLogin: this.mobile,
            mPassword: this.Pwd1,
          }).then(function (res) {
            if (res.data.data == 1) {
              alert('注册成功，正在跳转到登录页面！');
              self.$router.push({path: '/login'});
            } else {
              self.tiShi1 = '该账号已被注册,请重新输入！'
            }
          })
            .catch(function (error) {
              console.log(error);
            });
        }
      },
    },
    components: {
      'app-foot': Foot,
    },
  }
</script>

<style scoped>
  hr{border-top: 2px solid #999;}
  .borderL{
    height: 500px;
    margin-bottom: 20px;
  }
  span{color: red;}
  .spanW{margin-right: 30%;}
  .formStyle{margin-top: 50px;}
  .buttonStyle{margin-top:50px;width: 30%;margin-left: 35%}
  .formStyle1{margin-top: 40px;}
  .formStyle2{margin-top: 60px;width: 30%;}
  .formStyle3{width: 45%;}
  .leftStyle{margin-left: 35%;width: 30%;}
</style>
