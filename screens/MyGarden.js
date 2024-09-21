import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  ScrollView,
  TouchableOpacity,
  Image,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Ionicons from "@expo/vector-icons/Ionicons";

const MyGardenHeader = () => {
  return (
    <SafeAreaView>
      <View style={styles.header}>
        <View>
          <View style={styles.line} />
          <Text style={styles.text}>MY GARDEN</Text>
        </View>
      </View>

      <View style={styles.tabs}>
        <Text style={styles.tabActive}>MY PLANT</Text>
        <Text style={styles.tabInactive}>REMINDERS</Text>
      </View>
      <View style={styles.imageContainer}>
        <Image
          source={require("../assets/Image/My Plant Carrots.png")}
          style={styles.image}
        />
      </View>

      <View style={styles.infoSection}>
        <View style={styles.infoLeft}>
          <View style={styles.verticalLine} />
          <View style={styles.textInfo}>
            <Text style={styles.plantName}>CARROT</Text>
            <Text style={styles.plantWeek}>WEEK 10</Text>
            <View style={{ flexDirection: "row" }}>
              <Text style={styles.addReminder}>Add Reminder </Text>
              <Text style={styles.infoText}>INFO</Text>
            </View>
          </View>
        </View>
      </View>

      <View style={styles.addPlantSection}>
        <TouchableOpacity>
          <Text style={styles.addPlant}>ADD PLANT</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
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
  tabs: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingTop: 40,
    paddingHorizontal: 25,
    marginVertical: 10,
  },
  tabActive: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#333",
  },
  tabInactive: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#999",
  },
  imageContainer: {
    alignItems: "center",
    marginBottom: 20,
    // marginTop: -60,
  },
  image: {
    width: "90%",
    height: 310,
    borderRadius: 22,
  },

  infoSection: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  infoLeft: {
    flexDirection: "row",
    alignItems: "center",
  },
  verticalLine: {
    width: 2,
    height: 60,
    backgroundColor: "#333",
    marginRight: 10,
  },
  textInfo: {
    justifyContent: "center",
  },
  plantName: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#333",
  },
  plantWeek: {
    fontSize: 14,
    color: "#666",
    marginTop: 5,
  },
  addReminder: {
    fontSize: 13,
    color: "#999",
    marginTop: 5,
  },
  infoRight: {
    justifyContent: "center",
  },
  infoText: {
    fontSize: 13,
    fontWeight: "bold",
    color: "#333",
    textDecorationLine: "underline",
    flexDirection: "row",
    paddingTop: 5,
    paddingHorizontal: 210,
  },
  addPlantSection: {
    justifyContent: "flex-end",
    alignItems: "flex-end",
    marginRight: 20,
    marginTop: 150,
  },
  addPlant: {
    fontSize: 25,
    fontWeight: "bold",
    color: "#333",
    textDecorationLine: "underline",
  },
});

export default MyGardenHeader;
