<template>
  <div class="main-container">
    <h2>Book Detail</h2>
    <BookList />
    <div>
      <form class="book-detail-wrapper">
        <div class="book-detail">
          <div class="form-group">
            <label for="quantity">價格 :</label>
            <button v-on:click.stop.prevent="plusPrice()">+</button>
            <input
              v-model="bookDetail.price"
              type="number"
              id="price"
              name="price"
              min="0"
            />
            <button v-on:click.stop.prevent="minusPrice()">-</button>
          </div>
          <div class="form-group">
            <label for="quantity">數量 :</label>
            <button v-on:click.stop.prevent="plusCount()">+</button>
            <input
              v-model="bookDetail.count"
              type="number"
              id="count"
              name="count"
              min="0"
            />
            <button v-on:click.stop.prevent="minusCount()">-</button>
          </div>
        </div>
        <button type="submit" class="form-submit">確認修改</button>
      </form>
    </div>
  </div>
</template>

<script>
import BookList from "../components/BookList.vue";
import booksAPI from "./../apis/books.js";
import { Toast } from "./../utils/helpers";

export default {
  components: {
    BookList,
  },
  data() {
    return {
      bookDetail: {},
    };
  },

  created() {
    const { id } = this.$route.params;
    this.fetchBookDetailData(id);
  },
  beforeRouteUpdate(to, from, next) {
    // 路由改變時重新抓取資料
    const { id } = to.params;
    this.fetchBookDetailData(id);
    next();
  },

  methods: {
    // connect api to get book detail
    async fetchBookDetailData(bookId) {
      try {
        const response = await booksAPI.getBookDetail({ bookId });
        this.bookDetail = response.data;
      } catch (error) {
        Toast.fire({
          icon: "error",
          title: "無法取得資料，請稍後再試",
        });
      }
    },
    plusCount() {
      this.bookDetail.count++;
    },
    minusCount() {
      this.bookDetail.count--;
    },
    plusPrice() {
      this.bookDetail.price++;
    },
    minusPrice() {
      this.bookDetail.price--;
    },
  },
};
</script>

<style scoped>
.book-detail-wrapper {
  margin: auto;
  margin-top: 1rem;
  max-width: 800px;
  height: 100px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  -webkit-box-shadow: 0px 2px 10px 0px rgba(0, 0, 0, 0.08);
  -moz-box-shadow: 0px 2px 10px 0px rgba(0, 0, 0, 0.08);
  box-shadow: 0px 2px 10px 0px rgba(0, 0, 0, 0.08);
}

.book-detail-wrapper .book-detail {
  height: 100px;
}

.book-detail-wrapper .book-detail .form-group {
  margin: 0.5rem;
}

.book-detail-wrapper .book-detail .form-group input {
  width: 20%;
  -moz-appearance: textfield;
}

.book-detail-wrapper .book-detail .form-group button {
  margin: 0 1rem 0 1rem;
  cursor: pointer;
}

.book-detail-wrapper .form-submit {
  padding: 0.3rem 0.8rem 0.3rem 0.8rem;
  white-space: nowrap;
  font-size: 0.8rem;
  border: 2px solid #dcdcdc;
  border-radius: 5px;
  margin-top: 0.5rem;
  background: none;
  cursor: pointer;
}
.book-detail-wrapper .form-submit:hover {
  border-radius: 30px;
  transition: all 0.3s ease 0s;
}

@media screen and (min-width: 768px) {
  .book-detail-wrapper {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-end;
  }

  .book-detail-wrapper .form-submit {
    padding: 0.5rem 1rem 0.5rem 1rem;
    font-size: 0.9rem;
  }
}
</style>