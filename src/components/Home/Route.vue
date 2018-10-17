<template>
  <div>

  </div>
</template>

<script>
    export default {
        name: "route",
     mounted:function () {
       axios({method: 'get', url: 'http://localhost:3000/manage/showHotRoute'}).then(function (result) {
         // console.log(result.data.data);
       }, function (err) {
         console.log(err);
       })
     }
    }
</script>

<style scoped>

</style>
