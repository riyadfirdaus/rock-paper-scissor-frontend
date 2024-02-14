// Navigation.js
import * as React from "react";

import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage"; // Import AsyncStorage
import GameScreen from "./screens/GameScreen/GameScreen";

const Stack = createStackNavigator();

const Navigation = () => {
  const fullName = AsyncStorage.getItem("fullName");

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={"Main"}>
        <Stack.Screen
          name="Main"
          component={GameScreen}
          options={{ unmountOnBlur: true }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
