# WelcomeScreenComponent-React-Native

This is a reusable Welcome Screen Component for React Native

# Usage

- Clone project
- Locate WelcomeScreen.js at app/assets/screens/WecomeScreen.js and import into your project.
- Call WelcomeScreen and pass props.
- This component can be further customized to meet your personal need.
- Note: i have used online images (uri) for image source, but you can change this to downloaded images in your project using the require function ( eg <Image source={require("image path")}>).

# List of props and default values

- largeText = "Write a brief description of your product here..."
- largeTextColor = "black"
- largeTextSize = 25
- smallText = "small text goes here"
- smallTextColor = "green"
- smallTextSize = 18
- buttonText = "Button Text"
- buttonTextColor = "white"
- buttonTextSize = 20
- buttonRaduis = 10
- buttonPadding = 15
- buttonOpacity = 0.6
- buttenUnderlayColor = "#cccccc"
- buttonColor = "green"
- logoHeight = 130
- logoWidth = 130
- alignLogo = "center"
- logoImage =
  "https://www.itway.com/wp-content/uploads/2014/07/leaf.png"
- backgroundImage =
  "https://blog.hdwallsource.com/wp-content/uploads/2014/10/white-wallpaper-16876-17429-hd-wallpapers.jpg"
- ScreenTop = 70
- ScreenPadding = 30

Note that if a prop value is not set, it assumes the default value.

# Example usage

- <WelcomeScreen largeText="This is my welcome screen"  smallText="Already have an account?" buttonColor="green" smallTextColor="green" />
