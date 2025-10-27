import { View, Image, Text, ImageSourcePropType } from "react-native";

type ForecastDetail = {
  detail: string;
  img: ImageSourcePropType;
};

export default function ForecastDetail({ detail, img }: ForecastDetail) {
  return (
    <View className="flex-row space-x-2 intems-center">
      <Image source={img} className="w-6 h-6" />
      <Text className="text-white font-semibold text-base">{detail}</Text>
    </View>
  );
}
