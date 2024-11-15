import { NavigationContainer } from "@react-navigation/native";
import {
  createStackNavigator,
  TransitionPresets,
} from "@react-navigation/stack";
import { StatusBar } from "expo-status-bar";
import OnBoarding from "./screens/OnBoarding";
import { useFonts } from "expo-font";
import OnBoarding2 from "./screens/OnBoarding2";
import OnBoarding3 from "./screens/OnBoarding3";
import Home from "./screens/Home";
import Login from "./screens/Login";
import SignUp from "./screens/SignUp";
import Forgot from "./screens/Forgot";
import OTPVerification from "./screens/OTPVerification";

const Stack = createStackNavigator();
export default function App() {
  const [load] = useFonts({
    "Raleway-Bold": require("./assets/fonts/Raleway-Bold.ttf"),
    "Raleway-ExtraBold": require("./assets/fonts/Raleway-ExtraBold.ttf"),
    "Raleway-Medium": require("./assets/fonts/Raleway-Medium.ttf"),
    "Raleway-Regular": require("./assets/fonts/Raleway-Regular.ttf"),
    "Raleway-SemiBold": require("./assets/fonts/Raleway-SemiBold.ttf"),
  });
  if (!load) {
    return null;
  }
  return (
    <NavigationContainer>
      <StatusBar style="auto" />
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
        initialRouteName="Home"
      >
        <Stack.Screen
          name="OnBoarding"
          component={OnBoarding}
          options={{ ...TransitionPresets.SlideFromRightIOS }}
        />
        <Stack.Screen
          name="OnBoarding2"
          component={OnBoarding2}
          options={{ ...TransitionPresets.SlideFromRightIOS }}
        />
        <Stack.Screen
          name="OnBoarding3"
          component={OnBoarding3}
          options={{ ...TransitionPresets.SlideFromRightIOS }}
        />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen
          name="Login"
          component={Login}
          options={{ ...TransitionPresets.ModalPresentationIOS }}
        />
        <Stack.Screen
          name="SignUp"
          component={SignUp}
          options={{ ...TransitionPresets.ModalPresentationIOS }}
        />
        <Stack.Screen
          name="Forgot"
          component={Forgot}
          options={{ ...TransitionPresets.ModalPresentationIOS }}
        />
        <Stack.Screen
          name="OTPVerification"
          component={OTPVerification}
          options={{ ...TransitionPresets.ModalPresentationIOS }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
