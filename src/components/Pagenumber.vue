<template>
  <ul class="area nav nav-pills ">
    <!--exact可以避免根路由使用始终激活的样式-->
    <router-link  tag="li" role="presentation" to="/scenic/wuzhongqu" ><a>1</a></router-link>
    <router-link  tag="li" role="presentation"  to="/"><a>2</a></router-link>

  </ul>
</template>

<script>
    export default {
        name: "Pagenumber"
    }
</script>

<style scoped>

</style>
