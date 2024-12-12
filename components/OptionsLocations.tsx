import { FlatList, TouchableOpacity, View, Text } from "react-native";
import { ILocation } from "@/api/weather";
import { EvilIcons } from "@expo/vector-icons";

type OptionsLocationsProps = {
  locations: ILocation[];
  handleLocation: (item: ILocation) => void;
};

export default function OptionsLocations({
  locations,
  handleLocation,
}: OptionsLocationsProps) {
  function renderItem(item: ILocation, index: number) {
    const showBorder = index + 1 != locations.length;
    const borderClass = showBorder && "border-b-2 border-b-gray-400";
    return (
      <TouchableOpacity
        onPress={() => handleLocation(item)}
        key={index}
        className={`flex-row items-center border-0 p-3 px-4 mb-1 ${borderClass}`}
      >
        <EvilIcons name="location" size={20} color="black" />

        <Text className="text-black text-lg ml-2" numberOfLines={1}>
          {item.name}, {item.country}
        </Text>
      </TouchableOpacity>
    );
  }

  return (
    <View className="absolute w-full bg-gray-300 top-16 rounded-3xl ">
      <FlatList
        data={locations}
        renderItem={({ item, index }) => renderItem(item, index)}
      />
    </View>
  );
}
