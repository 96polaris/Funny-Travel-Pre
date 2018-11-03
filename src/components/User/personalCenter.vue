<template>
  <div style="min-height: 850px;">
    <el-row class="tac">
      <el-col :span="2" :offset="2">
        <app-side></app-side>
      </el-col>
      <el-col :span="12" :offset="1">
        <div class="content">
          <router-view></router-view>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  import Side from './psider.vue'
  export default {
    name: "personalCenter",
    components: {
      'app-side': Side,
    },
    methods: {

    }

  }
</script>

<style scoped>
  .tac {
    margin-top: 50px;
    padding-left: 0;
  }

  .content {
    background-color:rgba(230,235,254,0.58);
    min-height:800px;
    min-width: 900px;
  }
</style>
