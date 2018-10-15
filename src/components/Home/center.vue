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
  import image from './image.vue'
  import scenic from './scenic.vue'
  import route from './route.vue'
  import note from './note.vue'
    export default {
        name: "center",
      components:{
          'home-image':image,
        'home-scenic':scenic,
        'home-route':route,
        'home-note':note
      }


    }
</script>

<style scoped>

</style>
