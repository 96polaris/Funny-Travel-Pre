<template>
  <div>
    <h2>看游记</h2>
    <div class="note">
      <div v-for="(value,index) in note" v-if="index<num" >
        <div class="noteone" @click="getnoteId(value.travelNoteId)">
          <img :src=value.travelNoteImage>
          <h3>{{value.travelTitle}}</h3>

        <div class="content">
          <p>
            {{value.travelNoteContent}}
          </p></div>
      </div>
    </div>
      <div class="btn">
        <el-button type="primary" @click="more">︾</el-button>
        <el-button type="primary" @click="back">︽</el-button>
      </div>
  </div>
  </div>
</template>

<script>
  import axios from'axios'
    export default {
        name: "note",
      data(){
           return{
             note:[],
             num:2
           }
      },
      mounted:function(){
        let _this = this
        axios({method: 'get', url: 'http://localhost:3000/manage/showHotNote'}).then(function (result) {
          console.log(result.data);
          _this.note = result.data.data
          // console.log(result.data.data);
          // console.log(_this.route);

        }, function (err) {
          console.log(err);
        })
      },
      methods:{
          getnoteId(index){
            this.$router.push({path:`/youji/youjixq/${index}`})
            console.log(index)
          },
        more(){
          this.num+=3;
        },
        back(){
          this.num=3
        }
      }
    }
</script>

<style scoped>
  .note{
    width: 100%;
    height: 20%;
    display:inline-block;
    /*background-color:orangered;*/
  }
  .notecontainer{
    margin: 0 auto;
    width: 100%;
    height: 400px;
    display:inline-block;
    /*background-color: white;*/
    /*border: 1px solid red;*/
  }
  .noteone{
    width: 80%;
    height: 200px;
    float: left;
    margin: 0 auto;
    /*border: 1px solid black;*/
    margin-left: 100px;
    margin-top: 20px;
    display:inline-block;
    /*background-color: pink;*/

  }
  img{
    width: 200px;
    height: 200px;
    float: left;
  }

  .content{
    height: 100px;
    padding-left: 250px;

  }
  .content>p{
    height: 100px;
    text-indent: 2em;
    -webkit-line-clamp:5;
    display:-webkit-box;
    -webkit-box-orient:vertical;
    text-overflow:ellipsis;
    overflow:hidden;
  }
  h3{
    text-align: center;
  }
  .btn{
    width: 100%;
    margin: 0 auto;
  }
</style>
