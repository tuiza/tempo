import { apiKey, BASE_URL } from "@/constants";
import WeatherData from "@/interfaces/WeatherData";
import axios from "axios";

type ForecastParams = {
  city: string;
  day: number;
};

export interface ILocation {
  country: string;
  id: string;
  lat: number;
  lon: number;
  name: string;
  region: string;
  url: string;
}

export async function getForecast(
  params: ForecastParams
): Promise<WeatherData | undefined> {
  const forecastEndpoint = `${BASE_URL}forecast.json?key=${apiKey}&q=${params.city}&days=${params.day}&aqi=no&alerts=no`;

  try {
    const response = await axios.get(forecastEndpoint);
    return response.data;
  } catch (error) {
    return undefined;
  }
}

export async function getLocations(city: string): Promise<ILocation[]> {
  const searchEndpoint = `${BASE_URL}/search.json?key=${apiKey}&q=${city}`;

  try {
    const response = await axios.get(searchEndpoint);
    return response.data;
  } catch (error) {
    return [];
  }
}
