<script setup>
    import { useStore } from 'vuex'
  
    const store = useStore()
</script>
  
<template>
    <div class="load-block" v-show="store.getters.loading">
        <div class="load-block-string">loading</div>
    </div>
</template>
  
<style lang="scss" scoped>
    @import "@/assets/variables.scss";
    @import "@/assets/animations.scss";

    .load-block {
        display: flex;
        justify-content: center;
        padding: .5rem 0;

        .load-block-string {
            font-family: $main-font;
            color: $default-color;
            font-size: 2rem;
            position: relative;

            &:after {
                content: '';
                position: absolute;
                height: 100%;
                width: 100%;
                z-index: -1;
                left: 0;
                background-color: $signature-color;
                animation: running-line 1s ease-in-out infinite normal running 0s none;
            }
        }
    }
</style>