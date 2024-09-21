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
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import * as ImagePicker from "expo-image-picker";
import Ionicons from "@expo/vector-icons/Ionicons";

const PotSize = () => {
  const navigation = useNavigation();
  const [CarrotActive, setCarrotActive] = useState(false);
  const CarrotPress = () => {
    setCarrotActive(!CarrotActive);
  };

  const [image, setImage] = useState();

  const UploadImage = async (mode) => {
    try {
      let result = {};

      if (mode === "gallery") {
        await ImagePicker.requestMediaLibraryPermissionsAsync();
        result = await ImagePicker.launchImageLibraryAsync({
          mediaTypes: ImagePicker.MediaTypeOptions.Images,
          allowsEditing: true,
          aspect: [1, 1],
          quality: 1,
        });
      } else {
        await ImagePicker.requestCameraPermissionsAsync();
        result = await ImagePicker.launchCameraAsync({
          cameraType: ImagePicker.CameraType.front,
          allowsEditing: true,
          aspect: [1, 1],
          quality: 1,
        });
      }

      if (!result.canceled) {
        const imageUri = result.assets[0].uri; // Define imageUri here
        await saveImage(imageUri); // Save the image URI
        navigation.navigate("PotSuggestionScreen", { imageUri }); // Navigate using the defined imageUri
      }
    } catch (error) {
      alert("Error uploading Image: " + error.message);
    }
  };

  const saveImage = async (uri) => {
    try {
      setImage(uri);
    } catch (error) {
      throw error;
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* Scrollable Content in a Rectangular Frame */}
      <View style={styles.frame}>
        <ScrollView
          contentContainerStyle={styles.scrollContent}
          showsVerticalScrollIndicator={false}
        >
          {/* Top Bar with Search */}

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

          {/* History Section */}
          <View style={styles.historySection}>
            <Text style={styles.historyTitle}>HISTORY</Text>
            <View style={styles.historyTags}>
              <TouchableOpacity style={styles.tag} onPress={CarrotPress}>
                <Text style={styles.tagText}>Carrot</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.tag}>
                <Text style={styles.tagText}>Sweet Potato</Text>
              </TouchableOpacity>
            </View>
          </View>

          <View style={styles.categories}>
            {CarrotActive ? (
              // New Categories when Carrot is Active
              <View>
                <Text
                  style={{
                    fontSize: 30,
                    color: "#333",
                    fontFamily: "tt_ExtraBold",
                    lineHeight: 30,
                  }}
                >
                  Carrot
                </Text>
                <Text
                  style={{
                    fontSize: 14,
                    color: "#333",
                    fontFamily: "tt_Medium",
                    marginTop: 5,
                    lineHeight: 15,
                  }}
                >
                  Flowering Plant · Daucus
                </Text>
                <Image
                  source={require("../assets/Image/My Plant Carrots.png")}
                  style={{
                    width: 300,
                    height: 250,
                    borderRadius: 12,
                    marginTop: 15,
                  }}
                />
                <View style={{ alignItems: "flex-end" }}>
                  <Text
                    style={{
                      fontSize: 12,
                      color: "#333",
                      fontFamily: "tt_Bold",
                      marginTop: 5,
                      lineHeight: 15,
                      textDecorationLine: "underline",
                      justifyContent: "flex-end",
                      alignItems: "flex-end",
                    }}
                  >
                    CHANGE PLANT
                  </Text>
                </View>
              </View>
            ) : (
              // Default Categories
              <View>
                <View style={styles.CardGap}>
                  <View style={styles.imageWrapper}>
                    <Image
                      source={require("../assets/Image/Plant.png")}
                      style={{ width: 150, height: 220, borderRadius: 12 }}
                    />
                    <Text style={styles.imageLabel}>LEAF PLANT</Text>
                  </View>
                  <View style={styles.imageWrapper}>
                    <Image
                      source={require("../assets/Image/Flower.png")}
                      style={{ width: 136, height: 120, borderRadius: 12 }}
                    />
                    <Text style={styles.imageLabel}>FLOWERS</Text>
                  </View>
                </View>

                <View style={styles.CardGap}>
                  <View style={styles.imageWrapper}>
                    <Image
                      source={require("../assets/Image/Vege.png")}
                      style={{ width: 150, height: 140, borderRadius: 12 }}
                    />
                    <Text style={styles.imageLabel}>VEGETABLES AND FRUITS</Text>
                  </View>
                  <View style={styles.imageWrapper}>
                    <Image
                      source={require("../assets/Image/Cactie.png")}
                      style={{
                        width: 136,
                        height: 145,
                        borderRadius: 12,
                        marginTop: -100,
                      }}
                    />
                    <Text style={styles.imageLabel}>SUCCULENTS AND CACTI</Text>
                  </View>
                </View>
                <View style={styles.CardGap}>
                  <View style={styles.imageWrapper}>
                    <Image
                      source={require("../assets/Image/Herbs.png")}
                      style={{ width: 150, height: 160, borderRadius: 12 }}
                    />
                    <Text style={styles.imageLabel}>Herbs</Text>
                  </View>
                  <View style={styles.imageWrapper}>
                    <Image
                      source={require("../assets/Image/Tree.png")}
                      style={{
                        width: 136,
                        height: 250,
                        borderRadius: 12,
                        marginTop: -90,
                      }}
                    />
                    <Text style={styles.imageLabel}>Trees</Text>
                  </View>
                </View>
              </View>
            )}
          </View>
        </ScrollView>
      </View>

      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-around",
          alignItems: "center",
          marginTop: 20,
          gap: 12,
        }}
      >
        <Text
          style={{
            fontSize: 15,
            fontWeight: "bold",
            opacity: 0.33,
            color: "#333333",
          }}
        >
          IDENTIFY
        </Text>
        <Text
          style={{
            fontSize: 15,
            fontWeight: "bold",
            opacity: 0.33,
            color: "#333333",
          }}
        >
          DIAGNOSE
        </Text>
        <Text style={{ fontSize: 15, fontWeight: "bold", color: "#333333" }}>
          POT SUGGEST
        </Text>
      </View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-evenly",
          alignItems: "center",
          marginTop: 20,
          width: "90%",
        }}
      >
        <TouchableOpacity onPress={() => UploadImage("gallery")}>
          <Image
            source={require("../assets/Image/Gallery.png")}
            style={{ width: 30, height: 30 }}
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => UploadImage("camera")}
          style={{
            width: 88,
            height: 88,
            borderRadius: 44, // This makes the button circular
            borderWidth: 2,
            borderColor: "#666666", // Outline color
            backgroundColor: "#FCFCF4", // Inner color
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text>Done</Text>
        </TouchableOpacity>
        <View>
          <Image
            source={require("../assets/Image/Gallery.png")}
            style={{
              width: 20,
              height: 20,
              opacity: 0,
              backgroundColor: "red",
            }}
            resizeMode="contain"
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F6F6F6",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 30,
  },
  frame: {
    width: "88%",
    height: "70%", // Adjust this as needed for the frame's length
    borderRadius: 12, // 12° rounded corners
    backgroundColor: "#FFF",
    borderWidth: 2, // Outline thickness of 2
    borderColor: "#333333", // Outline color
    // Padding top of the rectangular frame
    paddingHorizontal: 15, // Horizontal padding (left and right)
  },
  scrollContent: {
    alignItems: "center",
  },
  topBar: {
    width: "100%",
    height: 47,
    marginBottom: 20,
    // Outline thickness of 2
    marginTop: 18,

    justifyContent: "center",
    alignItems: "center",
  },
  searchContainer: {
    display: "flex",
    flexDirection: "row",
    width: 340,
    paddingVertical: 10,
    paddingHorizontal: 20,
    alignItems: "flex-start",

    gap: 10,
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
    marginBottom: 20,
  },
  historyTitle: {
    fontSize: 18,
    lineHeight: 18,
    color: "#333",
    fontFamily: "tt_Bold",
  },
  historyTags: {
    flexDirection: "row",
    marginTop: 10,
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
    fontFamily: "tt_Bold",
    lineHeight: 14,
  },
  categories: {
    width: "100%",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-around",
  },

  imageWrapper: {
    width: "45%",
    marginBottom: 20,
    alignItems: "flex-start",
  },
  image: {
    width: "100%",
    height: 150,
    borderRadius: 10,
  },
  imageLabel: {
    marginTop: 10,
    fontSize: 16,
    paddingLeft: -12,
    color: "#333",
    fontFamily: "tt_ExtraBold",
    lineHeight: 15,
  },
  CardGap: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    gap: 30,
  },
});

export default PotSize;
