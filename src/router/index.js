import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [{
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/About.vue')
  },
  // 首页
  {
    path: '/home',
    name: 'home',
    component: () => import('../views/backstage/home'),
    children: [{
        path: '/home1',
        name: 'home1',
        component: () => import('../views/backstage/home1'),
        children: [{
            path: '/ec',
            name: 'ec',
            component: () => import('../views/backstage/ec')
          },
          {
            path: '/xc',
            name: 'xc',
            component: () => import('../views/backstage/xc')
          },
          {
            path: '/good',
            name: "good",
            component: () => import('../views/backstage/good')
          },
        ]
      },
      // 商品列表
      {
        path: '/goods',
        name: 'goods',
        component: () => import('../views/backstage/goods'),
        children:[
          {
            path: '/goods1',
            name: 'goods1',
            component: () => import('../views/backstage/goods1')
          },
          {
            path: '/goods2',
            name: 'goods2',
            component: () => import('../views/backstage/goods2')
          },
          {
            path: '/goods3',
            name: 'goods3',
            component: () => import('../views/backstage/goods3')
          },
          {
            path: '/goods4',
            name: 'goods4',
            component: () => import('../views/backstage/goods4')
          },
          {
            path: '/goods5',
            name: 'goods5',
            component: () => import('../views/backstage/goods5')
          },
        ]
      },
      // 订单页
      {
        path: '/ding',
        name: 'ding',
        component: () => import('../views/backstage/ding'),
        children:[
          {
            path: '/ding1',
            name: 'ding1',
            component: () => import('../views/backstage/ding1')
          },
          {
            path: '/ding2',
            name: 'ding2',
            component: () => import('../views/backstage/ding2')
          },
          {
            path: '/ding3',
            name: 'ding3',
            component: () => import('../views/backstage/ding3')
          },
        ]
      },
      // 会员页面
      {
        path: '/hui',
        name: 'hui',
        component: () => import('../views/backstage/hui'),
        children:[
          {
            path: '/hui1',
            name: 'hui1',
            component: () => import('../views/backstage/hui1')
          },
          {
            path: '/hui2',
            name: 'hui2',
            component: () => import('../views/backstage/hui2')
          },
        ]
      },
      //  设置页面
      {
        path: '/she',
        name: 'she',
        component: () => import('../views/backstage/she'),
        children:[
          {
            path: '/she1',
            name: 'she1',
            component: () => import('../views/backstage/she1')
          },
          {
            path: '/she2',
            name: 'she2',
            component: () => import('../views/backstage/she2')
          },
          {
            path: '/she3',
            name: 'she3',
            component: () => import('../views/backstage/she3')
          },
          {
            path: '/she4',
            name: 'she4',
            component: () => import('../views/backstage/she4')
          },
        ]
      },
    ]

  },
  // 登录页面
  {
    path: '/login',
    name: 'home',
    component: () => import('../views/backstage/login')
  },


]

const router = new VueRouter({
  routes
})

export default router