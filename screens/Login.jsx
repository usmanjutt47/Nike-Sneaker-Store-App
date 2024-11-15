import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Image,
} from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Entypo from "@expo/vector-icons/Entypo";
import { useNavigation } from "@react-navigation/native";

export default function Login() {
  const [visible, setVisible] = useState(null);
  const navigation = useNavigation();
  const handleSignUp = () => {
    navigation.navigate("SignUp");
  };
  const handleForgot = () => {
    navigation.navigate("Forgot");
  };
  const handleHome = () => {
    navigation.navigate("Home");
  };
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.innerContainer}>
        <Text style={styles.headingText}>Hello Again!</Text>
        <Text style={styles.subheadingText}>
          Fill your details or continue with social media
        </Text>
        <View style={styles.inputs}>
          <Text style={styles.emailInputText}>Email Address</Text>
          <TextInput
            style={styles.emailInput}
            placeholder="Enter Email"
            cursorColor={"#000"}
          />
        </View>
        <Text style={styles.emailInputText}>Password</Text>
        <View style={styles.passwordInputContainer}>
          <TextInput
            placeholder="Enter password"
            cursorColor={"#000"}
            secureTextEntry={!visible}
          />
          <TouchableOpacity onPress={() => setVisible(!visible)}>
            <Entypo
              name={visible ? "eye" : "eye-with-line"}
              size={20}
              color="#6A6A6A"
            />
          </TouchableOpacity>
        </View>
        <TouchableOpacity onPress={handleForgot}>
          <Text style={styles.forgotPassword}>Recovery Password</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.buttonContainer} onPress={handleHome}>
          <Text style={styles.buttonText}>Sign In</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.continueGoogle}>
          <Image
            source={require("../assets/icons/google.png")}
            style={styles.googleImage}
          />
          <Text style={styles.googleText}>Sign In with Google</Text>
        </TouchableOpacity>
        <View style={styles.newAccount}>
          <Text style={styles.newUserText}>New User? </Text>
          <TouchableOpacity onPress={handleSignUp}>
            <Text style={styles.createAccountText}>Create Account</Text>
          </TouchableOpacity>
        </View>
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
    backgroundColor: "#fff",
    alignSelf: "center",
  },
  headingText: {
    fontSize: 32,
    fontFamily: "Raleway-Bold",
    textAlign: "center",
    marginTop: "15%",
  },
  subheadingText: {
    textAlign: "center",
    width: "60%",
    alignSelf: "center",
    marginTop: "3%",
  },
  inputs: {
    marginTop: "10%",
  },
  emailInputText: {
    fontSize: 16,
    fontFamily: "Raleway-Medium",
    marginTop: "5%",
  },
  emailInput: {
    backgroundColor: "#F7F7F9",
    height: 48,
    width: "100%",
    borderRadius: 14,
    marginTop: 5,
    paddingLeft: 10,
  },
  passwordInputContainer: {
    flexDirection: "row",
    backgroundColor: "#F7F7F9",
    height: 48,
    width: "100%",
    borderRadius: 14,
    marginTop: 5,
    paddingLeft: 10,
    justifyContent: "space-between",
    alignItems: "center",
    paddingRight: 10,
  },
  forgotPassword: {
    color: "#707B81",
    marginTop: 10,
    textAlign: "right",
  },
  buttonContainer: {
    height: 50,
    width: "100%",
    backgroundColor: "#0D6EFD",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 14,
    marginTop: "10%",
  },
  buttonText: {
    fontSize: 14,
    color: "#fff",
    fontFamily: "Raleway-SemiBold",
  },
  continueGoogle: {
    backgroundColor: "#F7F7F9",
    height: 50,
    width: "100%",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    marginTop: "10%",
    gap: 10,
    borderRadius: 14,
  },
  googleImage: {
    resizeMode: "contain",
    height: 25,
    width: 25,
  },
  googleText: {
    fontSize: 14,
    color: "#2B2B2B",
    fontFamily: "Raleway-SemiBold",
  },
  newAccount: {
    flexDirection: "row",
    position: "absolute",
    bottom: "5%",
    alignSelf: "center",
  },
  newUserText: {
    fontSize: 16,
    fontFamily: "Raleway-Medium",
    color: "#6A6A6A",
  },
  createAccountText: {
    fontSize: 16,
    fontFamily: "Raleway-Medium",
    color: "#1A1D1E",
  },
});
