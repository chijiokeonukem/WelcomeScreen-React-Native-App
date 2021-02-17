import React from "react";
import WelcomeScreen from "./app/assets/screens/WelcomeScreen";

export default function App() {
  const largeText = "Create a brief description of your product here...";
  const smallText = "small text goes here";
  const buttonText = "Button Text";
  const buttonTextColor = "green";
  const buttonPressFunction = () => {
    console.log("Button Pressed");
  };
  const buttonOpacity = 0.6;
  const buttenUnderlayColor = "#cccccc";
  const buttonColor = "green";
  const buttonRadius = "";
  const logoImage = "";
  const backgroundimage = "";
  return (
    <WelcomeScreen
      largeText={largeText}
      smallText={smallText}
      buttonText={buttonText}
      buttonTextColor={buttonTextColor}
      buttonPressFunction={buttonPressFunction}
      buttonOpacity={buttonOpacity}
      buttenUnderlayColor={buttenUnderlayColor}
      buttonColor={buttonColor}
    />
  );
}
