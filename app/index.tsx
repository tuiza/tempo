import { StatusBar } from "expo-status-bar";
import {
  Text,
  View,
  Image,
  SafeAreaView,
  TouchableOpacity,
  FlatList,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { EvilIcons } from "@expo/vector-icons";
import { useCallback, useState } from "react";
import SearchInput from "@/components/SearchInput";
import DailyForecast from "@/components/DailyForecast";
import { debounce } from "lodash";
import { getLocations, ILocation, getForecast } from "@/api/weather";
import WeatherData from "@/interfaces/WeatherData";
import { weatherImages } from "@/constants/weatherImages";
import getTimeFromDate from "@/utils/getTimeFromDate";
import ForecastDetails from "@/components/ForecastDetails";

export default function Index() {
  const [showSearch, setShowSearch] = useState(true);
  const [locations, setLocations] = useState<ILocation[]>([]);
  const [locationForecast, setLocationForecast] = useState<WeatherData>();

  function toggleSearch() {
    setShowSearch(!showSearch);
  }

  async function handleSearchInput(city: string) {
    if (city.length > 2) {
      const locations = await getLocations(city);
      setLocations(locations);
    } else {
      setLocations([]);
    }
  }

  const handleTextDebounce = useCallback(debounce(handleSearchInput, 1200), []);

  async function handleLocation(location: ILocation) {
    const locationForecast = await getForecast({
      city: location.name,
      day: 7,
    });
    setLocationForecast(locationForecast);
    setShowSearch(!showSearch);
  }

  return (
    <KeyboardAvoidingView
      className="flex-1"
      behavior="height"
      //keyboardVerticalOffset={Platform.select({ ios: 0, android: 20 })}
    >
      <StatusBar style="light" />
      <Image
        className="absolute w-full h-full"
        blurRadius={70}
        source={require("../assets/images/bg.png")}
      />
      <SafeAreaView className="flex flex-1 mt-12">
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
                  // componente
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

                      <Text
                        className="text-black text-lg ml-2"
                        numberOfLines={1}
                      >
                        {item.name}, {item.country}
                      </Text>
                    </TouchableOpacity>
                  );
                }}
              />
            </View>
          )}
        </View>

        {/* forecast */}
        {locationForecast && (
          <>
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
                      locationForecast.current?.condition?.text
                        .toLowerCase()
                        .trimEnd()
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

            <View className="mb-8 space-y-3">
              <View className="flex-row items-cnter mx-5 space-x-2">
                <EvilIcons name="calendar" size={30} color="white" />
                <Text className="text-base text-white">Daily Forecast</Text>
              </View>
              <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={{ paddingHorizontal: 15, gap: 15 }}
              >
                {locationForecast.forecast?.forecastday?.map((item, index) => {
                  const { day, date } = item;
                  return (
                    <DailyForecast
                      key={index.toString()}
                      day={getTimeFromDate(date).dayName}
                      img={
                        weatherImages[
                          day.condition.text.toLowerCase().trimEnd()
                        ]
                      }
                      temp={day.avgtemp_c}
                    />
                  );
                })}
              </ScrollView>
            </View>
          </>
        )}
      </SafeAreaView>
    </KeyboardAvoidingView>
  );
}
