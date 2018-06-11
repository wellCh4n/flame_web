import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/pages/Index'
import Login from '@/pages/Login'
import Article from '@/pages/Article'
import AdminIndex from '@/pages/admin/Index'
import EditArticle from '@/pages/admin/EditArticle'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/user/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/article/:id',
      name: 'Article',
      component: Article
    },
    {
      path: '/admin/',
      name: 'AdminIndex',
      component: AdminIndex
    },
    {
      path: '/admin/article/edit/:id',
      name: 'EditArticle',
      component: EditArticle
    }
  ]
})
