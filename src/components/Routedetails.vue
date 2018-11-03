<template>
<div class="container">
<div class="page">
  <el-card class="page-header">
    <div class="header-i">
  <div class="header">
    <h2>{{ rtdetail_data.routeName}}</h2>
    <span style="cursor: pointer" @click="shoucang()">{{message}}</span>
  </div>
  <div class="rt-title">
    <div class="day">天数：<span class="days">{{rtdetail_data.Days}}天</span>
      <!--<span class="watch">观光地：<em>{{rtdetail_data.placeNumber}}</em></span>-->
    </div>
    <div class="rt-p">
      <p><span class="biaoqian">行程标签：</span>{{rtdetail_data.parah}}</p>
    </div>
    <h4 class="tishi">游玩提示 ：</h4>
    <p class="youwan">1.旅游者参加高原地区旅游或风险旅游项目（包括但不限于：游泳、浮潜、冲浪、漂流等水上活动以及骑马、攀岩、登山等高风险的活动）或患有不宜出行旅游的病情（包括但不限于：呼吸系统、怀孕、精神疾病、身体残疾、糖尿病、传染性、健康受损），
      建议在报名前自行前往机构或自行咨询专业医生意见，以确保自身身体条件能够完成本次旅游活动。</p>
    <p class="youwan">
      2.如自身身体条件不适宜出游而参加旅游活动的，在行程中因自身身体条件引发的疾病或其他损害由旅游者本人承担相关责任；旅游者如系60岁以上（含60岁）人员出游的，本人需充分考虑自身健康状况能够完成本次旅游活动，谨慎出游，
      建议要有亲友陪同出游，如因旅游者自身身体原因引发疾病或其他损害由旅游者本人承担相关责任。
    </p>

  </div><!--rt-title结束-->
    </div>

    <div class="map">
      <el-row class="sousuo">
        <el-col :offset="2" :span="8" class="input">
          <el-input :id="suggestId" v-model="address_detail" :clearable='clearable' placeholder="请输入地址哦，查看距离" >
          </el-input>
        </el-col>
        <el-col :span="2">
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

  <div class="details">
    <div class="details-h">
      <h4>行程地点：<span>{{rtdetail_data.tripPlace}}</span></h4>
    </div>
<el-card class="details-inner">
  <div class="page-inner">
    <div class="inner-p">

  <h4><span class="icon"></span><span class="icon-title">{{rtdetail_data.rtTitle1}}</span></h4>
  <p>{{rtdetail_data.rtIntr1}}</p>
  <p><span>游玩时间：</span>{{rtdetail_data.playTime}}</p>
  <p><span>开放时间：</span>{{rtdetail_data.openTime}}</p>
    </div>
    <div class="inner-img">
      <img :src="rtdetail_data.rtImg1" alt="">
    </div>
  </div>
  <div class="page-inner">
    <div class="inner-p">
    <h4><span class="icon"></span><span class="icon-title">{{rtdetail_data.rtTitle2}}</span></h4>
    <p>{{rtdetail_data.rtIntr2}}</p>
    <p><span>游玩时间：</span>{{rtdetail_data.playTime}}</p>
    <p><span>开放时间：</span>{{rtdetail_data.openTime}}</p>
      </div>
    <div class="inner-img">
      <img :src="rtdetail_data.rtImg2" alt="">
    </div>
  </div>

  <div class="page-inner">
    <div class="inner-p">
    <h4><span class="icon"></span><span class="icon-title">{{rtdetail_data.rtTitle3}}</span></h4>
    <p>{{rtdetail_data.rtIntr3}}</p>
    <p><span>游玩时间：</span>{{rtdetail_data.playTime}}</p>
    <p><span>开放时间：</span>{{rtdetail_data.openTime}}</p>
      </div>
    <div class="inner-img">
      <img :src="rtdetail_data.rtImg3" alt="">
    </div>
  </div>

  <div class="page-inner">
    <div class="inner-p">
    <h4><span class="icon"></span><span class="icon-title">{{rtdetail_data.rtTitle4}}</span></h4>
    <p>{{rtdetail_data.rtIntr4}}</p>
    <p><span>游玩时间：</span>{{rtdetail_data.playTime}}</p>
    <p><span>开放时间：</span>{{rtdetail_data.openTime}}</p>
      </div>
    <div class="inner-img">
      <img :src="rtdetail_data.rtImg4" alt="">
    </div>
  </div>


</el-card>
  </div>
</div>
</div>
</template>

