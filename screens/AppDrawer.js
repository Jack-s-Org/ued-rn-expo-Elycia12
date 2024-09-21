import { useState } from "react";
import { TouchableOpacity } from "react-native";
import { Drawer } from "react-native-drawer-layout";
import {
  SafeAreaInsetsContext,
  SafeAreaView,
} from "react-native-safe-area-context";
import Ionicons from "@expo/vector-icons/Ionicons";
import { DrawerItem } from "@react-navigation/drawer";
import { Image } from "react-native";

export default function AppDrawer({ navigation, children }) {
  const [open, setOpen] = useState(false);

  return (
    <Drawer
      open={open}
      drawerStyle={{
        width: "100%",
      }}
      swipeEnabled={false}
      onOpen={() => setOpen(true)}
      onClose={() => setOpen(false)}
      renderDrawerContent={() => {
        return (
          <SafeAreaView>
            <DrawerItem
              style={{
                // alignContent: "flex-end",
                justifyContent: "center",

                position: "absolute",
                top: 52,
                left: 320,
                width: 40,
                height: 40,
              }}
              label="CLose"
              labelStyle={{
                fontSize: 0, // Adjust the font size as needed
                fontWeight: "bold",
                color: "#333333", // Adjust the font color as needed
              }}
              icon={(insets) => (
                <Image
                  source={require("../assets/Close Button.png")}
                  style={{
                    width: 30,
                    height: 30,

                    top: insets.top,
                    marginTop: 25,
                    zIndex: 99,
                    position: "absolute",
                  }} // Adjust the size as needed
                />
              )}
              onPress={() => {
                setOpen(false);
              }}
            />
            <DrawerItem
              style={{ paddingTop: 20, width: 120 }}
              label="SEARCH"
              labelStyle={{
                fontSize: 18, // Adjust the font size as needed
                color: "#333333", // Adjust the font color as needed

                width: 100,
              }}
              icon={(insets) => (
                <Image
                  source={require("../assets/icon search.png")}
                  style={{
                    width: 20,
                    height: 20,
                    left: 12,
                    top: insets.top,
                    marginTop: 25,
                    zIndex: 99,
                    position: "absolute",
                  }} // Adjust the size as needed
                />
              )}
              onPress={() => {
                navigation.navigate("SEARCH");
                setOpen(false);
              }}
            />

            <DrawerItem
              style={{ paddingTop: 80 }}
              label="HOME"
              labelStyle={{
                fontSize: 30, // Adjust the font size as needed
                fontWeight: "bold",
                color: "#333333", // Adjust the font color as needed
              }}
              onPress={() => {
                navigation.replace("HOME");
                setOpen(false);
              }}
            />

            <DrawerItem
              label="IDENTIFY"
              labelStyle={{
                fontSize: 30, // Adjust the font size as needed
                fontWeight: "bold",
                marginTop: -10,
                color: "#333333", // Adjust the font color as needed
              }}
              onPress={() => {}}
            />
            <DrawerItem
              label="DIAGNOSE"
              labelStyle={{
                fontSize: 30, // Adjust the font size as needed
                fontWeight: "bold",
                marginTop: -10,
                color: "#333333", // Adjust the font color as needed
              }}
              onPress={() => {}}
            />
            <DrawerItem
              label="POT SIZE"
              labelStyle={{
                fontSize: 30, // Adjust the font size as needed
                fontWeight: "bold",
                marginTop: -10,
                color: "#333333", // Adjust the font color as needed
              }}
              onPress={() => {
                navigation.replace("POT SIZE");
                setOpen(false);
              }}
            />
            <DrawerItem
              label="ASK AI"
              labelStyle={{
                fontSize: 30, // Adjust the font size as needed
                fontWeight: "bold",
                marginTop: -10,
                color: "#333333", // Adjust the font color as needed
              }}
              onPress={() => {}}
            />
            <DrawerItem
              label="MY GARDEN"
              labelStyle={{
                fontSize: 30, // Adjust the font size as needed
                fontWeight: "bold",
                marginTop: -10,
                color: "#333333", // Adjust the font color as needed
              }}
              onPress={() => {
                navigation.replace("MY GARDEN");
                setOpen(false);
              }}
            />
            <DrawerItem
              style={{ paddingTop: 150 }}
              label="Setting"
              labelStyle={{
                fontWeight: "bold",
                color: "#333333", // Adjust the font color as needed
              }}
              onPress={() => {
                navigation.replace("Setting");
              }}
            />
          </SafeAreaView>
        );
      }}
    >
      <SafeAreaInsetsContext.Consumer>
        {(insets) => (
          <TouchableOpacity
            onPress={() => {
              setOpen(true);
            }}
            style={{
              zIndex: 99,
              position: "absolute",
              right: 25,
              marginTop: 25,
              top: insets.top,
              height: 40,
              width: 40,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Image
              source={require("../assets/Menu icon.png")}
              style={{ height: 40, width: 30 }}
            />
          </TouchableOpacity>
        )}
      </SafeAreaInsetsContext.Consumer>
      {children}
    </Drawer>
  );
}
