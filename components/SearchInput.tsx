import { theme } from "@/theme";
import { EvilIcons } from "@expo/vector-icons";
import { TextInput, TouchableOpacity, View } from "react-native";

type SearchInputProps = {
  showSearch: boolean;
  toggleSearch: () => void;
};

export default function SearchInput({
  showSearch,
  toggleSearch,
}: SearchInputProps) {
  return (
  
      <View
        className="flex-row justify-end items-center rounded-full"
        style={{
          backgroundColor: showSearch ? theme.bgWhite(0.2) : "transparent",
        }}
      >
        {showSearch && (
        <TextInput
            onChangeText={()=> {}}
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
          <EvilIcons name="search" size={20} color="white" />
        </TouchableOpacity>
      </View>
  );
}
