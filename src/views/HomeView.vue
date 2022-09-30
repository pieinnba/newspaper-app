<script setup>
  import { ref, onMounted } from 'vue';
  import { useStore } from 'vuex'
  import Posts from '@/components/Posts.vue';
  import SearchedPosts from '@/components/searchedPosts.vue'
  import LoadBlock from '@/components/loadBlock.vue'
  import Header from '@/components/header.vue';
  import Footer from '@/components/footer.vue';

  const store = useStore()
  const searchData = ref('')

  onMounted(function() {
    store.dispatch('getArticles')
  })

</script>

<template>
  <Header></Header>
  <main>
    <form class="search-block">
      <input v-model="searchData" type="text" placeholder="Search">
    </form>
    <Posts
      v-if="searchData == ''"
    ></Posts>
    <SearchedPosts 
      :searchData="searchData"
      v-else
    ></SearchedPosts>
    <LoadBlock/>
  </main>
  
  <div class="bottom-edge" v-show="searchData == ''" style="height: .5rem;"></div>
  <Footer />
</template>

<style lang="scss" scoped>
  @import "@/assets/variables.scss";

  main {
    flex: 1 0 auto;
  }
  .search-block {
    display: flex;
    margin: 0 auto;
    width: 95%;
    justify-content: flex-end;
    font-family: $main-font;
    color: $default-color;
    
    input {
      padding: .3rem;
      padding-left: 1.6rem;
      background: url("@/icons/search-icon.svg") no-repeat left;
      background-size: 1.5rem;
      max-width: 6.5rem;
      transition: all .1s ease-in-out;
      font-size: 1.5rem;
      position: relative;

      &:focus {
        max-width: 16rem;
        background-color: rgb(255, 111, 15, .5);
      }
    }
  }
</style>