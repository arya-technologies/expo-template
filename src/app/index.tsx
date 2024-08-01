import React from "react";
import { View } from "react-native";
import { Button, Text, useTheme } from "react-native-paper";

export default function index() {
  const theme = useTheme();

  return (
    <View className="h-full" style={{ backgroundColor: theme.colors.surface }}>
      <Text className="text-center font-bold text-2xl">Namaste World!</Text>
      <Button icon="person" mode="contained" className="w-36">
        Hi
      </Button>
    </View>
  );
}
