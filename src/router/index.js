
import HelloWorld from '@/components/HelloWorld'

//导入组件

import center from '../components/Home/center.vue'
import userlogin from '../components/User/userLogin'
import userregistry from '../components/User/userRegistry'
export const routes=[
  {path:'/',component:center},
  {path:'/login',component:userlogin},
  {path:'/addUser',component:userregistry},



]

