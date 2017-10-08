import Vue from 'vue'
import Router from 'vue-router'
import Index from 'components/index/index'
import Company from 'components/company/company'
import University from 'components/university/university'
import JobTalk from 'components/job-talk/job-talk'

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
    },
    {
      path: '/university',
      name: 'University',
      component: University
    },
    {
      path: '/job-talk',
      name: 'JobTalk',
      component: JobTalk
    }
  ]
})
