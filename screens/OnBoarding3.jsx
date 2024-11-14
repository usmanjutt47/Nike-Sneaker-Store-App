import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
  Pressable,
} from "react-native";
import React from "react";
import { StatusBar } from "expo-status-bar";
import { useNavigation } from "@react-navigation/native";

export default function OnBoarding3() {
  const navigation = useNavigation();
  const handlePress = () => {
    navigation.navigate("Login");
  };
  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <ImageBackground
        source={require("../assets/images/Onboard_3.png")}
        style={styles.image}
      >
        <Text style={styles.headingText}>You Have the Power To</Text>
        <Text style={styles.subheadingText}>
          There Are Many Beautiful And Attractive Plants To Your Room
        </Text>
        <View style={styles.indicator}>
          <Pressable style={styles.indicatorD2} />
          <Pressable style={styles.indicatorD2} />
          <Pressable style={styles.indicatorD} />
        </View>
        <TouchableOpacity style={styles.buttonContainer} onPress={handlePress}>
          <Text style={styles.buttonText}>Next</Text>
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
    justifyContent: "center",
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
    marginTop: "10%",
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
  headingText: {
    color: "#ECECEC",
    fontSize: 34,
    fontFamily: "Raleway-Bold",
    textAlign: "center",
    marginTop: "45%",
    width: "70%",
    marginBottom: "5%",
    alignSelf: "center",
  },
  subheadingText: {
    color: "#D8D8D8",
    fontSize: 16,
    fontFamily: "Raleway-Regular",
    width: "80%",
    textAlign: "center",
    alignSelf: "center",
  },
});
