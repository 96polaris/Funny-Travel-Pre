<template>
  <div>
    <br><br><br>
    <div class="alert alert-info text-center" role="alert"><h4>企业资料</h4></div>
    <div id="content">
      <div class="d1">公司信息</div>
      <span class="border"></span>
      <br><br>
      <span>营业执照号：</span><span>{{items[0].licenseId}}</span><br><br><br>
      <span>公司名称：</span><span>{{items[0].chineseName}}</span><br><br><br>
      <span>英文名称：</span><span>{{items[0].englishName}}</span>
      <span>公司地址：</span><span>{{items[0].companyAddress}}</span><br><br><br>
      <span>所属行业：</span><span>{{items[0].industy}}</span><br><br><br>
      <span>公司简介：</span><span>{{items[0].cintroduce}}</span><br><br><br>
      <div class="d1">负责人信息</div>
      <span class="border"></span>
      <br><br>
      <span>负责人姓名：</span><span>{{items[0].principalName}}</span><br><br><br>
      <span>负责人姓名：</span><span>{{items[0].principalPhone}}</span><br><br><br>
      <div class="d1">执照信息</div>
      <span class="border"></span>
      <br><br>
      <span>企业LOGO：</span><span>{{items[0].clogo}}</span>
      <span>营业执照：</span><span>{{items[0].licenseImage}}</span><br><br><br><br><br><br><br><br><br>
    </div>
  </div>
</template>

<script>
  import axios from 'axios'
  export default {
    name: "CompanyInformation",
    data() {
      return {
        items:'',
      };
    },
    //
    computed:{
      companyDital(){
        return this.$store.state.lsd;
      }
    },
    mounted(){
      let _this = this;
      let lsd= sessionStorage.getItem('lsd')
      axios.get(`http://localhost:3000/company/company/${lsd}`)
        .then((res) => {
          let info = res.data ;
          console.log(info.data[0]);
          _this.items = info.data[0]
          console.log( _this.items[0]);
        }).catch((err) => {
        console.log(err)
      })
    },

  }
</script>

<style scoped>
  .border{
    width: 600px;
    height: 2px;
    display: inline-block;
    background-color: #409eff;
  }
  .d1{
    width: 150px;
    height: 40px;
    text-align: center;
    line-height: 40px;
    color: #fff;
    font-size: 18px;
    background-color: #409eff;
    border-radius: 15px 0 15px 0;
  }
  .alert {
    margin: 0 50px;
  }

  #content {
    margin: 50px 50px;
  }
  span{
    font-size: 20px;
  }
</style>

