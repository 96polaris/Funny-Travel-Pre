<template>
  <div>

  </div>
</template>

<script>
    export default {
        name: "note",
      mounted:function(){
        axios({method: 'get', url: 'http://localhost:3000/manage/showHotNote'}).then(function (result) {
          // console.log(result.data.data);
        }, function (err) {
          console.log(err);
        })
      },
      methods:{

      }
    }
</script>

<style scoped>

</style>
