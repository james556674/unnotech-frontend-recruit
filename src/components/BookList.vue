<template>
  <div class="main-container">
    <!-- book list -->
    <div class="book-list">
      <div class="book-card" v-for="book in books" :key="book.id">
        <router-link
          :to="{ name: 'book-detail-page', params: { id: book.id } }"
        >
          <img :src="book.image" />
          <div class="book-name">{{ book.name }}</div>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import booksAPI from "./../apis/books.js";
import { Toast } from "./../utils/helpers";

export default {
  data() {
    return {
      books: [],
    };
  },
  created() {
    this.fetchData();
  },
  methods: {
    // connect api to get books list
    async fetchData() {
      try {
        const response = await booksAPI.getBooks();
        this.books = response.data;
      } catch (error) {
        Toast.fire({
          icon: "error",
          title: "無法取得資料，請稍後再試",
        });
      }
    },
  },
};
</script>


<style scoped>
.book-list {
  margin: auto;
  max-width: 400px;
  height: 350px;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow-y: auto;
  -webkit-box-shadow: 0px 2px 10px 0px rgba(0, 0, 0, 0.08);
  -moz-box-shadow: 0px 2px 10px 0px rgba(0, 0, 0, 0.08);
  box-shadow: 0px 2px 10px 0px rgba(0, 0, 0, 0.08);
}

.book-card {
  width: 100%;
  height: auto;
  margin: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.book-card img {
  width: 200px;
  height: 200px;
  object-fit: contain;
  opacity: 70%;
  margin: 1rem;
}

.book-card .book-name {
  text-align: center;
  width: 300px;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
}

.book-card img:hover {
  opacity: 100%;
  cursor: pointer;
}

.book-card .book-name:hover {
  cursor: pointer;
  color: darkolivegreen;
  background: #fff;
}

.router-link-active {
  width: 100%;
  height: calc(100% + 30px);
  color: darkolivegreen;
  border: 2px solid darkolivegreen;
  padding-left: 0.3rem;
}

@media screen and (min-width: 768px) {
  .book-list {
    max-width: 800px;
    flex-direction: row;
    overflow-x: auto;
    overflow-y: hidden;
  }
}
</style>