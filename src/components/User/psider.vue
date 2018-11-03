<template>
  <div class="side">
    <el-menu
      :default-active="activeIndex"
      class="el-menu-vertical-demo"
      @select="handleSelect" router
    >
      <el-menu-item index="/personalCenter">
        <!--<i class="el-icon-menu">个人信息</i>-->
        <span class="glyphicon glyphicon-user"></span>
        <span>个人信息</span>
        <span slot="title"></span>
      </el-menu-item>
      <el-menu-item index="/personalCenter/personalColl">
        <!--<i class="el-icon-menu">我的收藏</i>-->
        <span class="glyphicon glyphicon-heart" style="color: red"></span>
       <span>我的收藏</span>
        <span slot="title"></span>
      </el-menu-item>
      <el-menu-item index="/personalCenter/myNote">
        <span class="glyphicon glyphicon-camera"></span>
        <span>我的游记</span>
        <span slot="title"></span>
      </el-menu-item>
      <el-menu-item index="/personalCenter/joinAct">
        <span class="glyphicon glyphicon-plus"></span>
        <span>我加入的活动</span>
        <span slot="title"></span>
      </el-menu-item>
      <el-menu-item index="/personalCenter/myAct">
        <span class="glyphicon glyphicon-star"style="color:#295"></span>
        <span>我发布的活动</span>
        <span slot="title"></span>
      </el-menu-item>
    </el-menu>

  </div>
</template>

<script>
  export default {
    name: "psider",
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
    width:165px;
    margin-left: -50px;

  }
 span{
    font-size: 18px;
  }
  .glyphicon glyphicon-heart{
    color: red;
  }
</style>
