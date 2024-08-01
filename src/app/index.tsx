import React from "react";
import { View } from "react-native";
import { Text, useTheme } from "react-native-paper";

export default function index() {
  const theme = useTheme();

  return (
    <View
      className="h-full flex-1 items-center justify-center"
      style={{ backgroundColor: theme.colors.surface }}
    >
      <Text className="text-center font-bold text-2xl">Namaste World!</Text>
    </View>
  );
}
