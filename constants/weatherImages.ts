import { ImageSourcePropType } from "react-native";

export const weatherImages: { [key: string]: ImageSourcePropType } = {
  "partly cloudy": require("../assets/images/partlycloudy.png"),
  "moderate rain": require("../assets/images/moderaterain.png"),
  "patchy rain nearby": require("../assets/images/moderaterain.png"),
  sunny: require("../assets/images/sun.png"),
  clear: require("../assets/images/sun.png"),
  overcast: require("../assets/images/cloud.png"),
  cloudy: require("../assets/images/cloud.png"),
  "light drizzle": require("../assets/images/moderaterain.png"),
  "moderate rain at times": require("../assets/images/moderaterain.png"),
  "heavy rain": require("../assets/images/heavyrain.png"),
  "heavy rain at times": require("../assets/images/heavyrain.png"),
  "moderate or heavy freezing rain": require("../assets/images/heavyrain.png"),
  "moderate or heavy rain shower": require("../assets/images/heavyrain.png"),
  "moderate or heavy rain with thunder": require("../assets/images/moderaterain.png"),
  other: require("../assets/images/moderaterain.png"),
};
