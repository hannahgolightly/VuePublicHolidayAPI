import Vue from 'vue'
import VueRouter from 'vue-router'
import SearchView from '@/views/SearchView.vue'
import ResultsView from '@/views/ResultsView.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'search-view',
    component: SearchView
  },
  {
    path: '/Country/:countryCode',
    name: 'results-view',
    component: ResultsView,
    props: true
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
