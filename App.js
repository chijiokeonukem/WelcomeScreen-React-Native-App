import React from "react";
import { View, StyleSheet, Alert } from "react-native";
import WelcomeScreen from "./app/assets/screens/WelcomeScreen";

export default function App() {
  return (
    <View style={styles.container}>
      <WelcomeScreen
        largeText="This is my welcome screen"
        buttonColor="green"
        smallTextColor="green"
        smallText="Already have an account?"
        buttonPressFunction={() => Alert.alert("Button pressed!")}
        smallTextPressFunction={() => Alert.alert("Small text pressed!")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
