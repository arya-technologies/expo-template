import { Stack } from "expo-router/stack";
import { PaperProvider, useTheme } from "react-native-paper";
import Ionicons from "@expo/vector-icons/Ionicons";

export default function Layout() {
  const theme = useTheme();
  return (
    <PaperProvider
      settings={{
        icon: (props: any) => <Ionicons {...props} />,
      }}
    >
      <Stack
        screenOptions={{
          headerStyle: {
            backgroundColor: theme.colors.onBackground,
          },
          headerTintColor: theme.colors.onPrimary,
          headerTitleStyle: {
            fontWeight: "bold",
          },
          headerTitleAlign: "center",
          navigationBarColor: theme.colors.onBackground,
        }}
      />
    </PaperProvider>
  );
}
