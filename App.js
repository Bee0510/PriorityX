import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { TailwindProvider } from "tailwindcss-react-native";
import HomeScreen from "./Screens/HomeScreen";
import { Provider } from "react-redux";
import { myStore } from "./Redux/store";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <Provider store={myStore}>
      <TailwindProvider>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen name="Home" component={HomeScreen} />
          </Stack.Navigator>
        </NavigationContainer>
      </TailwindProvider>
    </Provider>
  );
}
