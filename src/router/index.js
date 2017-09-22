import Vue from 'vue'
import Router from 'vue-router'
import Index from 'components/index/index'
import Company from 'components/company/company'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/company',
      name: 'Company',
      component: Company
    }
  ]
})
