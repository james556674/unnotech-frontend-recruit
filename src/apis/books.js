// ./src/apis/restaurants.js
import { apiHelper } from './../utils/helpers.js'

export default {
  getBooks() {
    return apiHelper.get(`/books`)
  },
  getBookDetail({ bookId }) {
    return apiHelper.get(`/profile/${bookId}`)
  },
  editBookDetail({ bookId, formData, }) {
    return apiHelper.patch(`/profile/${bookId}`, formData, {
      headers: {
        'Content-Type': 'application/json'
      }
    })
  }
}