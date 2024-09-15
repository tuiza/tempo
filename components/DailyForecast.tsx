import { theme } from "@/theme";
import { View, Image, Text, ImageSourcePropType } from "react-native";

type DailyForecastProps = {
  day: string;
  img: ImageSourcePropType;
  temp: number;
};

export default function DailyForecast({ img, day, temp }: DailyForecastProps) {
  return (
    <View
      className="flex justify-center items-center w-24 rounded-3xl py-3 space-y-3"
      style={{ backgroundColor: theme.bgWhite(0.15) }}
    >
      <Image source={img} className="h-11 w-11" />
      <Text className="text-white text--uppercase">{day}</Text>
      <Text className="text-white text-xl font-semibold">{temp}&#176;</Text>
    </View>
  );
}
