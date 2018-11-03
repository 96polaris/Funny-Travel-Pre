<template>
  <div class="side">
    <el-menu
      :default-active="activeIndex"
      class="el-menu-vertical-demo"
      @select="handleSelect" router
    >
      <el-menu-item index="/companyDital/companyInformation">
        <i class="el-icon-menu"></i>
        <span slot="title">企业资料</span>
      </el-menu-item>
      <el-menu-item index="/company/ChangeInformation">
        <i class="el-icon-menu"></i>
        <span slot="title">修改资料</span>
      </el-menu-item>
    </el-menu>

  </div>
</template>

<script>
  export default {
    name: "Sider",
    data: function () {
      return {}
    },
    computed: {
      activeIndex() {
        return this.$route.path.replace('/', '')
      }
    },
    methods: {
      handleSelect(key, keyPath) {
      }
    }
  }
</script>

<style scoped>
  .side{
    width:250px;
    margin-left: -50px;
  }
</style>
