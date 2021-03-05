import Vue from 'vue'
import VueRouter from 'vue-router'
import NotFound from '../views/NotFound.vue'
import BookList from '../views/BooksList.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/books',
    name: 'book-list-page',
    component: BookList
  },

  {
    path: '*',
    name: 'not-found',
    component: NotFound,
  }
]

const router = new VueRouter({
  routes
})

export default router
