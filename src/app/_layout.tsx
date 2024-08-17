import { Material3ThemeProvider } from "@/components/providers/Material3ThemeProvider";
import { persistor, store } from "@/features/store";
import Ionicons from "@expo/vector-icons/Ionicons";
import * as NavigationBar from "expo-navigation-bar";
import { Stack } from "expo-router/stack";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { ActivityIndicator } from "react-native-paper";
import { ReducedMotionConfig, ReduceMotion } from "react-native-reanimated";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

NavigationBar.setPositionAsync("absolute");
NavigationBar.setBackgroundColorAsync("#00000000");

export default function Layout() {
  return (
    <Provider store={store}>
      <PersistGate loading={<ActivityIndicator />} persistor={persistor}>
        <Material3ThemeProvider
          settings={{
            icon: (props: any) => <Ionicons {...props} />,
          }}
        >
          <GestureHandlerRootView style={{ flex: 1 }}>
            <ReducedMotionConfig mode={ReduceMotion.Never} />
            <Stack
              screenOptions={{
                animation: "default",
                headerShown: false,
              }}
              initialRouteName="/"
            />
          </GestureHandlerRootView>
        </Material3ThemeProvider>
      </PersistGate>
    </Provider>
  );
}
