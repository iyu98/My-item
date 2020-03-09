import Vue from 'vue'
import VueRouter from 'vue-router'
import Movie from 'components/Movie'
import Reying from 'components/Reying'
import Coming from 'components/Coming'
import Cinema from 'components/Cinema'
import Detail from 'components/Detail'
import Information from 'components/Information'
import My from 'components/My'
import Login from 'components/Login'

Vue.use(VueRouter)

const routes = [
  {
    path: '/movie',
    component: Movie,
    redirect: '/movie/coming', // 默认选中子路由:解决点击主路由的时候子路由不被选中.
    children: [
      {
        path: '/movie/reying',
        name: 'reying',
        component: Reying
      },
      {
        path: '/movie/coming',
        name: 'coming',
        component: Coming
      },
      {
        path: ':movieid',
        component: Detail
      }
    ]
  },
  {
    path: '/cinema',
    component: Cinema
  },
  {
    path: '/information',
    component: Information
  },
  {
    path: '/my',
    component: My,
    children: [
      {
        path: 'login',
        name: 'login',
        component: Login
      }
    ]
  },
  {
    path: '/',
    redirect: '/movie/reying'
  }
]

const router = new VueRouter({
  routes
})

export default router
