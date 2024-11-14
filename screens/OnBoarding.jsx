import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  Image,
  TouchableOpacity,
  Pressable,
} from "react-native";
import React from "react";
import { StatusBar } from "expo-status-bar";
import { useNavigation } from "@react-navigation/native";

export default function OnBoarding() {
  const navigation = useNavigation();
  const handelNavigation = () => {
    navigation.navigate("OnBoarding2");
  };
  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <ImageBackground
        source={require("../assets/images/Onboard_1.png")}
        style={styles.image}
      >
        <Image
          source={require("../assets/images/text.png")}
          style={styles.textImage}
        />

        <View style={styles.indicator}>
          <Pressable style={styles.indicatorD} />
          <Pressable style={styles.indicatorD2} />
          <Pressable style={styles.indicatorD2} />
        </View>

        <TouchableOpacity
          style={styles.buttonContainer}
          onPress={handelNavigation}
        >
          <Text style={styles.buttonText}>Get Started</Text>
        </TouchableOpacity>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  image: {
    height: "100%",
    width: "100%",
  },
  textImage: {
    resizeMode: "contain",
    height: "50%",
    width: "58%",
    alignSelf: "center",
  },
  buttonContainer: {
    height: 50,
    width: "90%",
    alignSelf: "center",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ECECEC",
    borderRadius: 13,
    position: "absolute",
    bottom: "5%",
  },
  buttonText: {
    fontSize: 16,
    color: "#2B2B2B",
    textTransform: "capitalize",
    fontFamily: "Raleway-SemiBold",
  },
  indicator: {
    flexDirection: "row",
    gap: 10,
    alignSelf: "center",
    marginTop: "42%",
  },
  indicatorD: {
    height: 5,
    width: 28,
    backgroundColor: "#ffff",
    borderRadius: 10,
  },
  indicatorD2: {
    height: 5,
    width: 28,
    backgroundColor: "#FFB21A",
    borderRadius: 10,
  },
});