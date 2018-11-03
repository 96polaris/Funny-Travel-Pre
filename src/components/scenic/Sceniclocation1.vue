<template>
<div class="container">
<div class="row">
      <ul class="area nav nav-pills ">
        <!--exact可以避免根路由使用始终激活的样式-->
        <li role="presentation"  ><a>地区</a></li>
        <router-link  tag="li" role="presentation" :to="{path:'/scenic/wuzhongqu'}"><a>吴中区</a></router-link>
        <router-link  tag="li" role="presentation" :to="{path:'/scenic/yuanqu'}"><a>园区</a></router-link>
        <router-link  tag="li" role="presentation" :to="{path:'/scenic/gaoxinqu'} "><a>高新区</a></router-link>
        <router-link  tag="li" role="presentation" :to="{path:'/scenic/kunshan'}"><a>昆山市</a></router-link>
        <router-link  tag="li" role="presentation" :to="{path:'/scenic/xiangcheng'}"><a>相城区</a></router-link>
        <router-link  tag="li" role="presentation" :to="{path:'/scenic/zhangjiagang'}"><a>张家港市</a></router-link>
        <router-link  tag="li" role="presentation" :to="{path:'/scenic/taicang'}"><a>太仓市</a></router-link>
        <router-link  tag="li" role="presentation" :to="{path:'/scenic/changshu'}"><a>常熟市</a></router-link>
        <router-link tag="li"  role="presentation" :to="{path:'/scenic/gusuqu'}"><a>姑苏区</a></router-link>
      </ul>
</div>
</div>
</template>

<script>

    export default {
      name: "Sceniclocation",
    }


</script>

<style scoped>

.area{
  width: 80%;
  height: 50px;
  margin-left: 180px;
}
.area li a{
  font-size: 18px;
}
.area li a:hover{
  font-size: 20px;
}
</style>
