<script setup>
    import { onMounted, watch, computed } from 'vue';
    import { useStore } from 'vuex'

    const store = useStore()
    const latitude = computed(() => {
        return store.getters.latitude
    })
    const longitude = computed(() => {
        return store.getters.longitude
    })

    watch([latitude, longitude], () => store.dispatch('getWeather'))

    onMounted(function() {
        store.commit('checkGeo')
    })
</script>

<template>
    <div class="weather"></div>
</template>

<style lang="scss" scoped>
    @import "@/assets/variables.scss";
    @import "@/assets/animations.scss";
    
    .weather {
        margin: auto 0;
        display: flex;
        width: 5.5rem;
        height: 3.5rem;
        border-radius: 15%;
        transition: all 1s ease-out;
        animation: loadscreen 1.5s linear infinite normal;
    }
</style>