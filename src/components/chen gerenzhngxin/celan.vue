<template>
  <table>
    <tr><a href="">我的收藏</a></tr>
    <tr><a href="">我的游记</a></tr>
    <tr><a href="">我要写游记</a></tr>
    <tr><a href="">我的活动</a></tr>
    <tr><a href="">发布活动</a></tr>

  </table>
</template>

<script>
  export default {
    name: "celan"
  }
</script>

<style scoped>
  table {
    width: 180px;
    height: 300px;
    background-color: #9eea92;
    text-align: center;
  }

  tr {
    width: 60px;
    height: 60px;
    color: #20ded7;
    font-size: 18px;
    line-height: 60px
  }

  tr:hover {
    background-color: lightskyblue;
  }
  a{text-decoration:none}
</style>
