import WeatherData from "@/interfaces/WeatherData";
import getTimeFromDate from "@/utils/getTimeFromDate";
import { View } from "react-native";
import ForecastDetail from "./ForecastDetail";

type ForecastDetails = {
  locationForecast: WeatherData;
};

export default function ForecastDetails({ locationForecast }: ForecastDetails) {
  return (
    <View className="flex-row justify-between mx-4">
      <ForecastDetail
        detail={locationForecast.current?.wind_kph + "km"}
        img={require("../assets/icons/wind.png")}
      />

      <ForecastDetail
        detail={locationForecast.current.humidity + "%"}
        img={require("../assets/icons/drop.png")}
      />

      <ForecastDetail
        detail={getTimeFromDate(locationForecast.location.localtime).day + "%"}
        img={require("../assets/icons/sun.png")}
      />
    </View>
  );
}
