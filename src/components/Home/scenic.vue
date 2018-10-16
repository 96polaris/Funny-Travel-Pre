<template>
  <div>
    <h1>scenic</h1>
  <ul>
    <li v-for="">
      <div>
        <img src=""/>
      </div>
      <div>
        <p></p>
      </div>
    </li>
  </ul>
  </div>
</template>

<script>
    export default {
        name: "scenic",
      data(){},
      methods:{
        //获取热门景点
        getScenic() {
          axios({method: 'get', url: 'http://localhost:3000/manage/showHotScenic'}).then(function (result) {
            console.log(result.data.data);
          }, function (err) {
            console.log(err);
          })
        },
      }
    }
</script>

<style scoped>

</style>
