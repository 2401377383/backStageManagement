// 引入vue
import Vue from 'vue'
// 引入router路由
import VueRouter from 'vue-router'
// 引入home首页
import Home from '../components/Home.vue'
// 引入login页
import Login from '../components/Login.vue'
// 引入首页框架
import HomeContent from '../components/content/HomeContent.vue'
// 引入游戏列表页
import GameList from '../components/game/GameList.vue'
// 引入游戏分类页
import GameClassify from '../components/game/GameClassify.vue'
// 引入游戏类型页
import GameType from '../components/game/GameType.vue'
// 引入游戏原包页
import GameOriginalPackage from '../components/game/GameOriginalPackage.vue'
// 引入广告列表页
import AdvertisingList from '../components/advertising/AdvertisingList.vue'
// 引入添加广告页
import AddAdvertising from '../components/advertising/AddAdvertising.vue'
// 引入游戏礼包页
import GiftBagList from '../components/giftBag/GiftBagList.vue'
// 引入管理页
import Administrator from '../components/administrator/Administrator.vue'
// 引入推广员页
import Promotion from '../components/promotion/Promotion.vue'
// 引入用户页
import Username from '../components/user/User.vue'
// 引入区服列表页
import DistrictList from '../components/district/DistrictList.vue'

// 防止重复同一个路由跳转点击报错
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

Vue.use(VueRouter)

// 路由跳转
const routes = [
  {
    path: '/',
    redirect: '/login'
  },
  {
    path: '/login',
    component: Login,
  },
  {
    path: '/home',
    component: Home,
    children:[
      {
        path: '/home/HomeContent',
        component: HomeContent,
        children:[
          {
            path: '/home/game/GameList',
            component: GameList,
          },
          {
            path: '/home/game/GameClassify',
            component: GameClassify,
          },
          {
            path: '/home/game/GameType',
            component: GameType,
          },
          {
            path: '/home/game/GameOriginalPackage',
            component: GameOriginalPackage,
          },
          {
            path: '/home/advertising/AdvertisingList',
            component: AdvertisingList,
          },
          {
            path: '/home/giftBag/GiftBagList',
            component: GiftBagList,
          },
          {
            path: '/home/administrator/Administrator',
            component: Administrator,Promotion
          },
          {
            path: '/home/promotion/Promotion',
            component: Promotion,
          },
          {
            path: '/home/district/DistrictList',
            component: DistrictList,
          },
          {
            path: '/home/advertising/AddAdvertising',
            component: AddAdvertising,
          },
        ]
      },
      {
        path: '/user',
        component: Username,
      },
    ]
  },
]

const router = new VueRouter({
  routes
})

export default router
