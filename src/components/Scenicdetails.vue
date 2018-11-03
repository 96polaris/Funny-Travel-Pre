<template>
  <div class="container">
    <div class="page">
      <el-card class="inner-detail">
        <div class="d-header" >
          <div class="img-left">
            <img :src='detail_data.scenicImage' alt="">
          </div><!--img-left结束-->
          <div class="t-right">
            <div class="t-right-title">
            <h3>{{detail_data.scenicName}}</h3>
              <span style="cursor: pointer" @click="shoucang()">{{message}}</span>
            </div>
            <p class="p1"><b>景点地址:</b>{{detail_data.scenicAddress}}</p>
            <p class="p2"><b>开放时间:</b>{{detail_data.openHours}}</p>
            <div class="grade">{{detail_data.scenicLevel}}</div>
            <div class="safe">
            <h5>安全须知</h5>
            <p class="safe1">1.为了您人身、财产的安全，请您避免在公开场合暴露贵重物品及大量现金。外出时需时刻看管好首饰、相机等随身物品</p>
            <p class="safe2">2.游泳、漂流、潜水、浮潜、冲浪、快艇、滑雪、滑冰、热气球、高空跳伞、滑翔伞、动力伞、攀岩、登山、骑马、驾驶、温泉、冲沙、索道、蹦极等活动项目，
              均存在危险。参与前请根据自身条件， 充分参考当地相关部门及其它专业机构的相关公告和建议后量力而行。</p>
            </div>
            </div><!--title结束-->
        </div><!--d-header结束-->

        <div class="map">
          <el-row  class="sousuo">
            <el-col :offset="2" :span="8" class="input">
              <el-input :id="suggestId" v-model="address_detail" :clearable='clearable' placeholder="请输入景点地址哦，查看距离" >
              </el-input>
            </el-col>
            <el-col :span="2" class="dingwei">
              <el-button id="position" @click="search" type="primary">定位</el-button>
            </el-col>
          </el-row>
          <el-row>
            <el-col :offset="2" :span="18">
              <div id="map_canvas" class="allmap"></div>
            </el-col>
          </el-row>
        </div>
  </el-card>

  <div class="page-inner">
        <div class="d-inner">
          <h3 class="page-title"><span>景点简介</span></h3>
          </div><!--d-inner结束-->
          <el-card class="inner-p">
            <div class="pic">
              <div class="pic-p1">
                <img :src='detail_data.image1' alt="">
                <p >{{detail_data.p1}}</p>
              </div>
              <div class="pic-p2">
                <img :src='detail_data.image2' alt="">
                <p >{{detail_data.p2}}</p>
              </div>
            </div><!--pic结束-->

            <div class="pic">
              <div class="pic-p1">
                <img :src='detail_data.image3' alt="">
                <p >{{detail_data.p3}}</p>
              </div>
              <div class="pic-p2">
                <img :src='detail_data.image4' alt="">
                <p >{{detail_data.p4}}</p>
              </div>
            </div><!--pic结束-->

            <div class="pic">
              <div class="pic-p1">
                <img :src='detail_data.image5' alt="">
                <p >{{detail_data.p5}}</p>
              </div>
              <div class="pic-p2">
                <img :src='detail_data.image6' alt="">
                <p >{{detail_data.p6}}</p>
              </div>
            </div><!--pic结束-->

          </el-card><!--el-card结束-->
        </div><!--page-inner结束-->
      </div>
    </div>

