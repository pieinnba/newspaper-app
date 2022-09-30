<script setup>
  import { useStore } from 'vuex'

  const store = useStore()
</script>

<template>
  <div class="weather">
    <div class="weather-icon"><img :src="store.getters.weather.icon" alt=""/></div>
    <div class="weather-info">
      <div class="weather-city">{{ store.getters.weather.city }}</div>
      <div class="weather-temp">
        <div class="weather-temp-sub">
          <div>{{ store.getters.weather.maxTemp }}</div>
          <div>{{ store.getters.weather.minTemp }}</div>
        </div>
        <div class="weather-temp-main">{{ store.getters.weather.temp }}&#176;</div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  @import "@/assets/variables.scss";

  .weather {
    display: flex;
    font-family: $main-font;
    color: $default-color;

    .weather-icon {
      height: fit-content;
      margin: auto 0;
    }
    .weather-info {
      height: fit-content;
      margin: auto 0;

      .weather-temp {
        display: flex;

        .weather-temp-main {
          font-size: 2rem;
          margin: auto 0;
        }
        .weather-temp-sub {
          font-size: .7rem;
          height: fit-content;
          margin: auto 0;
        }
      }
    }
  }
</style>