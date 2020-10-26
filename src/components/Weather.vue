<template>
  <div>
    <input
      type="text"
      class="search"
      placeholder="Search..."
      v-model="value"
      @keyup.enter="setQuery"
    >
    <div class="city" v-if="weather.name">
      <h2 class="city-name">
        <span>{{ weather.name }}</span>
        <sup>{{ weather.sys.country }}</sup>
      </h2>
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
  // props: {
  //   msg: String
  // }
}
</script>

<style scoped>
</style>
