import React from "react";
import { Text, View } from "react-native";
import { Button, useTheme } from "react-native-paper";

export default function index() {
  const theme = useTheme();

  return (
    <View
      className="h-full"
      style={{ backgroundColor: theme.colors.onBackground }}
    >
      <Text
        style={{ color: theme.colors.onPrimary }}
        className="text-center font-bold text-2xl"
      >
        Namaste World!
      </Text>
      <Button
        style={{ borderRadius: theme.roundness }}
        icon="person"
        mode="contained"
        className="w-36"
      >
        Hi
      </Button>
    </View>
  );
}
