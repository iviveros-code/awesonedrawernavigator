import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";

const HomeScreen = (props) => {
  const { navigation } = props;
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Home Screen</Text>
      <Button
        title="Go to details Screen"
        onPress={() => navigation.navigate("Details")}
      />
    </View>
  );
};

export default HomeScreen;
