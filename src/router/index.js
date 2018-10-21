
import HelloWorld from '@/components/HelloWorld'

//导入组件

import center from '../components/Home/Center.vue'
import userLogin from '../components/User/userLogin.vue'
// import userRegistry from '../components/User/userRegistry.vue'
import userRegistry from '../components/User/registry.vue'
//游记部分
//chen
import youji from '../components/chen Travelnote/youji.vue'
import user from '../components/chen gerenzhngxin/gerenzhongxin'
import addyouji from '../components/chen Travelnote/youji_tianjia.vue'
import youjixiangqing from '../components/chen Travelnote/youji_xiangqing.vue'
import myyouji from '../components/chen Travelnote/my_youji.vue'


//

export const routes=[
  {path:'/',component:center},
  {path:'/login',component:userLogin},
  // {path:'/registry',component:userRegistry},
  {path:'/registry',component:userRegistry},


  //
  {path: '/youji', component: youji},
  {path: '/youji/youjixq/:id', component: youjixiangqing},

  {path: '/user/addyouji', component: addyouji},
  {path: '/user', component: user},
  {path: '/user/myyouji', component: myyouji},





]

