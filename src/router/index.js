import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import Post from '@/views/Post.vue';
import notFound from '@/views/notFound.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: HomeView,
    },
    {
      path: '/post/:id',
      name: 'Post',
      component: Post,
      props: true
    },
    { 
      path: '/:pathMatch(.*)*', 
      name: 'notFound', 
      component: notFound 
    },
  ]
})

export default router
