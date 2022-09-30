const weatherData = {
    state () {
      return {
        weather: {},
        latitude: '0',
        longitude: '0',
        weatherLoading: true
      }
    },
    getters: {
      latitude(state) {
        return state.latitude
      },
      longitude(state) {
        return state.longitude
      },
      weather(state) {
        return state.weather
      },
      weatherLoading(state) {
        return state.weatherLoading
      },
    },
    mutations: {
      checkGeo(state) {
        navigator.geolocation.getCurrentPosition(
          //success
          (pos) => {
            state.latitude = pos.coords.latitude.toFixed(2)
            state.longitude = pos.coords.longitude.toFixed(2)
          }, 
          // error
          () => {
            state.latitude = 49.38
            state.longitude = 31.05
          }
        )
      },
    },
    actions: {
      async getWeather({ state }) {
        state.weatherLoading = true
        let response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${state.latitude}&lon=${state.longitude}&units=metric&appid=0969c82420c938ebb0f677043fa1f967`)
        let data = await response.json()
        state.weather = {
          city: data.name,
          temp: Math.round(data.main.temp),
          minTemp: Math.round(data.main.temp_min),
          maxTemp: Math.round(data.main.temp_max),
          icon: `http://openweathermap.org/img/wn/${data.weather[0].icon}.png`
        }
        state.weatherLoading = false
      },
    }
  }

  export default weatherData