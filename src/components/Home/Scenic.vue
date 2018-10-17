<template>
  <div>
    <h3>玩景点</h3>
  <ul v-for="i in scenic">
    <li >
      <div v-for="(value,key,index) in scenic">
        <img src=""/>
      </div>
      <div v-for="i in scenic">
        <h6></h6>
        <p>{{i.introduce}}</p>
      </div>
    </li>
  </ul>
  </div>
</template>

<script>
    export default {
        name: "scenic",
      data(){
          return{
            scenic:[{
              img:'',
              title:'',
              introduce:''
            }]
          }
      },
      mounted:function(){
          let _this=this
        axios({method: 'get', url: 'http://localhost:3000/manage/showHotScenic'}).then(function (result) {
          console.log(result.data.data[0].scenicName);
          console.log(_this.scenic);
          for(var i=0 ;i<result.data.data.length;i++){
            _this.scenic[i].img=result.data.data[i].scenicImage
            _this.scenic[i].title=result.data.data[i].scenicName
            _this.scenic[i].introduce=result.data.data[i].scenicIntroduce
          }

        }, function (err) {
          console.log(err);
        })
      },
    }
</script>

<style scoped>

</style>
