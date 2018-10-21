<template>
  <div>
    <div id="f1">
      <h2 style="color: #ffb932">我的苏之旅</h2>
    </div>

    <div id="f2">
      <my-daohang></my-daohang>
    </div>

<route-view></route-view>
  </div>

</template>

<script>
import celan from './celan'
import Route from "../Route/route";
    export default {
        name: "gerenzhongxin",
      components: {
        Route,
'my-daohang':celan
      }
    }
</script>

<style scoped>
  h2{
    margin-left: 100px;
  }
  #f1{
width: 400px;
  }
#f2 {
  margin-top: 50px;
  width: 250px;
  margin-left: 100px;
}
</style>
