<template>
  <div class="main-container">
    <input
      type="text"
      class="search"
      placeholder="Search..."
      :value="value"
      @change="setQuery"
    >
  </div>
</template>

<script>
// import { fetchWeather } from '@/api/fetchWeather.js'
import '@/App.css'

export default {
  name: 'HelloWorld',
  data () {
    return {
      value: '',
      setQuery: ''
    }
  },
  methods: {
    setQuery () {
      
    }
  }
  // props: {
  //   msg: String
  // }
}
</script>

<style scoped>
</style>
