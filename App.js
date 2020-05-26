import { StyleSheet, Text, View, Button } from "react-native";

import "react-native-gesture-handler";
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";

import { createDrawerNavigator } from "@react-navigation/drawer";
import MainTabScreen from "./src/navigation/screens/MainTabScreen";

import { DrawerContent } from "./src/navigation/screens/DrawerContent";

import SupportScreen from "./src/navigation/screens/SupportScreen";

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator drawerContent={(props) => <DrawerContent {...props} />}>
        <Drawer.Screen name="Home" component={MainTabScreen} />
        <Drawer.Screen name="SupportScreen" component={SupportScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
