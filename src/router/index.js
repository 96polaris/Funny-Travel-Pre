
import HelloWorld from '@/components/HelloWorld'

//导入组件

import map from '../components/map/map.vue'


import center from '../components/Home/Center.vue'
import userLogin from '../components/User/userLogin.vue'
// import userRegistry from '../components/User/userRegistry.vue'
import userRegistry from '../components/User/registry.vue'
//游记部分
//chen
import youji from '../components/chen Travelnote/youji.vue'
import addyouji from '../components/chen Travelnote/youji_tianjia.vue'
import youjixiangqing from '../components/chen Travelnote/youji_xiangqing.vue'
import myyouji from '../components/chen Travelnote/my_youji.vue'

//个人中心
import actdetail from '../components/User/actdetail.vue'
import personalMessage from '../components/User/personalMessage.vue'
import perCollect from '../components/User/perCollect.vue'
import joinAct from '../components/User/joinAct.vue'
import provideAct from '../components/User/provideAct.vue'
import personalCenter from '../components/User/personalCenter.vue'
import myNote from '../components/User/myNote.vue'
import resetpwd from '../components/User/resetpwd.vue'


//景点和线路部分
import Router from 'vue-router'
// import Home from '../components/Home'
import Scenic from '../components/scenic/Scenic'
import Routeline from '../components/routeline/Routeline'
import Scenicimage from '../components/scenic/Scenicimage'
import Sceniclocation from '../components/scenic/Sceniclocation'
import Scenicdetails from '../components/Scenicdetails'
import Wuzhongqu from '../components/scenic/wuzhongqu'
import Yuanqu from '../components/scenic/yuanqu'
import Gaoxingqu from '../components/scenic/gaoxinqu'
import Kunshan from '../components/scenic/kunshan'
import Xiangcheng from '../components/scenic/xiangcheng'
import Zhangjiagang from '../components/scenic/zhangjiagang'
import Taicang from '../components/scenic/taicang'
import Changshu from '../components/scenic/changshu'
import Gusuqu from '../components/scenic/gusuqu'
import Oneday from '../components/routeline/oneday'
import Twoday from '../components/routeline/twoday'
import Threeday from '../components/routeline/threeday'
import Routedetails from '../components/Routedetails'
import Pagenumber from '../components/Pagenumber'
// 导入活动相关组件
import Activitys from '../components/activity/Activitys.vue'
// import Home from '../components/Home.vue'
import AddAct from '../components/activity/AddAct.vue'
import OneAct from '../components/activity/OneAct.vue'


import EditAct from '../components/activity/EditAct.vue'
import AddComment from '../components/activity/AddComment.vue'
import Comments from '../components/activity/Comments.vue'
import OneComment from '../components/activity/OneComment.vue'
import DelComment from '../components/activity/DelComment.vue'

export const routes=[
// 地图
  {path:'/5',component:map},
 // 活动模块相关路由配置
   //活动首页
  {path:'/activity',component:Activitys},
  {path:'/activitys/addAct',component:AddAct},
  // 与某个活动相关的操作（加入活动，退出活动，修改活动，发表评论）
  {path:'/activitys/:id',component:OneAct},
  {path:'/activitys/addComment',component:AddComment},

  {path:'/activitys/:id/editAct',component:EditAct},
  // 与评论相关的操作（全部评论，删除评论，某条评论）
  {path:'/comments',component:Comments},
  {path:'/onecomment',component:OneComment},
  {path:'/comments/delComment',component:DelComment},
  {path:'/activity/:activityTitle',component:Activitys},

// 个人中心
  {path:'/',component:center},
  {path:'/login',component:userLogin},
  // {path:'/registry',component:userRegistry},
  {path:'/registry',component:userRegistry},
  {path:'/resetpwd',component:resetpwd},

  {path:'/personalCenter',component:personalCenter,
    children:[
      {path:'',component:personalMessage},
      {path:'personalColl',component:perCollect},
      {path:'joinAct',component:joinAct},
      {path:'myNote',component:myNote},
      {path:'myAct',component:provideAct},
      {path:':actid',component:actdetail},
    ]},



  //游记部分
  {path: '/youji', component: youji},
  {path: '/youji/youjixq/:id', component: youjixiangqing},

  {path: '/user/addyouji', component: addyouji},
  {path: '/user/myyouji', component: myyouji},





  // 景点和线路部分
  {path: '/scenic', component: Scenic, children: [
      {path: 'wuzhongqu', component: Wuzhongqu},
      {path: 'yuanqu', component: Yuanqu},
      {path: 'gaoxinqu', component: Gaoxingqu},
      {path: 'kunshan', component: Kunshan},
      {path: 'xiangcheng', component: Xiangcheng},
      {path: 'zhangjiagang', component: Zhangjiagang},
      {path: 'taicang', component: Taicang},
      {path: 'changshu', component: Changshu},
      {path: 'gusuqu', component: Gusuqu},]},

  {path: '/routeline', component: Routeline, children: [
      {path: 'oneday', component: Oneday},
      {path: 'twoday', component: Twoday},
      {path: 'threeday', component: Threeday},
    ]},

  {path: '/pagenumber', component: Pagenumber},
  {path: '/scenicdetails', component: Scenicdetails},
  {path: '/routedetails', component: Routedetails},

]

