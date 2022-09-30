<script setup>
  import { computed } from 'vue'
  import { useStore } from 'vuex'

  const store = useStore()
  const props = defineProps(['searchData'])

  const searchedArticles = computed(() => {
    return store.getters.listOfArticles.filter(post => post.name.includes(props.searchData))
  })
</script>

<template>
  <div class="searched-posts">
    <RouterLink 
      :to="{ name: 'Post', params: { id: article.id, atcl: JSON.stringify(article) }}"
      class="post"
      v-for="article in searchedArticles"
      :key="article.id"
    >
      <p>{{ article.email }}</p>
      <h2>{{ article.name }}</h2>
    </RouterLink>
  </div>
</template>

<style lang="scss" scoped>
  @import "@/assets/variables.scss";

  .searched-posts {
    font-family: $main-font;
    color: $default-color;
    width: 70%;
    margin: 0 auto;
    
    .post {
      display: block;
      margin: 1rem auto;
      width: fit-content;

      h2 {
        font-size: $size-post-title;
        text-align: right;
      }
      p {
        font-family: $caption-font;
        font-size: $size-post-caption;
        text-align: right;
        margin-bottom: .3rem;
      }
      &:active {
        color: $signature-color;
      }
    }
  }
</style>