</template>
<script>

    export default {
        name: "scenicintroduce",
        data(){
        return {
           scenicintroduces:[],
           index:'',
          message:'收藏',
          detail_id:'',
          detail_data:'',
          details:[],

          address_detail: "", //详细地址
          userlocation: { lng: "", lat: "" },
          clearable: true,
          suggestId: "suggestId",
          map : {},
          mk: {}
        }
      },
      created(){
          this.detail_id=this.$route.query.id
      },
      methods:{
sc(){
  const _this = this
  axios.get('http://localhost:3000/collection/getScenic').then(res =>{
    _this.details = res.data.data;
    for(var dt in _this.details){
      if(dt.scenic_scenicId==true){
        self.message='已收藏'
      }else{
        self.message='收藏'
      }
    }
  })
},
        shoucang(){
          if(sessionStorage.getItem('userId')==null){
            alert('请先登录！')
            this.$router.push({
              path:'/login'})
          }else{
            const self=this;
            self.index=1;
            const index = self.index
            const storage = window.localStorage;
            storage.setItem("index",index)
            axios.post('http://localhost:3000/collection/AddScenic',{
              user_userId:sessionStorage.getItem('userId'),
              scenic_scenicId:this.detail_data.scenic_scenicId,

            }).then(res => {
              if(window.localStorage.index==1){
                self.message='已收藏'
              }else{
                alert('请点击收藏')
              }
            })
          }

        },

        drawMap() {
          this.map = new BMap.Map("map_canvas");        // 创建地图实例
          this.map.addControl(new BMap.NavigationControl());      // 启用放大缩小 尺
          this.map.enableScrollWheelZoom();
          this.getlocation();//获取当前坐标, 测试时获取定位不准。

          var point = new BMap.Point(this.userlocation.lng, this.userlocation.lat); // 创建点坐标
          this.map.centerAndZoom(point, 13);         // 初始化地图，设置中心点坐标和地图级别
          var marker = new BMap.Marker(point);    // 创建标注
          this.map.addOverlay(marker);           // 将标注添加到地图中

          var ac = new BMap.Autocomplete({
            //建立一个自动完成的对象
            input: "suggestId",
            location: this.map
          });
          var myValue;
          ac.addEventListener("onconfirm", (e)=> {
            //鼠标点击下拉列表后的事件
            var _value = e.item.value;
            myValue =_value.province +_value.city +_value.district +_value.street +_value.business;
            this.address_detail = myValue;
            this.setPlace();
          });
        },
        getMarker (point) {
          this.mk = new BMap.Marker(point);
          this.mk.addEventListener("dragend", this.showInfo);
          this.mk.enableDragging();  //可拖拽
          this.getAddress(point);
          this.map.addOverlay(this.mk);//把点添加到地图上
          this.map.panTo(point);
        },
        getlocation () {
          //获取当前位置
          var geolocation = new BMap.Geolocation();
          geolocation.getCurrentPosition((r) =>{
            if(geolocation.getStatus() == BMAP_STATUS_SUCCESS){
              this.getMarker(r.point);
              this.userlocation = r.point;
            }else {
              alert('failed'+this.getStatus());
            }
          });
        },
        //绑定Marker的拖拽事件
        showInfo(e){
          var gc = new BMap.Geocoder();
          gc.getLocation(e.point, (rs)=>{
            var addComp = rs.addressComponents;
            var address = addComp.province + addComp.city + addComp.district + addComp.street + addComp.streetNumber;//获取地址

            //画图 ---》显示地址信息
            var label = new BMap.Label(address,{offset:new BMap.Size(20,-10)});
            this.map.removeOverlay(this.mk.getLabel());//删除之前的label

            this.mk.setLabel(label);
            this.address_detail = address;
            this.userlocation = e.point;

          });
        },
        //获取地址信息，设置地址label
        getAddress(point){
          var gc = new BMap.Geocoder();

          gc.getLocation(point, (rs)=>{
            var addComp = rs.addressComponents;
            var address = addComp.province + addComp.city + addComp.district + addComp.street + addComp.streetNumber;//获取地址

            //画图 ---》显示地址信息
            var label = new BMap.Label(address,{offset:new BMap.Size(20,-10)});
            this.map.removeOverlay(this.mk.getLabel());//删除之前的label
            this.address_detail = address;
            this.mk.setLabel(label);

          });

        },
        setPlace() {
          this.map.clearOverlays(); //清除地图上所有覆盖物
          var th = this
          function myFun() {
            th.userlocation = local.getResults().getPoi(0).point; //获取第一个智能搜索的结果
            th.map.centerAndZoom(th.userlocation, 18);
            th.getMarker(th.userlocation);
          }

          var local = new BMap.LocalSearch(this.map, {
            onSearchComplete: myFun //智能搜索
          });
          local.search(this.address_detail);
        },
        search () {
          var localSearch = new BMap.LocalSearch(this.map);
          localSearch.enableAutoViewport(); //允许自动调节窗体大小
          this.searchByInputName(localSearch);
        },
        searchByInputName(localSearch) {
          this.map.clearOverlays(); //清空原来的标注
          var th = this;
          var keyword = this.address_detail;
          localSearch.setSearchCompleteCallback(function(searchResult) {
            var poi = searchResult.getPoi(0);
            th.userlocation = poi.point;
            th.map.centerAndZoom(poi.point, 13);
            th.getMarker(th.userlocation);
          });
          localSearch.search(keyword);
        },
        onCopy () {
          this.$message('内容已复制到剪贴板!');
        },
        onError () {
          this.$message('内容复制失败,请重试!');

        }
      },
      mounted: function () {
          this.sc()
          const self = this;
        this.$nextTick(function() {
          this.drawMap();
        });
        axios.get('http://localhost:3000/scenicintroduce/getScenicintroduce' + '?' + this.details).then(res => {
          self.scenicintroduces = res.data.data;

          for (var item of this.scenicintroduces) {
            //console.log(item)

            if(item.scenic_scenicId == self.detail_id) {
              self.detail_data = item;
            }
          }
        })
      }
    }
