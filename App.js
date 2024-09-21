import RootNavigator from "./screens/RootNavigator";
import "./gesture-handler";
import { useFonts } from "expo-font";
import createIconSetFromIcoMoon from "@expo/vector-icons/createIconSetFromIcoMoon";
import { View, Text } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import VideoPlayer from "./components/VideoPlayer";
import HomeScreen from "./screens/HomeScreen";
import MainScreens from "./screens/MainScreens";
import { NavigationContainer } from "@react-navigation/native";

// const Icon = createIconSetFromIcoMoon(
//   require("./assets/Rank/selection.json"),
//   "IcoMoon",
//   "icomoon.ttf"
// );

export default function App() {
  const [fontsLoaded] = useFonts({
    // IcoMoon: require("./assets/Rank/icomoon.ttf"),
    tt_Bold: require("./assets/Font/tt_commons_Bold.otf"),
    tt_DemiBold: require("./assets/Font/tt_commons_demibold.otf"),
    tt_ExtraBold: require("./assets/Font/tt_commons_extrabold.otf"),
    tt_Medium: require("./assets/Font/tt_commons_medium.otf"),
    tt_regular: require("./assets/Font/tt_commons_regular.otf"),
  });

  if (!fontsLoaded) {
    return null;
  }
  // return <RootNavigator />;
  return (
    <SafeAreaProvider>
      <RootNavigator />
    </SafeAreaProvider>
  );
}
