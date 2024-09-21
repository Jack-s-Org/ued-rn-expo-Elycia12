import { useState } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "@expo/vector-icons/Ionicons";
import HomeScreen from "./HomeScreen";
import NotificationsScreen from "./NotificationsScreen";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { SafeAreaView } from "react-native-safe-area-context";
import PotSize from "./PotSize";
import DiscoverScreen from "./DiscoverScreen";
import AppDrawer from "./AppDrawer";
import GardenScreen from "./MyGarden";
import AddScreen from "./AddScreen";
import SearchScreen from "./SearchScreen";
import OnBoardingScreen from "./OnBoarding";
import PotSuggestionScreen from "./PotSuggestion";

const MainStacks = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
const PotStacks = createNativeStackNavigator();

const Empty = () => null;

const PotTab = () => {
  return (
    <PotStacks.Navigator>
      <PotStacks.Screen
        name="PotSize"
        component={PotSize}
        options={{ headerShown: false }}
      />
      <PotStacks.Screen
        name="PotSuggestionScreen"
        component={PotSuggestionScreen}
        options={{ headerShown: false }}
      />
    </PotStacks.Navigator>
  );
};

const MainTabs = ({ navigation }) => {
  const [unreadCount, setUnreadCount] = useState(3);
  return (
    <SafeAreaView style={{ height: "100%" }}>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarActiveTintColor: "#408086",
        }}
      ></Tab.Navigator>
    </SafeAreaView>
  );
};

const MainScreens = (props) => {
  console.log("props", props);
  return (
    <AppDrawer navigation={props.navigation}>
      <MainStacks.Navigator>
        {/* <MainStacks.Screen
        name="MainTabs"
        component={MainTabs}
        options={{ headerShown: false }}
      /> */}

        <MainStacks.Screen
          name="HOME"
          component={HomeScreen}
          options={{ headerShown: false }}
        />

        <MainStacks.Screen name="IDENTIFY" component={DiscoverScreen} />
        <MainStacks.Screen name="DIAGNOSE" component={DiscoverScreen} />

        <MainStacks.Screen
          name="POT SIZE"
          component={PotTab}
          options={{ animation: "fade_from_bottom", headerShown: false }}
        />
        <MainStacks.Screen
          name="ASK AI"
          component={AddScreen}
          options={{ animation: "fade_from_bottom", headerShown: false }}
        />
        <MainStacks.Screen
          name="MY GARDEN"
          component={GardenScreen}
          options={{ animation: "fade_from_bottom", headerShown: false }}
        />

        <MainStacks.Screen
          name="SEARCH"
          component={SearchScreen}
          options={{ animation: "fade_from_bottom", headerShown: false }}
        />
      </MainStacks.Navigator>
    </AppDrawer>
  );
};

export default MainScreens;
