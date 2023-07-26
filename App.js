import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import WelcomeScreen from "./welcomeToRising/WelcomeScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Login from "./welcomeToRising/Login";
import RegistrationArtists from "./welcomeToRising/RegistrationArtists";
import RegistrationPlanBussines from "./welcomeToRising/RegistrarionBussines/RegistrationPlanBussines";
import RegistrationBussines from "./welcomeToRising/RegistrarionBussines/RegistrationBussines";
import RegistrationPayment from "./welcomeToRising/RegistrarionBussines/RegistrationPayment";
import RSContextProvider from "./welcomeToRising/Context/RSContextProvider";
import Admin from "./welcomeToRising/AdminPage/Admin";

const Stack = createStackNavigator();

export default function App() {
  return (
    <RSContextProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="WelcomeScreen"
            component={WelcomeScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Login"
            component={Login}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="RegistrationArtists"
            component={RegistrationArtists}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="RegistrationPlanBussines"
            component={RegistrationPlanBussines}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="RegistrationBussines"
            component={RegistrationBussines}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="RegistrationPayment"
            component={RegistrationPayment}
            options={{ headerShown: false }}
          />
           <Stack.Screen
            name="Admin"
            component={Admin}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </RSContextProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    backgroundColor: "#E7E4E4",
  },
});
