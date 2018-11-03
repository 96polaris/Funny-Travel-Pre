<template>
  <div>
    <div id="dd">
      <h3>旅行达人</h3>
      <el-collapse v-model="activeName" accordion >
        <el-collapse-item title="吴秋煌" name="1">
          <div class="nr"><img src="../../assets/noteSlide/f1.png" alt="">&nbsp;&nbsp;&nbsp;&nbsp;热爱生活，中国摄影家协会会员...</div>
        </el-collapse-item>
        <el-collapse-item title="姝含" name="2">
          <div class="nr"><img src="../../assets/noteSlide/f2.jpg" alt="">&nbsp;&nbsp;&nbsp;&nbsp;旅游签约验客达人，多家旅游网站...</div>
        </el-collapse-item>
        <el-collapse-item title="维尼小熊" name="3">
          <div class="nr"><img src="../../assets/noteSlide/f3.png" alt="">&nbsp;&nbsp;&nbsp;&nbsp;已走过20多个国家，旅行美食育儿千...</div>
        </el-collapse-item>
        <el-collapse-item title="潘那白" name="4">
          <div class="nr"><img src="../../assets/noteSlide/f4.png" alt="">&nbsp;&nbsp;&nbsp;&nbsp;国家一级摄影师，中国摄影家协会会员...</div>
        </el-collapse-item>
      </el-collapse>
    </div>
  </div>


</template>

<script>
    export default {
        name: "shoufengqing" ,
      data() {
        return {
          activeName: '1'
        };
      }
    }
</script>

<style scoped>
  #dd>h3{
    margin-left: 20px;
  }


  img{
    width: 30px;
    height: 30px;
    border-radius:15px;
  }
  img:hover{
    width: 40px;
height: 40px;
    border-radius: 20px;
  }

  .nr{
      font-size: 15px;

    }
  .nr:hover{
       color: #ff6127;
      }
</style>

