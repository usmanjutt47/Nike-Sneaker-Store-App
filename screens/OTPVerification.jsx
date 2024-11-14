import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useRef, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import AntDesign from "@expo/vector-icons/AntDesign";
import { useNavigation } from "@react-navigation/native";

export default function Forgot() {
  const navigation = useNavigation();

  const input1Ref = useRef(null);
  const input2Ref = useRef(null);
  const input3Ref = useRef(null);
  const input4Ref = useRef(null);

  const [otp1, setOtp1] = useState("");
  const [otp2, setOtp2] = useState("");
  const [otp3, setOtp3] = useState("");
  const [otp4, setOtp4] = useState("");

  const handleTextChange = (text, nextInputRef, setOtpValue) => {
    setOtpValue(text);
    if (text.length === 1 && nextInputRef) {
      nextInputRef.current.focus();
    }
  };

  const handleBackspace = (key, prevInputRef, setOtpValue) => {
    if (key === "Backspace" && setOtpValue) {
      setOtpValue("");
      if (prevInputRef) {
        prevInputRef.current.focus();
      }
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.innerContainer}>
        <TouchableOpacity
          style={styles.goBackContainer}
          onPress={() => navigation.goBack()}
        >
          <AntDesign name="left" size={24} color="black" />
        </TouchableOpacity>

        <Text style={styles.heading}>OTP Verification</Text>
        <Text style={styles.textLine}>
          Please check your email to see the verification code
        </Text>

        <Text style={styles.otpText}>OTP Code</Text>

        <View style={styles.inputContainer}>
          <TextInput
            placeholder=""
            style={styles.input}
            maxLength={1}
            ref={input1Ref}
            value={otp1}
            onChangeText={(text) => handleTextChange(text, input2Ref, setOtp1)}
            keyboardType="numeric"
            onKeyPress={({ nativeEvent }) =>
              handleBackspace(nativeEvent.key, null, setOtp1)
            }
            cursorColor={"#000"}
          />
          <TextInput
            placeholder=""
            style={styles.input}
            maxLength={1}
            ref={input2Ref}
            value={otp2}
            onChangeText={(text) => handleTextChange(text, input3Ref, setOtp2)}
            keyboardType="numeric"
            onKeyPress={({ nativeEvent }) =>
              handleBackspace(nativeEvent.key, input1Ref, setOtp2)
            }
            cursorColor={"#000"}
          />
          <TextInput
            placeholder=""
            style={styles.input}
            maxLength={1}
            ref={input3Ref}
            value={otp3}
            onChangeText={(text) => handleTextChange(text, input4Ref, setOtp3)}
            keyboardType="numeric"
            onKeyPress={({ nativeEvent }) =>
              handleBackspace(nativeEvent.key, input2Ref, setOtp3)
            }
            cursorColor={"#000"}
          />
          <TextInput
            placeholder=""
            style={styles.input}
            maxLength={1}
            ref={input4Ref}
            value={otp4}
            onChangeText={(text) => setOtp4(text)}
            keyboardType="numeric"
            onKeyPress={({ nativeEvent }) =>
              handleBackspace(nativeEvent.key, input3Ref, setOtp4)
            }
            cursorColor={"#000"}
          />
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
    textTransform: "capitalize",
  },
  otpText: {
    fontSize: 21,
    fontFamily: "Raleway-SemiBold",
    marginTop: "5%",
    marginBottom: "5%",
  },
  input: {
    height: 56,
    width: 70,
    borderRadius: 12,
    backgroundColor: "#F7F7F9",
    alignSelf: "center",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    fontSize: 18,
    color: "#000",
    fontFamily: "Raleway-SemiBold",
  },
  inputContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
