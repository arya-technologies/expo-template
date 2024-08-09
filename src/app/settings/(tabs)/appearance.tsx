import ScrollView from "@/components/ScrollView";
import { setappearance, ThemeProps } from "@/features/slices/settingsSlice";
import { RootState } from "@/features/store";
import React, { useEffect, useState } from "react";
import {
  Button,
  Dialog,
  List,
  Portal,
  RadioButton,
  Switch,
} from "react-native-paper";
import { useDispatch, useSelector } from "react-redux";

export default function Appearance() {
  const dispatch = useDispatch();
  const { appearance } = useSelector((state: RootState) => state.settings);

  const [theme, settheme] = useState<ThemeProps>(appearance.colors.theme);
  const [isThemeDialogVisible, setisThemeDialogVisible] = useState(false);
  const showThemeDialog = () => setisThemeDialogVisible(true);
  const hideThemeDialog = () => setisThemeDialogVisible(false);
  const [themes, setthemes] = useState<ThemeProps[]>([
    "dark",
    "light",
    "system",
    "pureBlack",
  ]);

  useEffect(() => {
    dispatch(
      setappearance({
        colors: {
          theme,
        },
      }),
    );
  }, [theme]);

  return (
    <>
      <ScrollView>
        <List.Section>
          <List.Subheader>COLORS</List.Subheader>
          <List.Item
            title="Theme"
            description={theme.slice(0, 1).toUpperCase() + theme.slice(1)}
            onPress={showThemeDialog}
          />
        </List.Section>
      </ScrollView>
      <Portal>
        <Dialog visible={isThemeDialogVisible} onDismiss={hideThemeDialog}>
          <Dialog.Title>Theme</Dialog.Title>
          <Dialog.Content>
            <RadioButton.Group
              value={theme}
              onValueChange={(value: ThemeProps) => settheme(value)}
            >
              {themes.map((item) => (
                <RadioButton.Item
                  key={item}
                  value={item}
                  label={item.slice(0, 1).toUpperCase() + item.slice(1)}
                />
              ))}
            </RadioButton.Group>
          </Dialog.Content>
          <Dialog.Actions>
            <Button onPress={hideThemeDialog}>Cancel</Button>
          </Dialog.Actions>
        </Dialog>
      </Portal>
    </>
  );
}
