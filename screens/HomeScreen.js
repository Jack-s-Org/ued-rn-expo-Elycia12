import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  ScrollView,
  TouchableOpacity,
  Image,
  ImageBackground,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";

const HomeScreen = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <View>
          <View style={styles.line} />
          <Text style={styles.text}>32°C</Text>
          <Text style={{ fontSize: 12, fontWeight: "bold" }}>Kuala Lumpur</Text>
        </View>
      </View>
      <ScrollView style={styles.scroll}>
        <ImageBackground
          source={require("../assets/Image/Home BG.png")}
          style={styles.image}
        />
        <View style={{ position: "absolute", top: 200, marginLeft: 20 }}>
          <Text
            style={{ fontSize: 16, fontFamily: "tt_Medium", lineHeight: 15 }}
          >
            Week 10
          </Text>
          <View style={{ flexDirection: "row", alignItems: "center", gap: 10 }}>
            <Text
              style={{ fontSize: 50, fontFamily: "tt_Bold", lineHeight: 60 }}
            >
              CARROT
            </Text>
            <Image
              source={require("../assets/Image/Information.png")}
              style={{ width: 30, height: 30 }}
            />
          </View>
          <Text
            style={{
              fontSize: 16,
              fontFamily: "tt_regular",
              lineHeight: 25,
              width: 300,
            }}
          >
            The carrot reaches peak maturity and the leaves are at their best
            green state.
          </Text>
        </View>

        <View>
          <View style={styles.tabs}>
            <Text style={styles.text}>#</Text>
            <Text style={{ fontWeight: "bold", fontSize: 16 }}>CATEGORIES</Text>
          </View>
          <View
            style={{
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Image
              source={require("../assets/Image/Plant.png")}
              style={styles.catImage}
              resizeMode="contain"
            />

            <View style={{ paddingTop: 0 }}>
              <View style={styles.textInfo}>
                <Text style={styles.plantName}>01 - LEAF PLANT</Text>
                <Text style={styles.searchName}>SEARCH NAME</Text>
              </View>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",

                  width: "90%",
                }}
              >
                <Text style={styles.history}>History </Text>
                <Text style={styles.infoText}>VIEW ALL</Text>
              </View>
            </View>
          </View>
          <View style={{ marginTop: 30 }}>
            <Image
              source={require("../assets/Image/Identify Home.png")}
              style={styles.identify}
            />
            <TouchableOpacity onPress={() => navigation.navigate("POT SIZE")}>
              <Image
                source={require("../assets/Image/Pot Suggest Home.png")}
                style={{
                  width: "100%",
                  height: 225,
                  justifyContent: "flex-start",
                }}
              />
            </TouchableOpacity>
            <View
              style={{
                justifyContent: "flex-start",
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
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
    fontSize: 18,
  },
  image: {
    marginBottom: 20,
    alignItems: "flex-start",
    width: 431 / 1.1,
    height: 937 / 1.1,
  },
  scroll: {
    flex: 1,
    marginTop: -100,
    zIndex: -1,
  },
  tabs: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingTop: 10,
    paddingHorizontal: 25,

    height: 30,
  },
  catImage: {
    width: "90%",
    height: 370,
    marginTop: 5,
    marginBottom: 3,
    borderRadius: 22,
  },
  textInfo: {
    justifyContent: "center",
  },
  plantName: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#333",
  },
  searchName: {
    fontSize: 14,
    color: "#666",
    marginTop: 5,
  },
  history: {
    fontSize: 13,
    color: "#999",
    marginTop: 3,
  },
  infoRight: {
    justifyContent: "center",
  },
  infoText: {
    fontSize: 12,
    fontWeight: "bold",
    color: "#333",
    textDecorationLine: "underline",
    paddingTop: 3,
  },
  identify: {
    width: "100%",
    height: 450,
    justifyContent: "flex-start",
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

export default HomeScreen;
