import { theme } from "@/theme";
import { StatusBar } from "expo-status-bar";
import {
  Text,
  View,
  Image,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  FlatList,
  ScrollView,
} from "react-native";
import { EvilIcons } from "@expo/vector-icons";
import { useCallback, useState } from "react";
import SearchInput from "@/components/SearchInput";
import DailyForecast from "@/components/DailyForecast";
import { debounce } from "lodash"
import { getLocations } from "@/api/weather";

export default function Index() {
  const [showSearch, setShowSearch] = useState(true);
  const [locations, setLocations] = useState([1, 2, 3]);

  function toggleSearch() {
    setShowSearch(!showSearch);
  }

  function handleSearchInput(value) {
    /* getLocations({
      city: 'Ananindeua',
      day: ''
    }) */

    console.log(value)

  }

  const handleTextDebounce = useCallback(debounce(handleSearchInput, 1200), [])

  function handleLocation(item: number) {
    console.log(item);
  }

  return (
    <View className="flex-1 relative ">
      <StatusBar style="light" />
      <Image
        className="absolute w-full h-full"
        blurRadius={70}
        source={require("../assets/images/bg.png")}
      />
      <SafeAreaView className="flex flex-1">
        <View style={{ height: "7%" }} className="mx-4 relative z-50">
          <SearchInput
            showSearch={showSearch}
            toggleSearch={toggleSearch}
            handleSearchInput={handleTextDebounce}
          />
          {/* locations */}
          {locations.length > 0 && showSearch && (
            <View className="absolute w-full bg-gray-300 top-16 rounded-3xl ">
              <FlatList
                data={locations}
                renderItem={({ item, index }) => {
                  const showBorder = index + 1 != locations.length;
                  const borderClass =
                    showBorder && "border-b-2 border-b-gray-400";
                  return (
                    <TouchableOpacity
                      onPress={() => handleLocation(item)}
                      key={index}
                      className={`flex-row items-center border-0 p-3 px-4 mb-1 ${borderClass}`}
                    >
                      <EvilIcons name="location" size={20} color="black" />

                      <Text className="text-black text-lg ml-2">
                        Ananindeua, PA
                      </Text>
                    </TouchableOpacity>
                  );
                }}
              />
            </View>
          )}
        </View>

        {/* forecast */}
        <View className="mx-4 justify-around flex-1 mb-2">
          <Text className="text-white text-center font-bold text-2xl">
            Ananindeua,
            <Text className="text-lg font-semibold text-gray-300 pl-2">
              Pará
            </Text>
          </Text>
          <View className="flex-row justify-center">
            <Image
              source={require("../assets/images/partlycloudy.png")}
              className="w-52 h-52"
            />
          </View>
          <View className="space-y-2 items-center">
            <Text className="font-bold text-6xl text-white ml-5">35&#176;</Text>
            <Text className="text-xl text-white tracking-widest">
              Parcialmente nublado
            </Text>
          </View>
          <View className="flex-row justify-between mx-4">
            <View className="flex-row space-x-2 intems-center">
              <Image
                source={require("../assets/icons/wind.png")}
                className="w-6 h-6"
              />
              <Text className="text-white font-semibold text-base">22km</Text>
            </View>
            <View className="flex-row space-x-2 items-center">
              <Image
                source={require("../assets/icons/drop.png")}
                className="w-6 h-6"
              />
              <Text className="text-white font-semibold text-base">23%</Text>
            </View>
            <View className="flex-row space-x-2 items-center">
              <Image
                source={require("../assets/icons/sun.png")}
                className="w-6 h-6"
              />
              <Text className="text-white font-semibold text-base">
                6:05 AM
              </Text>
            </View>
          </View>
        </View>

        {/* dias da semana */}
        <View className="mb-2 space-y-3">
          <View className="flex-row items-cnter mx-5 space-x-2">
            <EvilIcons name="calendar" size={30} color="white" />
            <Text className="text-base text-white">Previsão do tempo</Text>
          </View>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{ paddingHorizontal: 15, gap: 15 }}
          >
            <DailyForecast
              day="segunda"
              img={require("../assets/images/heavyrain.png")}
            />
            <DailyForecast
              day="terça"
              img={require("../assets/images/heavyrain.png")}
            />
            <DailyForecast
              day="quarta"
              img={require("../assets/images/heavyrain.png")}
            />
            <DailyForecast
              day="quinta"
              img={require("../assets/images/heavyrain.png")}
            />
            <DailyForecast
              day="sexta"
              img={require("../assets/images/heavyrain.png")}
            />
          </ScrollView>
        </View>
      </SafeAreaView>
    </View>
  );
}
