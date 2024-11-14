import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import AntDesign from "@expo/vector-icons/AntDesign";
import { useNavigation } from "@react-navigation/native";

export default function Forgot() {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.innerContainer}>
        <TouchableOpacity
          style={styles.goBackContainer}
          onPress={() => navigation.goBack()}
        >
          <AntDesign name="left" size={24} color="black" />
        </TouchableOpacity>

        <Text style={styles.heading}>Forgot Password</Text>
        <Text style={styles.textLine}>
          Enter your Email account to reset your password
        </Text>
        <TextInput placeholder="xxxxxxxx" style={styles.textInput} />
        <TouchableOpacity
          style={styles.forgotButton}
          onPress={() => navigation.navigate("OTPVerification")}
        >
          <Text style={styles.forgotText}>Reset password</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  innerContainer: {
    width: "90%",
    height: "100%",
    alignSelf: "center",
  },
  goBackContainer: {
    height: 44,
    width: 44,
    backgroundColor: "#F7F7F9",
    borderRadius: 44,
    justifyContent: "center",
    alignItems: "center",
  },
  heading: {
    fontSize: 32,
    fontFamily: "Raleway-Bold",
    textAlign: "center",
  },
  textLine: {
    fontSize: 16,
    color: "#707B81",
    width: "70%",
    alignSelf: "center",
    textAlign: "center",
    marginTop: "3%",
  },
  textInput: {
    width: "100%",
    height: 50,
    backgroundColor: "#F7F7F9",
    borderRadius: 14,
    paddingHorizontal: 10,
    marginTop: "10%",
    marginBottom: "10%",
  },
  forgotButton: {
    height: 50,
    width: "100%",
    backgroundColor: "#0D6EFD",
    borderRadius: 14,
    justifyContent: "center",
    alignItems: "center",
  },
  forgotText: {
    color: "#FFFFFF",
    fontSize: 15,
    fontFamily: "Raleway-SemiBold",
    textAlign: "center",
  },
});
