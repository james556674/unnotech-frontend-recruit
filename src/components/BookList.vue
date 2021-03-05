<template>
  <div class="main-container">
    <!-- book list -->
    <div class="book-list">
      <div class="book-card" v-for="book in books" :key="book.id">
        <img :src="book.image" />
        <div class="book-name">{{ book.name }}</div>
      </div>
    </div>
  </div>
</template>

<script>
const dummyData = [
  {
    id: 1,
    name: "Flutter/Dart 跨平台 App 開發實務入門",
    image:
      "https://cf-assets2.tenlong.com.tw/products/images/000/157/608/medium/ACL060200.jpg?1613558091",
  },
  {
    id: 2,
    name: "邊玩邊學，使用 Scratch 學習 AI程式設計",
    image:
      "https://cf-assets2.tenlong.com.tw/products/images/000/157/419/medium/A668.jpg?1612750201",
  },
  {
    id: 3,
    name: "駭客廝殺不講武德：CTF 強者攻防大戰直擊",
    image:
      "https://cf-assets2.tenlong.com.tw/products/images/000/157/348/medium/DM2110_3D-750x933-wide.jpg?1612439588",
  },
  {
    id: 4,
    name: "Storytelling in Design｜在設計中說故事",
    image:
      "https://cf-assets2.tenlong.com.tw/products/images/000/157/293/webp/A584.webp?1612253877",
  },
  {
    id: 5,
    name: "精實AI｜新創企業如何運用人工智慧獲得成長 (Lean AI)",
    image:
      "https://cf-assets2.tenlong.com.tw/products/images/000/156/970/medium/A655.jpg?1611826382",
  },
  {
    id: 6,
    name: "重新認識 Vue.js：008天絕對看不完的 Vue.js 3 指南",
    image:
      "https://cf-assets2.tenlong.com.tw/products/images/000/156/918/medium/MP22026.jpg?1611727745",
  },
];
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
    fetchData() {
      this.books = dummyData;
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
  color: #101935;
  border: #101935 solid 1px;
  background: #fff;
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