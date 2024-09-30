import { View, Text, Image } from "react-native";
import { ILocation } from "@/api/weather";
import WeatherData from "@/interfaces/WeatherData";
import { weatherImages } from "@/constants/weatherImages";
import ForecastDetails from "./ForecastDetails";

type ForecastProps = {
  locationForecast: WeatherData;
};

export default function Forecast({ locationForecast }: ForecastProps) {
  return (
    <View className="mx-4 justify-around flex-1 ">
      <Text className="text-white text-center font-bold text-2xl">
        {locationForecast.location?.name},
        <Text className="text-lg font-semibold text-gray-300 ml-4">
          {" " + locationForecast.location?.region}
        </Text>
      </Text>
      <View className="flex-row justify-center">
        <Image
          source={
            weatherImages[
              locationForecast.current?.condition?.text.toLowerCase().trimEnd()
            ]
          }
          className="w-52 h-52"
        />
      </View>
      <View className="space-y-2 items-center">
        <Text className="font-bold text-6xl text-white ml-5">
          {locationForecast.current.temp_c}&#176;
        </Text>
        <Text className="text-xl text-white tracking-widest">
          {locationForecast.current?.condition.text}
        </Text>
      </View>
      <ForecastDetails locationForecast={locationForecast} />
    </View>
  );
}
