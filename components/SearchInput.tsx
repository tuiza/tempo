import { theme } from "@/theme";
import { EvilIcons } from "@expo/vector-icons";
import { TextInput, TouchableOpacity, View } from "react-native";
import * as Progress from "react-native-progress";

type SearchInputProps = {
  showSearch: boolean;
  toggleSearch: () => void;
  handleSearchInput: () => void;
  loading: boolean;
};

export default function SearchInput({
  showSearch,
  toggleSearch,
  handleSearchInput,
  loading,
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
          onChangeText={handleSearchInput}
          placeholder="Pesquise a cidade"
          placeholderTextColor={"lightgray"}
          className="pl-6 h-11 pb-1 flex-1 text-base text-white"
          numberOfLines={1}
        />
      )}

      <TouchableOpacity
        style={{ backgroundColor: theme.bgWhite(0.3) }}
        className="rounded-full  p-2 m-1"
        onPress={() => toggleSearch()}
      >
        {loading ? (
          <Progress.CircleSnail thickness={2} size={24} color={"white"} />
        ) : (
          <EvilIcons name="search" size={32} color="white" />
        )}
      </TouchableOpacity>
    </View>
  );
}
