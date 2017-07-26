import Vue from 'vue'
import Router from 'vue-router'
import goods from '../components/goods/goods.vue'
import rating from '../components/rating/rating.vue'
import seller from '../components/seller/seller.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/goods'
    },
    {
      path: '/rating',
      component: rating
    },
    {
      path: '/seller',
      component: seller
    },
    {
      path: '/goods',
      component: goods
    }
  ]
})
