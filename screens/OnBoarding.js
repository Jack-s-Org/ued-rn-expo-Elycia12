import React, { useState, useRef } from "react";
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
  Animated,
} from "react-native";

const OnBoardingScreen = ({ navigation }) => {
  // State to track the current onboarding screen
  const [currentScreen, setCurrentScreen] = useState(1);
  const fadeAnim = useRef(new Animated.Value(1)).current;

  const handleNext = () => {
    if (currentScreen < 3) {
      // Fade out the current image
      Animated.timing(fadeAnim, {
        toValue: 0,
        duration: 300, // Duration of the fade-out
        useNativeDriver: true,
      }).start(() => {
        // Update to the next screen
        setCurrentScreen(currentScreen + 1);

        // Fade in the new image
        Animated.timing(fadeAnim, {
          toValue: 1,
          duration: 300, // Duration of the fade-in
          useNativeDriver: true,
        }).start();
      });
    } else {
      // Navigate to MainScreens after the last onboarding screen
      navigation.replace("Main");
    }
  };

  // Different styles for each onboarding screen
  const getImageForScreen = () => {
    switch (currentScreen) {
      case 1:
        return { width: 8000 / 9, height: 7332 / 9, top: 0, left: -250 };
      case 2:
        return {
          width: 8000 / 5,
          height: 7332 / 5,
          top: -600,
          left: -250,
        }; // Change style for screen 2
      case 3:
        return { width: 8000 / 5, height: 7332 / 5, top: -620, left: -1000 }; // Change style for screen 3
      default:
        return { width: 8000 / 9, height: 7332 / 9 };
    }
  };

  // Function to get text content for each screen
  const getTextContentForScreen = () => {
    switch (currentScreen) {
      case 1:
        return {
          title: "DISCOVER",
          subTitle: "THE WORLD OF PLANTS",
          paragraph:
            "Find everything you need to know about plants, from care tips to fascinating facts, all in one place.",
        };
      case 2:
        return {
          title: "EXPERIENCE",
          subTitle: "PLANT GROWTH SIMULATIONS",
          paragraph:
            "See your platns come to life with our detailed growth simulations, guiding you from seed to bloom",
        };
      case 3:
        return {
          title: "SUGGEST",
          subTitle: "POTS FOR YOUR PLATNS",
          paragraph:
            "Let us help you choose the ideal pot size for your plants, ensuring they thrive in the best environment",
        };
      default:
        return {
          title: "DISCOVER",
          subTitle: "THE WORLD OF PLANTS",
          paragraph:
            "Find everything you need to know about plants, from care tips to fascinating facts, all in one place.",
        };
    }
  };

  const { title, subTitle, paragraph } = getTextContentForScreen();

  return (
    <View>
      {/* Animated ImageBackground for fading effect */}
      <Animated.View
        style={{
          opacity: fadeAnim, // Bind opacity to animated value
        }}
      >
        <ImageBackground
          source={require("../assets/Image/Onboard 1.png")}
          style={[styles.Onboarding, getImageForScreen()]}
          resizeMode="contain"
        />
      </Animated.View>
      <View
        style={{
          height: "100%",
          justifyContent: "flex-end",
        }}
      >
        <View style={styles.TextBox}>
          <Text style={styles.Title}>{title}</Text>
          <Text style={styles.SubTitle}>{subTitle}</Text>
          <Text style={styles.paragraph}>{paragraph}</Text>
          <TouchableOpacity onPress={handleNext}>
            <Text style={styles.ButtonText}>
              {currentScreen < 3 ? "Next" : "Start"}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  Onboarding: {
    width: 8000 / 9,
    height: 7332 / 9,
    position: "absolute",
    top: 0,
  },
  ButtonText: {
    fontFamily: "tt_Bold",
    fontSize: 20,
    color: "white",
    height: 30,
    textAlign: "left",
    width: 80,
    textDecorationLine: "underline",
  },
  Title: {
    fontFamily: "tt_Bold",
    fontSize: 40,
    color: "white",
    marginBottom: 10,
    height: 40,
  },
  SubTitle: {
    fontFamily: "tt_Bold",
    fontSize: 20,
    color: "white",
    marginBottom: 20,
    height: 30,
  },
  paragraph: {
    fontFamily: "tt_Medium",
    fontSize: 14,
    color: "white",
    marginBottom: 20,
    width: 320,
  },
  TextBox: {
    position: "absolute",
    width: "100%",
    left: 30,
    bottom: 30,
    alignItems: "left",
  },
});

export default OnBoardingScreen;
