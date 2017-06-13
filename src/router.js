import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Article from '@/components/Article'
import Topic from '@/components/Topic'
import Topic_article from '@/components/Topic_article'
import Bonus from '@/components/Bonus'
import Login from '@/components/Login'
import Download from '@/components/Download'

Vue.use(Router)

export default new Router({
    hashbang: true,
    history: true,
    routes: [{
        path: "*",
        redirect: '/home/article'
    }, {
        path: '/home',
        name: 'home',
        component: Home,
        children:[{
            path:'article',
            name:'article',
            component: Article
        }]
    }, {
        path: '/topic',
        name: 'topic',
        component: Topic,
        children:[{
            path:'topic_article',
            name:'topic_article',
            component: Topic_article
        }]
    }, {
        path:'/bonus',
        name:'bonus',
        component:Bonus
    }, {
        path:'/login',
        name:'login',
        component:Login
    }, {
        path:'/download',
        name:'download',
        component:Download
    }]
})