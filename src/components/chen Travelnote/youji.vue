<template>
  <div>
    <div id="s3">
      <youji-luobotu></youji-luobotu>
      <hr>
      <div id="s1">
        <div id="s5">
          <el-button type="warning" @click="toggleTabs='my-tuijian'">推荐精品</el-button>
          <el-button type="warning" @click="toggleTabs='my-remen'">热门游记</el-button>
          <el-button type="warning" @click="toggleTabs='my-zuixin'">最新发布</el-button>
        </div>
        <div id="s4">
          <ul class="nav nav-pills">
            <router-link tag="li" active-class="active" role="presentation" to="/user/myyouji" exact><a>我的游记</a></router-link>
            <router-link tag="li" active-class="active" role="presentation" to="/user/addyouji"><a>添加游记</a></router-link>
          </ul>
        </div>
        <br>
        <component :is="toggleTabs"></component>
      </div>
      <div id="s2">
        <my-notice></my-notice>
      </div>
    </div>
  <router-view></router-view>
  </div>


</template>
<script>
  import tuijian from './youji_tuijian'
  import remen from './youji_remen'
  import zuixin from './youji_zuixin'
  import luobotu from './luobutu'
  import notice from './Notice'
  import Route from "../Home/Route";

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
  #s1 {
    width: 900px;
    height: 1600px;
    background-color: #c2fc82;
    margin-left: 100px;
    float: left;

  }

  #s2 {
    width: 250px;
    height: 250px;
    margin-right: 50px;
    float: right;
    background-color: #c9f3fa;
  }

  #s3 {
    width: 100%;
    background-color: whitesmoke;
    height: 2200px;
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
