import type { PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";

export type ThemesProps = "system" | "light" | "dark" | "pureBlack";
export type ThemeProps = {
  label: string;
  value: string;
  icon: string;
};

export const themes: ThemeProps[] = [
  {
    label: "System",
    value: "system",
    icon: "color-wand",
  },
  {
    label: "Light",
    value: "light",
    icon: "sunny",
  },
  {
    label: "Dark",
    value: "dark",
    icon: "cloudy-night",
  },
  {
    label: "Pure Black",
    value: "pureBlack",
    icon: "moon",
  },
];

interface AppearanceProps {
  theme: ThemeProps;
}

interface SettingsProps {
  appearance: AppearanceProps;
}

const initialState: SettingsProps = {
  appearance: {
    theme: themes[0],
  },
};

export const settingsSlice = createSlice({
  name: "settings",
  initialState,
  reducers: {
    setappearance: (
      { appearance },
      { payload }: PayloadAction<AppearanceProps>,
    ) => {
      appearance.theme = payload.theme;
    },
  },
});

export const { setappearance } = settingsSlice.actions;

export default settingsSlice.reducer;
