import {
  StyleSheet,
  Text,
  ImageBackground,
  Image,
  TextInput,
} from "react-native";
import { View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import React, { useState } from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
import { ScrollView } from "react-native-gesture-handler";

const PotSuggestionScreen = ({ route }) => {
  const { imageUri } = route.params || {};
  return (
    <SafeAreaView style={{ alignItems: "felx-start" }}>
      <ScrollView>
        <View style={styles.header}>
          <View>
            <View style={styles.line} />
            <Text style={styles.text}>POT SUGGEST</Text>
          </View>
        </View>
        <View style={styles.tabs}>
          <Text style={styles.tabActive}>CARROT POTS</Text>
          <Text style={styles.tabInactive}>Quantity · 1 plant</Text>
        </View>
        <View style={styles.container}>
          {imageUri && (
            <ImageBackground
              source={{ uri: imageUri }}
              style={{
                width: 330,
                height: 330,
                justifyContent: "center",
                alignItems: "center",
                borderRadius: 20,
              }}
            >
              <Image
                source={require("../assets/Image/Port.png")}
                style={{
                  width: 310 / 1.3,
                  height: 314 / 1.3,
                }}
              />
            </ImageBackground>
          )}
        </View>

        <View style={{ alignItems: "flex-start", marginLeft: 25 }}>
          <Text style={styles.TitleStyle}>MINIMUM SIZE</Text>
          <Text style={styles.paragprah}>
            This is the minimum pot size suggestion, adjust the quantity to
            change the pot size.
          </Text>
          <Image
            source={require("../assets/Image/Minimum Size.png")}
            style={{ width: 380 / 1.15, height: 120 / 1.15, marginBottom: 20 }}
          />
        </View>
        <View style={{ alignItems: "flex-start", marginLeft: 25 }}>
          <Text style={styles.TitleStyle}>READ MORE</Text>

          <Image
            source={require("../assets/Image/HowToPlant.png")}
            style={{
              width: 380 / 1.15,
              height: 195 / 1.15,
              marginBottom: 0,
              marginTop: 10,
            }}
          />
        </View>
        <View
          style={{
            justifyContent: "center",
            padding: "8%",
          }}
        >
          <Text style={styles.ask}>ASK AI </Text>
          <Text
            style={{
              fontSize: 12,
              fontFamily: "tt_Medium",
              lineHeight: 12,
            }}
          >
            Great treatment advice
          </Text>

          <View style={styles.topBar}>
            <View style={styles.searchContainer}>
              <TextInput
                style={styles.searchInput}
                placeholder=" Send Message"
                placeholderTextColor="#888"
              />
            </View>
            <View style={styles.SearchIcon}>
              <Image
                source={require("../assets/Image/Arrow.png")}
                style={{ width: 15, height: 20 }}
              />
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    borderRadius: 22,
    overflow: "hidden",

    width: "100%",
    marginBottom: 20,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    paddingTop: 25,
  },
  line: {
    borderBottomWidth: 3,
    borderRadius: 3,
    width: "60%",
    marginBottom: 5,
    backgroundColor: "#333",
  },
  text: {
    fontWeight: "bold",
    fontSize: 20,
  },

  TitleStyle: {
    fontWeight: "bold",
    fontSize: 20,
  },

  paragprah: {
    fontWeight: "MeDium",
    fontSize: 14,
    marginBottom: 20,
  },
  tabs: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingTop: 40,
    paddingHorizontal: 25,
    marginVertical: 10,
  },
  tabActive: {
    fontSize: 28,
    fontFamily: "tt_Bold",
    color: "#333",
    lineHeight: 30,
  },
  tabInactive: {
    fontSize: 13,
    fontFamily: "tt_Medium",
    color: "#333",
    paddingTop: 10,
  },
  ask: {
    fontSize: 35,
    fontFamily: "tt_Bold",
    lineHeight: 35,
  },
  topBar: {
    width: "100%",
    height: 50,
    marginBottom: 20,
    marginTop: 8,
    flexDirection: "row",
    alignItems: "center",
  },
  searchContainer: {
    alignItems: "flex-start",
    height: 45,
    borderWidth: 2,
    borderRadius: 50,
    borderColor: "#333",
    paddingRight: 160,
  },
  searchInput: {
    fontSize: 14,
    fontWeight: "500",
    color: "#888",
    height: "100%",
    paddingLeft: 8,
    borderRadius: 50,
  },
  SearchIcon: {
    width: 45,
    height: 45,
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 15,
    borderWidth: 2,
    borderColor: "#333",
  },
});

export default PotSuggestionScreen;
