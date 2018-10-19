<template>
  <div id="t1">
    <div class="col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3 form-group">
      <h3 style="color: #ea9323">给你的游记起个名字吧</h3>
    </div>
    <div style="width: 250px" id="t2">
      <el-input v-model="input" placeholder="请输入标题"></el-input>
    </div>

    <div id="t5">
      <youji-shangchuan></youji-shangchuan>
    </div>
    <div style="width: 500px" id="t3">
      <el-input
        type="textarea"
        :rows="20"
       :autosize="{ minRows: 18, maxRows: 20 }"
        width="500"
        placeholder="请输入内容"
        v-model="textarea">
      </el-input>
    </div>
    <hr>
    <div class="col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3 form-group" id="t4">
      <button class="btn btn-primary" @click.prevent="addQuote">完成</button>
    </div>
  </div>
</template>
<script>

  import shangchuan from './shangchuan'

  export default {
    name: "youji_tianjia",
    components: {
      'youji-shangchuan': shangchuan,
    },
    data() {
      return {
        input: '',
        textarea: ''
      }
    }
  }
</script>

<style scoped>
  #t1 {
    width: 750px;
    height: 1000px;
    background-color: #e5e8fd;
    margin-left: 250px;
  }

  #t2 {
    margin-left: 220px;
    margin-top: 20px;
  }

  #t3 {
    width: 800px;
    margin-left: 110px;
    margin-top: 20px;
  }

  #t4 {
    margin-left: 300px;
  }

  #t5 {
    margin-left: 220px;
    margin-top: 20px;
  }
</style>

