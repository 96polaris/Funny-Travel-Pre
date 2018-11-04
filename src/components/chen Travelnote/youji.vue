<template>
  <div style="width: 1200px;margin: 0 auto">
    <youji-luobotu></youji-luobotu>
    <div id="bx">
      <div id="s3">
        <hr>
        <div id="s1">
          <div id="s5">
            <el-button type="warning" @click="toggleTabs='my-tuijian'">推荐精品</el-button>
            <el-button type="warning" @click="toggleTabs='my-remen'">热门游记</el-button>
            <el-button type="warning" @click="toggleTabs='my-zuixin'">最新发布</el-button>
          </div>
          <br>
          <component :is="toggleTabs"></component>
        </div>
        <div id="s2">
          <my-notice></my-notice>
        </div>
        <div id="s6">
          <my-zuozhe></my-zuozhe>
        </div>
      </div>
      <router-view></router-view>
    </div>


  </div>

</template>
<script>
  import tuijian from './youji_tuijian'
  import remen from './youji_remen'
  import zuixin from './youji_zuixin'
  import luobotu from './luobutu'
  import notice from './Notice'
  import Route from "../Home/Route";
  import shou from "../chen Travelnote/shoufengqing";
  export default {
    name: "youji",
    data: {
      toggleTabs: 'my-tuijian'
    },
    components: {
      Route,
      'youji-luobotu': luobotu,
      'my-tuijian': tuijian,
      'my-remen': remen,
      'my-zuixin': zuixin,
      'my-notice': notice,
      'my-zuozhe':shou,
    },
    data() {
      return {
        tuijian: "tuijian",
        remen: "remen",
        zuixin: 'zuixin',
        toggleTabs: 'my-tuijian'
      };
    },

  }
</script>

<style scoped>
  #bx{
    /*width: 1200px;*/
    margin: 0 auto;
  }

  #s1 {
    width: 850px;
    height: 1600px;
    background-color: #e4f6e7;
    margin-left: 100px;
    float: left;

  }

  #s2 {
    width: 200px;
    height: 220px;
    margin-right: 10px;
    float: right;
    background-color: #e9fafa;
  }
  #s6 {
    width: 200px;

    margin-right: 10px;
    margin-top: 50px;
    float: right;
    background-color: #e9fafa;
  }
  #s3 {
    width: 100%;
    background-color: whitesmoke;
    height: 1700px;
  }

  #s4 {
    float: left;
    margin-left: 20px;

  }
#s5{
  width: 400px;
  margin-left: 20px;
  margin-top: 20px;


}
  a {
    font-weight: bold;
    font-size: 20px;
    color: #6e95f1;
  }

  ul {
    margin-top: 10px;
  }

</style>