<script>

  export default {
    name: "Routedetails",
    data(){
      return {
        rtdetails:[],
        index:'',
        message:'收藏',
        rtdetail_id:'',
        rtdetail_data:'',

        address_detail: "", //详细地址
        userlocation: { lng: "", lat: "" },
        clearable: true,
        suggestId: "suggestId",
        map : {},
        mk: {}
      }
    },
    created(){
      this.rtdetail_id=this.$route.query.id
    },
    methods:{
      shoucang(){
        if(sessionStorage.getItem('userId')==null){
          alert('请先登录！')
          this.$router.push({
            path:'/login'})
        }else{
          const self=this;
          self.index=1;
          axios.post('http://localhost:3000/collection/addRoute',{
            user_userId:sessionStorage.getItem('userId'),
            route_routeId:this.rtdetail_data.route_routeId,

          }).then(res => {
            if(self.index==1){
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

      const self = this;
      this.$nextTick(function() {
        this.drawMap();
      });
      axios.get('http://localhost:3000/routedetails/getRouteDetails' + '?' + this.details).then(res => {
        self.rtdetails = res.data.data;

        for (var item of this.rtdetails) {
          //console.log(item)

          if(item.route_routeId == self.rtdetail_id) {
            self.rtdetail_data = item;
          }
        }
      })
    }
  }
</script>

<style scoped>
  .tishi{
    margin-top: 20px;
    margin-left: 20px;
    margin-bottom: 20px;
    color: #333;
  }
  .youwan{
    color: #999;
    margin-left: 20px;
  }
  .sousuo{
    width: 500px;
    height: 50px;
  }
  .input{
    width: 410px;
    height: 50px;
    float: left;
  }
  .map{
    width: 500px;
    height: 500px;
    float: left;
  }
  .allmap {
    width: 500px;
    height: 500px;
    font-family: "微软雅黑";

  }
.biaoqian{
  color: #999;
}
 .page{
   width: 100%;
 }
 .page-header{
   width: 1300px;
   height: 500px;
margin-left: -100px;
 }
 .header{
   width: 700px;
margin-top: 20px;
overflow: hidden;
 }
 .header-i{
   width: 700px;
   height: 450px;
   border: 2px solid bisque;
   float: left;
   border-radius: 10px;
 }
 .header-img img{
   display: block;
   width: 500px;
   height: 250px;
   float: left;
   margin-left: 50px;
 }
 .header h2{
   width: 400px;
   font-size: 30px;
   height: 100px;
   line-height: 100px;
   margin-top: -20px;
   float: left;
   color: orange;
   margin-left: 20px;
 }
 .header h2:hover{
   font-size: 32px;
 }
 .header span{
   display: block;
   width: 60px;
   height: 30px;
   line-height: 30px;
   text-align: center;
   border: 1px solid cadetblue;
   border-radius: 5px;
   float: right;
   color:cadetblue;
   margin-right: 20px;
   margin-top: 10px;
 }
 .header span:hover{
   border: 2px solid cadetblue;

 }
 .rt-title .watch{
   margin-left: 10px;
 }
 .watch em{
   color: orange;
 }
  .rt-p{
    margin-top: 20px;
    margin-left: 10px;
  }
 .page-inner{
   width: 100%;
 }
  .details-h{
    width: 100%;
    background-color:deepskyblue;
    border-radius: 10px;
  }
 .details-h h4  {
   height: 50px;
   line-height: 50px;
   color: #fff;
 }
 .day{
   margin-left: 10px;
   font-size: 18px;
 }
 .ditu{
   margin-left: 20px;
 }
  .details-inner{
    margin-top: 20px;

  }
 .details-inner h4{
   font-weight:bolder;
   margin-left: 20px;
 }
 .page-inner{
   width: 1100px;
   height: 220px;
   margin-top: 20px;
   border: 1px solid #ccc;
   border-radius: 10px;
 }
 .page-inner h4{
   color: cadetblue;
   height: 30px;
   font-size: 20px;
   margin-bottom: 20px;
   margin-top: 20px;
   margin-left: 20px;
   width: 300px;
 }
 .icon {
   float: left;
   display: block;
   background: url('../assets/lineimg/icon.png') no-repeat;
   background-position: 0 -130px;
   width: 15px;
   height: 16px;
   margin-top: 2px;
 }
 .icon-title{
   float: left;
   margin-left: 20px;
 }
 .page-inner h4:hover{
   font-size: 24px;
 }
 .inner-p{
   width: 700px;
   height: 220px;
   float: left;
 }
 .inner-img img{
   display: block;
   float: left;
   width: 300px;
   height: 200px;
   margin-top: 10px;
   margin-left: 70px;
   border-radius: 10px;
 }
 .inner-img img:hover{
   width: 310px;
   height: 210px;
 }
  .page-inner p{
    color: #666;
    margin-left: 20px;
    margin-bottom: 20px;
  }
</style>
