import { createStackNavigator } from '@react-navigation/stack';
import { DefaultTheme } from '@react-navigation/native';
import { NavigationContainer } from '@react-navigation/native';
import { useFonts } from "expo-font";
import Home from './src/Screens/Home';
import Details from './src/Screens/Details';

const Stack = createStackNavigator();
const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: "transparent",
  },
};
const App=()=> {
 const [loaded]=useFonts({
    InterBold: require("./src/shared/assets/fonts/Inter-Bold.ttf"),
    InterSemiBold: require("./src/shared/assets/fonts/Inter-SemiBold.ttf"),
    InterMedium: require("./src/shared/assets/fonts/Inter-Medium.ttf"),
    InterRegular: require("./src/shared/assets/fonts/Inter-Regular.ttf"),
    InterLight: require("./src/shared/assets/fonts/Inter-Light.ttf"),
 });
 
 if(!loaded){return null};

  return (
     <NavigationContainer theme={theme}>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
        initialRouteName="Home"
      >
        <Stack.Screen name="Home" component={Home}   />
        <Stack.Screen name="Details" component={Details} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
 
export default App;