</script>

<style scoped>
  .sousuo{
    width: 400px;
    height: 50px;
  }
  .input{
    width: 300px;
    height: 50px;
    float: left;
  }
  .map{
    width: 400px;
    height: 450px;
    float: left;
  }
  .allmap {
    width: 400px;
    height: 450px;
    font-family: "微软雅黑";

  }
  .page{
    width:100% ;
    margin-top: 10px;
  }
  .inner-detail{
    width: 1350px;
margin-left: -120px;
    height: 450px;
  }
 .d-header{
   width: 900px;
   height: 400px;
   float: left;
 }
.img-left{
  margin-top:30px;
  width: 400px;
  height: 340px;
  float: left;
  border: 1px solid #ccc;
  border-radius: 10px;
}
  .img-left img{
    display: block;
    width: 360px;
    height: 300px;
    margin-left: 20px;
    margin-top: 20px;
    border-radius: 10px;
  }
  .img-left img:hover{
    width: 364px;
    height: 304px;
  }
  .t-right{
    float: left;
    width:450px ;
    height: 400px;
    margin-left: 30px;
  }
  .t-right-title{
    width: 450px;
    height: 60px;
    overflow: hidden;
    margin-bottom: 10px;
  }
  .t-right-title h3{
    height: 50px;
    color: orange;
    float: left;
  }
  .t-right-title h3:hover{
    font-size: 30px;
  }
  .t-right-title span{
    display: block;
    width: 60px;
    height: 30px;
    line-height: 30px;
    text-align: center;
    margin-right: 20px;
    float: right;
    color: cadetblue;
    border: 1px solid cadetblue;
    border-radius: 5px;
    margin-top: 15px;
  }
  .t-right-title span:hover{
    border: 2px solid cadetblue;

  }
  .ditu{
    margin-left: 30px;
  }
  .t-right h5{
    font-weight: bold;
  }
  .safe{
    width: 450px;
    margin-top: 20px;
  }
  .safe1,.safe2{
    color: #666;
  }
  .t-right .p1{
    font-size: 18px;
    color: #666;

  }
  .t-right .p2{
    font-size: 18px;
    color: #666;
  }
  .grade{
margin-top: 10px;
    width:100px;
    height: 30px;
    line-height: 30px;
    text-align: center;
    border: 1px solid orange;
    border-radius: 20px;
    color: orange;
    font-size: 18px;
  }
  .page-inner{
    width: 1200px;
    margin-top: 5px;
    margin-left: -50px;
  }
  .pic{
    width: 1200px;
    height: 430px;
  }
  .pic-p1{
margin-right: 50px;
  }
  .pic-p1 img{
    display: block;
    width: 550px;
    height: 300px;
    border-radius: 10px;
  }
  .pic-p1 img:hover{
    width: 560px;
    height: 310px;
  }
  .pic-p2 img{
    display: block;
    width: 550px;
    height: 300px;
    border-radius: 10px;
  }
  .pic-p2 img:hover{
    width: 555px;
    height: 305px;
  }
.pic-p1 {
  width: 550px;
  height: 300px;
  float: left;
}
.pic-p2{
  width: 550px;
  height: 300px;
  float: left;
}

  .d-inner h3{
    width: 100%;
    height: 50px;
    line-height: 50px;
    color: greenyellow;
    background-color: mediumseagreen;
    border-radius: 5px;
  }
  .d-inner h3 span{
    margin-left: 50px;
  }
  .inner-p p{
    width: 100%;
    margin-top: 20px;
    color: cadetblue;
  }
</style>
