import axios from 'axios'

// const URL = 'https://api.openweathermap.org/data/2.5/weather'

export const fetchWeather = async (query) => {
  const key = process.env.VUE_APP_WEATHER_API_KEY
  const baseURL = `http://api.openweathermap.org/data/2.5/weather?q=${this.citySearch}&appid=${key}&units=metric`
  const data = await axios.get(baseURL)
  console.log(data)
  return data
}
