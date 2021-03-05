import Vue from 'vue'
import VueRouter from 'vue-router'
import NotFound from '../views/NotFound.vue'
import Books from '../views/Books.vue'
import BookDetail from '../views/BooksDetail.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'root',
    redirect: '/books'
  },
  {
    path: '/books',
    name: 'book-list-page',
    component: Books
  },
  {
    path: '/books/:id',
    name: 'book-detail-page',
    component: BookDetail
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
