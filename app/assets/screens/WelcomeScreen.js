import React from "react";
import {
  ImageBackground,
  StyleSheet,
  View,
  Image,
  Text,
  TouchableHighlight,
} from "react-native";

const buttonPressFunctionn = () => {
  console.log("Button Pressed");
};

function WelcomeScreen(props) {
  return (
    <ImageBackground
      source={{
        uri: props.backgroundImage,
      }}
      style={{
        flex: 1,
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        padding: props.ScreenPadding,
        top: props.ScreenTop,
      }}
    >
      <View>
        <Image
          style={{
            width: props.logoWidth,
            height: props.logoHeight,
            alignSelf: props.alignLogo,
          }}
          source={{
            uri: props.logoImage,
          }}
        />
        <Text
          style={{
            fontSize: props.largeTextSize,
            color: props.largeTextColor,
            textAlignVertical: "center",
            textAlign: "center",
            marginTop: 10,
            marginBottom: 30,
          }}
        >
          {props.largeText}
        </Text>

        <TouchableHighlight
          style={{
            alignItems: "center",
            padding: props.buttonPadding,
            backgroundColor: props.buttonColor,
            color: props.buttonTextColor,
            marginTop: 20,
            borderRadius: props.buttonRaduis,
          }}
          activeOpacity={props.buttonOpacity}
          underlayColor={props.buttenUnderlayColor}
          onPress={props.buttonPressFunction}
        >
          <View>
            <Text
              style={{
                fontSize: props.buttonTextSize,
                fontWeight: "100",
                color: props.buttonTextColor,
                textAlignVertical: "center",
              }}
            >
              {props.buttonText}
            </Text>
          </View>
        </TouchableHighlight>

        <TouchableHighlight
          style={styles.touchText}
          activeOpacity={0.6}
          underlayColor="#ccccc"
          onPress={props.smallTextPressFunction}
        >
          <View>
            <Text
              style={{
                color: props.smallTextColor,
                fontSize: props.smallTextSize,
                fontWeight: "100",
                textAlign: "center",
              }}
            >
              {props.smallText}
            </Text>
          </View>
        </TouchableHighlight>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  touchText: {
    fontSize: 16,
    fontWeight: "100",
    textAlignVertical: "center",
    padding: 10,
    marginTop: 20,
  },
});

WelcomeScreen.defaultProps = {
  largeText: "Create a brief description of your product here and edit for the second time...",
  largeTextSize: 25,
  largeTextColor: "black",
  smallText: "small text goes here",
  smallTextColor: "green",
  smallTextSize: 18,
  buttonText: "Button Text",
  buttonTextColor: "white",
  buttonTextSize: 20,
  buttonColor: "green",
  buttonRaduis: 10,
  buttonPadding: 15,
  buttonOpacity: 0.6,
  buttenUnderlayColor: "#cccccc",
  buttonColor: "green",
  logoHeight: 130,
  logoWidth: 130,
  alignLogo: "center",
  logoImage: "https://www.itway.com/wp-content/uploads/2014/07/leaf.png",
  backgroundImage:
    "https://blog.hdwallsource.com/wp-content/uploads/2014/10/white-wallpaper-16876-17429-hd-wallpapers.jpg",
  ScreenTop: 22,
  ScreenPadding: 30,
};
export default WelcomeScreen;
