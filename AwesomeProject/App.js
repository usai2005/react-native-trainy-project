import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, ImageBackground } from "react-native";
import { RegistrationScreen } from "./src/Screens/RegistrationScreen";
import { LoginScreen } from "./src/Screens/LoginScreen";

import { useFonts } from "expo-font";
import backgroundImage from "./assets/images/photo-bg.jpg";

export default function App() {
  const [fontsLoaded] = useFonts({
    "Roboto-400": require("./assets/fonts/Roboto-Regular.ttf"),
    "Roboto-500": require("./assets/fonts/Roboto-Medium.ttf"),
  });

  if (!fontsLoaded) {
    console.log(fontsLoaded);
    return null;
  }

  return (
    <View style={styles.container}>
      <ImageBackground source={backgroundImage} style={styles.backgroundImg}>
        <StatusBar style="auto" />
        <RegistrationScreen />
        {/* <LoginScreen /> */}
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundImg: {
    flex: 1,
    justifyContent: "flex-end",
  },
});
