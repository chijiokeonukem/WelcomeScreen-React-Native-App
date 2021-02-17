import React from "react";
import WelcomeScreen from "./app/assets/screens/WelcomeScreen";

export default function App() {
  return (
    <WelcomeScreen
      largeText="This is my welcome screen"
      buttonColor="purple"
      smallTextColor="purple"
      smallText="Already have an account?"
    />
  );
}
