<template>
  <div>

      <home-image></home-image>

      <home-scenic></home-scenic>

      <home-note></home-note>

      <home-route></home-route>




    <!--<router-view></router-view>-->

  </div>

</template>

<script>
  import Slide from './Slide.vue'
  import scenic from './Scenic.vue'
  import route from './Route.vue'
  import note from './Note.vue'
    export default {
        name: "center",
      components:{
          'home-image':Slide,
        'home-scenic':scenic,
        'home-route':route,
        'home-note':note
      }


    }
</script>

<style scoped>
div{
  display: block;
}
</style>
