<script setup>
import { useStore } from 'vuex';

const store = useStore()
</script>

<template>
    <div id="content-block" 
      v-for="day in store.getters.sortedArticles"
      :key="day[1][0].postId"
    >   
        <div class="date">
            {{ day[0] }}
        </div>
        <div class="posts">
            <div class="main-posts">
                <RouterLink
                    :to="{ name: 'Post', params: { id: article.id, atcl: JSON.stringify(article) }}"
                    class="post"
                    :class="{'main-post': day[1].indexOf(article) === 1}"
                    v-for="article in day[1]" 
                    key="article.id"
                >
                    <h2>{{ article.name }}</h2>
                    <h4>{{ article.email }}</h4>
                    <h3>{{ article.body }}</h3>
                </RouterLink>
            </div>
        
            <div class="other-posts">
                <div class="news-column">
                    <RouterLink 
                        :to="{ name: 'Post', params: { id: article.id, atcl: JSON.stringify(article) }}"
                        class='post'
                        v-for="article in day[2]" 
                        key="article.id"
                    >
                        <h2>{{ article.name }}</h2>
                        <h4>{{ article.email }}</h4>
                    </RouterLink>
                </div>
                <div class="news-column">
                    <RouterLink 
                        :to="{ name: 'Post', params: { id: article.id, atcl: JSON.stringify(article) }}"
                        class='post'
                        v-for="article in day[3]" 
                        key="article.id"
                    >
                        <h2>{{ article.name }}</h2>
                        <h4>{{ article.email }}</h4>
                    </RouterLink>
                </div>
                <div class="news-column">
                    <RouterLink 
                        :to="{ name: 'Post', params: { id: article.id, atcl: JSON.stringify(article) }}"
                        class='post'
                        v-for="article in day[4]" 
                        key="article.id"
                    >
                        <h2>{{ article.name }}</h2>
                        <h4>{{ article.email }}</h4>
                    </RouterLink>
                </div>
                <div class="news-column">
                    <RouterLink 
                        :to="{ name: 'Post', params: { id: article.id, atcl: JSON.stringify(article) }}"
                        class='post'
                        v-for="article in day[5]"
                        key="article.id"
                    >
                        <h2>{{ article.name }}</h2>
                        <h4>{{ article.email }}</h4>
                    </RouterLink>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
    @import "@/assets/variables.scss";

    .post {
        display: block;
        padding: 1rem;
        position: relative;
        color: $default-color;

        h2 {
            font-size: $size-post-title;
        }
        h4 {
            font-family: $caption-font;
            font-size: $size-post-caption;

        }
        h3 {
            font-size: $size-post-text;
        }
        &:active {
            color: $signature-color;
        }
    }

    #content-block {
        font-family: $main-font;
        color: $default-color;

        .date {
            width: fit-content;
            margin: .8rem auto;
            font-size: 1rem;
            position: relative;
        }
        .main-posts {
            display: grid;
            grid-template-columns: 1fr 1.5fr 1fr;

            .main-post {
                grid-column-start: 2;
                grid-row-start: 1;
                grid-row-end: 3;

                h2 {
                    font-size: $size-post-title * 2;
                }
                h4 {
                    font-family: $caption-font;
                    font-size: $size-post-caption * 2;
                }
                h3 {
                    font-size: 2rem;
                }
            }
        }
        .other-posts {
            display: flex;
            
            .news-column {
                display: inline-block;
                width: 25%;
                position: relative;
                top: 0;
            }
        }

    }
</style>