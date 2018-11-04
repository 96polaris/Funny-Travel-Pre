<template>
  <div>
    <div id="hh2">
      <div id="s1" v-for="item in currentData1">
        <router-link :to="'/youji/youjixq/'+item.travelNoteId" style="text-decoration:none;"><p class="title">
          {{item.travelTitle}}</p></router-link>
        <router-link :to="'/youji/youjixq/'+item.travelNoteId" style="text-decoration:none;">
          <div id="as1"><img :src="item.travelNoteImage"/></div>

        </router-link>
        <div id="as2">
          <router-link :to="'/youji/youjixq/'+item.travelNoteId" style="text-decoration:none;"><P style="text-indent:2em;"
                                                                                                  id="h2">
            {{item.travelNoteContent.substring(0,220)+'...'}}</P></router-link>
        </div>
        <div id="as3">
          <img :src="item.userImage"/>
          <h4>{{'作者：'+item.userName}}</h4>
          <span ref="kky" class="glyphicon glyphicon-thumbs-up btn-lg" aria-hidden="true" id="dm"
                @click="dianzan(item.travelNoteId)"></span>
          <P>{{item.travelNotePriseNum}} </P>
        </div>
        <P id="as4">{{'发布时间：'+item.fbtime.substring(0,10)}}</P>
      </div>
    </div>

    <div class="block" id="xl">
      <span class="demonstration"></span>
      <el-pagination ref="elpage"
                     background
                     @current-change="change()"
                     :current-page.sync="pageIndex"
                     layout="prev, pager, next"
                     :total="pagecount"
                     :page-size="pagesize"

      >
      </el-pagination>
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
        dianji: false,
        pageIndex: 1,
        pagesize: 4,
        pagecount: 0,
      }
    },
    computed: {
      currentData1() {
        return this.currentData
      }
    },
    methods: {
      loadData() {
        this.currentData = [];
        console.log('this.pageInedx:' + this.pageIndex)
        console.log('this.pagecount:' + this.pagecount)
        let start = (this.pageIndex - 1) * this.pagesize;
        let end = start + this.pagesize;
        console.log('-----------------')
        console.log('start:' + start)
        console.log('end:' + end)
        console.log(this.mydata[1]);
        if (end >=this.pagecount) {
          end = this.pagecount
        }
        for (var i = start; i < end; i++) {
          this.currentData.push(this.mydata[i])
        }
      },
      change() {
        this.loadData()
      },
      dianzan(id) {
        let _this = this;
        if (this.dianji == false) {
          axios.get(`http://localhost:3000/travelnote/dz/${id}`).then(function (result) {
            _this.user = result.data;
            console.log(result.data);
            //点赞成功后，重新调用接口，刷新页面
            axios.get("http://localhost:3000/travelnote/zuixinNote").then((result) => {
              console.log(123);
              console.log(result.data)
              _this.mydata = result.data.data;
              _this.pagecount = _this.mydata.length;
              console.log(_this.mydata)
              _this.loadData()
            })
          })
          alert("点赞成功")
          this.dianji = true
        } else {
          axios.get(`http://localhost:3000/travelnote/qxdianzan/${id}`).then(function (result) {
            _this.user = result.data;
            console.log(result.data);
            //点赞取消成功后，重新调用接口，刷新页面
            axios.get("http://localhost:3000/travelnote/zuixinNote").then((result) => {
              console.log(123+result.data)
              _this.mydata = result.data.data;
              _this.pagecount = _this.mydata.length;
              console.log(_this.mydata)
              _this.loadData()
            })
          })
          alert("取消成功")
          this.dianji = false
        }
      }
    },

    mounted() {
      let _this = this;
      axios.get("http://localhost:3000/travelnote/zuixinNote").then((result) => {
        // console.log(result.data)
        _this.mydata = result.data.data;
        _this.pagecount = _this.mydata.length;
        console.log(_this.mydata)
        _this.loadData()
      })
    },

  }

</script>

<style scoped>
  #s1 {
    width: 800px;
    height: 320px;
    background-color: #e8f2ed;
    margin-top: 40px;
    margin-left: 25px;

  }
  #hh2{
    height: 1425px;

  }
  .title {
    font-size: 20px;
    font-weight: bold;
    color: #eb9331;
    margin-left: 30px;
  }
  #xl{
    margin-left: 300px;
  }
  p {
    font-size: 16px;
  }

  #as1 {
    width: 250px;
    height: 200px;
    float: left;
    margin-top: 10px;
  }

  #as1 > img {
    width: 240px;
    height: 200px;
    margin-left: 10px;
    border-radius:15px;
  }

  #as2 {
    width: 520px;
    height: 180px;
    float: right;
    margin-right: 20px;
    margin-top: 10px;
  }

  #h2 {
    margin-right: 25px;
  }
  #h2:hover{
    color: #ff714d;
  }

  #as3 {
    width: 540px;
    height: 40px;
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
    float: left;
  }

  #as3 > h4 {
    width: 200px;
    float: left;
    margin-left: 15px;
    margin-top: 15px;
    color: #ffac2e;
  }

  #as3 > p {
    float: right;
    margin-top: 12px;
    margin-right: 55px;
    color: #ff8a21;
  }

  #as3 > span {
    margin-left: 150px;
  }

  #as4 {
    color: #ff7922;
    margin-left: 300px;
    font-size: 10px;
    margin-top: 5px;
  }

</style>
