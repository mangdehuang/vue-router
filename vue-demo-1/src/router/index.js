import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/pages/index.vue'
import pButton from '@/pages/pageButton.vue'
import pLIst from '@/pages/pageList.vue'
import pNav from '@/pages/pageNav.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path:'/button',
      name:'button',
      component:pButton
    },
    {
      path:'/list',
      name:'list',
      component:pLIst
    },
    {
      path:'/nav',
      name:'nav',
      component:pNav
    }
  ]
})
