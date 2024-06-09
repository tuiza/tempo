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
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { useState } from "react";

export default function Index() {
  const [showSearch, setShowSearch] = useState(true);
  const [locations, setLocations] = useState([1, 2, 3]);

  function toggleSearch() {
    setShowSearch(!showSearch);
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
        {/* pesquisa --> fazer um componente depois */}
        <View style={{ height: "7%" }} className="mx-4 relative z-50">
          <View
            className="flex-row justify-end items-center rounded-full"
            style={{
              backgroundColor: showSearch ? theme.bgWhite(0.2) : "transparent",
            }}
          >
            {showSearch && (
              <TextInput
                placeholder="Pesquise a cidade"
                placeholderTextColor={"lightgray"}
                className="pl-6 h-11 pb-1 flex-1 text-base text-white"
              />
            )}

            <TouchableOpacity
              style={{ backgroundColor: theme.bgWhite(0.3) }}
              className="rounded-full  p-2 m-1"
              onPress={() => toggleSearch()}
            >
              <AntDesign name="search1" size={20} color="white" />
            </TouchableOpacity>
          </View>

          {/* locations */}
        </View>
      </SafeAreaView>
    </View>
  );
}
