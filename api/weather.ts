import { apiKey, BASE_URL } from '@/constants';
import axios from 'axios';


type ForecastParams = {
  city: string
  day: number
}


export async function getForecast(params:ForecastParams) {
  const forecastEndpoint = `${BASE_URL}forecast.json?key=${apiKey}&q=${params.city}&days=${params.day}&aqi=no&alerts=no`;

  try {
    const response = await axios.get(forecastEndpoint)
    return response.data
  } catch (error) {
    return null
  }

}

export async function getLocations(params:ForecastParams) {
  const searchEndpoint = `${BASE_URL}/search.json?key=${apiKey}&q=${params.city}`;

  try {
    const response = await axios.get(searchEndpoint)
    return response.data
  } catch (error) {
    return null
  }

}










