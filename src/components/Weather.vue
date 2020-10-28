<template>
  <div>
    <input
      type="text"
      class="search"
      placeholder="What city?"
      v-model="value"
      @keyup.enter="setQuery"
    >
    <div class="city" v-if="weather.name">
      <h2 class="city-name">
        <span>{{ weather.name }}</span>
        <sup>{{ weather.sys.country }}</sup>
      </h2>
      <div class="city-temp">
        {{ Math.round(weather.main.temp) }}
        <sup>&deg;C</sup>
      </div>
      <div className="info">
        <img className="city-icon" :src="`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`" :alt="weather.weather[0].description" />
        <p>{{weather.weather[0].description}}</p>
      </div>
    </div>
  </div>
</template>

<script>
import { fetchWeather } from '@/api/fetchWeather.js'
import '@/App.css'

export default {
  name: 'HelloWorld',
  data () {
    return {
      value: '',
      // query: '',
      weather: {}
    }
  },
  methods: {
    async setQuery () {
      const query = await fetchWeather(this.value)
      // this.query = await fetchWeather(this.value)
      this.weather = query
      console.log(this.weather)
    }
  }
}
</script>

<style scoped>
</style>
