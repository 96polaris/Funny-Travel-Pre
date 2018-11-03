<template>
<div>
  <div class="big-image">
    <img :src="scenicimages.image1" alt="">
  </div>

  <div class="list-image">
    <ul v-for="scimage in scenicimages">
      <li> <img src="scimage.image2" alt=""></li>
      <li> <img :src="scimage.image3" alt=""></li>
      <li> <img :src="scimage.image4" alt=""></li>
      <li> <img :src="scimage.image5" alt=""></li>
    </ul>

  </div>
</div>
</template>

<script>
    export default {
        name: "scenicimage",
      data(){
        return {
          scenicimages:[]
        }
      },
      created(){
        const self = this;
        axios.get('/api/scenicimage/getScenicimage').then( res =>{
          self.scenicimages = res.data.data;

        })
      }
    }
</script>

<style scoped>
  .big-image{
    width: 200px;
    height: 100px;
  }
.list-image ul li{
  width: 100px;
  height: 100px;
  float: left;
}
</style>
