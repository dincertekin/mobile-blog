import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useFonts } from "expo-font";
import * as React from "react";
import BlogPostScreen from "./screens/BlogPostScreen";
import HomeScreen from "./screens/HomeScreen";

const Stack = createNativeStackNavigator();

export default function App() {
	const [fontsLoaded] = useFonts({
		"OpenSans-Regular": require("./assets/fonts/OpenSans-Regular.ttf"),
		"OpenSans-Bold": require("./assets/fonts/OpenSans-Bold.ttf"),
		"OpenSans-Light": require("./assets/fonts/OpenSans-Light.ttf"),
	});

	if (!fontsLoaded) {
		return null;
	}

	return (
		<NavigationContainer>
		<Stack.Navigator initialRouteName="Home">
			<Stack.Screen
			name="BlogPost"
			component={BlogPostScreen}
			options={{ headerShown: false }}
			/>
			<Stack.Screen
			name="Home"
			component={HomeScreen}
			options={{ headerShown: false }}
			/>
		</Stack.Navigator>
		</NavigationContainer>
	);
}