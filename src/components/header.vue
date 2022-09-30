<script setup>
    import Weather from '@/components/weather.vue';
    import DateBlock from '@/components/dateBlock.vue';
    import WeatherSkeleton from '@/components/weatherSkeleton.vue'
    import { useStore } from 'vuex'
    
    const store = useStore()
</script>

<template>
    <div class="header">
        <DateBlock/>
        <h1 class="title">NEWSPAPER</h1>
        <WeatherSkeleton v-if="store.getters.weatherLoading" />
        <Weather v-else/>
    </div>
</template>

<style lang="scss">
    @import "@/assets/variables.scss";
    @import "@/assets/mixins.scss";

    .header {
        color: $default-color;
        flex: 0 0 auto;
        margin: 0 auto;
        min-width: 90%;
        display: flex;
        justify-content: space-between;
        -webkit-touch-callout: none;
        -webkit-user-select: none;
        -khtml-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;

        .title {
            width: fit-content;
            font-family: $super-title;
            font-size: 6rem;
            position: relative;
            
            &::after {
                @include backLine;
            }
        }
    }
</style>