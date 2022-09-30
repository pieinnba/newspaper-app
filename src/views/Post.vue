<script setup>
  import { onMounted, ref } from 'vue'
  import { useRoute } from 'vue-router'
  import { useStore } from 'vuex';
  import { ButtonTwitter } from 'share-button-links/components/buttons'
  import Header from '@/components/header.vue';
  import Footer from '@/components/footer.vue';

  const route = useRoute()
  const store = useStore()
  const props = defineProps(['id', 'atcl'])
  const content = ref({})
  const link = ref(window.location.href)

  async function loadPage() {
    if(props.atcl == undefined) {
      content.value = await store.dispatch('fetchArticle', { id: route.params.id })
    } else {
      content.value = JSON.parse(props.atcl)
    }
  }

  onMounted(
    () => loadPage()
  )
  
</script>

<template>
  <Header/>

  <div class="single-post">
    <RouterLink
      class="back-button"
      to="/"
    >
      <img src="@/icons/back-arrow.svg" alt="">
    </RouterLink>
    <div class="single-post-content">
      <h2>
        {{ content.name }}
      </h2>
      <h3>
        {{ content.email }}
      </h3>
      <p>
        {{ content.body }}
      </p>
      <div class="share-block">
        <ButtonTwitter
          class="twitter-share"
          :title="content.name"
          text="tweet"
          :url="link"
          isRounded
          hasIcon
        />
      </div>
    </div>
  </div>
  <Footer/>
</template>

<style lang="scss" scoped>
  @import "@/assets/variables.scss";

  .single-post {
    max-width: 90%;
    margin: 1rem auto 0 auto;
    flex: 1 0 auto;
    display: flex;

    .single-post-content {
      position: relative;
      font-family: $main-font;
      color: $default-color;
      margin: 0 1rem;

      h2 {
        font-size: $size-post-title * 2;
        text-align: center;
      }
      h3 {
        font-family: $caption-font;
        font-size: $size-post-caption * 2;
        text-align: right;
      }
      p {
        font-size: $size-post-text * 2;
        text-align: justify;
        margin: .5rem 0;
      }
      .share-block {
        text-align: right;
        .twitter-share:active {
          color: $signature-color;
        }
      }    
    } 
  }
  .back-button {
    height: fit-content;
    width: 5%;
    padding: .2rem;
    
    &:active {
      background-color: $signature-color;
    }
  }

</style>