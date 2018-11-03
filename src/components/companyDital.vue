<template>
  <div>
    <el-row class="tac">
      <el-col :span="3" :offset="2">
        <app-cside></app-cside>
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
  import cSide from './company/cSider.vue'
  export default {
    name: "Company",
    components: {
      'app-cside': cSide,
    },
    methods: {

    }

  }
</script>

<style scoped>
  .tac {
    margin-top: 30px;
  }

  .content {
    background-color: white;
    min-height:800px;
    min-width: 800px;
  }
</style>
