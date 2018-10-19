<template>
  <div>
    <div class="s1" v-for="item in currentData">
      <div>
        <router-link :to="'/youji/youjixq/'+item.travelNoteId"><p class="title">{{item.travelTitle}}</p></router-link>
        <div id="as1"><img :src="item.travelNoteImage"/></div>
        <div id="as2"><P style="text-indent:2em;" id="h2">{{item.travelNoteContent.substring(0,220)+'...'}}</P></div>
      </div>
      <div id="as3">
        <img :src="item.userImage"/>
        <h5>{{item.userName}}</h5>
      </div>
    </div>

  </div>
</template>

<script>
  import axios from 'axios'

  export default {
    name: "youji_tuijian",
    data: function () {
      return {
        mydata: [],
        currentData: [],
        pageindex: 0,
        pagecount: 2,
      }
    },
    methods: {},
    mounted() {
      axios.get("http://localhost:3000/travelnote/zuixinNote").then((result) => {
        console.log(result.data)
        this.mydata = result.data.data;
        console.log(result.data)
        for (var i = 0; i < 4; i++) {
          this.currentData.push(this.mydata[i])
        }
      })
    },
  }
</script>

<style scoped>
  .s1 {
    width: 800px;
    height: 320px;
    background-color: #88f2ff;
    margin-top: 40px;
    margin-left: 25px;

  }

  .title {
    font-size: 20px;
    font-weight: bold;
    color: #eb9331;
    margin-left: 30px;

  }

  p {
    font-size: 16px;
  }

  #as1 > img {
    width: 220px;
    height: 190px;
    margin-left: 20px;
  }

  #as1 {
    width: 250px;
    height: 200px;
    float: left;
    margin-top: 10px;
  }

  #as2 {
    width: 520px;
    height: 180px;
    float: right;
    margin-right: 20px;
    margin-top: 10px;
  }

  #h2 {
    margin-right: 40px;
  }

  #as3 {
    width: 200px;
    height: 50px;
    margin-left: 260px;
    margin-top: 20px;
    clear: right;

  }

  #as3 > img {
    width: 30px;
    height: 30px;
    border-radius: 15px;
    margin-top: 10px;
    margin-left: 5px;

  }

  h5 {
    width: 100px;
    height: 10px;
    float: right;
    margin-right: 50px;
    margin-top: 18px;
  }
</style>

