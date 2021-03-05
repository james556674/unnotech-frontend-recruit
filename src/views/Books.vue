<template>
  <div class="main-container">
    <h2>Book List</h2>

    <!-- book list -->
    <BookList />
  </div>
</template>

<script>
import BookList from "../components/BookList.vue";

export default {
  components: {
    BookList,
  },
};
</script>


