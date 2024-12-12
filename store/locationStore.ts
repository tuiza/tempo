import AsyncStorage from "@react-native-async-storage/async-storage";

const storeData = async (cityName: string) => {
  try {
    await AsyncStorage.setItem("city", cityName);
  } catch (e) {
    // saving error
  }
};

const getData = async (): Promise<string | null> => {
  try {
    const value = await AsyncStorage.getItem("city");
    if (value !== null) {
      // value previously stored
    }
    return value;
  } catch (e) {
    return null;
    // error reading value
  }
};

export { storeData, getData };
