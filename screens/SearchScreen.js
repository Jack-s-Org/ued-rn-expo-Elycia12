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
          <Text style={styles.text}>32°C</Text>
          <Text style={{ fontSize: 12, fontWeight: "bold" }}>Kuala Lumpur</Text>
        </View>
      </View>
      <View style={{ width: "100%", alignItems: "center" }}>
        <View style={styles.frame}>
          <ScrollView
            contentContainerStyle={styles.scrollContent}
            showsVerticalScrollIndicator={false}
          >
            <View style={styles.topBar}>
              <View style={styles.searchContainer}>
                <TextInput
                  style={styles.searchInput}
                  placeholder="     Search Name"
                  placeholderTextColor="#888"
                />
                <View style={styles.SearchIcon}>
                  <Ionicons name="search" size={24} color="#333333" />
                </View>
              </View>
            </View>
            <View style={styles.historySection}>
              <Text style={styles.historyTitle}>HISTORY</Text>
              <View style={styles.historyTags}>
                <TouchableOpacity style={styles.tag}>
                  <Text style={styles.tagText}>Carrot</Text>
                </TouchableOpacity>
                <View style={styles.tag}>
                  <Text style={styles.tagText}>Sweet Potato</Text>
                </View>
                <View style={styles.tag}>
                  <Text style={styles.tagText}>Ginger</Text>
                </View>
              </View>
              <View style={styles.historyTags}>
                <View style={styles.tag}>
                  <Text style={styles.tagText}>Peace Lily</Text>
                </View>
                <View style={styles.tag}>
                  <Text style={styles.tagText}>Saltwort</Text>
                </View>
                <View style={styles.tag}>
                  <Text style={styles.tagText}>Surfgrass</Text>
                </View>
              </View>
              <View style={styles.historyTags}>
                <View style={styles.tag}>
                  <Text style={styles.tagText}>Balkan Yam</Text>
                </View>
                <View style={styles.tag}>
                  <Text style={styles.tagText}>Raspberry</Text>
                </View>
              </View>
            </View>

            <View style={styles.categoriesSection}>
              <Text style={styles.categoriesTitle}>CATEGORIES</Text>
              <View style={{ alignItems: "center" }}>
                <View style={styles.CardGap}>
                  <View style={styles.imageWrapper}>
                    <Image
                      source={require("../assets/Image/Plant.png")}
                      style={{ width: 155, height: 220, borderRadius: 12 }}
                    />
                    <Text style={styles.imageLabel}>LEAF PLANT</Text>
                  </View>
                  <View style={styles.imageWrapper}>
                    <Image
                      source={require("../assets/Image/Flower.png")}
                      style={{ width: 150, height: 144, borderRadius: 12 }}
                    />
                    <Text style={styles.imageLabel}>FLOWERS</Text>
                  </View>
                </View>

                <View style={styles.CardGap}>
                  <View style={styles.imageWrapper}>
                    <Image
                      source={require("../assets/Image/Vege.png")}
                      style={{ width: 158, height: 145, borderRadius: 12 }}
                    />
                    <Text style={styles.imageLabel}>FRUITS AND VEGETABLES</Text>
                  </View>
                  <View style={styles.imageWrapper}>
                    <Image
                      source={require("../assets/Image/Cactie.png")}
                      style={{
                        width: 150,
                        height: 163,
                        borderRadius: 12,
                        marginTop: -77,
                      }}
                    />
                    <Text style={styles.imageLabel}>SUCCULENTS AND CACTI</Text>
                  </View>
                </View>

                <View style={styles.CardGap}>
                  <View style={styles.imageWrapper}>
                    <Image
                      source={require("../assets/Image/Herbs.png")}
                      style={{
                        width: 160,
                        height: 190,
                        borderRadius: 12,
                        marginTop: -6,
                      }}
                    />
                    <Text style={styles.imageLabel}>LEAF PLANT</Text>
                  </View>
                  <View style={styles.imageWrapper}>
                    <Image
                      source={require("../assets/Image/Tree.png")}
                      style={{
                        width: 150,
                        height: 250,
                        borderRadius: 12,
                        marginTop: -66,
                      }}
                    />
                    <Text style={styles.imageLabel}>FLOWERS</Text>
                  </View>
                </View>
              </View>
            </View>
          </ScrollView>
        </View>
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
  topBar: {
    width: "100%",
    height: 47,
    marginBottom: 30,
    marginTop: 35,

    justifyContent: "center",
    alignItems: "center",
  },
  searchContainer: {
    display: "flex",
    flexDirection: "row",
    width: 390,
    paddingVertical: 10,
    paddingHorizontal: 20,
    alignItems: "flex-start",

    gap: 18,
    // Rounded corners for the search container
    // Background color
  },

  SearchIcon: {
    borderWidth: 2.2,
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
    width: 45,
    height: 45,
  },
  searchInput: {
    flex: 1,
    fontSize: 14, // Font size for the search input
    fontWeight: "500", // Font weight for the search input
    color: "#888", // Font color for the search input
    borderWidth: 2.2,
    borderRadius: 50,
    height: 45,

    justifyContent: "center",
    alignItems: "center",
  },
  historySection: {
    width: "100%",
    marginBottom: 40,
  },
  historyTitle: {
    fontSize: 18,
    lineHeight: 18,
    color: "#333",
    fontFamily: "tt_Bold",
    marginLeft: 18,
  },
  historyTags: {
    flexDirection: "row",
    marginTop: 10,
    marginLeft: 18,
  },
  tag: {
    borderRadius: 20,
    paddingVertical: 5,
    paddingHorizontal: 20,
    marginRight: 10,
    borderWidth: 2,
  },
  tagText: {
    color: "#333",
  },
  categoriesSection: {
    width: "100%",
    marginBottom: 20,
  },
  categoriesTitle: {
    fontSize: 18,
    lineHeight: 18,
    color: "#333",
    fontFamily: "tt_Bold",
    marginLeft: 18,
    marginBottom: 20,
  },
  categories: {
    width: "100%",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-around",
  },

  imageWrapper: {
    width: 150,
    marginBottom: 20,
    alignItems: "flex-start",
  },
  image: {
    width: "100%",
    height: "100%",
    borderRadius: 12,
  },
  imageLabel: {
    marginTop: 5,
    fontSize: 16,
    paddingLeft: -12,
    color: "#333",
    fontFamily: "tt_ExtraBold",
  },
  CardGap: {
    flexDirection: "row",
    alignItems: "centert",
    gap: 30,
  },

  frame: {
    width: "95%",
    height: "100%", // Adjust this as needed for the frame's length
  },
  scrollContent: {
    alignItems: "center",

    height: 1200,
  },
});

export default MyGardenHeader;
