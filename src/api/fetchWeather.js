import axios from 'axios'

const key = process.env.VUE_APP_WEATHER_API_KEY
const baseURL = `http://api.openweathermap.org/data/2.5/weather?q=${this.citySearch}&appid=${key}&units=metric`

// export