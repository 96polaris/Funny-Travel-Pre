<template>
<div id="d1">
<div id="d2">
  <h3>系统公告</h3>
  <hr style="border:1px solid gainsboro; ">
  <router-link tag="li" active-class="active" role="presentation" to="/" exact><span class="glyphicon glyphicon-search" aria-hidden="true"></span><a>&nbsp;&nbsp;新版游记审核标准</a></router-link>
  <router-link tag="li" active-class="active" role="presentation" to="/" exact><span class="glyphicon glyphicon-search" aria-hidden="true"></span><a>&nbsp;&nbsp;手把手教你写【网页新版】游记</a></router-link>
  <router-link tag="li" active-class="active" role="presentation" to="/" exact><span class="glyphicon glyphicon-search" aria-hidden="true"></span><a>&nbsp;&nbsp;网页版游记常见问题Q&A</a></router-link>
</div>
</div>

  </template>

<script>
    export default {
        name: "Notice"
    }
</script>


<style scoped>
  li{
    list-style: none;
    margin-top: 15px;
  }
  #d2{
    margin-left: 20px;
  }
  a{
    text-decoration:none;
  }

  </style>
