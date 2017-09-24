import Vue from 'vue'
import Router from 'vue-router'
// import Hello from '@/components/Hello'
//引用页面模板->供路由使用
import index from '../pages/index.vue'
import pageDesc from '../pages/pageDesc.vue'
import pageType from '../pages/pageType.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',//不重要只是用来做识别用的
      component: index,
      //children:[{},{}]  子路由
    },
    {
      path:'/desc/:type/:id',
      name:'desc',
      component:pageDesc
    },
    {
      path: '/type/:uid',
      name: 'type',
      component: pageType
    }
  ]
})
