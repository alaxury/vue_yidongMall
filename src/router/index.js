import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home from '../views/home/Home.vue'
//  懒加载

// const Home = () => import('../views/home/Home.vue')
// const Cart = () => import('../views/cart/Cart.vue')
// const Category = () => import('../views/category/Category.vue')
// const Profile = () => import('../views/profile/Profile.vue')

// 导入对应的路由组件
import HomeContainer from '../components/tabbar/HomeContainer.vue'
import MemberContainer from '../components/tabbar/MemberContainer.vue'
import ShopcarContainer from '../components/tabbar/ShopcarContainer.vue'
import SearchContainer from '../components/tabbar/SearchContainer.vue'
// import NewsList from './components/news/NewsList.vue'
// import NewsInfo from './components/news/NewsInfo.vue'
// import PhotoList from './components/photos/PhotoList.vue'
// import PhotoInfo from './components/photos/PhotoInfo.vue'
// import GoodsList from './components/goods/GoodsList.vue'
// import GoodsInfo from './components/goods/GoodsInfo.vue'
// import GoodsDesc from './components/goods/GoodsDesc.vue'
// import GoodsComment from './components/goods/GoodsComment.vue'

Vue.use(VueRouter)

// 2.配置路由信息
const routes = [
  { path: '/', redirect: '/home' },
  { path: '/home', component: HomeContainer },
  { path: '/member', component: MemberContainer },
  { path: '/shopcar', component: ShopcarContainer },
  { path: '/search', component: SearchContainer }
]

const router = new VueRouter({
  routes,
  linkActiveClass: 'mui-active' // 覆盖默认的路由高亮的类，默认的类叫做 router-link-active
})

export default router
