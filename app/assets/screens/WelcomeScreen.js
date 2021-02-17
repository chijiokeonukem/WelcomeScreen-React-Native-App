import React from "react";
import {
  ImageBackground,
  StyleSheet,
  View,
  Image,
  Text,
  Button,
  Alert,
  TouchableOpacity,
  TouchableHighlight,
} from "react-native";

function WelcomeScreen({ navigation }) {
  return (
    <ImageBackground style={styles.background}>
      <View>
        <Image
          style={styles.logo}
          source={{
            uri:
              "https://www.logolynx.com/images/logolynx/30/301872965ed3860f18b2bf6c1ad08885.png",
          }}
        />
        <Text style={styles.displayTextB}>
          Very easy way to convert airtime to cash and more...
        </Text>

        <TouchableHighlight
          style={styles.button}
          activeOpacity={0.6}
          underlayColor="#cccccc"
          onPress={() => navigation.navigate("Verify")}
        >
          <View>
            <Text style={styles.displayTextButton}>Get Started</Text>
          </View>
        </TouchableHighlight>

        <TouchableHighlight
          style={styles.touchText}
          activeOpacity={0.6}
          underlayColor="#ccccc"
          onPress={() => console.log("text tapped!")}
        >
          <View>
            <Text style={styles.displayTextS}>I have an account already</Text>
          </View>
        </TouchableHighlight>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: 35,
  },
  buttonOuterLayout: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    alignItems: "center",
    padding: 13,
    backgroundColor: "green",
    color: "white",
    marginTop: 20,
    borderRadius: 10,
  },
  displayTextB: {
    fontSize: 25,
    color: "black",
    textAlignVertical: "center",
    textAlign: "center",
    marginTop: 10,
    marginBottom: 30,
  },

  displayTextButton: {
    fontSize: 16,
    fontWeight: "100",
    color: "white",
    textAlignVertical: "center",
  },
  displayTextS: {
    fontSize: 14,
    fontWeight: "100",
    color: "green",
    textAlign: "center",
  },

  logo: {
    width: 130,
    height: 130,
    alignSelf: "center",
  },

  registerButton: {
    width: "100%",
    height: 70,
    backgroundColor: "brown",
  },
  separator: {
    marginVertical: 8,
    borderBottomColor: "blue",
    borderBottomWidth: 200,
  },
  touchText: {
    fontSize: 16,
    fontWeight: "100",
    color: "black",
    textAlignVertical: "center",
    padding: 10,
    marginTop: 20,
  },
});
export default WelcomeScreen;
