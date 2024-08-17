import {
  setappearance,
  ThemeProps,
  themes,
} from "@/features/slices/settingsSlice";
import { RootState } from "@/features/store";
import React, { useEffect, useState } from "react";
import { Button, List, Menu } from "react-native-paper";
import { useDispatch, useSelector } from "react-redux";

export default function AppearanceSettings() {
  const dispatch = useDispatch();
  const { appearance } = useSelector((state: RootState) => state.settings);

  const [theme, settheme] = useState<ThemeProps>(appearance.theme);
  const [isThemeMenuVisible, setisThemeMenuVisible] = useState(false);
  const showThemeMenu = () => setisThemeMenuVisible(true);
  const hideThemeMenu = () => setisThemeMenuVisible(false);

  useEffect(() => {
    dispatch(setappearance({ theme }));
  }, [theme]);
  return (
    <List.Section>
      <List.Subheader>Appearance</List.Subheader>
      <List.Item
        title="Theme"
        right={() => (
          <Menu
            visible={isThemeMenuVisible}
            onDismiss={hideThemeMenu}
            anchor={
              <Button
                onPress={showThemeMenu}
                icon="chevron-expand"
                mode="elevated"
              >
                {theme.label}
              </Button>
            }
          >
            {themes.map((item, index) => (
              <Menu.Item
                key={index}
                title={item.label}
                onPress={() => {
                  settheme(item);
                  hideThemeMenu;
                }}
              />
            ))}
          </Menu>
        )}
      />
    </List.Section>
  );
}
