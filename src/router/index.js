import Vue from 'vue'
import Router from 'vue-router'
import Homepage from '@/components/Homepage'
import ListArticle from '@/components/ListArticle'
import Article from '@/components/Article'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Homepage',
      component: Homepage
    },
    {
      path: '/ListArticle',
      name: 'ListArticle',
      component: ListArticle
    },
    {
      path: '/Article',
      name: 'Article',
      component: Article
    }
  ]
})
