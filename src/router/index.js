
import HelloWorld from '@/components/HelloWorld'

//导入组件

import center from '../components/Home/Center.vue'
import userLogin from '../components/User/userLogin.vue'
// import userRegistry from '../components/User/userRegistry.vue'
import userRegistry from '../components/User/registry.vue'
export const routes=[
  {path:'/',component:center},
  {path:'/login',component:userLogin},
  // {path:'/registry',component:userRegistry},
  {path:'/registry',component:userRegistry},



]

