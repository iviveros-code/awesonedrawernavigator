import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";

const DetailsScreen = (props) => {
  const { navigation } = props;
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Details Screen</Text>
      <Button
        title="Go to details Screen...again"
        onPress={() => navigation.push("Details")}
      />
      <Button
        title="Go to Home Screen"
        onPress={() => navigation.navigate("Home")}
      />
      <Button title="Go back" onPress={() => navigation.goBack()} />
    </View>
  );
};

export default DetailsScreen;
